# Meeting Transcript Generation Workflow

## Overview
This document outlines the workflow for generating three internal team meeting transcripts (~8,000 words each) using Cursor background agents.

## Files Created

### Planning Documents
1. **internal-meetings-plan.md** - Overall strategy and structure for all three meetings
2. **prompt-meeting-1.md** - Detailed prompt for Meeting 1 (Customer Discovery Debrief)
3. **prompt-meeting-2.md** - Detailed prompt for Meeting 2 (Personas Deep Dive)
4. **prompt-meeting-3.md** - Detailed prompt for Meeting 3 (Data Optimization Deep Dive)

### Output Files (to be generated)
1. **meeting-1-customer-discovery-debrief.txt** (~8,000 words)
2. **meeting-2-personas-deep-dive.txt** (~8,000 words)
3. **meeting-3-data-optimization-deep-dive.txt** (~8,000 words)

## Meeting Structure

### Meeting 1: Customer Discovery Debrief & Sprint Planning
**Duration**: 90 minutes | **Word Count**: ~8,000 words

**Purpose**: Review findings from 24 customer discovery interviews and identify two major sprint objectives.

**Attendees**:
- Sarah Chen (PM)
- Marcus Rodriguez (VP of Engineering)
- Elena Petrov (Engineering Lead - Platform)
- David Kim (Engineering Lead - Product)

**Key Outcomes**:
- Synthesize customer pain points into clear patterns
- Prioritize and select two objectives for upcoming sprint:
  - **Objective 1**: Revamp onboarding flow + build "Personas" as first-class feature
  - **Objective 2**: Optimize data advantage through vendor integration and intelligent refresh
- Schedule two follow-up deep dive meetings

### Meeting 2: Objective 1 Deep Dive - Personas & Onboarding
**Duration**: 2 hours | **Word Count**: ~8,000 words

**Purpose**: Technical scoping, architecture design, and sprint planning for Personas feature.

**Attendees**:
- Sarah Chen (PM)
- David Kim (Engineering Lead - Product)
- Jasmine Liu (Senior Engineer - Frontend)
- Alex Morgan (Senior Engineer - Backend/Search)

**Key Outcomes**:
- Define UX flows for Personas feature
- Design technical architecture (data models, APIs, frontend components)
- Break down into 4-5 week implementation plan with specific tasks
- Define success metrics and rollout strategy

### Meeting 3: Objective 2 Deep Dive - Data Optimization
**Duration**: 2 hours | **Word Count**: ~8,000 words

**Purpose**: Technical scoping, architecture design, and sprint planning for data refresh optimization.

**Attendees**:
- Sarah Chen (PM)
- Marcus Rodriguez (VP of Engineering)
- Elena Petrov (Engineering Lead - Platform)
- Raj Patel (Senior Engineer - Data Infrastructure)

**Key Outcomes**:
- Analyze current data pipeline and pain points
- Design intelligent priority-based refresh system
- Build vendor orchestration layer for multi-vendor optimization
- Plan real-time job change alert system
- Create ROI model and justify investment
- Break down into 6-7 week implementation plan

## Workflow: Generating with Background Agents

### Option A: Sequential Generation (Recommended)
Generate meetings one at a time to ensure continuity and quality.

#### Step 1: Generate Meeting 1
```
Background Agent Prompt:
Please read the prompt file at:
/Users/mpotteiger/Developer/PM Demo/notes/transcripts/prompt-meeting-1.md

Generate the meeting transcript exactly as specified in the prompt. The output should be approximately 8,000 words and saved to:
/Users/mpotteiger/Developer/PM Demo/notes/transcripts/meeting-1-customer-discovery-debrief.txt

Before generating, please confirm you understand:
1. The meeting structure and attendees
2. The key customer pain points to reference
3. The two objectives that should emerge
4. The tone and dialogue style requirements
```

**Review**: After generation, review the transcript for:
- Word count (~8,000 words)
- References to specific companies from the 24 interviews
- Natural emergence of both objectives
- Realistic technical and business discussion
- Clear action items and next steps

#### Step 2: Generate Meeting 2
```
Background Agent Prompt:
Please read the prompt file at:
/Users/mpotteiger/Developer/PM Demo/notes/transcripts/prompt-meeting-2.md

Also reference Meeting 1 for context:
/Users/mpotteiger/Developer/PM Demo/notes/transcripts/meeting-1-customer-discovery-debrief.txt

Generate the meeting transcript exactly as specified in the prompt. The output should be approximately 8,000 words and saved to:
/Users/mpotteiger/Developer/PM Demo/notes/transcripts/meeting-2-personas-deep-dive.txt

This meeting should reference decisions and context from Meeting 1, particularly the customer pain points around filter/persona management.
```

**Review**: After generation, review for:
- Technical depth and architecture decisions
- Specific task breakdown with owners
- References to Meeting 1 context
- Natural debate about scope and trade-offs

#### Step 3: Generate Meeting 3
```
Background Agent Prompt:
Please read the prompt file at:
/Users/mpotteiger/Developer/PM Demo/notes/transcripts/prompt-meeting-3.md

Also reference Meeting 1 for context:
/Users/mpotteiger/Developer/PM Demo/notes/transcripts/meeting-1-customer-discovery-debrief.txt

Generate the meeting transcript exactly as specified in the prompt. The output should be approximately 8,000 words and saved to:
/Users/mpotteiger/Developer/PM Demo/notes/transcripts/meeting-3-data-optimization-deep-dive.txt

This meeting should reference decisions from Meeting 1, particularly the universal pain point around data staleness and the strategic decision to invest in data as a competitive moat.
```

**Review**: After generation, review for:
- Strategic and technical depth
- Cost/ROI analysis
- Vendor-specific discussions
- References to Meeting 1 context

### Option B: Parallel Generation
If you prefer to generate all three simultaneously (faster but less continuity):

```
Background Agent Prompt (for each meeting):
Please read the prompt file and generate the specified meeting transcript independently. Save each to the designated output file.

Meeting 1: prompt-meeting-1.md → meeting-1-customer-discovery-debrief.txt
Meeting 2: prompt-meeting-2.md → meeting-2-personas-deep-dive.txt
Meeting 3: prompt-meeting-3.md → meeting-3-data-optimization-deep-dive.txt
```

Note: Parallel generation may result in less cross-meeting continuity. You may need to edit transcripts afterwards to add references between meetings.

## Quality Checklist

### For Each Transcript
- [ ] Word count is approximately 8,000 words (±200 acceptable)
- [ ] Follows the specified meeting structure
- [ ] All specified attendees are present and have distinct voices
- [ ] Dialogue feels natural with overlaps, interruptions, and realistic conversation
- [ ] Technical discussions are detailed and realistic
- [ ] References specific companies and examples from customer discovery
- [ ] Includes [bracketed stage directions] for actions like screen sharing
- [ ] Has clear action items and next steps at the end
- [ ] Tone matches the specified character voices

### For Meeting 1 Specifically
- [ ] References at least 8-10 companies from the 24 interviews by name
- [ ] Both objectives emerge naturally through discussion, not predetermined
- [ ] Shows realistic debate about prioritization
- [ ] Sets up the two follow-up meetings effectively

### For Meeting 2 Specifically
- [ ] Includes detailed data models and API designs
- [ ] Breaks down into concrete tasks with time estimates and owners
- [ ] Shows realistic debate about MVP vs. ambitious scope
- [ ] References customer examples from discovery

### For Meeting 3 Specifically
- [ ] Includes cost analysis and ROI model
- [ ] Discusses specific vendors and their strengths
- [ ] Shows architectural decisions for priority queue and vendor orchestration
- [ ] Emphasizes strategic competitive advantage

## Cross-Meeting Continuity Elements

To ensure the three meetings feel connected:

1. **References**: Meetings 2 and 3 should reference decisions made in Meeting 1
2. **Character consistency**: Each character should maintain their voice across all meetings
3. **Customer examples**: Use the same customer names and scenarios consistently
4. **Timeline**: Meeting 1 happens first, then Meetings 2 and 3 happen in the following week
5. **Themes**: Competitive pressure from Juicebox, budget consciousness, customer-driven decisions should appear throughout

## Post-Generation Editing

After generating all three transcripts, consider:

1. **Add cross-references**: Ensure Meeting 2 and 3 explicitly reference Meeting 1 decisions
2. **Character voice polish**: Ensure each person sounds consistent across meetings
3. **Technical consistency**: Ensure technical details align across meetings (e.g., timeline estimates)
4. **Remove repetition**: If same examples used multiple times, vary the wording
5. **Add personality**: Inject small moments of humor, team dynamics, personality

## Usage in Demo Environment

These transcripts can be used to:
- Show realistic product planning processes
- Demonstrate how customer discovery informs product decisions
- Provide context for sprint planning and technical scoping
- Train new PMs or engineers on how these meetings should run
- Create realistic demo data for project management or collaboration tools

## Next Steps

After generating all three transcripts:
1. Create a summary document highlighting key decisions from each meeting
2. Extract action items and create a sprint backlog
3. Consider generating follow-up artifacts:
   - Technical design documents
   - Product requirement documents (PRDs)
   - Engineering task breakdown in Jira/Linear
   - User research synthesis documents
   - Go-to-market plans

## Notes

- Each prompt is self-contained and provides all necessary context
- The prompts are designed to work with Claude (Sonnet or Opus) via background agents
- Total word count across all three meetings: ~24,000 words
- Estimated generation time: 10-15 minutes per meeting (sequential)
- These transcripts build on the 24 customer discovery interviews from the earlier generation

---

**Created**: October 2025
**Purpose**: Internal demo data generation for PM workflows
**Company**: Jewel (fictional recruiting sourcing platform)

