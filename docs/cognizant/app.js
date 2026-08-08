const questions = [
  {
    category: 'Landing Zone',
    q: 'What is an Azure Landing Zone?',
    short: 'An enterprise Azure foundation that provides the identity, networking, governance, security, management, and automation needed to host workloads consistently at scale.',
    simple: 'Think of Azure as a new city. Before moving buildings into it, you need roads, zones, security, utilities, operating rules, and ownership. The landing zone is that city foundation.',
    deep: 'A landing zone is not one subscription or one template. It is an enterprise operating foundation covering tenant and billing choices, identity, management groups and subscriptions, connectivity, security, management, governance, and platform automation. It should support both platform services and application landing zones.',
    presales: 'I use ALZ as a discovery framework. It helps expose dependencies and gaps before migration estimates are committed. Those gaps become scope, work packages, assumptions, risks, effort, and commercials.',
    punch: 'I would describe Azure Landing Zone as the controlled enterprise foundation that makes Azure ready to accept workloads securely and repeatedly at scale.'
  },
  {
    category: 'Landing Zone',
    q: 'What are the eight Azure Landing Zone design areas?',
    short: 'Billing and tenant, identity and access, resource organization, networking and connectivity, security, management, governance, and platform automation/DevOps.',
    simple: 'Remember: Bill, Identity, Organize, Connect, Secure, Manage, Govern, Automate. BIOCSMGA.',
    deep: 'Billing asks who owns and pays. Identity asks who can do what. Organization decides management groups, subscriptions, and resource boundaries. Network decides hybrid connectivity and traffic controls. Security protects. Management operates. Governance defines and enforces rules. Automation makes the platform repeatable through IaC and pipelines.',
    presales: 'These eight areas become my structured discovery checklist so that architecture workshops do not turn into random technical conversations.',
    punch: 'The design areas tell me WHAT decisions must be made.'
  },
  {
    category: 'Landing Zone',
    q: 'What are the Azure Landing Zone design principles?',
    short: 'Subscription democratization, policy-driven governance, a single control and management plane, an application-centric service model, and alignment with Azure-native capabilities and roadmap.',
    simple: 'Give teams freedom, put guardrails around them, manage consistently through Azure, think applications rather than servers, and stay Azure-native unless there is a justified reason not to.',
    deep: 'The principles are decision rules rather than components. They encourage workload-team autonomy within governed subscription boundaries, automated policy enforcement, consistent use of the Azure control plane, application-oriented ownership and migration planning, and preference for Azure-native services where they meet requirements.',
    presales: 'They help me defend architecture decisions to the customer. For example, I can explain why I prefer automated subscription vending over ticket-driven provisioning or why I plan migration waves around applications instead of raw VM counts.',
    punch: 'The principles tell me HOW I should think while making the landing-zone design decisions.'
  },
  {
    category: 'Scenario',
    q: 'The customer already has a landing zone. How would you decide whether to remediate, extend, or replace it?',
    short: 'Assess the existing platform against target requirements, classify each gap, create a minimum viable remediation plan, and replace only where structural problems make remediation higher-risk or higher-cost.',
    simple: 'My default is: reuse what works, remediate what is weak, extend what is missing, replace only when evidence justifies it.',
    deep: 'I assess the existing landing zone across the eight design areas and compare the current state with target workload, security, regulatory, scale, operations, and migration requirements. Mature identity may be retained. Inconsistent policies may be remediated. Existing ExpressRoute may be extended. A fundamentally unusable management-group, network, or operating model may justify redesign. I then split gaps into minimum requirements needed before migration and enhancements that can follow later.',
    presales: 'The technical assessment must become a commercial decision. I convert identified gaps into explicit work packages, dependencies, risks, assumptions, effort, timeline impact, and cost. This avoids selling unnecessary platform rebuild work.',
    punch: 'My role in presales is not to sell a new landing zone. It is to recommend the minimum change required to make the customer migration-ready while balancing risk, cost, speed, and scalability.'
  },
  {
    category: 'Scenario',
    q: 'What would make you recommend replacing an existing landing zone?',
    short: 'Structural issues that prevent scale, security, automation, supportability, or the target operating model, where rebuilding is demonstrably safer or cheaper than remediation.',
    simple: 'I replace the foundation only when fixing it room-by-room costs more or leaves unacceptable risk.',
    deep: 'Examples include an unusable management-group and subscription strategy, flat or non-scalable network design, weak security boundaries, unmanageable policy inheritance, heavy manual provisioning, no sustainable ownership model, or legacy design decisions that conflict with target-state regulatory requirements. I would still compare remediation versus replacement in cost, delivery risk, migration disruption, and future operating cost.',
    presales: 'Replacement must have a business case. If I cannot explain why the incremental cost reduces delivery or operational risk, then I probably should not propose it.',
    punch: 'Replace only when the current platform is structurally incompatible with the target state and the business case is stronger than remediation.'
  },
  {
    category: 'Presales',
    q: 'How does Azure Landing Zone knowledge help you as a presales architect?',
    short: 'It gives me a structured way to qualify customer readiness, expose hidden dependencies, define scope, estimate platform work, reduce migration risk, and connect architecture decisions to commercials.',
    simple: 'ALZ turns technical discovery into proposal inputs.',
    deep: 'Without a landing-zone assessment, a migration estimate can hide major work in identity, connectivity, DNS, security controls, policy, monitoring, subscription design, or automation. By assessing those early, I can define prerequisites, assumptions, exclusions, dependencies, responsibilities, and work packages before committing to price and schedule.',
    presales: 'The flow I use is Discover → Assess → Decide → Architect → Estimate → Price → Propose. ALZ sits underneath the first four stages and materially improves the quality of the last three.',
    punch: 'A strong presales architect uses landing-zone architecture to make the proposal more accurate, defensible, and lower-risk.'
  },
  {
    category: 'Presales',
    q: 'A customer says, “We already have a landing zone. Why are you charging us for landing-zone work?” How would you respond?',
    short: 'I would clarify that I am not proposing a rebuild by default. I am proposing targeted readiness validation and only the remediation required to support the agreed migration scope.',
    simple: 'Existing does not automatically mean migration-ready.',
    deep: 'I would acknowledge the customer investment and explain that the objective is to validate whether the platform can support the target migration volumes, network paths, security controls, subscription model, operational requirements, and deployment patterns. The assessment may conclude that little or no remediation is needed. If gaps exist, they are documented and priced transparently rather than discovered during migration waves.',
    presales: 'This reframes landing-zone effort from “extra platform work” into risk reduction and migration readiness. It also signals that we want to reuse customer investments rather than create unnecessary scope.',
    punch: 'I am not charging to rebuild what already works. I am validating readiness and pricing only the gaps that materially affect the migration.'
  },
  {
    category: 'Migration',
    q: 'Why should migration planning be application-centric rather than server-centric?',
    short: 'Because business services depend on groups of servers, databases, identity, network flows, integrations, DNS, security controls, and operational processes. Moving a VM does not mean the application is migrated.',
    simple: 'A server is a component. The application is the business unit of migration.',
    deep: 'An application may span multiple VMs, databases, shared services, external integrations, load balancers, certificates, identity dependencies, scheduled jobs, and support processes. Migration waves should therefore be designed around dependency-aware application groups and business validation rather than isolated infrastructure objects.',
    presales: 'This changes discovery effort, migration factory design, testing, cutover planning, ownership, and pricing. Raw server counts alone are not enough to estimate migration complexity.',
    punch: 'I use server inventory for sizing, but I use applications and business services for migration planning.'
  }
];

const list = document.getElementById('questionList');
const search = document.getElementById('search');
const filters = document.getElementById('filters');
const count = document.getElementById('questionCount');
let active = 'All';

const categories = ['All', ...new Set(questions.map(x => x.category))];
categories.forEach(category => {
  const button = document.createElement('button');
  button.className = 'filter' + (category === 'All' ? ' active' : '');
  button.textContent = category;
  button.onclick = () => {
    active = category;
    [...filters.children].forEach(x => x.classList.toggle('active', x.textContent === category));
    render();
  };
  filters.appendChild(button);
});

function render() {
  const term = search.value.toLowerCase().trim();
  const filtered = questions.filter(item => {
    const categoryMatch = active === 'All' || item.category === active;
    const text = Object.values(item).join(' ').toLowerCase();
    return categoryMatch && text.includes(term);
  });
  count.textContent = questions.length;
  list.innerHTML = filtered.map((item, i) => `
    <details class="qa">
      <summary>${i + 1}. ${item.q}<span>${item.category}</span></summary>
      <div class="answer">
        <h4>30-second answer</h4><p>${item.short}</p>
        <h4>Easy explanation</h4><p>${item.simple}</p>
        <h4>Deeper architect answer</h4><p>${item.deep}</p>
        <h4>Cognizant presales angle</h4><p>${item.presales}</p>
        <h4>Line to remember</h4><p class="quote">${item.punch}</p>
      </div>
    </details>`).join('');
  if (!filtered.length) list.innerHTML = '<div class="panel">No matching questions found.</div>';
}

search.addEventListener('input', render);
render();
