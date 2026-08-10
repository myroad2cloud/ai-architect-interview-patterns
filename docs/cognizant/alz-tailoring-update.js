(function () {
  if (!window.COGNIZANT_DATA || !Array.isArray(window.COGNIZANT_DATA.questions)) return;

  const q = {
    id: 'alz-tailoring-1',
    category: 'Landing Zone',
    priority: 'Critical',
    q: 'How do you demonstrate that an Azure Landing Zone based on Microsoft’s enterprise-scale reference architecture is tailored to a specific customer?',
    opening: 'I use Microsoft’s enterprise-scale landing zone as the baseline, not as a finished customer design.',
    answer: 'I use Microsoft’s enterprise-scale landing zone as the baseline, not as a finished customer design. First, I understand the customer context: their organisation structure, security and compliance requirements, network topology, operating model, application landscape, and cloud roadmap. Then I map those requirements to the landing-zone design areas. For example, I tailor the management-group and subscription hierarchy to the customer’s organisation and application ownership. I tailor RBAC and PIM to their identity model, policies to their compliance requirements, networking to their regions and connectivity needs, and monitoring, backup, DR and FinOps to their operating model. I also document the key design decisions: what came from the Microsoft reference architecture, what we changed, and why we changed it. Finally, I validate the design through architecture workshops, security reviews, connectivity and policy testing, and pilot workloads. So for me, the proof that a landing zone is tailored is simple: every major design decision should be traceable to a specific customer requirement, risk, or operating need. In short, I use Microsoft’s landing zone as the reference, but the final design is customer-specific, requirement-driven, and validated.',
    testing: 'Can you show that you understand the difference between using a Microsoft reference architecture and creating a customer-specific enterprise platform?',
    mistake: 'Saying the landing zone is tailored just because names, CIDRs, or policies were changed without linking design choices to customer requirements.',
    followup: 'Give me an example of a landing-zone design decision you would tailor for a regulated customer.',
    cue: 'Memory: Baseline → Discover → Tailor → Trace → Validate. Closing line: A customer-specific landing zone should be reference-aligned, requirement-driven, and traceable.'
  };

  const idx = window.COGNIZANT_DATA.questions.findIndex(x => x.id === q.id || x.q === q.q);
  if (idx >= 0) window.COGNIZANT_DATA.questions[idx] = q;
  else window.COGNIZANT_DATA.questions.push(q);
})();
