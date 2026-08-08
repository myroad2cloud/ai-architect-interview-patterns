const DATA = window.COGNIZANT_DATA;
const qs = s => document.querySelector(s);
const qsa = s => [...document.querySelectorAll(s)];
const progressKey = 'cognizantInterviewProgressV2';
let progress = JSON.parse(localStorage.getItem(progressKey) || '{}');
let mockDeck = [], mockIndex = 0, timerId = null, secondsLeft = 90;
let flashIndex = 0, flashFlipped = false;

function saveProgress(){ localStorage.setItem(progressKey, JSON.stringify(progress)); renderDashboard(); }
function setRating(id, rating){ progress[id] = {rating:Number(rating), attempts:(progress[id]?.attempts||0)+1, last:new Date().toISOString()}; saveProgress(); rerenderCurrent(); }
function getRating(id){ return progress[id]?.rating || 0; }
function practicedCount(){ return DATA.questions.filter(q => getRating(q.id)>0).length; }
function criticalReadiness(){ const x=DATA.questions.filter(q=>q.priority==='Critical'); return x.length ? Math.round(x.reduce((s,q)=>s+getRating(q.id),0)/(x.length*5)*100) : 0; }
function overallReadiness(){ return DATA.questions.length ? Math.round(DATA.questions.reduce((s,q)=>s+getRating(q.id),0)/(DATA.questions.length*5)*100) : 0; }

function showView(name){
  qsa('.view').forEach(v=>v.classList.add('hidden'));
  qs('#view-'+name)?.classList.remove('hidden');
  qsa('#mainNav button').forEach(b=>b.classList.toggle('active',b.dataset.view===name));
  if(name==='rapid') renderRapid();
  if(name==='bank') renderBank();
  if(name==='andrew') renderAndrew();
  if(name==='scenarios') renderScenarios();
  if(name==='flashcards') renderFlashcard();
  if(name==='memory') renderMemory();
  if(name==='ask') renderAsk();
  window.scrollTo({top:0,behavior:'smooth'});
}
window.showView=showView;
qsa('#mainNav button').forEach(b=>b.onclick=()=>showView(b.dataset.view));

function ratingButtons(item){
  const r=getRating(item.id);
  return `<div class="action-row rating"><span class="tagline">Rate your answer:</span>${[1,2,3,4,5].map(n=>`<button class="small-btn ${r===n?'selected':''}" onclick="setRating('${item.id}',${n})">${n}</button>`).join('')}</div>`;
}
window.setRating=setRating;

function studyCard(item, includeAndrew=true){
  return `<article class="study-card answer-hidden" id="card-${item.id}">
    <span class="priority ${item.priority}">${item.priority}</span>
    <div class="tagline">${item.category}</div>
    <h3>${item.q}</h3>
    <p><b>Opening line:</b> ${item.opening}</p>
    <div class="action-row"><button class="small-btn primary" onclick="toggleAnswer('${item.id}')">Reveal answer</button></div>
    <div class="answer-block">
      <h4>Ready-to-speak answer</h4><p>${item.answer}</p>
      ${includeAndrew&&item.testing?`<h4>What the interviewer is testing</h4><p>${item.testing}</p>`:''}
      ${includeAndrew&&item.mistake?`<h4>Common mistake</h4><p>${item.mistake}</p>`:''}
      ${includeAndrew&&item.followup?`<h4>Likely follow-up</h4><p>${item.followup}</p>`:''}
      ${includeAndrew&&item.cue?`<h4>Delivery cue</h4><p class="quote">${item.cue}</p>`:''}
      ${ratingButtons(item)}
    </div>
  </article>`;
}
function toggleAnswer(id){ qs('#card-'+id)?.classList.toggle('answer-hidden'); }
window.toggleAnswer=toggleAnswer;

function renderRapid(){
  const items=[...DATA.questions].sort((a,b)=>(a.priority==='Critical'?0:1)-(b.priority==='Critical'?0:1)).filter(q=>q.priority==='Critical'||q.priority==='High');
  qs('#rapidList').innerHTML=items.map(i=>studyCard(i,false)).join('');
}

function setupBankFilters(){
  const sel=qs('#bankCategory');
  if(sel.options.length===1){ [...new Set(DATA.questions.map(q=>q.category))].sort().forEach(c=>sel.insertAdjacentHTML('beforeend',`<option>${c}</option>`)); }
  qs('#bankSearch').oninput=renderBank; qs('#bankCategory').onchange=renderBank; qs('#bankPriority').onchange=renderBank;
}
function renderBank(){
  setupBankFilters();
  const term=(qs('#bankSearch').value||'').toLowerCase(); const cat=qs('#bankCategory').value; const pri=qs('#bankPriority').value;
  const items=DATA.questions.filter(i=>(cat==='All'||i.category===cat)&&(pri==='All'||i.priority===pri)&&Object.values(i).join(' ').toLowerCase().includes(term));
  qs('#bankList').innerHTML=items.length?items.map(i=>studyCard(i,true)).join(''):'<div class="panel">No matching questions.</div>';
}

function renderAndrew(){
  const order=['Introduction','Role Fit','Presales Lifecycle','Commercials','Estimation','Landing Zone','Migration','AI Landing Zone','Deal Strategy','Leadership','Customer Handling'];
  const items=DATA.questions.filter(q=>q.testing).sort((a,b)=>order.indexOf(a.category)-order.indexOf(b.category));
  qs('#andrewList').innerHTML=items.map(i=>studyCard(i,true)).join('');
}

function renderScenarios(){
  qs('#scenarioList').innerHTML=DATA.scenarios.map((s,i)=>`<article class="scenario-card answer-hidden" id="scenario-${s.id}">
    <span class="priority Critical">Scenario ${i+1}</span><h3>${s.title}</h3><p><b>Interviewer question:</b> ${s.question}</p>
    <p><b>Answer structure:</b> ${s.framework}</p>
    <button class="small-btn primary" onclick="document.getElementById('scenario-${s.id}').classList.toggle('answer-hidden')">Reveal model answer</button>
    <div class="answer-block"><h4>Model answer</h4><p>${s.answer}</p><h4>Likely follow-up</h4><p>${s.followup}</p><div class="memory">${s.memory}</div></div>
  </article>`).join('');
}

function randomWeighted(items){
  const bag=[]; items.forEach(i=>{ const n=i.priority==='Critical'?6:i.priority==='High'?4:2; for(let x=0;x<n;x++)bag.push(i); });
  return bag[Math.floor(Math.random()*bag.length)];
}
function startMock(type='mixed'){
  showView('mock');
  let pool=DATA.questions;
  if(type==='technical') pool=pool.filter(q=>['Landing Zone','CAF & WAF','Migration','Networking','Security','AI Landing Zone','Modernization','Estimation','Application Complexity'].includes(q.category));
  if(type==='commercial') pool=pool.filter(q=>['Commercials','Proposal & SOW','Deal Strategy','FinOps','Estimation','Presales Lifecycle'].includes(q.category));
  if(type==='leadership') pool=pool.filter(q=>['Leadership','Customer Handling','Role Fit','First 90 Days','Closing'].includes(q.category));
  const unique=new Map(); while(unique.size<Math.min(10,pool.length)){ const q=randomWeighted(pool); unique.set(q.id,q); }
  mockDeck=[...unique.values()]; mockIndex=0; renderMockQuestion();
}
window.startMock=startMock;
function startTimer(){ clearInterval(timerId); secondsLeft=90; updateTimer(); timerId=setInterval(()=>{ secondsLeft--; updateTimer(); if(secondsLeft<=0)clearInterval(timerId); },1000); }
function updateTimer(){ const e=qs('#mockTimer'); if(e)e.textContent=`${String(Math.floor(secondsLeft/60)).padStart(2,'0')}:${String(secondsLeft%60).padStart(2,'0')}`; }
function renderMockQuestion(){
  clearInterval(timerId); if(!mockDeck.length){ qs('#mockArea').innerHTML='<div class="panel">Choose a mock interview type above.</div>'; return; }
  if(mockIndex>=mockDeck.length){ qs('#mockArea').innerHTML=`<div class="panel mock-stage"><h2>Round complete</h2><p>You completed ${mockDeck.length} questions. Check the dashboard for weak areas.</p><button class="small-btn primary" onclick="showView('dashboard')">View readiness</button></div>`; return; }
  const i=mockDeck[mockIndex];
  qs('#mockArea').innerHTML=`<div class="panel mock-stage answer-hidden" id="mockCard"><span class="priority ${i.priority}">${i.priority}</span><p>Question ${mockIndex+1} of ${mockDeck.length}</p><h2>${i.q}</h2><div class="timer" id="mockTimer">01:30</div><p class="tagline">Answer aloud before revealing.</p><div class="action-row" style="justify-content:center"><button class="small-btn" onclick="startTimer()">Start 90s timer</button><button class="small-btn primary" onclick="document.getElementById('mockCard').classList.toggle('answer-hidden')">Reveal answer</button></div><div class="answer-block"><h4>Opening line</h4><p>${i.opening}</p><h4>Model answer</h4><p>${i.answer}</p>${ratingButtons(i)}<div class="action-row" style="justify-content:center"><button class="small-btn primary" onclick="nextMock()">Next question</button></div></div></div>`;
}
function nextMock(){ mockIndex++; renderMockQuestion(); }
window.startTimer=startTimer; window.nextMock=nextMock;

function renderFlashcard(){
  if(!DATA.questions.length)return; const i=DATA.questions[flashIndex%DATA.questions.length];
  qs('#flashcardArea').innerHTML=`<div class="study-card flashcard ${flashFlipped?'':'answer-hidden'}"><div class="front"><span class="priority ${i.priority}">${i.category}</span><h2>${i.q}</h2><button class="small-btn primary" onclick="flipFlash()">Show answer</button></div><div class="answer-block back"><h4>Opening line</h4><p>${i.opening}</p><h4>Answer</h4><p>${i.answer}</p>${ratingButtons(i)}<div class="action-row" style="justify-content:center"><button class="small-btn" onclick="prevFlash()">Previous</button><button class="small-btn primary" onclick="nextFlash()">Next</button></div></div></div>`;
}
function flipFlash(){ flashFlipped=true; renderFlashcard(); } function nextFlash(){ flashIndex=(flashIndex+1)%DATA.questions.length; flashFlipped=false; renderFlashcard(); } function prevFlash(){ flashIndex=(flashIndex-1+DATA.questions.length)%DATA.questions.length; flashFlipped=false; renderFlashcard(); }
window.flipFlash=flipFlash; window.nextFlash=nextFlash; window.prevFlash=prevFlash;

function renderMemory(){ qs('#frameworkGrid').innerHTML=DATA.frameworks.map(f=>`<article class="framework-card"><h3>${f.name}</h3><p class="quote">${f.value}</p></article>`).join(''); }
function renderAsk(){ qs('#askTable').innerHTML=DATA.interviewerQuestions.map(i=>`<tr><td><span class="priority ${i.priority}">${i.priority}</span></td><td><b>${i.q}</b></td><td>${i.why}</td></tr>`).join(''); }

function renderDashboard(){
  const total=DATA.questions.length, practiced=practicedCount(), critical=criticalReadiness(), overall=overallReadiness();
  const strong=DATA.questions.filter(q=>getRating(q.id)>=4).length;
  qs('#dashboardStats').innerHTML=`<div class="dash-card"><strong>${total}</strong><span>Core questions</span></div><div class="dash-card"><strong>${practiced}</strong><span>Practised</span></div><div class="dash-card"><strong>${critical}%</strong><span>Critical readiness</span></div><div class="dash-card"><strong>${strong}</strong><span>Strong answers</span></div><div class="dash-card"><strong>${DATA.scenarios.length}</strong><span>Scenario cases</span></div><div class="dash-card"><strong>${overall}%</strong><span>Overall readiness</span></div>`;
  qs('#overallBar').style.width=overall+'%'; qs('#overallText').textContent=`Overall readiness ${overall}%. Ratings are stored only in this browser.`;
  const weak=[...DATA.questions].sort((a,b)=>getRating(a.id)-getRating(b.id)||(a.priority==='Critical'?-1:1)).slice(0,8);
  qs('#weakList').innerHTML=weak.map(i=>`<div class="weak-item"><div><b>${i.q}</b><div class="tagline">${i.category} • ${i.priority}</div></div><div>${getRating(i.id)?getRating(i.id)+'/5':'Not practised'}</div></div>`).join('');
}
function rerenderCurrent(){ const active=qs('#mainNav button.active')?.dataset.view||'dashboard'; if(active==='dashboard')renderDashboard(); if(active==='rapid')renderRapid(); if(active==='bank')renderBank(); if(active==='andrew')renderAndrew(); if(active==='flashcards')renderFlashcard(); }

renderDashboard(); renderMemory(); renderAsk();
