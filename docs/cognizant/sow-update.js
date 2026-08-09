(function(){
  const D = window.COGNIZANT_DATA;
  if (!D) return;

  const q = {
    id:'sow-1',
    category:'Proposal & SOW',
    priority:'Critical',
    q:'How do you create a SOW?',
    opening:'I create an SOW by turning the agreed solution into a clear delivery contract, structured around scope, deliverables, responsibilities, assumptions, timeline, commercials, acceptance criteria, and change control.',
    answer:'I create an SOW by turning the agreed solution into a clear delivery contract. I normally structure it around scope, deliverables, responsibilities, assumptions, timeline, commercials, acceptance criteria, and change control. First, I confirm the business outcome and the exact scope in and out. Then I define the major deliverables and work packages, for example discovery, landing-zone readiness, migration waves, testing, cutover, and hypercare. Next, I make responsibilities explicit: what Cognizant owns, what the customer owns, and any third-party dependencies. I document assumptions, exclusions, prerequisites, and risks so there is no hidden ambiguity. I then align the delivery plan, milestones, resource model, pricing model, and payment terms. After that, I define acceptance criteria for each major deliverable, because if acceptance is vague, commercial disputes usually follow. Finally, I include governance, escalation, and change control so that if scope or assumptions change, there is a formal mechanism to assess impact on cost, timeline, and resources. My goal is that the SOW is clear enough that sales, delivery, finance, legal, and the customer all have the same understanding of what is being delivered, for how much, by when, and under what assumptions.',
    testing:'Can you convert a technical solution into a clear, commercially safe and deliverable contract?',
    mistake:'Writing a SOW as a technical document only, with vague scope, unclear customer responsibilities, weak acceptance criteria, or no change-control mechanism.',
    followup:'What assumptions and exclusions would you normally include in a migration SOW?',
    cue:'Memory: SCOPE. S = Scope. C = Commitments and responsibilities. O = Outcomes and deliverables. P = Price, plan and prerequisites. E = Exit criteria, acceptance and change control. Closing line: “A good SOW removes ambiguity before delivery starts.”'
  };

  const idx = D.questions.findIndex(x => x.id === q.id || x.q === q.q);
  if (idx >= 0) D.questions[idx] = q;
  else D.questions.push(q);

  D.frameworks = D.frameworks || [];
  const framework = {name:'SOW Memory', value:'SCOPE = Scope → Commitments → Outcomes → Price/Plan/Prerequisites → Exit criteria & Change Control'};
  const fi = D.frameworks.findIndex(x => x.name === framework.name);
  if (fi >= 0) D.frameworks[fi] = framework;
  else D.frameworks.push(framework);
})();
