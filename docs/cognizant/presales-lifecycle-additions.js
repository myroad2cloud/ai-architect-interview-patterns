(function(){
  const D = window.COGNIZANT_DATA;
  if (!D) return;

  const existingQualification = D.questions.find(q => q.id === 'presales-2');
  if (existingQualification) {
    existingQualification.q = 'How do you qualify an Azure opportunity before investing significant presales effort?';
    existingQualification.opening = 'I use five tests before I commit serious presales effort: business urgency, decision access, solution fit, commercial viability, and our ability to win and deliver.';
    existingQualification.answer = 'I use five tests before I commit serious presales effort: business urgency, decision access, solution fit, commercial viability, and our ability to win and deliver. First, I confirm the business problem and why it matters now. Second, I check whether we have access to the sponsor, decision process, budget range, timeline, and evaluation criteria. Third, I validate that the opportunity fits our Azure, migration, security, data, AI, or managed-services capabilities. Fourth, I check whether the commercial model can be viable considering scope uncertainty, delivery effort, contractual risk, and margin. Finally, I assess whether Cognizant has a credible right to win, including Microsoft alignment, incumbent position, customer relationships, relevant experience, and delivery capacity. Based on that, I would recommend pursue, nurture, or no-bid. I would rather exit an opportunity early than consume specialist effort on a deal with no realistic path to closure.';
    existingQualification.testing = 'This answer shows Senior Manager thinking: pipeline quality, presales capacity, commercial risk, win probability, and delivery feasibility, not just architecture.';
    existingQualification.mistake = 'Treating every large opportunity as worth pursuing, or focusing only on technical fit while ignoring decision access, economics, risk and right to win.';
    existingQualification.followup = 'When would you recommend no-bid?';
    existingQualification.cue = 'Easy memory: Problem → Power → Fit → Money → Win. Problem: Is there a real business problem? Power: Can we reach the people who decide? Fit: Can we genuinely solve it? Money: Is the deal commercially viable? Win: Why should Cognizant win? Line to remember: “A large opportunity is not automatically a good opportunity.”';
  }

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
      opening:'I would recommend no-bid when the opportunity has no compelling business problem, no decision access, unacceptable risk, poor economics, weak fit, or no credible differentiation.',
      answer:'I would recommend no-bid when there is no compelling business problem, no sponsor or decision access, an unrealistic timeline, unacceptable contractual or delivery risk, poor economics, weak capability fit, or no credible differentiation. I would also consider opportunity cost because senior presales capacity is limited. If the situation could change, I would document what conditions would need to improve before we re-enter.',
      testing:'Can you make disciplined pursuit decisions and protect presales capacity?',
      mistake:'Pursuing every large opportunity simply because the logo or TCV looks attractive.',
      followup:'How would you explain a no-bid recommendation to sales leadership?',
      cue:'Line to remember: “A large opportunity is not automatically a good opportunity.”'
    }
  ];

  additions.forEach(q => {
    const idx = D.questions.findIndex(x => x.id === q.id);
    if (idx >= 0) D.questions[idx] = q;
    else D.questions.push(q);
  });

  const frameworks = [
    {name:'RFP / Pursuit Lifecycle', value:'Identify → Qualify → Solution → Propose → Defend → Close'},
    {name:'Easy Pursuit Recall', value:'Find it → Check it → Solve it → Sell it → Defend it → Close it'},
    {name:'Opportunity Qualification', value:'Problem → Power → Fit → Money → Win'},
    {name:'No-Bid Reminder', value:'A large opportunity is not automatically a good opportunity.'},
    {name:'Solution Defense', value:'DEAL = Design → Estimate → Assumptions → Leverage / Value'}
  ];
  D.frameworks = D.frameworks || [];
  frameworks.forEach(f => {
    const idx = D.frameworks.findIndex(x => x.name === f.name);
    if (idx >= 0) D.frameworks[idx] = f;
    else D.frameworks.push(f);
  });
})();
