# Goldman Sachs Interview Transcript

**Date**: September 18, 2025
**Duration**: 58 minutes
**Company**: Goldman Sachs
**Interviewees**:
- Margaret Campbell (Managing Director - Engineering Talent)
- Christopher Allen (VP of Technology Recruiting)
- Diana Martinez (Recruiting Operations Lead - Engineering)

**Interviewer**: Rachel Kim (Product Manager, Jewel)

---

## Opening

**Interviewer**: Thanks so much for taking the time today. I know schedules are tight, especially in your world. I'm Rachel from Jewel's product team, and we're doing some discovery work to better understand how talent acquisition teams at firms like Goldman are approaching technical recruiting today. Maybe we could start with quick intros?

**Margaret Campbell (Managing Director - Engineering Talent)**: Sure, happy to be here. I'm Margaret Campbell, I'm a Managing Director in our Engineering Talent group. I've been at Goldman for about twelve years now, moved over from the business side actually. I oversee engineering recruiting globally, which right now is about 85 people across our offices. We're hiring probably 400 to 500 engineers a year, give or take, depending on what the markets are doing.

**Christopher Allen (VP of Technology Recruiting)**: Chris Allen, VP of Technology Recruiting. I report to Margaret, and I focus specifically on our platform engineering and trading systems roles. Been here about seven years, came from JPMorgan before that. My team is about 20 recruiters, mostly senior folks who've been in financial services for a while.

**Diana Martinez (Recruiting Operations Lead - Engineering)**: Diana Martinez, I lead recruiting operations for the engineering side. I'm the one who deals with all our systems, our tech stack, data integrity, that sort of thing. I've been at Goldman for five years, came from consulting before that.

**Interviewer**: Perfect, thank you. And just to level set, can you give me a sense of your current recruiting tech stack? What are you working with today?

**Margaret Campbell**: So we're a Workday shop, that's our core ATS. It's... look, it's enterprise grade, it does what it needs to do for a firm our size. For sourcing, historically we've relied heavily on LinkedIn Recruiter. Every one of our recruiters has a seat, we spend a considerable amount there. We also work with executive search firms for very senior roles, and we have some internal sourcing specialists.

**Diana Martinez**: From a tools perspective, it's pretty traditional. Workday for applicant tracking, LinkedIn Recruiter for sourcing, we have some internal tools that our engineering team built for specific use cases, though honestly those haven't been as effective as we'd hoped. We're pretty conservative when it comes to adopting external tools. There's a rigorous procurement process, security reviews, compliance checks...

**Christopher Allen**: Which is appropriate, given who we are. But it does mean we're sometimes slower to adopt new technology than, say, a startup would be.

## Current State Discussion

**Interviewer**: That makes sense. Let's dig into how things work today. Walk me through your current process when you're trying to source candidates for a role.

**Christopher Allen**: So typically a req comes in, we do an intake with the hiring manager. For technical roles, especially on the trading platform side, we need to understand exactly what they're looking for. Are we talking about someone who's going to work on low-latency systems? Risk management platforms? Market data infrastructure? These are all very different profiles.

**Margaret Campbell**: And this is where it gets interesting. LinkedIn Recruiter is... fine. It's the baseline, everyone uses it. But it's fundamentally a search tool, right? You put in some keywords, some filters, you get results. For the kind of nuanced recruiting we do, that can be limiting.

**Interviewer**: Can you give me a specific example? Maybe a recent role you filled?

**Christopher Allen**: Sure, let me think... okay, so about two months ago we were hiring for a senior engineer on our equity trading platform. This is someone who needs deep experience with low-latency C++ programming, understanding of market microstructure, experience with FIX protocol, knowledge of exchange connectivity. Very specific skill set.

**Diana Martinez**: And when you search for that in LinkedIn, you're casting a wide net and then manually filtering. Chris's team spent probably 40 hours just on the sourcing for that one role.

**Christopher Allen**: Yeah, and here's the thing - I can't just search for "low-latency C++ engineer" because I'll get thousands of results, many of whom aren't the right fit. I need to layer in filters about company background - have they worked at trading firms before? Do they have exchange connectivity experience? But LinkedIn's Boolean search gets unwieldy fast.

**Margaret Campbell**: And that's just one type of role. We're also hiring risk management engineers who need a completely different background. They need strong quantitative skills, understanding of risk models, regulatory knowledge, experience with risk management platforms. If I try to build one search that covers both profiles, it becomes meaningless.

**Interviewer**: So you're building separate searches for each type of role?

**Christopher Allen**: Exactly. And I'm rebuilding them every time. There's no easy way to save these complex filter combinations in LinkedIn. I mean, you can save searches, but they're pretty basic. I have a document - literally a Word doc - where I keep my best Boolean strings for different role types. It's not ideal.

**Diana Martinez**: From an operations perspective, this creates a lot of inconsistency. Different recruiters are building different searches for similar roles. There's no standardization. And when someone leaves the team, their knowledge walks out the door with them.

**Interviewer**: Interesting. How are you managing candidate data once you've sourced them?

**Margaret Campbell**: That's another pain point, honestly. We're using Workday's candidate relationship management features, but they're... basic. If I source someone who's not quite right for this role but might be perfect for something six months from now, I need to keep track of them. We're building our own systems in spreadsheets, which is crazy for a firm our size.

**Diana Martinez**: We looked at some CRM tools a few years ago, but the procurement process was daunting. Security reviews, SOC 2 compliance checks, data residency questions. And then there's the integration question - how does it connect to Workday? We have to be really thoughtful about our tech stack.

**Interviewer**: Tell me about what's working well with your current setup. What are you happy with?

**Christopher Allen**: LinkedIn has great reach, I'll give them that. For more general engineering roles - your backend engineers, your cloud platform folks - it's solid. We get good response rates, the data is generally reliable. And our recruiters know it well, there's no learning curve.

**Margaret Campbell**: The executive search firms we work with are excellent for VP and above roles. They understand our culture, they have relationships with the right people, they handle the delicate outreach. For those roles, we're very comfortable with that model.

**Diana Martinez**: Workday is stable and secure, which matters a lot in our environment. It handles our compliance requirements, our audit needs, our data retention policies. Those aren't sexy features, but they're table stakes for us.

**Interviewer**: And what about sourcing volume? How many candidates are your recruiters typically engaging per role?

**Christopher Allen**: It varies a lot by role. For a more junior engineer position, we might source 50 to 75 candidates, reach out to maybe 30, and get 8 to 10 conversations. For something really specialized like that low-latency trading role I mentioned, we might source 200+ just to get to 15 conversations.

**Margaret Campbell**: And time-to-fill is important to us. For critical platform roles, we're targeting 45 to 60 days from req open to offer accepted. If sourcing is taking three weeks just to build a pipeline, that's a problem.

**Diana Martinez**: We track all of this in Workday, but the reporting is clunky. I spend way too much time building custom reports to answer basic questions like "What's our sourcing channel effectiveness?" or "Which recruiters are most efficient at converting sourced candidates to phone screens?"

**Interviewer**: That's helpful context. So it sounds like you have a working system, but there are definitely pain points around search complexity, saved searches, CRM functionality, and analytics.

**Margaret Campbell**: That's a good summary. We're functional, but we're not optimized. And in a competitive talent market, that gap matters.

## Pain Points Exploration

**Interviewer**: Let's dig deeper into some of these challenges. You mentioned the complexity around different role types. Can you walk me through the different engineering profiles you're typically recruiting for?

**Christopher Allen**: Yeah, this is where it gets really complex. So on the trading platforms side, which is what I focus on, we have at least four distinct profiles that require completely different sourcing approaches.

First, you've got your low-latency C++ engineers. These folks are building the systems that execute trades in microseconds. They need deep C++ expertise, understanding of modern C++ standards, experience with low-latency optimization, knowledge of hardware acceleration, maybe FPGA experience. They're typically coming from other trading firms, high-frequency trading shops, exchange technology companies. Very specific background.

**Margaret Campbell**: And you can't just search for "C++ engineer" because you'll get embedded systems engineers, game developers, all sorts of people who aren't the right fit.

**Christopher Allen**: Exactly. So that's one saved search I need. Then you have risk management engineers, which is a completely different animal. These folks are building systems that monitor and manage our risk exposure across all our trading activities. They need strong quantitative skills - often they have advanced degrees in mathematics, physics, financial engineering. They need to understand risk models, Value at Risk calculations, stress testing frameworks, regulatory requirements.

**Diana Martinez**: And their background is often different. They might be coming from quantitative finance roles, from other banks' risk technology groups, from risk management software companies like Murex or Calypso.

**Christopher Allen**: Right, so that's a second completely different saved search. The keywords are different, the company filters are different, the education filters are different. If I try to combine these into one search, I either get too many irrelevant results or I miss good candidates.

**Interviewer**: That makes sense. You mentioned there were four profiles?

**Christopher Allen**: Yeah, so the third one is market data engineers. These are the folks building systems that ingest, normalize, and distribute market data in real-time. Think hundreds of thousands of messages per second from exchanges around the world. They need experience with market data protocols like FIX, understanding of exchange connectivity, low-latency messaging systems, data normalization techniques.

**Margaret Campbell**: Often they're coming from market data vendors - companies like Bloomberg, Refinitiv, CME Group - or from other banks' market data infrastructure teams.

**Christopher Allen**: And then the fourth major profile is compliance automation engineers. Post-financial crisis, we've had to build massive systems for regulatory compliance, trade surveillance, transaction reporting. These engineers need to understand both the technology stack and the regulatory environment. They need to know about MiFID II, Dodd-Frank, SEC Rule 15c3-5, all these regulatory frameworks.

**Diana Martinez**: And they're often coming from compliance software vendors, regulatory technology companies, or other banks' compliance technology groups. It's a much more specialized pool.

**Interviewer**: So you're essentially managing four completely different sourcing strategies within just the trading platform engineering area?

**Christopher Allen**: At minimum, yeah. And that's just my area. Margaret's team has other specializations - cloud platform engineers, data engineers, security engineers, DevOps folks - each with their own nuances.

**Margaret Campbell**: The challenge is that we can't effectively save and reuse these complex filter combinations. Every time I have a low-latency C++ req, Chris's team is essentially rebuilding the search from scratch, or copy-pasting from that Word document I mentioned. It's inefficient and it creates inconsistency.

**Interviewer**: Walk me through what a saved search would ideally look like for you. Let's take the low-latency C++ engineer example.

**Christopher Allen**: Okay, so ideally I'd have a saved filter set that includes: C++ as a core skill, but specifically modern C++ standards. Low-latency or high-frequency trading experience. Keywords around microsecond optimization, cache optimization, that sort of thing. Then I need company filters - I want people who've worked at Jane Street, Citadel, Jump Trading, other HFT firms, or exchange technology companies like Nasdaq or CME.

**Diana Martinez**: And you need education filters. For these roles, top-tier computer science programs matter. Carnegie Mellon, MIT, Stanford, Berkeley, that caliber.

**Christopher Allen**: Right. And then experience level - typically we're looking at 5 to 12 years. Not too junior, but we're not necessarily looking for 20-year veterans either. And location filters, because these roles are in New York, and we prefer people who are already in the area or have ties here.

**Margaret Campbell**: Now multiply that by four for Chris's different role types, and then by all the other specializations across my team. We're talking about dozens of distinct filter combinations that we're managing in an ad hoc way.

**Interviewer**: And when you're using LinkedIn Recruiter today, what's the workflow for managing these?

**Diana Martinez**: It's manual and it's painful. Recruiters are saving Boolean strings, they're documenting their filter combinations, they're trying to remember what worked for the last similar req. There's no systematic way to say "This is our gold standard search for low-latency C++ engineers" and have everyone use it.

**Christopher Allen**: And here's another pain point - the searches decay over time. LinkedIn's algorithm changes, new candidates enter the market, companies get acquired and renamed. I had a saved search that was working great, and then six months later it's not as effective. I have to constantly iterate and refine.

**Margaret Campbell**: Data staleness is another issue. We'll source a candidate, reach out, and get a bounce back. Email addresses change, people move companies, contact data goes stale. I'd estimate 20 to 25% of the contact data we get has some kind of issue.

**Interviewer**: That's significant. How are you handling that today?

**Diana Martinez**: Manually, mostly. Recruiters are doing Google searches, checking GitHub profiles, looking at company websites, trying to find updated contact information. It's time-consuming.

**Christopher Allen**: And expensive. If I'm paying a senior recruiter $150K a year and they're spending 10 hours a week hunting for updated contact info, that's a real cost.

**Interviewer**: Let's talk about the CRM side. You mentioned that Workday's CRM features are basic. What are you missing?

**Margaret Campbell**: So much. Look, in our world, recruiting is relationship-driven. I might meet someone at a conference who's perfect for a role we'll have in six months. Or I'll interview someone who's great but we don't have the right opening right now. I need to maintain those relationships over time.

**Diana Martinez**: In Workday, you can put candidates in the system, you can add notes, but it's not designed for ongoing relationship management. There's no easy way to set reminders to follow up, to track the cadence of outreach, to see the history of interactions across multiple touchpoints.

**Christopher Allen**: And there's no good way to pool knowledge across the team. If Diana had a conversation with someone who's not right for her roles but perfect for mine, how does she flag that for me? We're using email and Slack messages, which is insane.

**Margaret Campbell**: We've looked at CRM tools, but the integration question is always tricky. If it doesn't sync with Workday, we're creating data silos. And the procurement process for a new tool is... it's a journey. Security review, legal review, compliance review, vendor risk assessment. For a large tool implementation, we're talking six to nine months minimum.

**Interviewer**: That's a significant timeline. What drives that?

**Diana Martinez**: We're Goldman Sachs. We handle incredibly sensitive information. Any tool that touches candidate data needs to meet our security standards, which are high. SOC 2 compliance is table stakes. We need to understand data residency - where is the data stored, who has access to it, how is it encrypted, what happens if we terminate the relationship?

**Margaret Campbell**: And we need to understand the vendor's financial stability. Are they going to be around in five years? What's their funding situation? Who else uses them? Can we talk to references? It's thorough, and it needs to be.

**Christopher Allen**: Which is fine for the right tool, but it means we need to be really confident before we start that process. We can't experiment with six different tools and see what sticks. We need to make the right decision upfront.

## Competitive Landscape

**Interviewer**: That's helpful context. Let me ask about other tools you've evaluated or considered. What else is on your radar?

**Margaret Campbell**: So we've had conversations with a few vendors. Greenhouse came up in conversation - they've got an ATS and AI sourcing bundle that some of our portfolio companies use. For us, switching ATSs is basically a non-starter. We're committed to Workday at the enterprise level, and that's not changing. But the sourcing piece is interesting.

**Christopher Allen**: I've heard mixed things about Greenhouse's AI sourcing. Some folks love it, others say it's not sophisticated enough for specialized roles. The concern I have is whether an AI model can really understand the nuance of what we're looking for. Can it distinguish between a low-latency C++ engineer and a general C++ developer?

**Diana Martinez**: And there's the integration question again. If it doesn't integrate cleanly with Workday, it's a problem.

**Interviewer**: What about other sourcing tools? Are you looking at anything else?

**Margaret Campbell**: We've had demos with a couple of vendors. There's a tool called Fetcher that does sourcing-as-a-service, where they have a team that sources for you. That model doesn't really fit for us - we want to own the sourcing process internally. We have the team size and the expertise.

**Christopher Allen**: I looked at Juicebox briefly. It's more of a budget-friendly option, positioning themselves against LinkedIn Recruiter. For a startup or a smaller company, I can see the appeal. For us, the question is whether it has the depth of data and the sophistication of filtering we need. I'm not convinced yet.

**Diana Martinez**: The other thing that comes up is build-versus-buy. We have a large engineering team. There's always a question of whether we should build our own internal tools. We've tried that with mixed results. The recruiting team's needs aren't always prioritized by engineering, and the tools we've built haven't been maintained well.

**Interviewer**: What did you try to build internally?

**Christopher Allen**: We built a tool for tracking referrals, a tool for managing recruiting events, a basic candidate database. The referral tool works okay, the events tool is barely used, and the candidate database never got the features we needed. It's frustrating because the intent was good, but the execution didn't match our needs.

**Margaret Campbell**: I'm generally of the mind that we should buy best-in-class tools and integrate them rather than trying to build everything ourselves. Recruiting tools aren't our core competency.

**Interviewer**: Let me ask about Jewel specifically, since that's why we're talking. What's your current understanding of what we offer?

**Margaret Campbell**: Honestly, we're early in our evaluation. We know you have a talent CRM platform, you have sourcing capabilities, you integrate with some ATSs. We're trying to understand whether you're a fit for an organization our size and our level of complexity.

**Diana Martinez**: The questions I have are around enterprise readiness. Can you handle our security requirements? Do you have SOC 2 Type II certification? What's your data residency story? Do you integrate with Workday? What does implementation look like - are we talking weeks or months?

**Christopher Allen**: And from a sourcing perspective, can you handle the level of filter complexity we need? Can I save multiple sophisticated filter sets for different role types? How fresh is your contact data? What's your coverage like at the senior level?

**Margaret Campbell**: And then there's the ROI question. We're spending a significant amount on LinkedIn Recruiter. If we're going to add another tool - or potentially replace LinkedIn for some use cases - we need to see clear value. Time savings, better candidate quality, higher response rates, whatever the metrics are.

**Interviewer**: Those are all fair questions. What would success look like for you? If you implemented a new sourcing tool, what outcomes would make you say "Yes, this was worth it"?

**Christopher Allen**: Faster sourcing. If I can cut the time to build a qualified pipeline from three weeks to one week, that's massive. Better candidate quality - if the hit rate on responses is higher, if we're getting to conversations faster, that matters. And reusability - if I can save these complex filter sets and reuse them across reqs and across recruiters, that's a big efficiency gain.

**Diana Martinez**: From an ops perspective, I want better data and better analytics. I want to know which sourcing approaches are working, which recruiters are most effective, where we should invest more time. I want that visibility without spending 10 hours a week building custom reports.

**Margaret Campbell**: And for me, it's about scalability. We're growing our engineering recruiting team. I need tools that help us scale efficiently, that enable consistency across a large team, that reduce the knowledge loss when someone leaves. If a tool can help with that, it's valuable.

## Future Needs & Closing

**Interviewer**: That's really helpful. Let me ask about timing and decision-making process. If you were to move forward with evaluating a new sourcing tool, what does that process look like?

**Margaret Campbell**: It starts with a business case. We'd need to articulate the problem we're solving, the alternatives we've considered, the expected ROI. That goes to my leadership team, and if they approve, we initiate the formal vendor evaluation process.

**Diana Martinez**: Then it's security review, legal review, compliance review, vendor risk assessment. We'd need detailed documentation on your security posture, your data handling practices, your compliance certifications. We'd probably want to do a technical deep dive with your engineering team to understand the architecture.

**Christopher Allen**: And we'd want a pilot. We're not going to roll out a new tool to 85 recruiters globally on day one. We'd start with a small group - maybe my team - run it for a quarter, measure the results, get feedback, and then decide whether to expand.

**Margaret Campbell**: The whole process, from initial business case to full rollout, is probably nine to twelve months. That's just the reality of operating at our scale with our security and compliance requirements.

**Interviewer**: And what's the budget environment like right now? I know that varies a lot firm to firm.

**Margaret Campbell**: We're fortunate in that recruiting is viewed as strategic. We're not in a cost-cutting mode. That said, we're thoughtful about investments. We need to see clear ROI. If we're going to spend six figures on a tool, we need to understand the value.

**Christopher Allen**: And it's not just the software cost. It's implementation, it's training, it's ongoing maintenance. All-in costs matter.

**Diana Martinez**: But we're willing to invest in tools that genuinely move the needle. We're not penny-wise and pound-foolish. If something can make our recruiting more efficient and effective, we'll find the budget.

**Interviewer**: Last question - if you could wave a magic wand and fix one thing about your current sourcing process, what would it be?

**Christopher Allen**: Saved filter sets, hands down. If I could build a library of sophisticated, reusable searches for all our different role types, and share those across the team, and update them once instead of every time we have a req - that would be transformative.

**Margaret Campbell**: For me, it's the CRM piece. I want a system that helps us build and maintain relationships over time, that makes it easy to resurface the right candidates at the right time, that captures the institutional knowledge of our team. That's the piece we're really missing today.

**Diana Martinez**: Analytics and insights. I want to understand what's working and what's not, in real-time, without manual reporting. That visibility would help us make better decisions and optimize our process.

**Interviewer**: This has been incredibly valuable. I really appreciate you taking the time and being so candid about your challenges and needs. Is there anything else you think I should know?

**Margaret Campbell**: Just that we're open to innovation, but we move deliberately. We're not going to be the fastest adopters, but we're serious about finding the right long-term partners. If Jewel can meet our needs and our requirements, we're interested in continuing the conversation.

**Christopher Allen**: And we'd want to talk to other financial services firms that use your tool. References matter a lot to us, especially in our industry.

**Diana Martinez**: Thanks for taking the time to understand our business. A lot of vendors come in with a pitch deck and don't ask enough questions. This was a much more productive conversation.

**Interviewer**: Absolutely, that's exactly what we're trying to do. I'll follow up with some of the specifics you asked about - security documentation, Workday integration details, case studies from other financial services firms. And we can set up a technical deep dive if that makes sense as a next step.

**Margaret Campbell**: Sounds good. Thanks, Rachel.

**Interviewer**: Thank you all. Have a great rest of your day.

---

**End of transcript**
**Total word count: 4,000 words**

