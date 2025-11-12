# Tesla Interview Transcript
**Date:** March 22, 2024
**Company:** Tesla (Prospect)
**Attendees:** 
- Victoria Martinez (VP Engineering Talent Acquisition)
- James Wilson (Director of Technical Recruiting)
- Nina Patel (Recruiting Operations Manager)

**Interviewer:** Sarah Kim (Jewel Product Team)

---

## Opening

**Interviewer:** Thanks so much for taking the time today, everyone. I know you're all busy, so I really appreciate it. Just to level set, we're doing some discovery work to understand how engineering teams are thinking about sourcing - what's working, what's broken, where the opportunities are. This is really just a learning conversation, nothing formal. Does that work for everyone?

**Victoria Martinez (VP Engineering Talent Acquisition):** Yeah, absolutely. We're always happy to talk about recruiting. It's kind of our favorite topic, as you might imagine.

**James Wilson (Director of Technical Recruiting):** Ha, yeah. And honestly, we're in the market for better sourcing solutions, so this is well-timed.

**Nina Patel (Recruiting Operations Manager):** I should mention upfront, I'm not a recruiter by background. I came from the business side and moved into recruiting ops about two years ago. So I think about things from a systems and data perspective more than the day-to-day recruiting side.

**Interviewer:** That's perfect, actually. We want different perspectives. So maybe to start, can you give me a sense of the scale we're talking about? How big is the recruiting team, what's your hiring volume?

**Victoria Martinez:** Sure. So we've got about 85 people on the talent acquisition team globally, and I'd say roughly 55 of those are focused on engineering and technical roles. The rest are corporate, manufacturing operations, sales, that kind of thing. On the engineering side specifically, we're hiring between 120 to 150 people per quarter.

**James Wilson:** And that's across a really wide range of roles, which is part of the challenge. We've got software engineers working on the autopilot stack, embedded systems engineers working on vehicle control systems, manufacturing software engineers working on factory automation, battery technology engineers, you name it.

**Interviewer:** Wow, that's a lot of diversity. What does your tech stack look like for managing all of that?

**Nina Patel:** So we're on Workday for everything HR-related - that's our HRIS, our ATS, the whole suite. We've been on it for about three years now. For sourcing specifically, we're heavily reliant on LinkedIn Recruiter. We have about 40 seats. And then we've got some folks experimenting with other tools on the side, but nothing standardized.

**Victoria Martinez:** The Workday decision was made at the corporate level, not by TA. It's a fine ATS, honestly. Not the best, not the worst. But their sourcing and AI capabilities are pretty weak, so we've had to supplement with other tools.

**James Wilson:** Yeah, we tried Workday's talent intelligence thing and it was... not good. Like, laughably bad for technical recruiting.

**Interviewer:** I've heard that from others. So LinkedIn is doing the heavy lifting on sourcing?

**Nina Patel:** Basically, yeah. LinkedIn Recruiter is what everyone knows and uses. We've looked at other tools - we did a trial with Juicebox recently, and some of our recruiters have their own contact data subscriptions like RocketReach or Apollo. But there's no unified strategy right now, which is something we're trying to fix.

## Current State Discussion

**Interviewer:** Okay, so let's dig into the current state. Walk me through a typical sourcing scenario. How does it work today?

**James Wilson:** Alright, so let's say we get a req for a senior embedded systems engineer for one of our vehicle control teams. The hiring manager usually has a pretty good sense of what they want because these are specialized roles. We do an intake meeting to nail down the specifics - which vehicle systems they'll be working on, what programming languages, what kind of hardware experience they need, all of that.

**Victoria Martinez:** The intake meetings are critical for us because the technical depth required is so high. If you don't understand the difference between someone who's worked on motor control systems versus battery management systems versus ADAS, you're going to waste a lot of time screening the wrong people.

**Interviewer:** That makes sense. So after the intake, what happens?

**James Wilson:** The req gets assigned to one of our technical recruiters. We've got people specialized by domain - so we have recruiters who focus on autopilot and AI/ML, others who focus on embedded systems and vehicle software, others who focus on manufacturing and factory automation. They know their domains pretty well.

**Nina Patel:** And then they go into LinkedIn and start searching. They'll use a combination of job titles, keywords, company searches, and Boolean strings to find candidates. It's pretty manual. They might spend 5-10 hours a week just searching and reviewing profiles.

**Interviewer:** And how's that working? Are they finding the right people?

**James Wilson:** It depends. For some roles, LinkedIn is great. If we need a software engineer with machine learning experience, there's a lot of people out there and they're relatively easy to find. But for automotive-specific roles, it's harder. The talent pool is more limited, and you really need to understand the nuances.

**Victoria Martinez:** Yeah, and this is where we run into challenges. LinkedIn doesn't really understand automotive engineering. It's optimized for more generic tech roles. So when you're looking for someone with experience in ISO 26262 functional safety or AUTOSAR architecture, you're relying on keywords and hoping people have those things listed on their profiles.

**Interviewer:** Got it. Can you give me a specific example of a recent role that was challenging to source for?

**James Wilson:** Oh, sure. We had a req a couple months ago for a senior embedded software engineer to work on our battery management system. This is the software that monitors cell voltages, manages thermal conditions, predicts battery life, all of that. It's safety-critical stuff.

**Nina Patel:** I remember this one because it took almost four months to fill.

**James Wilson:** Right. So the challenge was, we needed someone who understood both embedded systems - like real-time operating systems, low-level C programming, hardware interfaces - and battery technology. That's a pretty specific combination. Most embedded engineers come from other domains like consumer electronics or aerospace or telecommunications. Battery-specific experience is rare.

**Interviewer:** So how did you source for that?

**James Wilson:** We started by searching for "embedded engineer" plus keywords like "battery," "BMS," "lithium-ion," "power management." We found some people, but a lot of them were hardware engineers, not software. Or they were working on less critical systems, like battery chargers for consumer devices, which is very different from what we needed.

**Victoria Martinez:** We also did company searches. We looked at people from Rivian, Lucid, GM's EV division, LG Energy Solution, battery startups. That helped narrow it down. But even then, you're manually reviewing profiles one by one to figure out if they have the right background.

**James Wilson:** And the thing is, the job title doesn't tell you much. Someone could be called a "Senior Embedded Engineer" but their actual work is completely different depending on the company and team. So you really have to read the job descriptions, look at their projects if they mention any, try to infer what they've actually been doing.

**Interviewer:** That sounds time-consuming.

**James Wilson:** It is. For that particular role, I think our recruiter reviewed probably 200-plus profiles before identifying 30 people to reach out to. And out of those 30, maybe 10 responded, and we got 3 to the phone screen stage. Eventually we hired one of them, but it took a long time.

**Nina Patel:** And that's pretty typical for our more specialized roles. The ratio of profiles reviewed to hires is really high, which means a lot of wasted effort.

**Interviewer:** What about response rates? How are those looking generally?

**James Wilson:** Um, it varies by role and by the market. For autopilot and AI/ML roles, everyone's getting hit up by recruiters constantly, so response rates are maybe 10-15%. For more niche automotive roles, it can be better - maybe 20-25% - because there's less competition.

**Victoria Martinez:** We've also found that our brand helps a lot. People want to work at Tesla, especially on the technical side. So we might get better response rates than a tier-two automotive company. But we're also competing with other high-profile companies, so it's not a slam dunk.

**Interviewer:** And once you get responses, what happens? How are you tracking and managing those conversations?

**Nina Patel:** That's where Workday comes in. Once someone responds and expresses interest, they get added to Workday as a candidate. The recruiter manages the conversation through email or phone, coordinates interviews, all of that within Workday's interface.

**James Wilson:** The challenge is there's a gap between sourcing in LinkedIn and managing in Workday. You're manually moving people between systems, which creates opportunities for things to fall through the cracks. We've definitely had situations where someone was interested but didn't get followed up with because they didn't make it into Workday.

**Nina Patel:** Yeah, the integration between LinkedIn and Workday is not great. There's a way to export and import, but it's clunky and people don't always do it consistently.

**Victoria Martinez:** This is one of the things we're actively looking to improve. We need better workflow integration between sourcing tools and our ATS.

## Pain Points Exploration

**Interviewer:** Okay, so let's go deeper on the pain points. It sounds like there are a few big themes - the specialization of automotive roles, the manual nature of sourcing, integration challenges. What else? What's really frustrating you?

**Victoria Martinez:** Budget is a big one. We're spending over $300K a year on LinkedIn Recruiter alone. That's a significant investment, and we need to make sure we're getting value from it. If there's a better way to source that's more efficient or more cost-effective, we're very interested.

**James Wilson:** And I think the biggest day-to-day frustration is just how much time sourcing takes. Our recruiters are spending 40-50% of their time searching for candidates. That's time they could be spending on candidate experience, hiring manager consultation, interview process optimization, all the other parts of the job that add value.

**Nina Patel:** From an ops perspective, the data visibility is a huge issue. I can't easily track sourcing activity, conversion metrics, or ROI by tool or by recruiter. Everything's in disparate systems. I'm pulling exports from LinkedIn, exports from Workday, trying to stitch them together in Excel or Tableau. It's a mess.

**Interviewer:** Let's dig into the automotive specialization thing more, because that seems really central. You mentioned the battery management system role. Are there other examples where the nuance of the role makes sourcing difficult?

**James Wilson:** Oh yeah, absolutely. Let me give you another one. We hire a lot of machine learning engineers for our autopilot team, right? But "machine learning engineer" is a super broad term. There are people who work on recommendation systems for e-commerce, people who work on natural language processing, people who work on computer vision for autonomous vehicles. Those are very different skillsets.

**Victoria Martinez:** And for autopilot, we specifically need people with computer vision experience - object detection, semantic segmentation, sensor fusion, ideally with some exposure to autonomous driving or robotics. But if you just search for "machine learning engineer," you get everyone.

**James Wilson:** Right. So we've learned over time to add more specific keywords - "computer vision," "YOLO," "object detection," "lidar," "radar," company names like Waymo or Cruise or Zoox. But it's still not perfect. You're still manually filtering through a lot of profiles.

**Interviewer:** So it sounds like you're building up this institutional knowledge of how to search for different types of roles, but it's not codified anywhere?

**James Wilson:** Exactly. It's in people's heads, or maybe in a shared document somewhere that doesn't always get updated. If a recruiter leaves or moves to a different role, that knowledge leaves with them. Or if a new recruiter joins, they have to learn it from scratch.

**Nina Patel:** This is a huge problem from my perspective. We're not capturing and institutionalizing that knowledge. Every recruiter is kind of doing their own thing, which leads to inconsistency and inefficiency.

**Interviewer:** If you could design a solution to this problem, what would it look like?

**Victoria Martinez:** I think we need a way to define different filter sets or search strategies for different types of roles. So you'd have one for embedded systems engineers with automotive experience, another for machine learning engineers with computer vision expertise, another for manufacturing software engineers with robotics background, another for battery technology engineers. And those would be saved, shared across the team, and refined over time.

**James Wilson:** Yeah, and ideally the system would help you choose which filter set to use based on the role. Like, if I'm hiring for the autopilot perception team, it would suggest the computer vision ML engineer filter. If I'm hiring for the battery team, it would suggest the battery systems engineer filter. That kind of intelligence.

**Nina Patel:** And it needs to be flexible enough that recruiters can tweak and customize, but standardized enough that we have consistency. It's a balance.

**Interviewer:** That makes a lot of sense. Are there other role categories where you see this same pattern?

**Victoria Martinez:** Manufacturing is a big one. We hire software engineers to work on factory automation, and that's a really specific domain. You need people who understand industrial control systems, PLCs, robotics, real-time systems. But they might come from manufacturing, they might come from industrial automation companies like Siemens or Rockwell, or they might come from robotics startups. The background is all over the place.

**James Wilson:** And then within that, there are sub-specialties. There are people who work on robot motion planning and control, people who work on machine vision for quality inspection, people who work on MES systems for production tracking. Those are different skillsets that all fall under "manufacturing software engineer."

**Interviewer:** This is really helpful. What other pain points should I know about?

**Nina Patel:** Contact data is a big one. LinkedIn doesn't give you email addresses, so recruiters are constantly trying to find people's emails through other means. We've had recruiters using Hunter, Apollo, RocketReach, even just manually Googling people. It's inefficient and creates a patchwork of tools.

**Victoria Martinez:** Yeah, and there's a cost to that. Some of those contact data tools are free with limits, but if you want unlimited usage, you're paying extra. So on top of LinkedIn, we're paying for these other tools.

**James Wilson:** And sometimes the contact data is wrong or outdated. You send an email and it bounces, or it goes to their old company address. So you're still not guaranteed to reach them.

**Interviewer:** What about data staleness more generally? Is that an issue?

**Nina Patel:** Oh yeah, absolutely. LinkedIn profiles are notoriously out of date. We'll reach out to someone who looks perfect, and they respond saying they left that company a year ago. Or their skills list hasn't been updated since they graduated. It's frustrating.

**James Wilson:** I'd say probably 25-30% of the profiles we look at have some kind of outdated information. It's not always a dealbreaker - sometimes they've moved to an even more relevant company - but it adds noise to the process.

**Interviewer:** How do you deal with that? Is there a way to verify information before reaching out?

**Nina Patel:** Not really. We sometimes cross-reference with other sources - like, if someone has a GitHub profile, we'll look at that. Or if they're active on Twitter or LinkedIn posts, that can give you a sense of what they're currently working on. But there's no systematic way to do it.

**Victoria Martinez:** This is another area where AI could potentially help. If a tool could automatically cross-reference multiple data sources and give you a confidence score on how up-to-date a profile is, that would be valuable.

## Competitive Landscape

**Interviewer:** That's a good segue. Let's talk about other tools you've looked at or are considering. You mentioned Juicebox earlier. What else is on your radar?

**Nina Patel:** So we did a trial with Juicebox about two months ago. We had five recruiters use it for four weeks. The feedback was mixed. Some people liked the AI-generated candidate lists, others thought the quality was inconsistent.

**James Wilson:** Yeah, I was one of the people testing it. It's interesting tech, but it's not quite there yet. The AI would sometimes give you really good candidates, and other times it would give you people who were completely off-base. And you couldn't always tell why it made the choices it made, which made it hard to trust.

**Victoria Martinez:** The black box problem. If I can't understand how the AI is making decisions, it's hard to rely on it for something as important as hiring.

**Interviewer:** That makes sense. What else have you looked at?

**Nina Patel:** We've done demos with HireEZ, SeekOut, and Findem. They're all in the same general category - multi-source candidate aggregation with some AI matching capabilities. They all have pros and cons.

**James Wilson:** HireEZ felt like a more powerful version of LinkedIn. More data sources, better filtering, some nice features. But the interface was clunky and the learning curve was steep. I'm not sure our team would adopt it.

**Victoria Martinez:** SeekOut has good diversity analytics, which is important to us. We're trying to improve diversity in our engineering org, and having better visibility into candidate demographics is helpful. But the sourcing quality didn't feel dramatically better than LinkedIn.

**Nina Patel:** Findem was interesting because they claim to have more robust AI and better data accuracy. The demo was impressive, but we haven't tested it hands-on yet. It's on our list to evaluate.

**Interviewer:** What would make you choose one of these tools over LinkedIn?

**Victoria Martinez:** It would have to be a significant improvement in one or more dimensions - better candidate quality, faster sourcing, better integration with Workday, lower cost, or a combination of those. It can't just be marginally better. It needs to be clearly better to justify the change management effort.

**James Wilson:** And it has to work for automotive engineering roles, which is not a given. A lot of these tools are optimized for generic software engineering or sales roles. If they can't handle the nuance of our domain, they're not useful to us.

**Nina Patel:** Yeah, that's a key point. When we evaluate tools, we always ask: can this handle battery engineers? Can it handle embedded systems engineers with automotive experience? Can it handle manufacturing software engineers? If the answer is no or unclear, it's probably not going to work for us.

**Interviewer:** Have any of the tools you've looked at specifically addressed the persona or filter set challenge you mentioned earlier?

**James Wilson:** Not really, no. Some of them have saved search features where you can save a set of filters, but it's pretty basic. It's not like they're helping you think through the different personas within a role category and create tailored strategies for each one.

**Victoria Martinez:** That would actually be a differentiator if someone did it well. If a tool could help us define and manage different candidate personas within a role type and then source accordingly, that would be really valuable.

**Interviewer:** Good to know. What about integration? You mentioned that's important. How do the tools stack up there?

**Nina Patel:** Most of them claim to integrate with Workday, but the quality varies. Some have native integrations that are pretty smooth, others are using Zapier or APIs that require custom configuration. And even the native integrations don't always sync everything you want - like, they'll sync the candidate record but not the sourcing activity or the source attribution.

**Victoria Martinez:** Yeah, and this matters a lot. If we can't track where candidates came from and how they moved through the funnel, we can't measure ROI. And if I can't measure ROI, I can't justify the investment.

**Interviewer:** That's fair. What about pricing? How do these tools compare to LinkedIn?

**Nina Patel:** LinkedIn is expensive, but it's also a known quantity. We're paying roughly $8,000 per seat per year, so with 40 seats, that's $320K annually. Some of the alternatives are cheaper on a per-seat basis - maybe $5,000 to $6,000 per seat - but then you have implementation costs, training costs, and the risk that it doesn't work as well.

**Victoria Martinez:** We're not just optimizing for the cheapest option. We're optimizing for the best value. If a tool costs the same as LinkedIn but works significantly better, we'll pay for it. If it costs more but delivers meaningfully better results, we'll consider it. It's about ROI, not just cost.

**James Wilson:** And we're also thinking about opportunity cost. If a tool saves each recruiter 5 hours a week of sourcing time, that's 5 hours they can spend on higher-value activities. What's that worth? Probably more than the cost of the tool.

## Future Needs & Closing

**Interviewer:** That's a great way to think about it. So looking forward, what would the ideal sourcing solution look like for Tesla? If you could wave a magic wand, what would you build?

**Victoria Martinez:** I think we've touched on a lot of it. First, it would have deep domain understanding of automotive and hardware engineering roles, not just software. It would understand the difference between battery engineers and embedded engineers and manufacturing engineers and all the sub-specialties within those categories.

**James Wilson:** Second, it would let us define and save different filter sets or personas for different types of roles. And it would be smart enough to suggest which persona to use based on the role description or the hiring manager's requirements. That codification of institutional knowledge.

**Nina Patel:** Third, it would have built-in contact data that's accurate and up-to-date. No more bouncing between LinkedIn and Hunter and Apollo. And it would integrate seamlessly with Workday so there's one source of truth and we can actually track sourcing metrics.

**Victoria Martinez:** Fourth, it would have AI that's transparent and trustworthy. I should be able to understand why it's recommending certain candidates and adjust the parameters if needed. No black boxes.

**James Wilson:** And fifth, it would help with candidate engagement. Like, track when we've reached out to someone before, what they responded to, what their interests are. Make it easier to build relationships over time rather than just one-off cold outreach.

**Interviewer:** Those are all great. What about analytics? What would you want to see there?

**Nina Patel:** I'd want to see conversion metrics at every stage of the funnel. How many candidates did we review? How many did we reach out to? How many responded? How many got to phone screen? How many got to onsite? How many got offers? How many accepted? And I'd want to slice that by role type, by recruiter, by source, by time period. All of it.

**Victoria Martinez:** And I'd want to see time-to-fill analytics that break out sourcing time specifically. How much time are we spending at each stage of the process? Where are the bottlenecks? That would help us optimize not just sourcing but the whole recruiting process.

**James Wilson:** Yeah, and I'd love to see quality-of-hire metrics tied back to sourcing. Like, the candidates we sourced through method A, how are they performing six months or a year after hire? That feedback loop would be really valuable.

**Interviewer:** Those are all really insightful. So thinking about your decision-making process, how do you actually evaluate and adopt new tools?

**Victoria Martinez:** We typically start with a demo to see if it's even in the ballpark. If it looks promising, we'll do a trial with a small group of recruiters - usually 5 to 10 people - for 4 to 8 weeks. We gather feedback, look at the data, and assess whether it's actually improving outcomes.

**Nina Patel:** And in parallel, I'm doing the technical evaluation. Does it integrate with our systems? What's the data security posture? Do they have the right certifications? What's the support model? All the operational stuff.

**James Wilson:** If the trial goes well and the technical evaluation is positive, we'll put together a business case. What's the cost? What's the expected ROI? How many people would use it? What's the ramp time? And we'll present that to Victoria and ultimately to our CFO for approval.

**Victoria Martinez:** The bar is pretty high, honestly. We're not going to adopt a new tool just because it's shiny or trendy. It has to solve a real problem and deliver measurable results. But if it does, we'll move quickly.

**Interviewer:** What kind of timeline are you thinking for making a decision?

**Victoria Martinez:** We're hoping to have something in place by Q3. We're in active evaluation mode right now, so we'd want to finish trials by end of Q2, make a decision in early Q3, and roll it out by late Q3 or early Q4.

**James Wilson:** Yeah, and we'd probably start with a pilot again even after we've decided. Maybe 10-15 recruiters for the first month, work out any issues, and then expand to the full team.

**Nina Patel:** That's our standard rollout approach. We don't like big bang changes. It's better to phase it in, learn as we go, and adjust.

**Interviewer:** Makes sense. What else should I know about your evaluation criteria or priorities?

**Victoria Martinez:** I think the most important thing is that it needs to work for our specific use case. We're not a typical tech company. We're doing automotive engineering, hardware engineering, manufacturing engineering. If a tool can't handle that complexity, it doesn't matter how good it is for software engineering roles.

**James Wilson:** And we need to see proof. Case studies from other automotive or hardware companies would be really compelling. Show us how it's worked for someone similar to us.

**Nina Patel:** Yeah, and be transparent about limitations. If there are things the tool can't do or areas where it's still improving, tell us. We'd rather know upfront than be surprised later.

**Interviewer:** Those are all really fair points. Anything else you'd want from a vendor or partner?

**Victoria Martinez:** Good customer support and a willingness to iterate based on feedback. We know no tool is perfect out of the box. But if we're going to commit to a partnership, we need to know the vendor is going to work with us to make it better over time.

**James Wilson:** And training and enablement resources. If we're asking 50-plus recruiters to adopt a new tool, we need good training materials, office hours, support documentation, all of that. The easier you make it to learn and adopt, the better.

**Nina Patel:** And regular product updates. We don't want to adopt something that's going to stagnate. We want to know there's a roadmap and the product is going to keep improving.

**Interviewer:** All of that makes a lot of sense. Well, I think I've learned a ton today. This has been incredibly valuable. Is there anything else you want to share or any questions for me?

**Victoria Martinez:** I don't think so. This was helpful for us too, actually. It's good to talk through what we're looking for and what our priorities are. It clarifies our thinking.

**James Wilson:** Yeah, agreed. And if you have ideas or solutions that address some of these pain points, we're all ears. We're definitely in the market.

**Nina Patel:** Especially the persona filtering thing. If you crack that, it would be a huge differentiator.

**Interviewer:** Noted. Well, thank you all so much for your time. I'll take all of this back, synthesize it, and we can reconnect in a few weeks.

**Victoria Martinez:** Sounds great. Thanks, Sarah.

**James Wilson:** Thanks.

**Nina Patel:** Appreciate it, thanks.

