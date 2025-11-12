# Snowflake Interview Transcript
**Date:** March 15, 2024
**Company:** Snowflake (Partial Customer)
**Attendees:** 
- Rachel Foster (VP Talent Acquisition)
- James Wilson (Director of Engineering Recruiting)
- Nina Sharma (Senior Technical Recruiter & Recruiting Operations)

**Interviewer:** Alex Chen (Jewel Product Team)

---

## Opening

**Interviewer:** Thanks so much for making time today, everyone. I really appreciate you all jumping on the call. So, just to set the stage - we're doing some user research to better understand how teams like yours are thinking about sourcing, what's working, what's not, and where the pain points are. Nothing we talk about today is binding or anything like that, we're just trying to learn. Sound good?

**Rachel Foster (VP Talent Acquisition):** Absolutely, happy to help. We've been using Jewel for, what, about a year and a half now James?

**James Wilson (Director of Engineering Recruiting):** Yeah, roughly. We're on the ATS side but not fully leveraging the AI sourcing piece yet. That's actually something we're actively evaluating right now.

**Nina Sharma (Senior Technical Recruiter & Recruiting Operations):** And just to clarify my role - I sit kind of in between the recruiting team and the ops side. So I think about tooling, data, integrations, that whole ecosystem.

**Interviewer:** Perfect, that's really helpful context. So maybe to start, can you give me a sense of the scope of what you're dealing with? How big is the recruiting team, what's your hiring volume looking like?

**Rachel Foster:** Sure. So our TA team is about 45 people globally. We're split across technical recruiting, which is the bulk of it - probably 30 recruiters - and then corporate functions, go-to-market, that kind of thing. On the engineering side specifically, we're filling somewhere between 60 to 80 roles per quarter, give or take. It's been pretty consistent over the last year.

**James Wilson:** Yeah, and I'd say about 40% of those are senior or staff level engineers, so pretty experienced folks. We're not doing a ton of junior hiring right now. The market's been interesting, you know, we're being more selective than we were in 2021, but we're still growing.

**Interviewer:** Got it. And what does your tech stack look like today for recruiting?

**Nina Sharma:** So we've got Jewel as the ATS, obviously. We're on Workday for HRIS. LinkedIn Recruiter is the big one on the sourcing side - we have, I think, 25 seats right now? And then we've dabbled with some other tools. We tried Gem for a while but didn't renew. Some of our sourcers have been experimenting with Juicebox, which is newer.

**James Wilson:** The Workday integration has been... fine. Not great, not terrible. Typical enterprise stuff where things break occasionally and you're troubleshooting with two different support teams.

**Rachel Foster:** Yeah, the integration challenges are real. But overall, the stack is pretty standard for a company our size, I think.

## Current State Discussion

**Interviewer:** That makes sense. So let's dig into sourcing specifically. How does that work today? Walk me through a typical scenario.

**James Wilson:** Okay, so let's say we get a req for a senior infrastructure engineer. The hiring manager kicks it off, we do an intake meeting - which, you know, varies in quality depending on the manager - and then it goes to one of our technical recruiters who also does their own sourcing. We don't have dedicated sourcers, which is probably different from some companies.

**Nina Sharma:** Well, we have two people who are more sourcing-focused, but they're not 100% dedicated. They'll also close candidates, coordinate interviews, that whole thing.

**Interviewer:** Interesting. So your recruiters are doing full-cycle including sourcing?

**James Wilson:** Exactly. Which has pros and cons. The pro is they really understand the role deeply because they're talking to the hiring manager, they're in the interview debriefs, all of that. The con is sourcing takes time and sometimes it gets deprioritized when they're juggling interviews and offers.

**Rachel Foster:** This is actually something we've been debating internally. Do we move to more of a dedicated sourcing model? There's a cost to that obviously, but there's also an opportunity cost when sourcing isn't happening consistently.

**Interviewer:** Right, that makes sense. So when your recruiters are sourcing, what's the actual process? What tools are they using?

**Nina Sharma:** LinkedIn Recruiter is the default. Like, that's just what everyone knows. They'll go in, set up their search filters - years of experience, location, keywords, skills - and start scrolling. We've built up some Boolean strings over time that get shared around, but honestly, it's pretty manual.

**James Wilson:** And the thing is, LinkedIn's great for some things. If you need someone with a very specific company background - like, we need someone who's worked at AWS on EC2 - you can find that pretty easily. But when you're trying to find a more nuanced skillset, it gets harder.

**Interviewer:** Can you give me an example of that nuance?

**James Wilson:** Yeah, absolutely. So, infrastructure engineering is actually a really broad term. We use it internally but it covers a bunch of different personas, if you will. You've got distributed systems engineers who are thinking about Kubernetes, microservices, that kind of architecture. Then you've got database kernel engineers who are working much closer to the metal - C++, query optimization, storage engines. And then you've got cloud platform engineers who are more about building internal developer tools and platform APIs.

**Nina Sharma:** And they all get lumped under "infrastructure engineer" in most companies' job descriptions.

**Interviewer:** That's really interesting. So when you're sourcing for these roles, are you treating them differently?

**James Wilson:** We should be, but honestly, it's inconsistent. It depends on the recruiter. Some of them have built up enough pattern recognition to know the difference. But if you're newer or you're covering a role you don't normally work on, you might just search for "infrastructure engineer" and not really differentiate.

**Rachel Foster:** This is one of the gaps we're trying to solve for, to be honest. How do we codify that knowledge so it's not just in people's heads?

**Interviewer:** That makes a lot of sense. So sticking with the current state for another minute - once someone's done a LinkedIn search and found some candidates, what happens next?

**Nina Sharma:** They'll usually export a list or just manually track people in a spreadsheet, reach out via LinkedIn InMail or find their email somehow - we don't have a great contact data solution right now, that's another gap - and then if someone responds positively, they get added to Jewel.

**James Wilson:** The contact data thing is annoying because you're paying for LinkedIn but then you still can't reliably get email addresses. So people are using like, Hunter.io or RocketReach on the side, which isn't ideal.

**Interviewer:** Got it. How's that working in terms of response rates and pipeline generation?

**James Wilson:** Um, it varies a lot by role. For something really hot like ML engineering, our response rates are maybe 15-20% and the conversion to interview is like 5%. For more niche infrastructure roles, it can actually be better because there's less competition. We might see 25-30% response rates.

**Rachel Foster:** The challenge is consistency. Some recruiters are really good at sourcing and they'll consistently build pipeline. Others struggle with it, and then we're reliant on inbound or referrals, which isn't always enough.

**Nina Sharma:** And the data visibility is tough. I can tell you how many people we hired from sourced versus inbound channels at a high level, but tracking individual sourcing activity, conversion metrics by recruiter or by role type - that's hard with our current setup.

**Interviewer:** What about Workday? You mentioned they have AI offerings. Have you looked at any of that?

**Rachel Foster:** Oh, we've looked at it. It's not good. Like, not even close to competitive with what other tools are doing.

**James Wilson:** Yeah, they've got some kind of talent intelligence thing but it's very basic. It's like keyword matching from 2010. We tried a demo and it was pretty clear it wouldn't work for technical recruiting.

**Nina Sharma:** Workday's great for a lot of things, but AI sourcing is not their strength. I think they're playing catch-up there.

## Pain Points Exploration

**Interviewer:** Okay, so let's dig deeper into the pain points. It sounds like there are a few themes emerging - the differentiation between types of infrastructure roles, contact data, consistency across recruiters. What else? What's keeping you up at night?

**Rachel Foster:** Budget is always a factor. We're being asked to do more with less, or at least more with the same. So when we think about adding new tools, the ROI calculation has to be really clear. It's not enough to say "this would be nice to have." We need to show impact on time-to-fill, cost-per-hire, sourcing efficiency.

**James Wilson:** And on the day-to-day level, I think the biggest pain point is just the time suck of sourcing. A recruiter can easily spend 10-15 hours a week just searching, reviewing profiles, tracking people down. That's time they're not spending on interview coordination, candidate experience, hiring manager consultation - all the other parts of the job.

**Nina Sharma:** The data staleness issue is huge too. LinkedIn profiles are notoriously out of date. Someone says they're at Company X but they left six months ago. Or their skills section hasn't been updated in three years. So you're spending time reaching out to people who aren't even relevant anymore.

**Interviewer:** That's frustrating. How often does that happen?

**Nina Sharma:** I'd say 20-30% of the time you're dealing with stale data in some form. Maybe not completely wrong, but outdated enough that it matters.

**Interviewer:** Let's go back to the infrastructure engineering persona thing, because that feels like a really specific pain point. Can you walk me through a real example where this came up?

**James Wilson:** Yeah, absolutely. So we had a req a few months ago for a senior infrastructure engineer working on our distributed storage layer. This is the team that deals with how we replicate and partition data across availability zones, handle consistency, all of that. Very distributed systems heavy.

**Nina Sharma:** I remember this role. It took forever to fill.

**James Wilson:** Right. So the recruiter - and this wasn't their fault, they're really good - they went into LinkedIn and searched for "infrastructure engineer" plus keywords like "distributed systems," "Kafka," "consistency protocols," things like that. And they found people. But a lot of the profiles were... not quite right.

**Interviewer:** How so?

**James Wilson:** They'd find people who had "distributed systems" on their profile but were actually more platform engineers. They'd built some CI/CD pipelines that used distributed architecture, but they weren't thinking about consensus algorithms or data replication strategies. That's a different skillset.

**Nina Sharma:** Or they'd find database engineers who understood distributed systems but from a query execution perspective, not a storage perspective.

**James Wilson:** Exactly. And then you're spending time screening these people, getting them on a phone call, realizing they're not a fit, and you've just burned a week.

**Interviewer:** So how did you eventually solve it for that role?

**James Wilson:** Honestly, we got kind of lucky. One of our engineers knew someone from their time at Amazon who was working on DynamoDB and looking to make a move. That's how we filled it. But that's not scalable, you know?

**Rachel Foster:** This is the pattern recognition problem. James and some of our senior recruiters can look at a profile and know pretty quickly if someone's the right flavor of infrastructure engineer. But that takes years of experience. We can't expect every recruiter to have that level of domain knowledge across all the different types of roles.

**Interviewer:** Right. So if you could wave a magic wand, what would the solution look like?

**James Wilson:** Um, I think it would be some way to save different search strategies or filter sets for different personas within infrastructure engineering. So you'd have one for distributed systems folks that's looking for specific keywords, company backgrounds, open source contributions, whatever. And then a different one for database kernel engineers that's looking at C++ experience, database companies, systems programming. And another for cloud platform engineers focused on developer tools, API design, that kind of thing.

**Nina Sharma:** Yeah, and it would be great if those could be shared across the team. So it's not just in one person's head or their personal LinkedIn account. It's in the system, everyone can use it, and we can iterate on it over time.

**Rachel Foster:** The other thing that would help is if the AI could help with that differentiation. Like, if it could look at a profile and say "this person is more of a distributed systems engineer based on their background" versus "this person is more database kernel focused." That pattern matching at scale.

**Interviewer:** That's really helpful. Are there other role types where you see this same challenge?

**James Wilson:** Oh yeah, it's not just infrastructure. We see it in data engineering - there's data pipeline engineers versus analytics engineers versus ML engineers. Security is another one - application security versus infrastructure security versus compliance. Every domain has these sub-specialties that aren't always obvious from job titles or even job descriptions.

**Nina Sharma:** And the hiring managers don't always articulate it well in the intake meeting. They'll say "I need a senior infrastructure engineer" and you have to probe - okay, what kind? What will they actually be working on? What's the first project? Sometimes they don't even know they're asking for something specific until you start showing them candidates.

**Interviewer:** Interesting. So there's a whole intake and requirements gathering challenge underneath this too.

**Rachel Foster:** Absolutely. We've been working on improving our intake process but it's still inconsistent. Some hiring managers are really good at articulating what they need. Others not so much.

**Interviewer:** What other pain points should I know about?

**Nina Sharma:** Integration is a big one for us. We've got data in Workday, data in Jewel, data in LinkedIn, data in these random spreadsheets that sourcers keep. Getting a unified view of our sourcing funnel is really hard. I spend probably 5-10 hours a week just pulling data together for reports.

**James Wilson:** And the analytics that LinkedIn provides are pretty basic. You can see how many InMails you sent, response rates, but you can't really tie it to downstream outcomes in a meaningful way. Did the people we sourced through this specific search actually make it through interviews? Were they good hires six months later? That's really hard to track.

**Rachel Foster:** Cost is another thing. LinkedIn Recruiter is expensive. We're paying, what, like $10,000 a year per seat? Something like that?

**Nina Sharma:** It's around $8,500 per seat annually, so yeah, with 25 seats, we're looking at over $200K a year just for LinkedIn.

**Rachel Foster:** Right. And we're okay with that if it's the best tool for the job, but we should at least be evaluating alternatives to make sure we're getting the value.

**Interviewer:** Have you evaluated alternatives?

**James Wilson:** We tried Gem a couple years ago. It was interesting - had some nice CRM features, better email sequencing than LinkedIn. But we ended up not renewing because the adoption was spotty. Some recruiters loved it, others never really got comfortable with it and kept going back to LinkedIn.

**Nina Sharma:** The challenge with any new tool is the learning curve. Recruiters are busy, they've got reqs to fill, and if something's not immediately intuitive or better than what they're already using, it's hard to get adoption.

**Rachel Foster:** This is something we're very mindful of as we evaluate new tools. The tool can be amazing but if our team doesn't use it, it's worthless. So we need something that's actually an improvement on the day-to-day workflow, not just a nice-to-have feature.

## Competitive Landscape

**Interviewer:** That makes sense. So you mentioned Gem, and earlier someone mentioned Juicebox. What else have you looked at or are you considering?

**Nina Sharma:** So we've done demos with a few tools recently. Juicebox is interesting - a couple of our sourcers have been experimenting with it on their own. It's got some AI components that are supposed to help with profile matching and generating search queries. It's pretty new though, so we're a bit cautious about betting heavily on it.

**James Wilson:** Yeah, I've seen some of the Juicebox results and they're... mixed. Sometimes it's great, sometimes it's really off. It feels like the AI isn't quite trained well enough for technical roles yet. But it's improving.

**Interviewer:** What do you like about it when it works well?

**James Wilson:** The speed is nice. You can generate a list of candidates faster than you could by manually searching LinkedIn. And it does surface some people you might not have found otherwise because it's looking at patterns beyond just keywords.

**Nina Sharma:** The challenge is trust. If the AI gives you a list of 50 people, you still have to review every profile to make sure they're actually relevant. So you're saving time on the search but not necessarily on the review. Maybe you're net positive, but it's not a 10x improvement.

**Interviewer:** Got it. What else have you looked at?

**Rachel Foster:** We did a demo with HireEZ, which used to be called Hiretual. That one's more of a direct LinkedIn Recruiter competitor - aggregates data from multiple sources, has some AI matching. It's interesting but I'm not sure it's different enough to justify switching.

**James Wilson:** Yeah, it felt like LinkedIn plus a little bit more. Which is fine, but is it worth the effort of migrating and retraining everyone?

**Nina Sharma:** We also looked at SeekOut, which is similar - multi-source aggregation, diversity filtering, which is nice. But again, the question is whether it's meaningfully better than what we have.

**Interviewer:** So it sounds like nothing has really blown you away yet?

**Rachel Foster:** That's fair to say. I think we're waiting for someone to really crack the AI piece in a way that feels reliable and trustworthy for technical recruiting. A lot of the tools out there are doing AI features but they feel like early versions, not quite production-ready for our use case.

**James Wilson:** And to be honest, we're a bit skeptical because we've been burned by AI hype before. Everyone's slapping "AI-powered" on their product but when you actually use it, it's like glorified keyword matching. So we want to see proof that it actually works before we commit.

**Nina Sharma:** The other consideration is integration. We're already on Jewel, we're already on Workday. Adding another tool that doesn't integrate well with those systems creates data silos and more manual work. So even if a tool is great standalone, if it doesn't fit into our ecosystem, that's a problem.

**Interviewer:** That's a really good point. So how important is the integration aspect when you're evaluating sourcing tools?

**Nina Sharma:** Very important. I'd say it's probably in the top three criteria. We need candidates to flow into Jewel automatically, we need activity to be tracked, we need to be able to report on sourcing metrics without a bunch of manual exports and data manipulation.

**Rachel Foster:** Yeah, and this is where Jewel has an advantage, right? You're already our ATS. If your AI sourcing module can sit on top of that and be tightly integrated, that's compelling. We don't have to worry about data syncing or duplicate profiles or any of that.

**Interviewer:** That's really helpful to know. So what about Workday's offerings? You mentioned earlier they're not great, but are you obligated to use them at all?

**Nina Sharma:** Not obligated, no. I mean, they'd love it if we used their full suite, but we're not locked in. We evaluated their talent intelligence thing and decided it wasn't worth it.

**James Wilson:** Yeah, it was pretty clear it wouldn't meet our needs for technical recruiting. Maybe for more generic corporate roles it's okay, I don't know. But for engineering, it was a non-starter.

**Rachel Foster:** Workday's strength is the HRIS core - payroll, benefits, org management. That's all great. But recruiting tools, and especially AI sourcing, are not their forte. They're trying to build it but they're behind the curve.

**Interviewer:** Got it. So if you were to rank the tools you've looked at in terms of potential to actually adopt, what would that look like?

**Rachel Foster:** Hmm. I'd say Jewel's AI sourcing module is at the top because of the integration advantage. But we haven't fully evaluated it yet, so that's provisional. After that, maybe HireEZ or SeekOut as LinkedIn alternatives. Juicebox is interesting but feels too early-stage for us to bet on heavily. And Gem is kind of off the table after our previous experience.

**Nina Sharma:** I'd also add that we're open to being surprised. If someone came in with a really compelling demo that showed they could solve the persona filtering problem we've been talking about, that would move them up the list quickly.

**James Wilson:** Yeah, agreed. We're not married to any particular vendor. We just want something that works and makes our recruiters more effective.

## Future Needs & Closing

**Interviewer:** So looking ahead, what would make your sourcing dramatically more effective? If you could build the ideal solution, what would it look like?

**Rachel Foster:** I think we've touched on a lot of it already. Better AI that understands the nuance between different types of technical roles. The ability to save and share search strategies or filter sets across the team. Reliable contact data built in. Tight integration with our ATS so there's one source of truth. And really robust analytics so we can see what's working and what's not.

**James Wilson:** I'd add candidate engagement tracking. Like, if we reached out to someone six months ago for a different role, we should know that before we reach out again. Or if they've responded to our InMails in the past, that's a signal they're more open. That context should be surfaced automatically.

**Nina Sharma:** And I'd love to see better predictive analytics. Not just "here are some candidates who match the keywords," but "here are candidates who are likely to be interested in this role based on their career trajectory, location preferences, company size preferences, etc." That would be a game-changer.

**Interviewer:** Those are great. What about the decision-making process on your end? How do you actually decide to adopt a new tool?

**Rachel Foster:** So typically, we'd start with a demo or trial. Get a few recruiters to use it for a couple of weeks, see what they think. If the feedback is positive, we'd do a more formal evaluation - pricing, contract terms, security review, integration assessment. Then we'd bring a proposal to our CFO and CHRO for approval.

**Nina Sharma:** The security review can take a while, especially if it's a newer vendor. We need to make sure they're compliant with data privacy regulations, SOC 2 certified, all that stuff.

**James Wilson:** And honestly, the pricing needs to be competitive. We're not going to pay significantly more than LinkedIn unless the value is really clear. We've got budget constraints like everyone else.

**Interviewer:** That's helpful. What kind of timeline are you thinking for making a decision on AI sourcing tools?

**Rachel Foster:** We're probably looking at Q2 for a decision. We want to do our due diligence, get the team's input, run a proper evaluation. If we move forward with something, I'd want it implemented by end of Q3 so we have a full quarter to ramp before year-end.

**James Wilson:** Yeah, and we'd probably start with a subset of recruiters as a pilot. Maybe five or six people. See how it goes, work out the kinks, and then roll it out more broadly if it's successful.

**Nina Sharma:** That's our typical approach with new tools. We're not going to flip a switch and change everyone's workflow overnight. It needs to be phased.

**Interviewer:** Makes sense. What else should I understand about your needs or priorities?

**Rachel Foster:** I think the biggest thing is we need to see real results. We're past the point of being impressed by flashy demos. Show us how it's worked for other companies like ours - tech companies, engineering-heavy, similar scale. Give us metrics, case studies, that kind of thing.

**James Wilson:** And be realistic about what it can and can't do. Don't oversell it. If there are limitations or areas where it's still improving, tell us. We'd rather know upfront than be disappointed later.

**Nina Sharma:** Yeah, and support matters. If we're going to adopt a new tool, we need to know there's good customer support, training resources, regular product updates. We don't want to adopt something that's going to stagnate or where we can't get help when we need it.

**Interviewer:** Those are all really fair points. Well, I think I've got a lot of great information here. Is there anything else you think I should know or any questions for me?

**Rachel Foster:** I don't think so. This was helpful for us too, actually. It's good to articulate these challenges and think through what we really need.

**James Wilson:** Yeah, agreed. I think we're at a point where we're ready to modernize our sourcing approach. We just need the right tool and the right partner to do it with.

**Nina Sharma:** And if Jewel can be that partner, even better, because we already have the relationship and the integration. But we'll evaluate everything fairly.

**Interviewer:** Absolutely. Well, thank you all so much for your time. This was incredibly valuable. I'll synthesize what I learned and we can follow up in the next couple of weeks with some ideas.

**Rachel Foster:** Sounds great. Thanks, Alex.

**James Wilson:** Thanks.

**Nina Sharma:** Thanks, appreciate it.


