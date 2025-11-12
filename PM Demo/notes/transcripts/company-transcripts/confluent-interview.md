# Confluent Interview Transcript

**Date**: September 22, 2025
**Duration**: 55 minutes
**Attendees**: 
- Robert Martinez (VP of Global Recruiting)
- Hannah Lee (Senior Director of Technical Recruiting)
- Jordan Mitchell (Recruiting Operations Manager)
**Interviewer**: David Chen (Product Manager, Jewel)

---

**Interviewer**: Thanks so much for making time today. I know you all are busy, so I really appreciate it. Maybe we can start with quick intros? Robert?

**Robert Martinez**: Sure, thanks for having us. I'm Robert Martinez, VP of Global Recruiting at Confluent. I've been here for about four years now, actually came on board when we were much smaller - maybe 600 employees. We're at about 3,000 now, so it's been quite a growth journey. I oversee all of recruiting globally - we have teams in North America, Europe, and APAC.

**Hannah Lee**: I'm Hannah Lee, Senior Director of Technical Recruiting. I've been at Confluent for two and a half years, came from Docker before this. I manage a team of about 15 technical recruiters who focus on engineering, product, design, and data roles. We're probably filling 40-50 technical roles per quarter right now.

**Jordan Mitchell**: Hey, I'm Jordan Mitchell, Recruiting Operations Manager. I'm actually newer to Confluent - just hit my one-year anniversary. I came from Databricks, so I'm familiar with the data infrastructure space. I handle all our recruiting systems, data, analytics, vendor management, that kind of thing. Making sure our recruiting engine runs smoothly from a process and tooling perspective.

**Interviewer**: Great. So Jordan, since you own the tech stack - what are you all using today?

**Jordan Mitchell**: We're on Greenhouse for our ATS, have been for years. Love Greenhouse overall. For sourcing, we're full Jewel customers - we use the sourcing module, the CRM features pretty heavily, and I live in the analytics dashboards. That's actually something I want to talk about because we get so much value from the reporting side.

**Hannah Lee**: Yeah, we switched to Jewel from... what was it, like 18 months ago?

**Robert Martinez**: About that, yeah. We were struggling with Greenhouse's built-in sourcing. It just wasn't powerful enough for the kinds of roles we were hiring for.

**Interviewer**: What was missing?

**Hannah Lee**: The filtering was too basic. Like, we hire for very specialized data infrastructure roles, and Greenhouse's sourcing couldn't help us differentiate between different types of engineers. We were getting way too many irrelevant profiles.

**Robert Martinez**: And there was no CRM functionality, which we needed because we do a lot of relationship building with senior engineers and leadership roles. We can't just send cold emails and hope for the best - we need to nurture relationships over time.

**Jordan Mitchell**: From an ops perspective, Greenhouse also didn't give us the analytics we needed. Like, I couldn't easily see which sourcing channels were most effective, what our response rates were, how our pipeline was trending. Jewel's analytics have been a game-changer for that.

**Interviewer**: That's great to hear. So walk me through how you use Jewel day-to-day. Hannah, maybe from a recruiter's perspective?

**Hannah Lee**: Sure. So let's say I'm opening a new role for a Kafka engineer - which, you know, makes sense given we're Confluent. First thing I do is meet with the hiring manager to really understand what kind of Kafka engineer they need, because that can mean a lot of different things.

**Interviewer**: How so?

**Hannah Lee**: Okay, so Kafka is this distributed streaming platform, right? But the types of engineers who work on different parts of it are really different. You've got Kafka core engineers who are working on the actual Kafka codebase - they need deep Java skills, distributed systems expertise, they probably need to understand consensus algorithms, replication, all that low-level stuff.

**Robert Martinez**: These are people who might have worked at LinkedIn back in the day, or at Confluent already, or maybe at companies that run Kafka at massive scale.

**Hannah Lee**: Exactly. Then you've got stream processing engineers. These folks are more focused on Kafka Streams or ksqlDB - they're building applications on top of Kafka, thinking about real-time data processing, stateful stream processing, windowing, joins. It's a different skill set. More about application development and stream processing patterns than the core infrastructure.

**Interviewer**: Interesting. What else?

**Hannah Lee**: Data integration engineers are another persona. These are people working on Kafka Connect, building connectors, thinking about how to move data between Kafka and other systems - databases, data warehouses, SaaS applications. They need to understand both Kafka and a wide range of data systems.

**Jordan Mitchell**: And then cloud infrastructure engineers who are focused on running Kafka in the cloud. Like, our managed Confluent Cloud service. These folks need strong Kubernetes skills, cloud platform expertise - AWS, GCP, Azure - infrastructure as code, monitoring and observability for distributed systems.

**Hannah Lee**: Right. So when a hiring manager says "we need a Kafka engineer," step one is figuring out which of these personas we're actually hiring for, because the sourcing strategy is completely different for each one.

**Interviewer**: And how do you handle that in your searches?

**Hannah Lee**: I maintain separate saved searches for each persona. So I've got one search for Kafka core engineers where I'm filtering for skills like Java, distributed systems, Apache Kafka internals, and I'm looking at people from companies that run Kafka at scale - LinkedIn, Uber, Netflix, Airbnb, that tier of company.

**Robert Martinez**: Company filters are really important for these roles. Someone who's worked at a company with, you know, 50 Kafka messages per second versus someone who's dealt with millions of messages per second - those are very different levels of expertise.

**Hannah Lee**: For stream processing engineers, I'm filtering more for Kafka Streams, ksqlDB, Apache Flink, stream processing, real-time data. And the company filter is different - I'm looking more at companies doing real-time analytics or event-driven architectures.

**Jordan Mitchell**: Data integration is its own search - Kafka Connect, ETL, data pipelines, integration platforms. And cloud infrastructure folks are filtered for Kubernetes, cloud platforms, SRE skills, infrastructure as code.

**Interviewer**: So you're maintaining four different searches for what's essentially variations of "Kafka engineer"?

**Hannah Lee**: At least four, yeah. Sometimes more depending on the specific role. And that's just for Kafka roles. I recruit for a bunch of other positions too.

**Interviewer**: Like what?

**Hannah Lee**: Backend engineers - and again, there are sub-personas there. We need people who are strong with distributed systems, people who are more API and services focused, people with data-heavy backend experience. Product managers - we need technical PMs who can speak with engineering, we need growth-oriented PMs, we need enterprise PMs who understand customer needs.

**Robert Martinez**: Developer relations engineers are interesting because they need this combination of deep technical skills and communication abilities. Like, they need to be able to actually build things with Kafka, but also create content, speak at conferences, engage with the developer community.

**Hannah Lee**: Yeah, DevRel is hard to source for because the skill combination is rare. I'm looking for people with Kafka or streaming experience, but also content creation, public speaking, community building. It's not enough to be technically strong - they need that outward-facing, educational mindset.

**Interviewer**: So how many saved searches do you typically maintain?

**Hannah Lee**: Oh gosh, probably 30 to 40 for the roles I regularly recruit for. I've got them organized in folders - one folder for Kafka roles with all the variations, one for backend engineering, one for product, one for DevRel and customer-facing technical roles.

**Jordan Mitchell**: This is pretty standard across the recruiting team. I'd estimate each of our technical recruiters has 25 to 50 saved searches.

**Interviewer**: How do you keep them organized and up to date?

**Hannah Lee**: Naming conventions are really important. I'll name a search like "Kafka Core - Distributed Systems - Senior" or "Stream Processing - Real-time - Mid-level." So it's persona, key skills, seniority level.

**Robert Martinez**: And we do reviews periodically. Like, every quarter Hannah and I will go through the searches, update company lists based on what we're learning, refine keywords, make sure they're still relevant.

**Hannah Lee**: Yeah, the tech landscape changes fast. A year ago, ksqlDB wasn't as prominent, now it's a key skill for stream processing roles. We have to keep updating the search criteria.

**Interviewer**: What about new recruiters joining the team? How do they learn which searches to use?

**Jordan Mitchell**: That's actually a pain point. Right now it's very manual - they shadow experienced recruiters, we walk them through the search library, they gradually build up their own saved searches. There's a lot of institutional knowledge that's hard to transfer.

**Hannah Lee**: I've tried to document our persona definitions and search strategies, but it's incomplete. And even with documentation, new recruiters need hands-on experience to really understand the nuances.

**Robert Martinez**: It would be great if we could have shared search templates that new recruiters could use out of the box. Like, "Here's the standard Kafka core engineer search, you can use this as a starting point and customize it for your specific role."

**Interviewer**: That makes sense. Let's talk about the CRM side. You mentioned that's been valuable for relationship building?

**Robert Martinez**: Yeah, huge. Especially for senior roles and niche skills, we're often talking to people who aren't actively looking but might be open in 6 months or a year. The CRM lets us track those relationships over time.

**Hannah Lee**: I'll give you a specific example. I was recruiting for a Staff engineer for our ksqlDB team - this is a really specialized role. There's maybe a few hundred people in the world who have deep ksqlDB experience. So I identified about 20 people who fit the profile, and I reached out to all of them knowing that most wouldn't be ready to move immediately.

**Interviewer**: And how'd you track that?

**Hannah Lee**: I added them all to the CRM, tagged them with the skills and level, made notes about our conversations. Some were interested but timing was off - I set reminders to follow up in 3 months or 6 months. A couple were happy where they were but knew other people who might be interested - I captured those referrals in the CRM too.

**Robert Martinez**: This is the kind of strategic sourcing we need to do for senior and niche roles. It's not about blasting out emails to 100 people and hoping someone responds. It's about identifying the right 20 people and building genuine relationships with them.

**Jordan Mitchell**: From an ops perspective, the CRM integration with the sourcing tool is really valuable because it means recruiters don't have to toggle between systems. They can source, reach out, track relationships, and manage their pipeline all in one place.

**Interviewer**: How does that integration work in practice?

**Jordan Mitchell**: So if a recruiter finds someone through a search, they can immediately add them to the CRM with one click. They can see if that person is already in our CRM from a previous interaction - which prevents duplicate outreach, always awkward. And they can see engagement history and notes from other recruiters.

**Hannah Lee**: Yeah, we have pretty good visibility into who's already been contacted for what roles. It's not perfect - sometimes things slip through - but it's way better than before when we were using spreadsheets to track relationships.

**Interviewer**: What would make it better?

**Hannah Lee**: I'd love if CRM status showed up more prominently in search results. Like, if I run a search and someone I sourced 6 months ago shows up, I want to immediately see "You added this person to CRM, last touch point was March, they were interested but timing was off."

**Jordan Mitchell**: Better duplicate detection across the team would be great too. Like, if anyone on the recruiting team has reached out to someone in the last 90 days, flag that before I send them another email.

**Robert Martinez**: And using CRM data to inform future searches would be powerful. Like, if I've had success with candidates from certain companies or with certain skill combinations, the tool could learn from that and surface similar profiles.

**Interviewer**: That's interesting. More of a machine learning approach?

**Jordan Mitchell**: Potentially. I think there's a balance though. We want the tool to be smart and help us, but we also need control and transparency. I don't want a black box that makes decisions I can't interrogate.

**Hannah Lee**: Yeah, I've tried AI-powered sourcing tools before and they often miss the nuances. Like, an AI might think "distributed systems engineer" is similar to "systems engineer," but those are actually very different roles. I need to be able to specify exactly what I'm looking for.

**Interviewer**: That makes sense. Let's talk about data quality. How has that been with Jewel?

**Hannah Lee**: Pretty good overall. We see bounce rates of maybe 10-12% on emails, which is reasonable. It varies by geography though - US and UK data is really solid, other regions are more hit or miss.

**Robert Martinez**: We recruit globally, so data coverage everywhere is important to us. Europe is generally good, Asia-Pacific can be challenging, especially outside of the major tech hubs.

**Jordan Mitchell**: I run reports on this quarterly. Our email deliverability rate is around 88%, which I think is industry standard. But we'd always love to see that higher.

**Interviewer**: What about data freshness? How often is it updated?

**Jordan Mitchell**: I think it's quarterly refreshes? We definitely see some staleness. Like, we'll source someone and by the time we reach out, they've changed jobs. That's frustrating.

**Hannah Lee**: Especially in the data infrastructure space where there's so much movement. People are changing jobs every 18 months to 2 years on average. If the data is even 6 months old, a meaningful percentage of our sourced candidates will have moved.

**Interviewer**: How do you work around that?

**Hannah Lee**: We try to move fast. When I pull a list of candidates, I aim to reach out within a few days, not let it sit for weeks. And we use LinkedIn to verify employment before investing too much time.

**Robert Martinez**: More frequent data refreshes would be valuable. Even monthly instead of quarterly would help.

**Interviewer**: Let's talk about the analytics side, since you mentioned that's been really valuable. Jordan, what are you tracking?

**Jordan Mitchell**: Oh man, so much. I look at sourcing metrics like how many candidates each recruiter is sourcing per role, response rates to outreach, conversion rates from sourced candidate to phone screen to interview to offer. I track source channel effectiveness - what percentage of hires come from sourcing versus inbound versus referrals.

**Interviewer**: What are those percentages typically?

**Jordan Mitchell**: Sourcing is about 45% of our engineering hires, which is high but makes sense given how specialized our roles are. Inbound is maybe 30%, referrals 20%, agencies 5%. For non-technical roles, inbound is higher.

**Interviewer**: And you're getting all this from Jewel's analytics?

**Jordan Mitchell**: Jewel plus Greenhouse. Jewel gives me great data on the sourcing side - outreach volume, response rates, which searches are most effective. Greenhouse gives me the applicant tracking data. I pull from both and combine them in my reporting.

**Hannah Lee**: Jordan creates these awesome weekly dashboards that show how each recruiter's pipeline is progressing, where candidates are getting stuck, what our velocity looks like.

**Jordan Mitchell**: Yeah, I'm a big believer in data-driven recruiting. We should be measuring everything and using that data to optimize our process.

**Robert Martinez**: It's been really helpful for identifying bottlenecks and coaching opportunities. Like, if a recruiter's response rates are low, we can dig into their outreach messages and help them improve. If conversion rates from phone screen to onsite are low, maybe there's a qualification issue.

**Interviewer**: That's great. Are there analytics you wish you had that you don't currently?

**Jordan Mitchell**: Predictive analytics would be interesting. Like, based on our historical data, predict how long this role will take to fill, or predict which sourced candidates are most likely to respond based on their profile.

**Hannah Lee**: I'd love more competitive intelligence. Like, which companies are we consistently losing candidates to, what do offer acceptance rates look like by company, by role type, by level.

**Jordan Mitchell**: And better diversity analytics. We track diversity in our pipeline and hires, but I'd love more visibility into whether our sourcing is producing diverse candidate pools, and if not, how to improve that.

**Interviewer**: How do you think about diversity in sourcing?

**Robert Martinez**: It's really important to us. We want to build a diverse team, and that starts with diverse sourcing. We try to source from a wide range of companies, not just the obvious big tech names. We look at different educational backgrounds - not everyone needs a CS degree from Stanford.

**Hannah Lee**: For underrepresented groups, we often have to be more proactive about sourcing because the inbound pipeline may not be as diverse as we want. So we'll do targeted searches, we'll work with organizations focused on diversity in tech, we'll sponsor events and conferences.

**Robert Martinez**: The tools can help with this if they give us good filtering options. But the onus is on us to use those tools intentionally to build diverse pipelines.

**Interviewer**: What other pain points do you experience with sourcing tools?

**Hannah Lee**: Honestly, the persona management thing is probably the biggest one. I spend so much time managing these saved searches, keeping them organized, making sure I'm using the right one for each role. If there was a better way to handle that complexity, it would save me hours every week.

**Robert Martinez**: Scale is always a challenge too. Like, we're growing, we're hiring more recruiters, opening more roles. We need tools that can scale with us without becoming unmanageable.

**Jordan Mitchell**: Integration is important. The more our tools talk to each other, the more efficient we are. Jewel's integration with Greenhouse is good, but there are always rough edges - duplicate candidates, sync delays, that kind of thing.

**Interviewer**: What would your ideal sourcing workflow look like?

**Hannah Lee**: I'd want to define a role once - including all the persona variations - and have the tool intelligently search across those variations. So instead of maintaining four separate searches for Kafka roles, I'd have one "Kafka engineer" definition with four personas within it, and I could search across all of them or drill into specific ones.

**Robert Martinez**: And those role definitions could be templates that are shared across the team. So if three different recruiters are all hiring for Kafka engineers, they're all using the same well-defined template rather than each creating their own searches from scratch.

**Jordan Mitchell**: Better collaboration features would be great. Like, if I'm sourcing and I find a really strong candidate, I should be able to easily tag Hannah and say "hey, this person would be perfect for your ksqlDB role." Right now that's pretty manual.

**Hannah Lee**: Yeah, there's an opportunity for more team-based sourcing rather than everyone working in their own siloed searches.

**Interviewer**: What about the competitive landscape? Are there other tools you've considered or evaluated?

**Robert Martinez**: We looked at a few options before going with Jewel. We evaluated Gem, which was interesting but felt more focused on outbound sequencing than sourcing. We looked at LinkedIn Talent Hub, but it's really just LinkedIn data and we wanted access to broader databases.

**Jordan Mitchell**: There's newer players like Dover and Findem. We've had demos but haven't seriously piloted them. They have interesting features but we're pretty embedded with Jewel at this point.

**Hannah Lee**: I've used SeekOut at previous companies. It's fine, good data, but the UI feels dated and the CRM features aren't as strong as Jewel's.

**Robert Martinez**: The switching cost is high once you've invested in a tool, trained your team on it, built up your saved searches and CRM database. We'd need to see a really compelling reason to switch.

**Interviewer**: What would that compelling reason look like?

**Robert Martinez**: Solving the persona management problem would be big. Better global data coverage, especially in APAC. More sophisticated analytics and predictive insights.

**Hannah Lee**: If a tool could reduce the time I spend managing searches by even 25%, that's probably 3-4 hours a week that I could spend actually talking to candidates instead of wrangling filters.

**Jordan Mitchell**: And if the analytics could give us more actionable insights - not just reporting what happened, but suggesting what we should do differently - that would be valuable.

**Interviewer**: How do you think about budget and ROI for recruiting tools?

**Robert Martinez**: We're spending probably $120K annually on Jewel for our full team, plus LinkedIn Recruiter is another big expense - probably $150K for all the licenses. And then Greenhouse is expensive at our scale.

**Jordan Mitchell**: So we're probably spending $350-400K annually on recruiting tools, not counting job boards and other sourcing channels.

**Robert Martinez**: It's a significant investment, but recruiting is critical for us. We're a technology company - our people are our product, essentially. If we can't hire great engineers, we can't build great products.

**Hannah Lee**: I look at it this way - if a sourcing tool helps me fill a role even one week faster, that's value. If it helps me identify candidates I wouldn't have found otherwise, that's value. Time to fill and quality of hire are the metrics that matter.

**Jordan Mitchell**: And from an ops perspective, if the tools give me data that helps us optimize our process, that compounds over time. Small improvements in efficiency or conversion rates add up across dozens of roles per quarter.

**Interviewer**: That makes sense. Last few questions as we're running up on time. What does your decision-making process look like for new tools or major upgrades?

**Robert Martinez**: I typically own the final decision, but I involve the team heavily. For a tool like Jewel, I'd want Hannah and the other recruiting leaders to test it out, give me feedback. Jordan would evaluate it from a tech and integration perspective. We'd probably run a pilot for a month or two before committing.

**Jordan Mitchell**: And we'd need to see the business case. What problem are we solving, what's the expected ROI, how does it fit with our existing stack, what's the implementation and training effort.

**Hannah Lee**: I think we're pretty practical about it. We're willing to invest in tools that make us more effective, but we're not chasing shiny objects. It needs to solve real problems we're experiencing.

**Interviewer**: Any other feedback or thoughts we should be aware of?

**Hannah Lee**: Just that overall we're happy with Jewel. The persona management thing is a pain point, but the core functionality is solid, the data quality is good, the CRM has been really valuable, the analytics are great. We'd like to see continued innovation and improvement, but we're not looking to switch or anything.

**Jordan Mitchell**: Yeah, I echo that. From an ops perspective, Jewel has been a good partner. The support team is responsive, they're generally open to feedback, the product keeps getting better.

**Robert Martinez**: And I appreciate that you all are doing these user research interviews. It shows you're listening to customers and trying to understand our needs. That matters to us.

**Interviewer**: Well, that's definitely our goal. This has been super helpful - really appreciate you all taking the time and being so candid about what's working and what could be better. I'll share some of this feedback back with the product team.

**Robert Martinez**: Great, thanks for having us.

**Hannah Lee**: Thanks, David!

**Jordan Mitchell**: Appreciate it!


