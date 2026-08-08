# Cognizant Azure Presales Interview Website Publishing Plan

## Goal

Turn the Cognizant interview material in Google Drive into a focused interview-preparation application, not a document dump.

The site should optimize for four activities:

1. Learn the answer.
2. Recall it quickly.
3. Practise saying it aloud.
4. Test whether the answer is interview-ready.

## Source material reviewed

### Primary question sources

- Upendra - Cognizant Senior Manager Presales Interview Q&A
  - Full Q&A Bank
  - Rapid Revision
  - Questions to Ask
- Andrew Glasser Interview Question Bank
- Cognizant Azure Presales Architect - 10 Practical Scenarios and Answers

### Supporting material

- Azure Presales Architect - 10 Scenario Memory Infographic
- Azure Presales and Solutioning YouTube Learning List

## Problem with the current site

The current Cognizant page is useful as a prototype but only contains a small landing-zone-focused subset of questions in `app.js`.

Do not scale this by simply appending every question to one JavaScript array and one long accordion page. The result would become difficult to revise, difficult to maintain, and poor for interview practice.

## Recommended information architecture

### 1. Cognizant Dashboard

The Cognizant home page should become the interview command centre.

Show:

- Interview readiness summary
- Critical questions remaining
- Practised questions
- Weak questions
- Categories
- Study modes
- Continue last session

Primary cards:

- Rapid Revision
- Full Question Bank
- Practical Scenarios
- Andrew Interview Round
- Commercials & Estimation
- Azure Architecture
- AI / Citadel
- Behavioural & Leadership
- Questions to Ask Interviewer
- Mock Interview

## 2. Rapid Revision Mode

Purpose: preparation in the final 30-60 minutes before the interview.

Use the existing Rapid Revision dataset.

Each card should show initially:

- Question
- Priority: Critical / High / Medium
- Opening line only

Actions:

- Reveal full answer
- I know this
- Needs practice
- Mark practised

Important: do not show the entire answer by default. Force active recall first.

## 3. Full Question Bank

Organize by interview competency rather than source document.

Recommended categories:

### Personal positioning
- Tell me about yourself
- Why Cognizant?
- Why change?
- Why Senior Manager?
- Strengths / development area
- Why should we hire you?

### Presales lifecycle
- Qualification
- Discovery
- Ambiguous requirements
- Solutioning lifecycle
- Transformation storyline
- Bid / no-bid

### Commercials
- TCV, revenue, margin
- Pricing models
- Margin protection
- Customer says proposal is expensive
- Cloud consumption estimation
- Benchmarking
- Fixed price vs T&M

### Estimation and volumetrics
- 200-server estimation
- Effort-to-FTE formula
- 6 months vs 4 months
- Complexity classification
- Migration wave throughput
- Sensitivity analysis

### Azure Landing Zone
- ALZ definition
- Design areas
- Design principles
- CAF-aligned landing zone
- Remediate / extend / rebuild
- Platform vs application landing zones

### Migration and modernization
- Migration strategy
- Wave planning
- Rehost / replatform / refactor
- Datacentre exit
- Incomplete inventory
- Pilot selection

### Networking and security
- Hub-spoke vs vWAN
- North-south vs east-west
- ExpressRoute / VPN resilience
- Private endpoints and DNS
- Zero Trust
- Governance without bureaucracy

### Azure AI / Citadel
- AI landing zone
- Secure Microsoft Foundry platform
- Citadel governance hub
- CAF + WAF + Citadel
- Agent security
- Responsible AI
- AI cost and capacity

### RFP / proposal / SOW
- RFP lifecycle
- Compliance matrix
- Assumptions and exclusions
- Presales-to-delivery handover
- Competitive differentiation
- Red-team review

### Leadership and customer handling
- Influence without authority
- Customer rejects design
- Sales vs delivery disagreement
- Multi-tower leadership
- Executive communication
- Underperforming contributor

### Behavioural stories
Use real project evidence as reusable STAR stories:

- DFSA
- Flora Foods Azure ML
- STC multi-agent Copilot
- DMG Media
- SELA
- Card Factory

## 4. Practical Scenario Lab

The 10 scenario document should be a dedicated practice mode, not mixed into normal Q&A.

For every scenario display this sequence:

1. Customer situation
2. Interviewer question
3. "Answer aloud before opening"
4. Reveal 90-second answer
5. Reveal deep answer
6. Numbers / calculations to defend
7. Likely follow-up
8. Suggested follow-up answer
9. Presales lesson
10. Score yourself

The 10 scenarios should include:

1. 200 VMware servers / 50 applications / six months
2. Existing landing zone: remediate, extend or replace
3. Datacentre exit with incomplete discovery
4. Three-tier application modernization
5. Regulated Azure AI landing zone
6. Business continuity and disaster recovery
7. Reduce Azure cost by 25%
8. Competitive RFP with incomplete requirements
9. Secure global hybrid connectivity
10. CIO challenges cost, duration and assumptions

## 5. Andrew Interview Round

Create a dedicated interviewer-specific view using the Andrew Glasser question bank.

The page should emphasize:

- Critical questions first
- What Andrew is testing
- Common mistakes
- Delivery cue
- Likely follow-up
- Suggested follow-up answer

This is particularly valuable because the same technical question can require a different answer depending on what the interviewer is testing.

Recommended card structure:

Question
→ What he is testing
→ Your 30-second answer
→ Your natural spoken answer
→ Common mistake
→ Likely follow-up
→ Follow-up answer
→ Delivery cue

## 6. Flashcard / Active Recall Mode

Do not display answers until the user chooses Reveal.

Front:

- Question
- Category
- Priority

Back:

- Opening line
- Key points
- Full spoken answer

Self-rating:

- Again
- Hard
- Good
- Strong

Store the result in browser localStorage so progress survives page refreshes without requiring a backend.

## 7. Mock Interview Mode

Randomly choose questions using weighted probability:

- Critical: 50%
- High: 35%
- Medium: 15%

Allow filters:

- 10-minute interview
- 20-minute interview
- Technical round
- Presales round
- Commercial round
- Andrew round
- Leadership round

For each question:

1. Show question only.
2. Start optional 90-second timer.
3. User answers aloud.
4. Reveal model answer.
5. User scores self 1-5.
6. Weak answers enter the revision queue.

## 8. 30-Second vs 90-Second vs Deep Answer

Where source data supports it, every major question should have three answer depths:

### 30 seconds
Executive summary.

### 60-90 seconds
Primary interview answer.

### Deep dive
Follow-up / architecture discussion.

This prevents memorizing one overly long answer and teaches the user to control answer depth.

## 9. Questions to Ask the Interviewer

Create a separate closing section with the existing 10 interviewer questions.

Add a recommendation engine based on interview context:

- First interview
- Hiring manager
- Presales director
- HR
- Final round

Highlight the best 2-3 questions rather than encouraging the user to ask all ten.

## 10. Memory Frameworks

Create a dedicated Memory page with short frameworks already present in the material.

Examples:

### Presales answer framework
Outcome → Discover → Options → Recommend → Quantify → De-risk → Commercialize → Close

### Landing zone decision
Reuse → Remediate → Extend → Replace only with evidence

### Executive objection
Acknowledge → Decompose → Evidence → Options → Recommend → Confirm

### Migration estimation
Volume sizes the factory. Complexity sizes the work.

### Presales lifecycle
Qualify → Discover → Design → Estimate → Price → Propose → Defend → Transition

## 11. Search and filters

Global search should search:

- Question
- Answer
- Category
- Project example
- Keywords
- Follow-up

Filters:

- Critical / High / Medium
- Category
- Interviewer-specific
- Scenario
- Practised / not practised
- Weak / strong

## 12. Progress tracking

Use localStorage initially.

Per question store:

- viewed
- practised
- confidence 1-5
- last practised date
- number of attempts

Dashboard metrics:

- Critical readiness %
- Overall readiness %
- Questions never practised
- Weakest categories
- Questions due for revision

No backend is required for Phase 1.

## 13. Recommended technical structure

Move question content out of `app.js`.

Suggested structure:

```text
docs/cognizant/
├── index.html
├── app.js
├── cognizant.css
├── data/
│   ├── questions.json
│   ├── rapid-revision.json
│   ├── scenarios.json
│   ├── andrew-round.json
│   ├── interviewer-questions.json
│   └── frameworks.json
├── rapid/
│   └── index.html
├── scenarios/
│   └── index.html
├── andrew/
│   └── index.html
├── mock/
│   └── index.html
└── memory/
    └── index.html
```

This separates content from presentation and makes future additions much easier.

## 14. Canonical question data model

Every normal Q&A should use a consistent schema:

```json
{
  "id": "cog-commercial-001",
  "category": "Commercials",
  "priority": "Critical",
  "question": "What do you do when a customer says the proposal is too expensive?",
  "answer30": "...",
  "answer90": "...",
  "deepDive": "...",
  "keyPoints": [],
  "commonMistakes": [],
  "followUps": [],
  "projectExamples": [],
  "interviewerIntent": "...",
  "deliveryCue": "...",
  "source": "..."
}
```

Duplicate questions from multiple documents should be merged into one canonical question, keeping the strongest answer and useful metadata from every source.

## 15. Deduplication rule

Do not publish duplicate questions simply because they occur in multiple Drive files.

For example, landing-zone, migration-estimation, CAF/WAF and AI-landing-zone questions occur in multiple source banks.

Merge them using this priority:

1. Most interview-ready spoken answer
2. Best 30-second executive answer
3. Andrew interviewer intent / common mistakes / follow-up
4. Real project evidence
5. Practical scenario calculation or decision rule

The website should show one strong canonical card instead of three near-identical questions.

## 16. Homepage priority order

For the current Cognizant interview, recommended homepage order:

1. Continue Revision
2. Critical Questions
3. Andrew Round
4. Mock Interview
5. Practical Scenarios
6. Commercials & Estimation
7. Landing Zone / Migration / Architecture
8. AI / Citadel
9. Behavioural Stories
10. Questions to Ask

This is deliberately different from organizing the homepage alphabetically.

## 17. Implementation phases

### Phase 1 - Content normalization

- Extract all question sources.
- Deduplicate.
- Create canonical JSON.
- Add priority and category metadata.
- Preserve project examples and interviewer intent.

### Phase 2 - High-value study modes

Build:

- Dashboard
- Rapid Revision
- Full Question Bank
- Andrew Round
- Scenario Lab

### Phase 3 - Active practice

Build:

- Flashcards
- Mock Interview
- Confidence scoring
- localStorage progress

### Phase 4 - Polish

- Mobile optimization
- Print-friendly cheat sheet
- Keyboard shortcuts
- Random-question button
- Interview countdown mode
- Optional speech / answer timer features

## Final design principle

The website should not answer the question immediately.

It should first make the user try to recall the answer, then reveal increasingly detailed guidance.

That changes the site from a reference library into an interview-training system.
