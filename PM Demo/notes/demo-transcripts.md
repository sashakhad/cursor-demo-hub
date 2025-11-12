# PM Demo Data

# 

# Overall Goal

I need help generating data to help support a demo environment.

I will be doing this by running Cursor background agents. I need your help coming up with a script and prompts to support that workflow. I’d like to generate a to-do list of 25 transcripts to generate based on the instructions below. We should scope prompts for background agent to do these in clusters of 3-5 transcripts at a time.

# Mock Demo Company

Established leader among tech companies with tools for talent CRM, ATS, and sourcing — evaluating their AI sourcing module against other competitors. If they need a name, call them Jewel.

# Files to Generate: Transcripts as txt files

In total, there should be 4,000 words per interview. 

Before generating a transcript, the Claude project should ask to confirm the company and stakeholders
We should build a master list of 30 companies that we use and update it once we’ve generated articles for those companies
The master list of companies should include suggested attendees and tech stack details

## Companies being interviewed

- Most of these should be customers that are using other ATS but still paying for Jewel to do sourcing with a least a few of their recruiters
- Some of these are exisiting customers that are using Jewel for other AI features such as reviewing resumes or building dashboards or other data visualizations
- Some of these are prospects that are currently not using any Jewel offerings
- skewed heavily towards tech but also including some more traditional companies in financial services.

## Attendees

Interviews should include Execs, VPs or Directors or Head of Talent, Recruiting Operation Leaders, and/or recruiters from companies in  Fortune 500 companies and large private companies, 

## Themes for Transcripts

### Exisiting ATS Systems

**On Prospects & Customers using Greenhouse**

offers AI sourcing. That UX and overall reliability of contact info isn’t best in class but good enough and significantly cheaper
Users complains that prospect data is stale and not updated based on recent job changes
High email bounce rate
Execs appreciate the bundle pricing. Each recruiter gets 200 sourcing credits per month, which covers use case for companies with strong inbound and less of a focus on sourcing

**On Prospects & Customers using Workday**

most enterprises using workday have a very old school sourcing strategy - leaning into LinkedIn recruiter and manual touchpoints. Workday has some offerings for ai sourcing but they are not good
Dedicated sourcers don’t love sourcing on LinkedIn but all they know
Some experimentation with new modern tools like juicebox bc they have a free tier
Leadership doesn’t find sourcing as mission critical if they have healthy inbound. Niche industries like mechanical engineering have high need for sourcing but tech companies are getting a high volume of inbound.

**On Prospects & Customers using Taleo or other enterprise ATSs**

Mostly the same as workday, but no meaningful ai offerings.

## Dedicated Sourcing Tools

Most recruiters that have tried it but hooked on their free tier

**On Prospects & Customers using Juicebox**

Juicebox has a free tier, so many dedicated sourcers or recruiters using LinkedIn only have found Juicebox as a self-serve alternative. A few have even laid down a credit card to use the paid tier.
Recruiters love the onboarding experience - doesn’t require a job description as a starting point and have clean filtering for experience and tech stack and titles, like ours
contact data staleness is still an issue with quarterly profile refresh

Juicebox has saved filters that help recruiters apply saved search profiles - recruiters really love this

Using Fetcher - popular in the EMEA market. They have better data coverage. Overall UI/UX is solid but not quite on the level of Juicebox

## On functionality

**Where we win against established ATSs:**
Recruiters love our UX. Using the tool is way more intuitive and a massive QoL upgrade compared to Greenhouse and Workday
The ai intake form is intuitive and filtering for folks with experience at certain companies, or with certain types of experience (ie - experience working on backend infra for consumer app with 10M+ DAUs) or backgrounds (management consulting, private equity, FANG, YC startups, etc.)

**Against dedicated sourcing tools:**
data staleness is an issue for Jewel too with quarterly profile refresh, from some pockets of talent Juicebox has better profile coverage. Fetcher strong coverage in EMEA
Our self-serve analytics and CRM features integrate nicely and our loved by power users but we’re much more expensive than other options.

Where we lose:
We’re expensive - HR and TA tooling is not always prioritized and budgets are limited

## Where is there need:

I want data to support at least one of these learnings across every single transcript.

Many users find it hard to save filter sets. Examples to show trend emerging that recruiters across various types of roles have different collection of filters that they like to apply that represent specific personas (ie - tech company is hiring technical account management roles to help with implementation of ai products - they want to hire former engineers that went on to transition to GTM, seperately they like to hire GTM folks that have experience working with technical stakeholders. these two personas have different career archs and credentials. when you try to build this into a single search it gets complicated which filters to apply. This is but one example but can be applied to a variety of roles across all kinds of industry (we need lots of proof points of this)

Stale data is a huge pain point across all tools, which is why many recruiters still just stay on LinkedIn for simplicity.