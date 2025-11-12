# Background Agent Prompts for Interview Transcript Generation

This document contains prompts to use with background agents to generate realistic interview transcripts. Each cluster should be generated separately to allow for review and iteration.

---

## General Instructions for All Clusters

### Context Setting

You are generating realistic interview transcripts for a demo environment. These transcripts represent user research interviews with talent acquisition professionals at various companies evaluating AI sourcing tools.

**The Product Being Discussed: Jewel**
- Jewel is an established leader in talent CRM, ATS, and sourcing tools
- They're evaluating their AI sourcing module against competitors
- Key features: AI intake form, advanced filtering, contact data, saved filters, analytics/dashboards, CRM integration

**Interview Format:**
- Customer discovery / user research interviews
- Conducted by Jewel product team members
- 45-60 minute conversations
- Goal: understand sourcing pain points, tool usage, and feature needs

### Quality Standards

Each transcript must:
1. Be exactly 4,000 words
2. Feel authentic and conversational (include verbal tics, tangents, real examples)
3. Include 2-4 interviewees with distinct voices and perspectives
4. Reference specific, realistic recruiting scenarios from their company
5. Mention competitor tools naturally in context
6. Include the assigned key learning about saved filter sets / persona filtering
7. Balance enthusiasm with realistic criticism
8. Include specific metrics when appropriate (e.g., "We're filling about 15 eng roles per quarter")
9. Show decision-making dynamics (budget concerns, stakeholder alignment, etc.)
10. Avoid sounding like marketing copy - be genuine

### Interviewer Guidance

The Jewel interviewer should:
- Ask open-ended discovery questions
- Probe for specific examples
- Occasionally summarize understanding
- Ask about competitive tools
- Explore pain points in depth
- Inquire about budget and decision-making processes
- Use realistic filler language ("That's interesting...", "Tell me more about...", "How does that work today?")

---

## Cluster 1 Prompt: Tech Companies with Greenhouse + Juicebox Experience

**Objective**: Generate 5 interview transcripts (4,000 words each) with tech companies that primarily use Greenhouse and have experience with Juicebox.

### Companies to Generate
1. Notion (Prospect) - Emily Martinez, Tom Bradley
2. Figma (Prospect) - Amanda Lewis, Chris Johnson  
3. Netflix (Customer) - Amanda Foster, Carlos Rodriguez, Jessica Liu
4. Amplitude (Customer) - Natalie Young, Isaac Walker
5. Uber (Customer) - Patricia Chen, Mark Thompson, Sophia Kim

### Key Themes to Cover
- Experience with Greenhouse AI sourcing (bundle pricing, UX issues, stale data)
- Juicebox usage (free vs. paid tier, saved filter love, onboarding experience)
- Contact data staleness as pain point (quarterly refresh)
- Budget constraints in current market
- Jewel's superior UX and AI intake form (for customers/partial customers)

### Specific Key Learning for Each Transcript
1. **Notion**: Multiple saved filter sets for different product designer personas (visual designers with Figma mastery vs. systems thinkers with strong front-end coding skills)
2. **Figma**: Multiple filter personas for technical roles (C++ systems engineers vs. WebAssembly specialists vs. graphics engineers)
3. **Netflix**: Content platform roles require separate filter sets (content delivery engineers vs. recommendation algorithm engineers vs. video streaming engineers vs. content production technology engineers)
4. **Amplitude**: Product manager roles need different filter sets (B2B analytics PM vs. consumer growth PM vs. technical/data-heavy PM)
5. **Uber**: Mobility platform roles need separate filter sets (ride-sharing backend engineers vs. mapping/geolocation engineers vs. payments platform engineers vs. driver-facing mobile engineers)

### Generation Instructions

For each transcript:

1. **Opening** (400-500 words): Introductions, company background, current recruiting volume and team size, current tech stack

2. **Current State Discussion** (1,000-1,200 words): Deep dive into current ATS and sourcing tools, what works, what doesn't, specific examples of recent roles filled

3. **Pain Points Exploration** (1,200-1,500 words): Discuss biggest challenges - this is where the key learning about saved filters/personas should emerge naturally through specific examples. Include other pain points like data staleness, budget constraints, etc.

4. **Competitive Landscape** (600-800 words): Discussion of other tools they've tried or are considering, what they like/dislike about each

5. **Future Needs & Closing** (400-600 words): What would make their sourcing more effective, decision-making process, budget considerations, next steps

### Prompt Template for Background Agent

```
Generate a realistic 4,000-word interview transcript between Jewel product team members and [COMPANY NAME] talent acquisition professionals.

COMPANY DETAILS:
- Company: [Name]
- Attendees: [Names and titles]
- Current ATS: [System]
- Sourcing Tools: [Tools]
- Jewel Status: [Prospect/Customer/Partial]
- Company Size: [Employees]
- Tech Stack: [Technologies]

INTERVIEW CONTEXT:
This is a customer discovery interview to understand sourcing challenges and tool needs. The conversation should feel natural and authentic, with realistic tangents and examples.

KEY LEARNING TO SURFACE:
[Specific persona/filter challenge for this company]

ADDITIONAL PAIN POINTS TO INCLUDE:
- [List from themes above]

FORMAT REQUIREMENTS:
- Exactly 4,000 words
- Include interviewer questions and interviewee responses
- Label speakers clearly (e.g., "Interviewer:", "Emily Martinez (Head of People):")
- Include realistic conversation fillers and natural speech patterns
- Reference specific roles, companies, and scenarios
- Mention competitor tools naturally
- Show different perspectives from different attendees
- Include a few recruiting metrics where appropriate

Please refer to the company master list for accurate company details and attendees.
```

---

## Cluster 2 Prompt: Enterprise Tech with Workday

**Objective**: Generate 4 interview transcripts (4,000 words each) with larger tech companies using Workday.

### Companies to Generate
1. Snowflake (Partial Customer) - Rachel Foster, James Wilson, Nina Sharma
2. Tesla (Prospect) - Victoria Martinez, James Wilson, Nina Patel
3. Capital One (Partial Customer) - Sandra Williams, Marcus Johnson, Amy Chen
4. Okta (Partial Customer) - Elizabeth Moore, Gregory Taylor, Samantha White

### Key Themes to Cover
- Workday's AI offerings are not good
- Old school sourcing strategy, heavy reliance on LinkedIn Recruiter
- Dedicated sourcers who don't love LinkedIn but it's all they know
- Some experimentation with Juicebox
- Leadership perspective on sourcing as mission-critical vs. nice-to-have
- High inbound for some roles reduces sourcing urgency
- Recruiting Operations leader perspective on tools and data

### Specific Key Learning for Each Transcript
1. **Snowflake**: Infrastructure engineering roles require multiple personas (distributed systems vs. database kernel vs. cloud platform engineers)
2. **Tesla**: Automotive technology roles need distinct filter sets (embedded systems engineers with automotive experience vs. machine learning engineers with computer vision expertise vs. battery technology engineers vs. manufacturing software engineers)
3. **Capital One**: Cloud engineering needs different filters (AWS solutions architects vs. DevOps/SRE vs. cloud security vs. FinOps)
4. **Okta**: Security engineering requires different filters (application security with dev background vs. infrastructure/cloud security vs. identity/access management)

### Generation Instructions

Follow same structure as Cluster 1 but emphasize:
- Larger company dynamics and decision-making complexity
- Multiple stakeholders with different priorities (exec, director, recruiting ops)
- Integration challenges with enterprise systems
- Longer procurement cycles
- More conservative adoption of new tools

Use the same prompt template, adjusting for 3 attendees where applicable and emphasizing enterprise dynamics.

---

## Cluster 3 Prompt: Tech Scale-ups with Greenhouse

**Objective**: Generate 5 interview transcripts (4,000 words each) with fast-growing tech companies using Greenhouse.

### Companies to Generate
1. Stripe (Partial Customer) - Sarah Chen, Marcus Thompson, Priya Patel
2. Databricks (Customer) - Jennifer Wu, David Kim, Alex Rodriguez
3. Cloudflare (Customer) - Michael Chang, Lisa Anderson, Kevin Park
4. Plaid (Partial Customer) - Victoria Barnes, Ryan Mitchell, Sophie Turner
5. Toast (Partial Customer) - Richard Nelson, Ashley Kumar, Brandon Lee

### Key Themes to Cover
- Greenhouse bundle pricing (200 credits/recruiter/month)
- High email bounce rates with Greenhouse AI sourcing
- Stale prospect data complaints
- Covers needs for strong inbound but not heavy sourcing
- Some teams using Juicebox free tier
- Power users loving Jewel's integrated CRM and analytics
- Recruiting operations perspective on data and reporting

### Specific Key Learning for Each Transcript
1. **Stripe**: Payment infrastructure roles need multiple saved searches (backend with fintech experience vs. platform with compliance vs. risk/fraud engineers)
2. **Databricks**: Data platform roles have distinct personas (distributed systems vs. data scientists with engineering depth vs. developer relations)
3. **Cloudflare**: Network engineering roles need different filters (CDN/edge computing vs. DDoS mitigation vs. DNS/protocol engineers)
4. **Plaid**: Developer experience roles require separate filters (developer advocates with content vs. solutions engineers with sales aptitude vs. API integration specialists)
5. **Toast**: Hardware-software integration roles need different personas (embedded with restaurant/retail hardware vs. mobile with offline-first vs. backend with high-scale POS)

### Generation Instructions

Follow same structure as Cluster 1 but emphasize:
- Fast growth hiring velocity
- Balance of efficiency and quality
- Tool adoption across growing teams
- Recruiting operations needs for reporting
- Cost per hire and budget efficiency considerations

---

## Cluster 4 Prompt: Hedge Funds & Quantitative Trading

**Objective**: Generate 5 interview transcripts (4,000 words each) with quantitative trading firms and hedge funds.

### Companies to Generate
1. Jane Street (Prospect) - Alexandra Chen, David Kumar, Sarah Mitchell
2. Bridgewater Associates (Prospect) - Michael Thompson, Jennifer Rodriguez, Robert Park
3. DE Shaw & Co (Partial Customer) - Lisa Wang, Andrew Foster, Maria Santos
4. Two Sigma (Customer) - Rachel Kim, Steven Chen, Emily Zhang
5. Citadel (Partial Customer) - Thomas Anderson, Kelly Zhang, Brandon Lee

### Key Themes to Cover
- Custom internal ATS systems (for most)
- Strong internal sourcing teams
- LinkedIn Recruiter as primary external tool
- Executive search for senior roles
- High technical bar and specialized talent needs
- Campus recruiting programs at top universities
- Competitive compensation and candidate markets
- Conservative approach to external tools

### Specific Key Learning for Each Transcript
1. **Jane Street**: Quantitative trading roles need separate filter sets (OCaml systems engineers vs. quantitative researchers with finance PhD vs. trading platform engineers vs. risk management engineers)
2. **Bridgewater Associates**: Investment technology roles require multiple personas (quantitative researchers with economics background vs. platform engineers with financial systems experience vs. data engineers with alternative data expertise vs. machine learning engineers with portfolio optimization experience)
3. **DE Shaw & Co**: Computational finance roles need different filters (C++ low-latency engineers vs. machine learning researchers vs. quantitative developers vs. systematic trading engineers)
4. **Two Sigma**: Machine learning in finance requires separate personas (ML researchers with publications vs. ML engineers with production systems experience vs. data scientists with financial modeling background vs. platform engineers with ML infrastructure expertise)
5. **Citadel**: Market making technology needs multiple filter sets (low-latency C++ engineers vs. market data engineers vs. risk management engineers vs. quantitative researchers with market microstructure expertise)

### Generation Instructions

Follow same structure as Cluster 1 but emphasize:
- High technical standards and rigorous evaluation
- Academic credentials and pedigree
- Specialized technical skills (OCaml, low-latency C++, etc.)
- Financial domain knowledge requirements
- Campus recruiting importance
- Competitive compensation packages
- More formal tone appropriate to these organizations

---

## Cluster 5 Prompt: Traditional Finance & Payment Tech

**Objective**: Generate 3 interview transcripts (4,000 words each) with traditional finance and payment technology companies.

### Companies to Generate
1. Goldman Sachs (Prospect) - Margaret Campbell, Christopher Allen, Diana Martinez
2. Affirm (Partial Customer) - Patricia Coleman, Derek Foster
3. Block/Square (Prospect) - William Jackson, Rebecca Scott, Nathan Green

### Key Themes to Cover
- Traditional finance using Workday + LinkedIn Recruiter
- Limited use of external sourcing tools historically
- Conservative procurement processes
- Security and compliance considerations
- Fintech startups with tighter budgets
- Juicebox usage in fintech companies
- Internal tools that haven't met needs
- Mix of traditional banking and tech company cultures

### Specific Key Learning for Each Transcript
1. **Goldman Sachs**: Trading platform engineering needs separate filters (low-latency C++ vs. risk management vs. market data vs. compliance automation engineers)
2. **Affirm**: Consumer credit engineering needs different filters (mobile with fintech vs. risk modeling vs. payment processing vs. underwriting platform engineers)
3. **Block**: Cryptocurrency and payment roles require separate personas (blockchain vs. payment processing vs. compliance/regulatory vs. mobile wallet engineers)

### Generation Instructions

Follow same structure as Cluster 1 but emphasize:
- Enterprise dynamics and formal processes (for Goldman Sachs)
- Budget constraints (especially for Affirm)
- Security/compliance requirements
- Fintech-specific recruiting challenges
- Mix of traditional banking and tech startup cultures
- Regulatory and compliance knowledge requirements

---

## Cluster 6 Prompt: Global & EMEA-Focused Companies

**Objective**: Generate 2 interview transcripts (4,000 words each) with globally distributed companies.

### Companies to Generate
1. Gitlab (Customer) - Michelle Harris, Oliver Thompson, Jasmine Patel
2. Confluent (Customer) - Robert Martinez, Hannah Lee, Jordan Mitchell

### Key Themes to Cover
- Fetcher usage for EMEA coverage
- Different sourcing needs across regions
- Remote work and distributed team challenges
- Data coverage gaps in different geographies
- Timezone and location filtering needs
- Full Jewel customer satisfaction with CRM integration
- Greenhouse limitations for global recruiting

### Specific Key Learning for Each Transcript
1. **Gitlab**: Remote DevOps roles need different filters (SRE with specific cloud platforms vs. CI/CD pipeline specialists vs. infrastructure as code vs. security automation) PLUS timezone/remote work filtering
2. **Confluent**: Data streaming roles need separate filter sets (Kafka core engineers vs. stream processing vs. data integration vs. cloud infrastructure)

### Generation Instructions

Follow same structure as Cluster 1 but emphasize:
- Global recruiting complexity
- Regional tool preferences
- Remote work considerations
- Time zone challenges
- Cultural differences in recruiting approaches
- Data quality variations by geography
- Fully remote company dynamics (Gitlab)

---

## Post-Generation Checklist

After generating each cluster, verify:

- [ ] Each transcript is exactly 4,000 words
- [ ] All assigned attendees are present and have distinct voices
- [ ] The specific key learning about saved filters/personas is clearly surfaced through natural conversation
- [ ] Competitor tools are mentioned appropriately
- [ ] Conversation feels authentic (includes examples, tangents, realistic speech)
- [ ] Company details match the master list
- [ ] Appropriate mix of positive and critical feedback
- [ ] Realistic metrics are included where appropriate
- [ ] Budget and procurement considerations are addressed
- [ ] Next steps or follow-up actions are mentioned in closing

---

## File Naming Convention

Save generated transcripts as:
```
transcript-[number]-[company-name]-[date].txt
```

Examples:
- `transcript-01-notion-2025-10-05.txt`
- `transcript-02-figma-2025-10-05.txt`

---

## Usage Instructions for Background Agents

1. Select a cluster to work on
2. Use the cluster-specific prompt for each company
3. Fill in the template with details from the company master list
4. Generate one transcript at a time
5. Review against the quality standards and checklist
6. Make any necessary revisions
7. Save with proper naming convention
8. Update the transcript to-do list to mark as complete
9. Move to next transcript in cluster

---

## Tips for Realistic Transcripts

**Do:**
- Include realistic verbal fillers ("um", "you know", "so...")
- Let interviewees interrupt or finish each other's thoughts
- Reference actual companies in the industry
- Include specific role examples (e.g., "We just hired a Senior Backend Engineer for our payments team")
- Show disagreement or different perspectives between attendees
- Include pricing/budget concerns naturally
- Reference actual recruiting metrics
- Let conversations meander slightly before getting back on track

**Don't:**
- Make it sound like a sales pitch
- Have everyone agree on everything
- Use overly formal language (unless appropriate for enterprise)
- Include unrealistic claims or exaggerations
- Make the pain points feel manufactured
- Skip the nuance and complexity of real recruiting challenges
- Forget to include the specific key learning for that company

---

## Example Opening (First 200 words)

Here's an example of how a transcript might begin:

```
Interviewer: Thanks so much for taking the time today. I'm here with Emily and Tom from Notion. Emily, you're the Head of People, and Tom, you're the Lead Recruiter - is that right?

Emily Martinez (Head of People): That's right, yep. Thanks for having us.

Tom Bradley (Lead Recruiter): Yeah, happy to chat. We're always looking at ways to improve our recruiting process.

Interviewer: Great. So just to set some context - can you give me a sense of the scale of recruiting at Notion right now? How big is the team, how many roles are you typically hiring for?

Emily Martinez: Sure. So we're about 500 people now, which is... it's been a wild few years of growth. The recruiting team is myself, Tom, and three other recruiters, plus a coordinator. Tom leads the technical recruiting side.

Tom Bradley: Yeah, and we're probably filling, I'd say... what, 30 to 40 roles a quarter right now? It was more last year, but things have slowed down a bit with the market. Most of those are engineering roles, then we've got product, design...

Emily Martinez: And some go-to-market, but engineering is the bulk. Tom spends most of his time on those.
```

---

This natural, conversational style should continue throughout all transcripts. Good luck with generation!


