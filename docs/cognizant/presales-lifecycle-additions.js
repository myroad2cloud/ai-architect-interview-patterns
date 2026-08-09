(function(){
  const D = window.COGNIZANT_DATA;
  if (!D) return;

  const additions = [
    {
      id:'presales-lifecycle-rfp-1',
      category:'Presales Lifecycle',
      priority:'Critical',
      q:'Explain the end-to-end RFP / presales pursuit lifecycle.',
      opening:'I think about the pursuit lifecycle in six stages: Identify, Qualify, Solution, Propose, Defend and Close.',
      answer:'I think about the pursuit lifecycle in six stages: Identify, Qualify, Solution, Propose, Defend and Close. Identification is about recognizing a meaningful customer problem or trigger. Qualification checks whether there is a compelling problem, decision access, realistic timeline, viable economics, manageable risk, capability fit and a credible right to win. Solutioning translates the qualified need into architecture, delivery approach, effort, Azure consumption, risks and operating model. Proposal converts that solution into scope, commercials, assumptions, timeline and SOW. During solution defense, I defend not only the architecture but also the estimate, assumptions, delivery model and customer value. After commercial closure, I ensure a disciplined transition into delivery so that what was sold is executable.',
      testing:'Do you understand presales as a business pursuit lifecycle, not just technical solution design?',
      mistake:'Starting directly with architecture and ignoring opportunity identification, qualification, commercials, defense and transition.',
      followup:'What happens during solution defense?',
      cue:'Memory: Find it → Check it → Solve it → Sell it → Defend it → Close it. I-Q-S-P-D-C.'
    },
    {
      id:'presales-solution-defense-1',
      category:'Presales Lifecycle',
      priority:'Critical',
      q:'What happens during solution defense?',
      opening:'During solution defense, I need to defend the DEAL: Design, Estimate, Assumptions and customer value.',
      answer:'Solution defense is where the customer challenges the proposition before making a buying decision. I need to defend why the architecture is appropriate, how effort and team size were calculated, why the timeline is realistic, what assumptions and dependencies exist, how risks are controlled, and why the proposed cost creates enough business value. I would use evidence rather than becoming defensive: discovery data, architecture trade-offs, volumetric calculations, delivery benchmarks, assumptions, proof points and customer outcomes. If the customer challenges cost or duration, I show which levers can change them and the consequence of each choice. My objective is not to win an argument. It is to help the customer make a transparent, informed decision.',
      testing:'Can you defend a proposal under executive, technical and commercial challenge?',
      mistake:'Defending only the Azure diagram or responding to price pressure with an immediate discount.',
      followup:'What would you do if a competitor is 20% cheaper?',
      cue:'DEAL = Design, Estimate, Assumptions, Leverage/value.'
    },
    {
      id:'presales-nobid-1',
      category:'Presales Lifecycle',
      priority:'High',
      q:'When would you recommend no-bid?',
      opening:'My no-bid triggers are Problem, Power, Pace, Risk, Money, Fit and Win.',
      answer:'I would recommend no-bid when there is no compelling business problem, no sponsor or meaningful decision access, an unrealistic timeline, unacceptable contractual or delivery risk, poor economics, weak capability fit, or no credible right to win. I would also consider opportunity cost because senior presales capacity is limited. If the opportunity could become viable later, I would document what needs to change before we re-enter, such as sponsor access, scope clarity, timeline, commercial model or risk allocation.',
      testing:'Can you make disciplined pursuit decisions and protect presales capacity?',
      mistake:'Pursuing every large opportunity simply because the logo or TCV looks attractive.',
      followup:'How would you explain a no-bid recommendation to sales leadership?',
      cue:'Problem → Power → Pace → Risk → Money → Fit → Win.'
    }
  ];

  additions.forEach(q => {
    if (!D.questions.some(x => x.id === q.id)) D.questions.push(q);
  });

  const frameworks = [
    {name:'RFP / Pursuit Lifecycle', value:'Identify → Qualify → Solution → Propose → Defend → Close'},
    {name:'Easy Pursuit Recall', value:'Find it → Check it → Solve it → Sell it → Defend it → Close it'},
    {name:'No-Bid Test', value:'Problem → Power → Pace → Risk → Money → Fit → Win'},
    {name:'Solution Defense', value:'DEAL = Design → Estimate → Assumptions → Leverage / Value'}
  ];
  D.frameworks = D.frameworks || [];
  frameworks.forEach(f => {
    if (!D.frameworks.some(x => x.name === f.name)) D.frameworks.push(f);
  });
})();
