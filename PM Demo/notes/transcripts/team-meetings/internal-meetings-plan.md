# Internal Team Meetings Plan

## Overview
Three strategic planning meetings (~8,000 words each) where the product and engineering teams debrief on customer discovery findings and plan upcoming sprint work.

### Meeting Flow
1. **Meeting 1**: Initial Customer Discovery Debrief → Identify two major objectives
2. **Meeting 2**: Deep Dive - Objective 1 (Personas & Onboarding)
3. **Meeting 3**: Deep Dive - Objective 2 (Data Optimization)

---

## Meeting 1: Customer Discovery Debrief & Sprint Planning

### Meeting Details
- **Duration**: 90 minutes (8,000 word transcript)
- **Objective**: Review customer discovery insights and identify top priorities for next sprint
- **Attendees**:
  - **Sarah Chen** (PM) - Leading the customer discovery synthesis
  - **Marcus Rodriguez** (VP of Engineering) - Technical feasibility and resourcing
  - **Elena Petrov** (Engineering Lead - Platform) - Data infrastructure expertise
  - **David Kim** (Engineering Lead - Product) - Frontend and user experience ownership

### Meeting Structure
1. **Opening & Context** (10 min)
   - Review of discovery process: 24 interviews across customers, prospects, and competitive tool users
   - High-level themes from interviews

2. **Key Findings Review** (30 min)
   - **Theme 1: Persona/Filter Management Pain Point**
     - Share 5-6 specific examples from interviews (Notion, Figma, Netflix, Stripe, Jane Street, etc.)
     - Pattern: Recruiters need multiple distinct filter combinations for different candidate personas
     - Current workaround is manually rebuilding searches or keeping notes in Notion/Docs
     - Juicebox's saved filters mentioned positively in multiple interviews
   
   - **Theme 2: Data Staleness Universal Pain Point**
     - Every single interview mentioned stale contact data
     - Quarterly refresh cycle not sufficient (same as competitors)
     - High bounce rates causing recruiters to default back to LinkedIn
   
   - **Theme 3: Data Coverage Gaps**
     - Juicebox has better coverage in some talent segments
     - Fetcher stronger in EMEA
     - Our internal database underutilized
   
   - **Theme 4: UX Wins**
     - Strong positive feedback on our AI intake form and filtering
     - Power users love integrated CRM features
     - But losing deals on price

3. **Prioritization Discussion** (30 min)
   - Debate various initiatives
   - Consider impact vs. effort
   - **Emerge on two objectives**:
     - **Objective 1**: Revamp onboarding flow + build "Personas" as first-class feature for saved filter sets
     - **Objective 2**: Optimize our data advantage - leverage our vendor relationships and internal database to create competitive moat on data freshness

4. **Initial Scoping** (15 min)
   - High-level technical implications for each
   - Assign leads for follow-up deep dives
   - Schedule two follow-up meetings

5. **Wrap-up** (5 min)
   - Action items
   - Next steps

### Key Discussion Points to Include
- Natural debate about whether to focus on retention vs. acquisition
- Discussion of competitive pressure from Juicebox
- Budget/resource constraints
- Tension between quick wins vs. longer-term strategic bets
- References to specific customer quotes or scenarios from interviews
- Technical feasibility questions
- Go-to-market implications

### Tone
- Collaborative but with healthy debate
- Data-driven decision making
- Realistic about constraints
- Excited about opportunities
- Mix of strategic thinking and practical execution planning

---

## Meeting 2: Objective 1 Deep Dive - Personas & Onboarding Revamp

### Meeting Details
- **Duration**: 2 hours (8,000 word transcript)
- **Objective**: Technical scoping and sprint planning for Personas feature and onboarding improvements
- **Attendees**:
  - **Sarah Chen** (PM)
  - **David Kim** (Engineering Lead - Product)
  - **Jasmine Liu** (Senior Engineer - Frontend)
  - **Alex Morgan** (Senior Engineer - Backend/Search)

### Meeting Structure
1. **Problem Restatement** (10 min)
   - Review specific customer pain points
   - Competitive analysis (Juicebox's saved filters)
   - Success metrics definition

2. **User Experience Design Discussion** (30 min)
   - Onboarding flow redesign
     - How to introduce Personas concept early
     - Guided experience vs. self-service
     - Template personas for common roles
   - Personas feature UX
     - Creating/naming/organizing personas
     - Applying personas to searches
     - Managing multiple personas per recruiter
     - Team sharing of personas
   - Edge cases and complexity

3. **Technical Architecture** (40 min)
   - **Data Model**
     - How to store persona definitions
     - Relationship to existing saved searches
     - User vs. team vs. organization level personas
     - Migration path for existing saved searches
   
   - **Search Engine Integration**
     - How personas map to filters
     - Performance implications
     - Caching strategy
   
   - **API Design**
     - New endpoints needed
     - Backwards compatibility
   
   - **Frontend State Management**
     - Persona selector component
     - State persistence
     - Real-time updates

4. **Implementation Planning** (30 min)
   - Break down into specific tasks/stories
   - **Phase 1**: Basic persona CRUD + UI (Week 1-2)
     - Backend: Persona data model and API
     - Frontend: Persona management interface
   - **Phase 2**: Search integration (Week 2-3)
     - Apply personas to searches
     - Quick-switch between personas
   - **Phase 3**: Onboarding integration (Week 3-4)
     - Revamp onboarding flow
     - Template personas
   - **Phase 4**: Advanced features (Week 4-5)
     - Team sharing
     - Analytics on persona usage
   
   - Dependencies and risks
   - Testing strategy
   - Rollout plan (beta users, phased rollout)

5. **Business Implications** (15 min)
   - Go-to-market strategy
   - Customer communication plan
   - Documentation and training needs
   - Sales enablement

6. **Assignment & Next Steps** (15 min)
   - Assign owners for each component
   - Define done criteria
   - Schedule check-ins
   - Identify blockers

### Key Discussion Points to Include
- Technical trade-offs (simple vs. powerful)
- Debate about whether to migrate existing saved searches automatically
- Performance concerns with complex filter combinations
- Discussion of A/B testing onboarding flows
- How to measure success
- Customer beta program strategy
- Competitive differentiation beyond just matching Juicebox
- References to specific customer scenarios from interviews

### Tone
- Deep technical discussion
- Collaborative problem-solving
- Balance of PM pushing for user value and engineers discussing implementation complexity
- Realistic timelines
- Excitement about shipping something customers explicitly asked for

---

## Meeting 3: Objective 2 Deep Dive - Data Optimization Strategy

### Meeting Details
- **Duration**: 2 hours (8,000 word transcript)
- **Objective**: Technical scoping and sprint planning for data refresh optimization and vendor integration improvements
- **Attendees**:
  - **Sarah Chen** (PM)
  - **Marcus Rodriguez** (VP of Engineering)
  - **Elena Petrov** (Engineering Lead - Platform)
  - **Raj Patel** (Senior Engineer - Data Infrastructure)

### Meeting Structure
1. **Problem Restatement** (15 min)
   - Data staleness pain point from interviews
   - Competitive landscape (Juicebox quarterly, Fetcher EMEA coverage)
   - Our unique advantages:
     - Multiple data vendor relationships
     - Internal prospect database
     - Higher budget/resources than newer entrants like Juicebox

2. **Current State Analysis** (25 min)
   - **Existing data pipeline**
     - Current refresh cadence (quarterly)
     - Vendor integrations (which ones, SLAs, costs)
     - Internal database size and coverage
     - Data quality metrics
   
   - **Pain points in current system**
     - Refresh process is batch and slow
     - Not optimized for high-value profiles
     - Under-utilizing some vendor APIs
     - Internal database not being updated with new prospect activity

3. **Strategic Opportunities** (40 min)
   - **Opportunity 1: Intelligent Refresh Prioritization**
     - Job changes are the most important signal
     - Prioritize refreshes for:
       - Profiles being actively viewed/searched
       - Recent job changers
       - High-demand talent segments
     - Move from quarterly batch to continuous, priority-based refresh
   
   - **Opportunity 2: Vendor Optimization**
     - Vendor A has better email accuracy
     - Vendor B has better job change detection
     - Vendor C has better EMEA coverage
     - Route refresh requests to optimal vendor based on profile/geography
   
   - **Opportunity 3: Internal Database Enhancement**
     - Track user engagement signals (profile views, outreach, responses)
     - Use these signals to keep frequently-accessed profiles fresh
     - Build proprietary data advantage over time

4. **Technical Architecture Discussion** (45 min)
   - **Priority Queue System**
     - How to score profiles for refresh priority
     - Queue management
     - Rate limiting and cost controls
   
   - **Vendor Orchestration Layer**
     - Abstraction over multiple vendors
     - Routing logic
     - Fallback strategies
     - Cost optimization
   
   - **Real-time vs Near-real-time**
     - What can be real-time job change alerts
     - What stays near-real-time (daily/weekly)
     - Infrastructure requirements
   
   - **Data Quality Monitoring**
     - Metrics and dashboards
     - Alerting on vendor SLA breaches
     - A/B testing vendor performance

5. **Implementation Planning** (25 min)
   - **Phase 1**: Build priority queue system (Week 1-2)
     - Define scoring algorithm
     - Build queue infrastructure
     - Migrate existing batch jobs
   
   - **Phase 2**: Vendor optimization layer (Week 2-4)
     - Abstract vendor interfaces
     - Implement routing logic
     - Add fallback handling
   
   - **Phase 3**: Real-time job change alerts (Week 4-6)
     - Integrate with Vendor B's webhook API
     - Build ingestion pipeline
     - UI for surfacing alerts to recruiters
   
   - **Phase 4**: Internal signal tracking (Week 5-7)
     - Capture user engagement events
     - Feed back into priority scoring
     - Analytics dashboard
   
   - Resource requirements
   - Infrastructure costs
   - Risk mitigation

6. **Business Implications & Success Metrics** (20 min)
   - **Success Metrics**:
     - Reduce email bounce rate from 15% to <8%
     - Job change detection within 7 days (vs. current 45+ days)
     - Increase data freshness score
   
   - **Go-to-market**:
     - Position as competitive differentiator vs. Juicebox
     - Customer communication about improvements
     - Sales talking points
   
   - **Cost considerations**:
     - Variable costs with vendor API calls
     - Need to balance refresh frequency with costs
     - ROI model

7. **Assignment & Next Steps** (10 min)
   - Assign technical leads
   - Define milestones
   - Risk register
   - Schedule weekly check-ins

### Key Discussion Points to Include
- Technical complexity of priority scoring algorithm
- Debate about real-time vs. batch processing trade-offs
- Cost implications of more frequent API calls
- How this creates sustainable competitive advantage
- Discussion of patent/IP considerations
- Infrastructure scaling concerns
- Data privacy and compliance considerations
- Specific customer scenarios where this would have changed outcomes (reference interview examples)
- How to communicate improvements to customers (transparency about data sources)

### Tone
- Strategic and technical depth
- Some healthy tension between ideal solution and pragmatic constraints
- Focus on competitive moat and long-term advantage
- Excitement about leveraging existing vendor relationships
- Realistic about costs and infrastructure investment
- Data-driven approach to prioritization

---

## Output Files to Generate

1. **meeting-1-customer-discovery-debrief.txt** (8,000 words)
2. **meeting-2-personas-deep-dive.txt** (8,000 words)
3. **meeting-3-data-optimization-deep-dive.txt** (8,000 words)

---

## Cross-Meeting Continuity

### Recurring Themes
- Reference specific customers from the 24 interviews by name
- Mention competitive pressure from Juicebox throughout
- Budget/cost consciousness as ongoing constraint
- Balance of retention (existing customers) vs. acquisition (prospects)
- Data-driven decision making culture

### Character Development
- **Sarah (PM)**: Customer-focused, drives decisions with data from interviews, pushes for ambitious goals but realistic
- **Marcus (VP Eng)**: Strategic thinker, concerned with long-term architecture, resource allocation
- **Elena (Platform Lead)**: Deep technical expertise in data infrastructure, pragmatic about complexity
- **David (Product Lead)**: User experience focused, frontend expertise, thinks about adoption and usability
- **Jasmine (Senior FE)**: Detail-oriented, asks good questions about edge cases
- **Alex (Senior BE)**: Search and backend systems expert, performance-minded
- **Raj (Senior DE)**: Data engineering specialist, knows the vendor landscape

### References Across Meetings
- Meeting 1 should set up objectives that are deeply explored in Meetings 2 & 3
- Meetings 2 & 3 should reference decisions/context from Meeting 1
- All meetings should reference specific customer quotes/scenarios from the 24 discovery interviews

---

## Prompt Structure for Each Meeting

See the following three separate prompt files:
- `prompt-meeting-1.md`
- `prompt-meeting-2.md`
- `prompt-meeting-3.md`

