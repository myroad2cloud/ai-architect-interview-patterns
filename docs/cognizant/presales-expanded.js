(function(){
  const qs = window.COGNIZANT_DATA && window.COGNIZANT_DATA.questions;
  if(!qs) return;

  const upsert = (match, patch) => {
    const i = qs.findIndex(q => match(q));
    if(i >= 0) qs[i] = {...qs[i], ...patch};
    else qs.push(patch);
  };

  upsert(q => q.q === 'Explain the end-to-end RFP / presales pursuit lifecycle.' || q.id === 'presales-rfp-1', {
    id:'presales-rfp-1',
    category:'Presales Lifecycle',
    priority:'Critical',
    q:'Explain the RFP / presales lifecycle.',
    opening:'I think about the pursuit lifecycle in six stages: Identify, Qualify, Solution, Propose, Defend and Close.',
    answer:'I think about the pursuit lifecycle in six stages: Identify, Qualify, Solution, Propose, Defend and Close. Identification is about recognizing a meaningful customer opportunity rather than trying to attach Azure services to every conversation. Qualification determines whether there is a compelling problem, decision access, realistic timeline, viable economics, manageable risk, capability fit and a credible right to win. Once qualified, solutioning translates the customer requirement into architecture, delivery approach, effort, Azure consumption, risks and an operating model. We then convert that into the proposal and commercials, including scope, assumptions, pricing, timeline and SOW. During solution defense, I need to defend not only the architecture but also the estimate, assumptions, delivery model and business value. Finally, after commercial closure, I ensure a disciplined transition into delivery so that what we sold is what the delivery organisation can execute. For me, presales starts with identifying the right problem and ends only when the solution has been successfully transferred into delivery.',
    testing:'Do you understand the full pursuit lifecycle beyond architecture and can you connect sales, solutioning, commercials and delivery?',
    mistake:'Starting at solution design and ignoring opportunity identification, qualification, proposal shaping, defense or handover.',
    followup:'What specifically happens during solution defense?',
    cue:'Memory: Identify → Qualify → Solution → Propose → Defend → Close. Or: Find it → Check it → Solve it → Sell it → Defend it → Close it.'
  });

  upsert(q => q.q === 'What is your end-to-end solutioning approach for a presales pursuit?' || q.id === 'presales-1', {
    id:'presales-1',
    category:'Presales Lifecycle',
    priority:'Critical',
    q:'Walk me through your end-to-end solutioning approach for a presales pursuit.',
    opening:'I use a structured end-to-end flow: Qualify, Discover, Baseline, Design, Compare, Estimate, De-risk, Commercialize, Propose and Transition.',
    answer:'I use a structured end-to-end flow: Qualify, Discover, Baseline, Design, Compare, Estimate, De-risk, Commercialize, Propose and Transition. First, I qualify the opportunity by confirming the business problem, urgency, sponsor, decision process, budget, timeline, competition and whether Cognizant has a credible right to win. Second, I run discovery to understand business outcomes, current-state architecture, workloads, dependencies, security, compliance, operational constraints and non-functional requirements. Third, I establish a trusted baseline and separate facts, assumptions, gaps and open decisions. If the data is weak, I make the uncertainty explicit rather than hiding it in the estimate. Then I define the target architecture and realistic solution options with trade-offs across cost, risk, timeline, operability and business value, and I recommend one approach. After that, I estimate delivery effort and Azure consumption, including staffing, migration or implementation plan, dependencies, assumptions, contingency and timeline. I then de-risk the solution by validating service limits, regional availability, quotas, security requirements, delivery capability, customer dependencies and high-risk assumptions through workshops, proof points or technical spikes. Next, I work with sales, finance, delivery and legal to commercialize the solution by defining pricing model, margin, assumptions, exclusions, customer responsibilities, acceptance criteria and change control. Finally, I convert everything into a clear customer proposition covering business outcome, architecture, roadmap, delivery model, commercials, risks and why Cognizant. Once the deal is won, I ensure a structured presales-to-delivery transition so the delivery team understands exactly what was sold, why it was designed that way and which assumptions protect the plan. My objective is that the architecture, effort, timeline, risk and price all tell the same story.',
    testing:'Can you operate as an end-to-end solution owner who integrates architecture, estimate, commercials, risk and transition?',
    mistake:'Jumping straight to technical design or stopping at proposal submission without commercial shaping and delivery transition.',
    followup:'Where do you involve delivery, finance and legal in the lifecycle?',
    cue:'Easy memory: Shape → Design → Size → Sell → Handover. Shape = Qualify + Discover + Baseline. Design = Architecture + Options. Size = Effort + Cost + Timeline + Risk. Sell = Commercials + Proposal. Handover = Transition to delivery.'
  });

  upsert(q => q.q === 'How do you qualify an opportunity before investing presales effort?' || q.id === 'presales-2', {
    id:'presales-2',
    category:'Presales Lifecycle',
    priority:'Critical',
    q:'How do you qualify an Azure opportunity before investing significant presales effort?',
    opening:'I use seven tests: Problem, Power, Pace, Risk, Money, Fit and Win.',
    answer:'I use seven tests before I commit significant presales effort: Problem, Power, Pace, Risk, Money, Fit and Win. Problem means there must be a compelling business problem and genuine urgency. Power means we need access to the sponsor, decision makers and decision process. Pace means the requested timeline has to be realistic enough to shape and deliver. Risk means contractual and delivery risk must be controllable. Money means the budget, economics and commercial model need to be viable. Fit means Cognizant must genuinely have the technical and delivery capability to solve the problem. Win means we need a credible right to win, based on customer relationships, Microsoft alignment, relevant experience, differentiation and competitive position. I also confirm the business outcome, sponsor, budget range, timeline, competition, procurement route, success criteria and whether the customer will provide the data and SMEs required for discovery. Based on this, I recommend pursue, nurture or no-bid with explicit reasons. I would rather exit an opportunity early than consume expensive presales and engineering capacity on a deal with no realistic path to closure.',
    testing:'Can you make disciplined bid/no-bid decisions and protect scarce presales capacity?',
    mistake:'Treating every large logo or large TCV as worth pursuing, or focusing only on technical fit.',
    followup:'When would you recommend no-bid?',
    cue:'Memory: Problem → Power → Pace → Risk → Money → Fit → Win. No compelling problem, no decision power, impossible pace, unacceptable risk, poor economics, weak fit or no right to win means consider no-bid.'
  });

  upsert(q => q.q === 'When would you recommend no-bid?' || q.id === 'presales-nobid-1', {
    id:'presales-nobid-1',
    category:'Presales Lifecycle',
    priority:'High',
    q:'When would you recommend no-bid?',
    opening:'I would consider no-bid when there is no Problem, no Power, impossible Pace, too much Risk, weak Money, poor Fit or no reason to Win.',
    answer:'I would recommend no-bid when there is no compelling business problem, no sponsor or decision access, an unrealistic timeline, unacceptable contractual or delivery risk, poor economics, weak capability fit or no credible differentiation and right to win. I would also consider opportunity cost because senior presales capacity is limited. If the opportunity could become attractive later, I would document the conditions that need to change, such as stronger sponsor access, clearer scope, a viable budget, lower contractual risk or a better competitive position, and then move it to nurture rather than forcing a weak pursuit.',
    testing:'Can you say no when a deal is strategically or commercially weak?',
    mistake:'Pursuing because of logo value alone or because significant effort has already been spent.',
    followup:'What would make you move a no-bid opportunity back to pursue?',
    cue:'Problem → Power → Pace → Risk → Money → Fit → Win.'
  });
})();
