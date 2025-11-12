# Prompt: Meeting 2 - Objective 1 Deep Dive: Personas & Onboarding Revamp

## Task
Generate an 8,000-word transcript of a technical planning meeting where the product and engineering team does deep technical scoping for the "Personas & Onboarding" initiative.

## Context
This is a follow-up to Meeting 1 where the team identified two sprint objectives based on customer discovery findings. This meeting focuses on **Objective 1: Revamp onboarding flow and make "Personas" a first-class citizen for saved filter sets**.

### Background on the Initiative

**The Problem** (from customer discovery):
- Recruiters struggle to manage multiple filter combinations for different candidate personas
- Current workaround: manually rebuilding searches or keeping notes elsewhere
- Examples from interviews:
  - Netflix recruiter needs separate searches for: content delivery engineers, recommendation algorithm engineers, streaming engineers, production technology engineers
  - Stripe recruiter needs different filters for: backend engineers with fintech experience, platform engineers with compliance backgrounds, risk/fraud engineers
  - Jane Street needs to search for: OCaml systems engineers, quantitative researchers with finance PhDs, trading platform engineers
- Juicebox has a basic "saved filters" feature that customers mentioned positively
- This pattern emerged in 18+ of the 24 customer interviews

**The Opportunity**:
- Go beyond basic "saved filters" and make Personas a core product concept
- Integrate into onboarding to train users early
- Provide template personas for common roles
- Enable team sharing and organization-level personas
- Differentiate from Juicebox's simpler implementation

**Success Metrics** (defined in Meeting 1):
- 70%+ of active users create and use at least 2 personas within first 30 days
- Reduce time spent rebuilding searches (measured by repeat similar searches)
- Increase feature adoption in onboarding
- Customer satisfaction scores improve on "ease of managing multiple searches"

## Meeting Details

### Attendees

1. **Sarah Chen** (Product Manager)
   - Owns the feature spec and user experience
   - Brings customer perspective
   - Drives toward decisions and timelines
   - Balances scope with MVP approach

2. **David Kim** (Engineering Lead - Product Engineering)
   - Leading the implementation
   - Frontend and full-stack expertise
   - Thinks deeply about UX implementation
   - Questions edge cases and complexity

3. **Jasmine Liu** (Senior Engineer - Frontend)
   - Will build the UI components
   - Detail-oriented, thinks about interaction design
   - Asks practical questions about user flows
   - Experienced with their React/TypeScript stack

4. **Alex Morgan** (Senior Engineer - Backend/Search)
   - Owns the search infrastructure
   - Concerned with performance and data modeling
   - Pragmatic about API design
   - Needs to integrate with existing search architecture

### Meeting Structure

**Part 1: Problem Restatement & Goals (10 minutes / ~1,000 words)**
- Sarah recaps the customer pain points with specific examples
- Review Juicebox's saved filters feature as baseline
- Define what makes Jewel's "Personas" more powerful
- Establish success metrics and timeline (5-week target)

**Part 2: User Experience Design Discussion (30 minutes / ~2,500 words)**
- Walk through proposed user flows
  - **Onboarding flow redesign**:
    - Current: Generic walkthrough of search interface
    - Proposed: Guided experience creating first persona based on current req
    - Show value immediately
    - Template personas for common roles (SWE, Product Manager, Designer, etc.)
  
  - **Persona creation and management**:
    - Creating a new persona (naming, description, filters)
    - Organizing personas (folders? tags? favorites?)
    - Editing existing personas
    - Duplicating personas as starting points
  
  - **Using personas in search**:
    - Persona selector in search interface
    - Quick-switch between personas
    - Visual indication of active persona
    - "Modify from persona" workflow
  
  - **Team collaboration**:
    - Sharing personas with team members
    - Organization-level template personas
    - Permissions (who can edit shared personas?)

- Discussion and debate:
  - David and Jasmine question complexity vs. MVP
  - Sarah pushes for ambitious v1 vs. engineering wanting to start simpler
  - Alex raises concerns about migration from existing saved searches
  - Team debates whether to include team sharing in v1 or v2

**Part 3: Technical Architecture (40 minutes / ~3,000 words)**

- **Data Model Design**:
  - Persona schema (name, description, filters, metadata)
  - Relationship to existing saved searches
  - User vs. team vs. organization level personas
  - Migration strategy for existing saved searches
  - Alex leads this discussion with Sarah asking clarifying questions

- **API Design**:
  - RESTful endpoints needed:
    - `GET /api/personas` - List user's personas
    - `POST /api/personas` - Create new persona
    - `PUT /api/personas/:id` - Update persona
    - `DELETE /api/personas/:id` - Delete persona
    - `POST /api/personas/:id/duplicate` - Duplicate persona
    - `POST /api/personas/:id/share` - Share with team
  - Backwards compatibility with existing saved search API
  - Performance considerations (caching, pagination)
  - Alex drives this, Jasmine asks about frontend needs

- **Search Engine Integration**:
  - How persona filters map to search queries
  - Handling complex filter combinations
  - Performance implications of frequent persona switches
  - Caching strategy
  - Edge cases (what if filters become invalid?)

- **Frontend Implementation**:
  - Component architecture:
    - PersonaSelector component
    - PersonaManager (full CRUD interface)
    - PersonaCreationWizard (for onboarding)
    - PersonaTemplateGallery
  - State management (Redux? Context? Zustand?)
  - Real-time updates if personas shared
  - Optimistic UI updates
  - Error handling
  - Jasmine leads this with David advising

- **Technical Debates**:
  - Should personas store actual filter values or references to filter definitions?
  - How to handle schema changes to filters in the future?
  - Client-side vs server-side validation of persona filters
  - How complex can a persona be (max number of filters)?

**Part 4: Implementation Planning & Task Breakdown (30 minutes / ~2,200 words)**

- **Phase 1: Core Persona CRUD + Basic UI (Week 1-2)**:
  - Backend tasks:
    - [ ] Design and implement persona data model (2 days) - Alex
    - [ ] Build personas API endpoints (3 days) - Alex
    - [ ] Write API tests (1 day) - Alex
    - [ ] Migration script for existing saved searches (2 days) - Alex
  
  - Frontend tasks:
    - [ ] PersonaManager UI component (3 days) - Jasmine
    - [ ] Create/Edit persona forms (2 days) - Jasmine
    - [ ] Integration with state management (2 days) - Jasmine
    - [ ] Unit tests (1 day) - Jasmine

- **Phase 2: Search Integration (Week 2-3)**:
  - [ ] PersonaSelector component in search (2 days) - Jasmine
  - [ ] Apply persona to active search (3 days) - Alex + Jasmine
  - [ ] Quick-switch between personas (2 days) - Jasmine
  - [ ] Search performance testing (2 days) - Alex
  - [ ] E2E tests for persona + search flows (2 days) - Jasmine

- **Phase 3: Onboarding Integration (Week 3-4)**:
  - [ ] Design template personas (1 day) - Sarah + David
  - [ ] PersonaCreationWizard component (3 days) - Jasmine
  - [ ] Onboarding flow redesign (3 days) - Jasmine + David
  - [ ] Template persona seeding (1 day) - Alex
  - [ ] Analytics instrumentation (1 day) - Alex
  - [ ] Onboarding A/B test setup (1 day) - Sarah + Alex

- **Phase 4: Team Sharing & Polish (Week 4-5)**:
  - *Debate: Do we include this in v1 or ship faster and do v2?*
  - Decision: Move to v1.1 (ship week 6-7)
  - [ ] Team sharing API (2 days)
  - [ ] Permissions model (2 days)
  - [ ] Shared persona UI (3 days)
  
  - V1 Polish:
  - [ ] Analytics dashboard for persona usage (2 days) - Sarah + Alex
  - [ ] Documentation (1 day) - Sarah
  - [ ] Customer beta communication (1 day) - Sarah

- **Dependencies & Risks**:
  - Migration of existing saved searches could be tricky
  - Performance with large numbers of personas per user
  - Complexity of persona selector UI (too many options?)
  - Onboarding A/B test framework may need setup time
  - Need design support for template personas

- **Rollout Strategy**:
  - Internal dogfooding (Week 3)
  - Beta customers (Week 4-5) - invite 15-20 customers who mentioned this pain point
  - Phased rollout to all users (Week 6)
  - Focus on customers from discovery who mentioned saved filter needs

**Part 5: Business Implications & Success Tracking (15 minutes / ~1,000 words)**

- **Go-to-Market**:
  - How to message this to customers (emphasis on productivity, not just feature parity)
  - Sales enablement (competitive positioning vs. Juicebox)
  - Customer success: reaching out to beta customers from interviews
  - Documentation and training materials

- **Success Metrics** (how we'll measure):
  - Adoption rate (% of users with 2+ personas in first 30 days)
  - Engagement (daily active personas per user)
  - Reduction in repeated similar searches
  - NPS/satisfaction scores
  - Customer feedback from beta program

- **Revenue/Retention Implications**:
  - Addresses pain point mentioned by prospects considering Juicebox
  - Could help close deals where prospects cited Juicebox's saved filters
  - Retention play for existing customers who've built workarounds

**Part 6: Assignments & Next Steps (10 minutes / ~300 words)**
- Confirm owners for each task
- Define "done" criteria
- Schedule daily standups for this sprint
- Identify immediate blockers (need design resources?)
- When do we reconvene for deeper technical design sessions?

## Writing Guidelines

### Dialogue Style
- **Deep technical discussion** with realistic engineering debate
- More detailed and technical than Meeting 1
- Include references to specific technologies (React, TypeScript, PostgreSQL, Redis, etc.)
- Show whiteboarding/diagramming ("Let me draw this out")
- Include moments where people pull up code or existing features
- Engineers ask detailed clarifying questions
- Sarah translates between user needs and technical implementation

### Formatting
```
[Meeting begins. David has a whiteboard pulled up on screen share]

Sarah: Alright, thanks everyone. We've got two hours to really nail down the technical approach for Personas. I know we're all excited about this one—customers have been asking for it loud and clear.

David: Yeah, this one feels good. Real user pain point.

Alex: Before we dive in, I want to make sure we're all aligned on scope. Are we talking about just recreating Juicebox's saved filters, or something more ambitious?

Sarah: More ambitious. Let me show you what I'm thinking...

[Continue with natural dialogue]
```

### Realism Elements
- Reference their actual tech stack naturally (React, TypeScript, Node.js, PostgreSQL, Redis, etc.)
- Include discussion of specific components and APIs
- Show people sketching out data models or API contracts
- Include realistic engineering concerns (performance, scalability, maintenance)
- Have people reference existing code or systems ("Our current saved searches use...")
- Show collaborative problem-solving with back-and-forth
- Include some technical jargon appropriate for a senior engineering team
- Show people taking notes or marking action items

### Character Voice Consistency

**Sarah (PM)**
- Brings user perspective constantly
- References specific customer quotes from interviews
- Pushes for scope and ambition
- Asks clarifying technical questions
- Thinks about go-to-market and metrics
- Uses phrases like "From a user perspective..." or "The customer told us..."

**David (Engineering Lead)**
- Balances Sarah's ambition with pragmatism
- Thinks about implementation complexity
- Advocates for MVP approach when appropriate
- Strong UX instincts
- Guides technical discussion
- Uses phrases like "We need to think about..." or "The challenge here is..."

**Jasmine (Senior Frontend Engineer)**
- Detail-oriented, thinks about edge cases
- Asks specific questions about user flows
- Experienced with their component architecture
- Practical about what's achievable
- Thinks about state management and performance
- Uses phrases like "How do we handle..." or "What happens when..."

**Alex (Senior Backend Engineer)**
- Data modeling and API design expert
- Concerned with performance and scalability
- Pragmatic about database schema
- Thinks about backwards compatibility
- Security and data integrity focused
- Uses phrases like "The data model would be..." or "From a performance standpoint..."

### Technical Depth
Include realistic technical discussion:
- Database schema design (table structures, relationships, indexes)
- API contract design (endpoints, request/response formats)
- Frontend component architecture
- State management patterns
- Performance considerations (caching, lazy loading, pagination)
- Migration strategies
- Testing approaches
- Error handling

### Tone
- Collaborative and energetic
- Deep technical focus but accessible
- Healthy debate about trade-offs
- Excitement about solving customer pain point
- Pragmatism about timeline and scope
- Team building on each other's ideas
- Some humor and personality

## Specific Requirements

1. **Reference specific customer examples** from the discovery interviews (Netflix, Stripe, Jane Street, etc.)
2. **Include detailed technical discussion** of data models, APIs, and component architecture
3. **Show realistic debate** about MVP vs. ambitious v1
4. **Break down into concrete tasks** with time estimates and owners
5. **Address migration** of existing saved searches
6. **Discuss rollout strategy** including beta customers
7. **Define success metrics** for the feature
8. **Show the decision to move team sharing to v1.1** to ship faster

## Success Criteria
- 8,000 words (±200 words acceptable)
- Feels like a real technical planning meeting
- Detailed enough that an engineer could start implementing
- Includes specific technical architecture decisions
- Shows realistic debate and trade-offs
- Clear task breakdown with owners and timelines
- References customer pain points from discovery
- Sets team up for execution

## Output Format
Plain text file with clear speaker labels and natural dialogue formatting. Include [bracketed stage directions] for actions like screen sharing, whiteboarding, etc.

