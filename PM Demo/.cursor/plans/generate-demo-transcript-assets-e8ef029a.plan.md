<!-- e8ef029a-81da-40c8-ab10-3814b0aeb046 5cf6a785-b50c-4a55-8839-266a21c13f22 -->
# Generate Demo Transcript Assets

## Overview
Create the organizational files needed to generate 25 interview transcripts for Jewel's AI sourcing demo, including company profiles, clustered to-do list, and background agent prompts.

## Files to Create

### 1. Master Company List (`notes/transcripts/company-master-list.md`)
- 30 realistic companies (mix of Fortune 500 and large private companies)
- Skewed towards tech, with some financial services companies
- For each company include:
  - Company name and industry
  - Current ATS/sourcing tools (Greenhouse, Workday, Taleo, Juicebox, Fetcher)
  - Jewel relationship status (customer, prospect, or partial customer)
  - Suggested interview attendees (titles and names)
  - Tech stack details where relevant

### 2. Transcript To-Do List (`notes/transcripts/transcript-todo-list.md`)
- 25 transcripts organized into 5-6 clusters of 3-5 transcripts each
- Each transcript entry includes:
  - Company selection from master list
  - Interview attendees
  - Primary themes to cover (ATS pain points, sourcing tools, functionality feedback)
  - Key learnings to surface (especially around filter sets/persona pain point)
  - Word count target: 4,000 words per transcript

### 3. Background Agent Prompts (`notes/transcripts/agent-prompts.md`)
- Template prompt for generating realistic interview transcripts
- Instructions to maintain consistency across transcripts
- Guidance on tone, realism, and incorporating the themes from demo-transcripts.md
- Separate prompts for each cluster of 3-5 transcripts

## Distribution Strategy
- Ensure mix across ATS systems (Greenhouse, Workday, Taleo)
- Include various Jewel relationship types
- Balance between different attendee seniority levels
- Cover all major themes and pain points from the requirements
- Every transcript must support at least one learning around saved filter sets/persona challenges


### To-dos

- [ ] Create master-list of 30 companies with attendees, tech stacks, and ATS details
- [ ] Create clustered to-do list for 25 transcripts with themes and assignments
- [ ] Create background agent prompts for each cluster of transcripts