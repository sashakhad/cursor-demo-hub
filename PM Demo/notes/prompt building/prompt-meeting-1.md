# Prompt: Meeting 1 - Customer Discovery Debrief & Sprint Planning

## Task
Generate an 8,000-word transcript of an internal product and engineering team meeting where they debrief on customer discovery findings and identify two major sprint objectives.

## Context
You are generating a transcript for Jewel, an AI-powered recruiting sourcing and CRM platform. The team recently completed 24 customer discovery interviews across existing customers, prospects, and users of competitive tools. The company name for these interviews is "Jewel."

### Background on Jewel
- Product: AI sourcing module, talent CRM, and ATS capabilities
- Market position: Strong UX and AI features, but more expensive than competitors
- Main competitors: 
  - Greenhouse (established ATS with AI sourcing add-on)
  - Workday (enterprise ATS)
  - Juicebox (newer, cheaper sourcing tool with great onboarding)
  - Fetcher (strong EMEA coverage)
  - LinkedIn Recruiter (everyone's baseline)

### Key Findings from 24 Interviews
Reference specific companies interviewed: Notion, Figma, Netflix, Amplitude, Uber, Snowflake, Tesla, Capital One, Okta, Stripe, Databricks, Cloudflare, Plaid, Toast, Jane Street, Bridgewater, DE Shaw, Two Sigma, Citadel, Goldman Sachs, Affirm, Block, Gitlab, Confluent.

**Pain Point 1: Personas/Filter Management**
- Across nearly every interview, recruiters expressed difficulty managing multiple filter combinations for different candidate personas
- Examples:
  - Netflix: Content delivery engineers vs. recommendation algorithm engineers vs. streaming engineers - each needs different filters
  - Figma: C++ systems engineers vs. WebAssembly specialists vs. graphics engineers
  - Stripe: Backend engineers with fintech experience vs. platform engineers with compliance vs. risk/fraud engineers
  - Jane Street: OCaml systems engineers vs. quantitative researchers vs. trading platform engineers
- Current workaround: Manually rebuilding searches or keeping filter notes in Notion/Docs
- Juicebox's "saved filters" feature mentioned positively in 4+ interviews

**Pain Point 2: Data Staleness**
- Universal complaint across all 24 interviews
- Quarterly refresh cycle (industry standard) not sufficient
- High email bounce rates (15%+)
- Recruiters defaulting back to LinkedIn due to trust issues with contact data
- Recent job changes not reflected quickly enough

**Pain Point 3: Data Coverage**
- Juicebox has better coverage in some tech talent segments
- Fetcher has superior EMEA coverage
- Jewel's internal database is underutilized

**Positive Feedback**
- Strong praise for Jewel's UX and AI intake form
- Power users love integrated CRM and analytics features
- Better technical filtering than competitors

**Business Challenges**
- Losing deals on price (significantly more expensive than Juicebox)
- Budget constraints mentioned in 8+ interviews
- Some prospects experimenting with Juicebox's free tier

## Meeting Details

### Attendees
1. **Sarah Chen** (Product Manager)
   - Leading the customer discovery effort
   - Synthesizing insights
   - Pushing for customer-centric decisions
   - Data-driven, references specific interview quotes

2. **Marcus Rodriguez** (VP of Engineering)
   - Strategic technical leader
   - Focused on long-term architecture
   - Concerned with resource allocation
   - Balances ambition with pragmatism

3. **Elena Petrov** (Engineering Lead - Platform/Data)
   - Deep expertise in data infrastructure
   - Pragmatic about technical complexity
   - Thinks about scalability and costs
   - Eastern European background influences accent/speech patterns slightly

4. **David Kim** (Engineering Lead - Product Engineering)
   - Frontend and user experience expert
   - Passionate about UX and adoption
   - Thinks about implementation details
   - Questions assumptions constructively

### Meeting Structure

**Part 1: Opening & Context (10 minutes / ~1,000 words)**
- Sarah opens the meeting
- Brief overview of the discovery process
- Set expectations for the discussion

**Part 2: Key Findings Deep Dive (30 minutes / ~3,500 words)**
- Sarah presents findings with specific examples
- Reference 8-10 specific companies by name with concrete scenarios
- **Theme 1: Persona/Filter Management Pain**
  - Share 5-6 detailed examples from interviews
  - Pattern recognition across different role types
  - Juicebox's saved filters feature as competitive threat
  - Discussion and reactions from engineering leaders
  
- **Theme 2: Data Staleness**
  - Universal pain point across all interviews
  - Impact on user trust and retention
  - Competitive disadvantage
  
- **Theme 3: Data Coverage & Other Findings**
  - EMEA gaps
  - Internal database underutilization
  - Positive UX feedback
  - Pricing pressure

**Part 3: Prioritization & Debate (30 minutes / ~2,800 words)**
- Discussion of possible initiatives
- Natural debate and different perspectives:
  - Marcus: Concerned about scope and resource allocation
  - Elena: Technical feasibility and infrastructure costs
  - David: User adoption and competitive urgency
  - Sarah: Customer impact and revenue implications

- Consider various options:
  - Quick pricing adjustments?
  - Matching Juicebox's saved filters feature?
  - Data refresh improvements?
  - EMEA expansion?
  - Onboarding improvements?

- **Convergence on two objectives**:
  - **Objective 1**: Revamp onboarding flow + build "Personas" as first-class feature (not just saved filters - make it a core concept)
    - Goes beyond just matching Juicebox
    - Addresses the most common pain point
    - Can differentiate us
  
  - **Objective 2**: Optimize our data advantage
    - Leverage our vendor relationships and internal database
    - Create a competitive moat on data freshness
    - Address the universal pain point of staleness
    - Play to our strengths (more resources than Juicebox)

**Part 4: Initial Scoping & Next Steps (15 minutes / ~600 words)**
- High-level technical implications
- Assign leads: David for Objective 1, Elena for Objective 2
- Schedule two follow-up deep dive meetings
- Initial timeline thoughts (5-7 week sprint)

**Part 5: Wrap-up (5 minutes / ~100 words)**
- Action items
- Enthusiasm about clear direction

## Writing Guidelines

### Dialogue Style
- **Natural, realistic conversation** with overlaps, interruptions, and thinking out loud
- Use "um," "like," "you know," and other verbal fillers sparingly but naturally
- People talk over each other occasionally (indicate with em dashes or interruptions)
- Include moments of silence or pauses when people are thinking
- Show active listening ("Yeah," "Right," "Mm-hmm," "That makes sense")

### Formatting
```
[Meeting begins]

Sarah: Thanks everyone for making time. I know we're all swamped, but I think you'll find this worth it. We just wrapped up our customer discovery sprint—24 interviews over the last month—and there are some really clear patterns I want to walk through.

Marcus: Good timing. We need to figure out what we're prioritizing for Q4.

Sarah: Exactly. So let me start with the high level, then we'll dig into specifics...

[Continue with natural dialogue]
```

### Realism Elements
- Reference specific tools, technologies, and architectures naturally
- Include realistic recruiting metrics (time-to-fill, bounce rates, etc.)
- Show characters referencing notes, pulling up data, sharing screens
- Include natural transitions ("Let me pull up that quote," "Hold on, which company was that?")
- Have people reference specific customer names and quotes
- Include some uncertainty and questions, not just declarations
- Show collaborative problem-solving, not just presentation

### Character Voice Consistency

**Sarah (PM)**
- Customer-focused, frequently references specific interviews
- Uses phrases like "What I heard from..." or "Multiple customers mentioned..."
- Data-driven, cites specific numbers
- Balances business and user needs
- Pushes team toward decisions

**Marcus (VP Engineering)**
- Strategic, big-picture thinking
- Concerned with resource allocation: "How many eng weeks are we talking?"
- References technical architecture and long-term implications
- Supportive but asks hard questions
- Uses phrases like "From an engineering perspective..." or "We need to think about..."

**Elena (Engineering Lead - Platform)**
- Deep technical knowledge, especially data infrastructure
- Pragmatic about complexity and costs
- Asks detailed technical questions
- Slight accent influences occasional word choice
- Uses phrases like "The challenge is..." or "We have to consider..."

**David (Engineering Lead - Product)**
- UX and user adoption focused
- Frontend and product thinking
- Questions technical trade-offs from user perspective
- Enthusiastic about customer-facing improvements
- Uses phrases like "From a user perspective..." or "How would this feel to..."

### Tone
- Collaborative and respectful
- Healthy debate without conflict
- Excitement about opportunities balanced with realism about constraints
- Data-driven and analytical
- Some humor and personality
- Team building on each other's ideas

### Technical Depth
Include realistic technical discussion:
- Data models and APIs
- Infrastructure and scalability
- Cost implications (vendor API calls, storage, etc.)
- Search architecture
- Frontend state management
- Analytics and metrics

### Business Considerations
- Revenue impact
- Competitive differentiation
- Customer retention vs. acquisition
- Pricing and positioning
- Go-to-market strategy
- Resource constraints

## Specific Requirements

1. **Must reference at least 8-10 specific companies by name** from the interview list with concrete scenarios
2. **Include specific recruiting role examples** mentioned in interviews (e.g., "Netflix's content delivery engineers vs. recommendation engineers")
3. **Quote or paraphrase customer feedback** naturally in conversation (e.g., "The recruiter from Figma literally said...")
4. **Show the emergence of both objectives** through discussion, not as predetermined
5. **Include realistic debate** about prioritization
6. **Reference competitive tools** naturally (Juicebox, Greenhouse, Fetcher, LinkedIn)
7. **Include metrics** where appropriate (bounce rates, time-to-fill, number of saved searches, etc.)
8. **End with clear action items** and scheduled follow-ups

## Success Criteria
- 8,000 words (±200 words acceptable)
- Feels like a real meeting transcript, not a screenplay
- Clear narrative arc: problem discovery → analysis → debate → decision
- Both objectives emerge naturally from customer data
- Realistic technical and business discussion
- Strong character voices
- References specific customer scenarios throughout
- Sets up the two follow-up meetings effectively

## Output Format
Plain text file with clear speaker labels and natural dialogue formatting. Include [bracketed stage directions] for actions like pulling up slides, sharing screen, etc.

