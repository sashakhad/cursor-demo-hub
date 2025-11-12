# Stripe Interview Transcript
**Company:** Stripe  
**Attendees:** Sarah Chen (Director of Engineering Recruiting), Marcus Thompson (Senior Technical Recruiter), Priya Patel (Recruiting Operations Manager)  
**Date:** March 15, 2024  
**Duration:** 52 minutes  
**Interviewer:** Alex Martinez (Jewel Product Team)

---

**Interviewer:** Thanks so much for making time today. I really appreciate you all jumping on together. Before we dive in, maybe we could do quick intros? Sarah, do you want to start us off?

**Sarah Chen (Director of Engineering Recruiting):** Yeah, absolutely. So I'm Sarah, I've been at Stripe for about three and a half years now. I lead the engineering recruiting team here. We're... let me think, we're about 18 recruiters now focused just on engineering roles. We've grown a lot, obviously Stripe's been growing really fast, so we're hiring across all our offices - San Francisco, New York, Dublin, Singapore. It's been quite a ride.

**Marcus Thompson (Senior Technical Recruiter):** I'm Marcus, I've been here for two years. I focus mostly on our payments infrastructure roles, which is kind of Stripe's bread and butter, right? So that's backend engineers, platform engineers, folks who work on our core APIs. Before Stripe I was at Square, so I've been in fintech recruiting for about six years total.

**Priya Patel (Recruiting Operations Manager):** And I'm Priya. I actually just hit my one-year anniversary at Stripe last month. I came from Airbnb where I was doing similar recruiting ops work. Here I own all our recruiting tooling, our data and analytics, and basically making sure the team has what they need to hit our hiring goals. So I'm the one who gets all the complaints when things break. *laughs*

**Interviewer:** *laughs* Well hopefully we're not adding to those complaints today. So Sarah, maybe you could give me a sense of the scale - what does recruiting look like at Stripe right now?

**Sarah Chen:** Sure, so we're filling about 45 to 50 engineering roles per quarter right now, which is actually down from last year - we were at like 65-ish per quarter in 2023. We're being more thoughtful about growth now, more strategic. But it's still a pretty aggressive clip. And the roles are incredibly diverse. We're not just hiring one type of engineer. We've got infrastructure, we've got product engineering, machine learning, security, risk... Marcus can probably speak to this better, but even within something like "payments infrastructure" there are really different skill sets we're looking for.

**Marcus Thompson:** Yeah, exactly. Like, when someone sees "Stripe is hiring backend engineers," they might think it's all the same, but it's really not. I mean, we might have a role for someone to work on our core payment processing APIs - that person needs to understand distributed systems, high availability, you know, the transaction volumes we're dealing with. But then we also have roles that are more on the platform side where we need someone who really gets compliance, regulatory requirements, PCI-DSS. And then we have fraud and risk engineering where it's like, yeah, you need to be a strong backend engineer, but you also need to think like a security person or even like a data scientist in some ways. These are really different candidates.

**Interviewer:** That's really interesting. So how do you handle that in your sourcing today? Walk me through your current tech stack.

**Priya Patel:** So we're on Greenhouse for our ATS, which I think you already knew. We've been on Greenhouse for... probably four years now? Maybe longer. And then for sourcing, it's kind of a mixed bag. We have the Greenhouse bundled AI sourcing credits - I think it's 200 credits per recruiter per month. Some people use that, some people don't. We also have a Jewel license, which honestly the power users on the team love. And then...

**Marcus Thompson:** Some people are using Juicebox.

**Priya Patel:** Right, yeah. Some folks discovered Juicebox has a free tier and they started using that for certain roles. Which is fine, but it makes my reporting a nightmare because I can't see what people are doing in there.

**Sarah Chen:** And LinkedIn Recruiter, of course. We have corporate licenses for that.

**Interviewer:** Okay, so Greenhouse ATS, Greenhouse AI sourcing credits, Jewel, some Juicebox, and LinkedIn. That's... that's a lot. How does the team decide what to use when?

**Marcus Thompson:** *laughs* That's a great question. Honestly? It depends on who you ask. I pretty much live in Jewel for my sourcing. I've been using it for probably a year and a half now, and I just... I can't imagine going back. The saved searches alone are worth it for the kind of recruiting I do.

**Sarah Chen:** Marcus is our Jewel power user. He's like an evangelist for it.

**Marcus Thompson:** I mean, I don't want to sound like a commercial for you guys, but it's true. When you're recruiting for the kind of specialized roles I'm working on, I need to be able to create really specific filters and save them. Like, I have one saved search for backend engineers with fintech experience - it's filtering for people who've worked at payment companies, who know certain technologies, who have experience with high-scale transaction processing. Then I have a completely different saved search for platform engineers who need compliance backgrounds. The candidate profiles look totally different.

**Interviewer:** Tell me more about that. What makes those searches so different?

**Marcus Thompson:** Okay, so for the fintech backend role, I'm looking at companies like Square, PayPal, Adyen, Coinbase. I'm filtering for skills like Kafka, Redis, PostgreSQL at scale. I want to see people who talk about throughput and latency in their LinkedIn summaries. But for the platform compliance role, I'm looking at people who might have worked at banks or financial institutions. I'm looking for keywords like PCI, SOC 2, regulatory frameworks. I care less about the specific tech stack and more about whether they've built systems that had to pass audits. These are just fundamentally different candidate profiles, but they both roll up under "backend engineer" or "platform engineer" in our job descriptions.

**Priya Patel:** And then he has another set of searches for the fraud engineering roles, which are different again.

**Marcus Thompson:** Right, exactly. For fraud, I'm looking at people with security backgrounds, people who've worked on anomaly detection, sometimes people coming from data science who want to move more into engineering. It's a different pool entirely.

**Interviewer:** And you're managing all these different saved searches in Jewel?

**Marcus Thompson:** Yeah, I probably have... God, I don't know, maybe 15 different saved searches for my various roles? And I can just toggle between them depending on what I'm working on. It makes my life so much easier.

**Sarah Chen:** The rest of the team has varying levels of sophistication with this stuff. Some people are more like Marcus, they've really built out their sourcing systems. Other people are still pretty dependent on inbound or they're just doing basic LinkedIn searches.

**Interviewer:** What about the Greenhouse AI sourcing credits? You mentioned those. Who's using those?

**Sarah Chen:** Honestly, not many people anymore.

**Priya Patel:** Yeah, we've had a lot of frustration with those. The biggest issue is email bounce rates. We were seeing like 30-35% bounce rates on the email addresses from Greenhouse sourcing.

**Marcus Thompson:** It's bad. I tried it when it first came out, and I'd send these carefully crafted outreach messages to like 20 people, and a third of them would bounce. After a while I was just like, this is a waste of my time. The data's too stale.

**Priya Patel:** And it's frustrating because from a budget perspective, those credits are already bundled into our Greenhouse contract. Like, we're paying for them whether we use them or not. But if the data quality isn't there...

**Sarah Chen:** It's that classic thing where free isn't actually free if it doesn't work. We'd rather pay for something that actually gets us results.

**Interviewer:** That's a really good point. So the Greenhouse sourcing - high bounce rates, stale data. What else isn't working about it?

**Marcus Thompson:** The filtering just isn't sophisticated enough for what we need. Like, I can't create the kind of nuanced searches I was talking about. It's pretty basic - you can filter by job title, company, location, skills. But I can't save multiple search profiles for different types of roles. I can't build the complexity I need.

**Priya Patel:** From an ops perspective, I also can't get good analytics out of it. With Jewel, I can see what searches are performing, what sources are converting, all that stuff. With the Greenhouse sourcing, it's kind of a black box.

**Interviewer:** Interesting. And what about Juicebox? You mentioned some folks are using that?

**Sarah Chen:** Yeah, so Juicebox has this free tier that's actually pretty good for basic sourcing. I think a few people on the team discovered it and started using it for simpler roles where you don't need as much sophistication. Like, if we're hiring a frontend engineer and it's a pretty standard skill set, someone might use Juicebox to find candidates.

**Marcus Thompson:** I've tried it a couple times. It's fine for what it is. The contact data seems decent. But again, it doesn't have the saved search capability I need, and I think the free tier is limited to like 50 credits a month? Something like that? So it's not really scalable for the volume we're doing.

**Priya Patel:** And from my perspective, I have no visibility into it. People are using it off the books basically. I can't track it, can't report on it, can't see if it's actually effective. So that's not ideal.

**Interviewer:** Yeah, I can see how that would be challenging from an ops standpoint. So let me make sure I'm understanding. You've got Greenhouse with AI sourcing that you're not really using because of data quality issues. You've got Jewel which your power users love, especially for complex searches. You've got some rogue Juicebox usage. And LinkedIn Recruiter. What's working and what's not?

**Sarah Chen:** Jewel is definitely working for the people who've invested time in learning it. Marcus is the obvious example, but we have maybe four or five other recruiters who are pretty sophisticated with it. They love the CRM integration, the saved searches, the analytics. For them, it's a game changer.

**Marcus Thompson:** The analytics are huge. I can see which of my saved searches are actually producing candidates who make it through the funnel. So I can optimize my sourcing over time. Like, I learned that my fraud engineering search that focuses on security companies performs way better than the one that focuses on data science backgrounds. That's actionable intel.

**Priya Patel:** Yeah, from a reporting standpoint, Jewel gives me what I need. I can see source of hire, I can see pipeline metrics, I can tie sourcing activity to outcomes. That's really valuable for me when I'm talking to Sarah about budget or headcount or tool decisions.

**Sarah Chen:** LinkedIn is... LinkedIn. *laughs* It's expensive but necessary. We're paying like, I don't even want to say how much, but it's a lot for our license count. And it's good for certain things, but it's not perfect.

**Interviewer:** What are the pain points with LinkedIn?

**Marcus Thompson:** The filtering limitations are frustrating. Like, I can't really build the complex Boolean searches I want to build. And InMail response rates have gone down a lot over the years. I think candidates are just getting so much outreach on LinkedIn that it's harder to break through.

**Sarah Chen:** And the integration with Greenhouse is okay but not great. There's a lot of manual data entry still.

**Priya Patel:** Yeah, the data flow between systems is definitely a pain point. We're doing a lot of copy-pasting and manual updates. It's inefficient.

**Interviewer:** Let's dig into pain points a bit more. Beyond what you've already mentioned, what are the biggest challenges you're facing with sourcing right now?

**Marcus Thompson:** For me, it's really about being able to target the right candidates for these specialized roles. Like, I feel like I've built a pretty good system with my saved searches in Jewel, but even then, I'm spending a lot of time refining and tweaking. Because if my filters are too broad, I'm drowning in irrelevant candidates. But if they're too narrow, I'm missing people. Finding that balance is an art.

**Sarah Chen:** And that's with you being one of our most experienced recruiters. Imagine someone newer to the team or someone who's not as technical. They really struggle with this.

**Interviewer:** How do you onboard new recruiters into your sourcing system?

**Sarah Chen:** *laughs* That's... that's a challenge. Honestly, it's pretty ad hoc right now. We don't have a formal training program. Usually, I'll pair a new recruiter with someone more experienced, and they'll kind of shadow them for a few weeks. Marcus has been great about sharing his saved searches with people.

**Marcus Thompson:** Yeah, I mean, I'm happy to help. But my saved searches are really specific to the kinds of roles I recruit for. Someone working on frontend roles or ML roles, my searches aren't going to be that useful for them. They need to build their own.

**Priya Patel:** And that takes time. Like, it might take someone a month or two to really get proficient with Jewel and build out their search library. In the meantime, they're probably just using LinkedIn or waiting for inbound applications.

**Interviewer:** So there's a ramp-up time issue. What else?

**Sarah Chen:** Budget is always a topic. We're spending a lot on recruiting tools, and I'm constantly being asked to justify it. LinkedIn is the biggest line item, but Jewel isn't cheap either. And then we have the Greenhouse AI credits that we're not really using but we're paying for. CFO asks me regularly if we can consolidate or cut costs.

**Priya Patel:** The question I get is like, why do we need Jewel if we have Greenhouse sourcing? And the answer is that Greenhouse sourcing doesn't meet our needs, but that's a hard conversation because from a finance perspective, we're paying for two sourcing tools.

**Marcus Thompson:** But the ROI on Jewel is there. I filled twelve roles last quarter, and probably nine of them came from my Jewel sourcing. That's real impact.

**Sarah Chen:** I agree, but we still need to be thoughtful about costs. Especially as the company is being more disciplined about spending overall. It's not just recruiting - it's everywhere.

**Interviewer:** That makes sense. What about the data staleness issue you mentioned with Greenhouse? Is that a problem with other tools too?

**Marcus Thompson:** Jewel's data seems better. I'm not seeing the same bounce rates. Maybe like 10-15% bounces, which feels more normal. People change jobs, email addresses get deactivated, that's just part of recruiting. But 30% is unacceptable.

**Priya Patel:** We actually did an analysis of this a few months ago. I pulled data on email bounce rates by source. Greenhouse sourcing was 33%, Jewel was 12%, LinkedIn was like 8%. So there's a clear difference in data quality.

**Interviewer:** That's a significant difference. Do you have a sense of why Greenhouse data is more stale?

**Marcus Thompson:** No idea, honestly. I assume it's about how frequently they're updating their database? But I don't really know.

**Priya Patel:** It's opaque. We don't get a lot of visibility into where Greenhouse is pulling the data from or how fresh it is.

**Interviewer:** Okay. What about the actual candidate experience? How do you think about outreach and engagement?

**Marcus Thompson:** I spend a lot of time on personalization. Like, I'm not sending templated messages. I'm looking at someone's background and crafting a message specifically for them about why they'd be a good fit for this particular role at Stripe. That takes time, but it's worth it because my response rates are pretty good.

**Sarah Chen:** Marcus's response rates are definitely above team average. I think he's at like 28% response rate on cold outreach?

**Marcus Thompson:** Something like that, yeah. It varies by role, but that's probably about right on average.

**Interviewer:** That's pretty good. What do you attribute that to?

**Marcus Thompson:** Part of it is Stripe's brand - people want to work here. Part of it is the personalization. And part of it is that I'm reaching out to the right people. Because I've refined my searches so much, I'm not spamming people with irrelevant opportunities. I'm only reaching out when I really think there's a match. Candidates can tell the difference.

**Sarah Chen:** Quality over quantity.

**Marcus Thompson:** Exactly.

**Interviewer:** Have you looked at other sourcing tools? What else is out there that you've considered or tried?

**Sarah Chen:** We've looked at a bunch of stuff over the years. What haven't we tried? *laughs*

**Priya Patel:** I maintain a spreadsheet of all the sourcing tools in the market. It's like 40 different tools at this point.

**Interviewer:** Wow. Which ones have you seriously evaluated?

**Sarah Chen:** We did a trial of SeekOut maybe two years ago? That was before my time, but I saw the notes. It didn't stick.

**Priya Patel:** Yeah, I think the feedback was that it was expensive and the ROI wasn't clear compared to what we were already doing with LinkedIn and Jewel.

**Marcus Thompson:** I tried HireEZ for a couple months last year. It was... fine? The AI matching stuff was interesting but not amazing. It felt like it was trying to do too much, like it wanted to automate the whole process, but I don't want that. I want tools that make me more efficient, not tools that try to replace my judgment.

**Interviewer:** That's an interesting distinction. Say more about that.

**Marcus Thompson:** Like, some of these tools are positioning themselves as "AI will find all the candidates for you, you just sit back and review them." But that's not how I want to work. I want to be actively sourcing. I want control over my search criteria. I want to understand why I'm seeing certain candidates. The black box AI thing doesn't work for me.

**Sarah Chen:** Although, to be fair, some people on the team might want more of that automation. It depends on your recruiting style.

**Marcus Thompson:** Sure, yeah. I'm probably more hands-on than average.

**Interviewer:** What about other tools? Have you looked at Gem, Ashby, anything else?

**Priya Patel:** We looked at Gem briefly. I think the CRM capabilities are strong, but we already have CRM functionality in Jewel, and we didn't want to switch our whole ATS. Gem really wants you to be all-in on their platform.

**Sarah Chen:** Ashby is interesting. We've had demos. The analytics look really good. But again, it's an ATS play, and we're pretty locked into Greenhouse at this point. Our engineering team has built a lot of integrations and workflows around Greenhouse. Switching ATSs would be a massive undertaking.

**Interviewer:** So you're committed to Greenhouse as your ATS for the foreseeable future?

**Sarah Chen:** Yeah, I think so. I mean, never say never, but it would take a lot for us to switch. The switching costs are just really high.

**Priya Patel:** And honestly, Greenhouse does what we need from an ATS perspective. The limitations are more on the sourcing side.

**Interviewer:** Got it. So if you're sticking with Greenhouse as your ATS, what would make your sourcing more effective? If you could wave a magic wand, what would change?

**Marcus Thompson:** For me, it would be making it easier to manage all these different search profiles. Like, I love that I can save searches in Jewel, but I have so many now that it's getting unwieldy. I wish there was a way to organize them better. Like, folders or tags or something. So I could have all my payment infrastructure searches in one place, all my fraud engineering searches in another place.

**Sarah Chen:** That's a good point. Better organization of saved content.

**Marcus Thompson:** And it would be amazing if I could share my searches with the team in a more structured way. Like, if I've built a really good search for fintech backend engineers, and then we hire another recruiter to work on those roles, it would be great if they could just inherit my search library. Right now, I'd have to manually walk them through each search and help them rebuild it.

**Priya Patel:** From an ops perspective, I'd love better benchmarking. Like, what's good performance for a given role or search? How do our metrics compare to other companies? I don't have a lot of external context, so it's hard to know if we're doing well or if there's room for improvement.

**Sarah Chen:** More integration between tools would be huge. The amount of time the team spends copying data from one system to another is significant. If everything just flowed seamlessly, that would save us so much time.

**Interviewer:** When you say integration, what specifically do you mean?

**Sarah Chen:** Like, if I find a candidate in Jewel and I want to add them to Greenhouse, there's some integration there, but it's not perfect. I still have to do some manual work. Or if I want to see my LinkedIn activity in my Jewel analytics, I can't really do that. Everything is siloed.

**Priya Patel:** Yeah, the data infrastructure is fragmented. I spend a lot of time in Greenhouse, then in Jewel, then in LinkedIn, trying to piece together a complete picture. It's inefficient.

**Interviewer:** What about the cost side? You mentioned budget is always a topic. How do you think about the trade-offs?

**Sarah Chen:** I mean, recruiting tools are expensive, but so is the cost of not filling roles. If we can't hire fast enough, that slows down the whole company. So I'm willing to invest in tools that make us more effective. But I do need to show ROI.

**Priya Patel:** The way I think about it is cost per hire. If a tool costs us $50,000 a year but it helps us fill 50 roles that we otherwise wouldn't have filled, and each of those roles generates millions in value for Stripe, the ROI is obvious. But I need to be able to track and measure that, which comes back to the analytics piece.

**Marcus Thompson:** And some of it is just about recruiter productivity. If I can use Jewel to fill 12 roles a quarter instead of 8 roles, that's significant. That's 50% more productivity. You'd hire another recruiter to get that kind of increase, and a recruiter costs way more than a software license.

**Interviewer:** That's a great point. So the value is in the productivity gains.

**Marcus Thompson:** Yeah, exactly. And in the quality of hires too. If I'm able to target the right candidates with my specialized searches, I'm more likely to hire people who are really good fits and who stay at the company. Reducing regrettable attrition is valuable.

**Sarah Chen:** Although that's harder to measure. *laughs*

**Marcus Thompson:** True, that's more of a long-term thing.

**Interviewer:** So thinking about the future, what's your decision-making process for tools? How do you evaluate whether to adopt something new or change what you're using?

**Sarah Chen:** Honestly, a lot of it comes from the team. If recruiters are telling me they need something or something isn't working, I take that seriously. I don't want to be the person dictating tools from on high. The recruiters are the ones using this stuff every day.

**Priya Patel:** We also do periodic reviews. Like, once or twice a year, I'll pull together usage data and performance metrics for all our tools, and we'll have a conversation about what's working and what's not.

**Sarah Chen:** And then there's the budget cycle. When we're planning for the next fiscal year, we look at all our expenses and make decisions about what to renew, what to cut, what to add.

**Interviewer:** Are there any specific changes you're considering for the next budget cycle?

**Sarah Chen:** We're definitely talking about the Greenhouse sourcing credits. Like, if we're not using them, can we downgrade our Greenhouse plan to something that doesn't include those? I don't know if that's possible, but it's worth exploring.

**Priya Patel:** And we might expand our Jewel license. Right now, I think we have maybe 10 licenses? But there are 18 recruiters on the team, so not everyone has access. If we're seeing good results from the people who are using it, maybe it makes sense to roll it out more broadly.

**Marcus Thompson:** I'd love that. I feel like if everyone had access to the tools I have, the whole team would be more effective.

**Sarah Chen:** The question is training and adoption. Just giving someone a license doesn't mean they'll use it well. We'd need to invest in onboarding and training.

**Interviewer:** That makes sense. Is there anything else you think I should know about your sourcing challenges or needs?

**Marcus Thompson:** I think we covered a lot of ground. The main thing for me is just the complexity of the roles we're hiring for. Stripe is unique in that we have so many specialized needs. Payment infrastructure is not a generic thing. And within that, we have all these different subspecialties. Having tools that can handle that complexity is really important.

**Sarah Chen:** And we're growing, which means the team is growing, which means we need scalable solutions. What works when you have 10 recruiters might not work when you have 30.

**Priya Patel:** Yeah, thinking about scale is important. Both in terms of hiring volume and team size.

**Interviewer:** Well, this has been incredibly helpful. I really appreciate you all taking the time and being so candid about what's working and what's not. This is exactly the kind of insight we need.

**Sarah Chen:** Of course, happy to help. And honestly, it's useful for us too to step back and talk through this stuff. Sometimes you're just heads down doing the work, and you don't take time to reflect on the bigger picture.

**Marcus Thompson:** Yeah, agreed. Let us know if you need anything else.

**Priya Patel:** And if any of this leads to product improvements, we'd love to be beta testers. *laughs*

**Interviewer:** *laughs* Noted. Thanks again, everyone.

---

**End of Transcript**  
**Word Count:** 4,000

