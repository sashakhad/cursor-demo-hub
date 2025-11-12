# Cloudflare Interview Transcript
**Company:** Cloudflare  
**Attendees:** Michael Chang (VP of Engineering Recruiting), Lisa Anderson (Senior Technical Recruiter - Infrastructure), Kevin Park (Director of Recruiting Operations)  
**Date:** March 20, 2024  
**Duration:** 55 minutes  
**Interviewer:** Alex Martinez (Jewel Product Team)

---

**Interviewer:** Thanks for making time today. I know you're all busy, so I really appreciate you joining. Let's start with quick intros. Michael, want to start?

**Michael Chang (VP of Engineering Recruiting):** Sure. I'm Michael, I've been at Cloudflare for about five years. I lead all engineering recruiting globally. When I joined, we were maybe 500 people total. Now we're over 3,000, so it's been quite a growth journey. My team is about 28 recruiters right now, spread across San Francisco, Austin, London, Lisbon, and Singapore.

**Lisa Anderson (Senior Technical Recruiter - Infrastructure):** Hey, I'm Lisa. I've been at Cloudflare for three years. I focus on infrastructure and network engineering roles - so basically the folks who work on our global network, our edge computing platform, security infrastructure, that kind of thing. Before Cloudflare, I was at Akamai, so I've been recruiting for CDN and network companies for about seven years total.

**Kevin Park (Director of Recruiting Operations):** I'm Kevin. I joined Cloudflare about two years ago from Zoom. I lead recruiting operations, so all the systems, data, analytics, process optimization. Basically, I make sure the recruiting team has the tools and infrastructure they need to hit our hiring goals.

**Interviewer:** Great. So Michael, can you give me a sense of the hiring volume you're dealing with?

**Michael Chang:** Yeah, so we're filling probably 70 to 80 engineering roles per quarter right now. That's been pretty steady for the last year or so. We went through a period of even faster growth, but we've stabilized a bit. And the roles are super diverse. We've got backend engineers, frontend engineers, network engineers, security engineers, SREs, data engineers. Cloudflare's business touches a lot of different technical domains.

**Lisa Anderson:** And even within something like "network engineering," which is my world, there's a huge range. We're not just hiring one type of network engineer. We need people with expertise in CDN and edge computing, people who understand DDoS mitigation, people who know DNS and low-level protocols. These are really different skill sets even though they all fall under the umbrella of network engineering.

**Interviewer:** That's interesting. So how do you handle that complexity in your sourcing? What's your current setup?

**Kevin Park:** So we use Greenhouse as our ATS. We've been on Greenhouse for probably six years now. For sourcing, we have Jewel licenses for most of the team. We also have LinkedIn Recruiter for everyone. And we have Greenhouse AI sourcing credits, though I don't think many people use those anymore.

**Michael Chang:** Yeah, the Greenhouse sourcing didn't really work out for us.

**Interviewer:** What happened with that?

**Lisa Anderson:** The data quality was just not good. I tried it when it first launched, maybe 18 months ago? And the email bounce rates were crazy high. Like, 30 to 40% of the emails would bounce. I'd spend time writing personalized messages, and then a third of them wouldn't even get delivered. After a few weeks of that, I just stopped using it.

**Kevin Park:** Yeah, I ran the numbers on this. Our bounce rate with Greenhouse sourcing was 38%, which is just unacceptable. With Jewel, we're seeing more like 10 to 12% bounces, which is normal. So there's clearly a data quality issue with Greenhouse.

**Michael Chang:** And it's frustrating because those credits are bundled into our Greenhouse contract. We're paying for them whether we use them or not. But if they don't work, people aren't going to use them.

**Interviewer:** That makes sense. So most people have moved to Jewel for sourcing?

**Lisa Anderson:** Yeah, I mean, I basically live in Jewel at this point. I've been using it for probably two years now. For the kind of specialized recruiting I do, I couldn't do my job without it. The saved search functionality is absolutely critical.

**Interviewer:** Tell me more about that. How are you using saved searches?

**Lisa Anderson:** Okay, so like I mentioned, I recruit for network engineering roles, but those roles have really distinct profiles depending on what part of the infrastructure they're working on. Let me give you specific examples. We have roles for CDN and edge computing engineers - these are people who are going to work on our global edge network, optimizing content delivery, working on our serverless compute platform. For those roles, I'm looking for people with specific backgrounds. I'm filtering for companies like Akamai, Fastly, Amazon CloudFront. I'm looking for experience with edge computing, caching algorithms, content routing. I want to see people who understand the challenges of running infrastructure at the network edge across hundreds of locations.

**Interviewer:** And you've built a saved search specifically for that persona?

**Lisa Anderson:** Exactly. And then I have a completely different saved search for DDoS mitigation engineers. These are people who work on our security infrastructure, protecting customers from distributed denial of service attacks. For those roles, I'm looking for people with security backgrounds, people who've worked on network security at companies like Arbor Networks, Prolexic, or maybe big security teams at places like Google or Microsoft. I'm looking for keywords like "DDoS mitigation," "traffic analysis," "anomaly detection," "botnet defense." It's a very different skill set from the edge computing roles.

**Kevin Park:** And then she has another set of searches for DNS and protocol engineers, right?

**Lisa Anderson:** Yeah, that's the third major persona I recruit for. DNS and low-level protocol engineers are working on our authoritative DNS infrastructure, our resolver, protocol implementations. These are people who need to really understand networking at a fundamental level - TCP/IP, DNS, BGP, HTTP/3. I'm looking for people from companies like Dyn, NS1, or infrastructure teams at big tech companies. I might look for people who've contributed to RFCs or open source networking projects. It's a much more protocol-focused search compared to the edge computing or DDoS searches.

**Interviewer:** So you've essentially built out these different search profiles for the different types of network engineers you're looking for.

**Lisa Anderson:** Exactly. And these are just the main categories. Within each of those, I have variations and refinements. I probably have 20 different saved searches at this point for all the different nuances of network engineering roles. And being able to save those and just pull them up when I need them is huge. I'm not starting from scratch every time I open a new requisition.

**Interviewer:** That's really interesting. How long did it take you to build up that library of searches?

**Lisa Anderson:** Oh man, probably six months to a year to really dial them in. Like, I started with some basic searches and then over time I refined them based on what was working and what wasn't. I'd notice that certain companies or certain keywords were producing better candidates, so I'd adjust my filters. It's been iterative.

**Michael Chang:** And that's with Lisa being one of our most experienced recruiters. When we bring on someone new, they're basically starting from scratch with building their search library.

**Interviewer:** Is that a challenge for onboarding new recruiters?

**Michael Chang:** It is. I mean, Lisa and some of our other senior recruiters will share their searches and help new people get started. But ultimately, everyone has to build their own library for their specific roles. Lisa's network engineering searches aren't going to be that useful for someone recruiting frontend engineers or security engineers.

**Lisa Anderson:** Yeah, I help people where I can, but my searches are pretty specific to what I do. Someone else needs to build their own expertise for their domain.

**Interviewer:** What about the rest of the team? Is everyone using Jewel the way Lisa is?

**Michael Chang:** We have a range. I'd say probably 60 or 70% of the team uses Jewel pretty heavily. Lisa's definitely one of our power users. But we have some people who are less sophisticated with it, or who prefer other approaches. Some people are more focused on inbound candidates or they lean heavily on LinkedIn.

**Kevin Park:** Part of it is recruiting style. Some people love building complex searches and optimizing their sourcing strategy. Other people are more relationship-driven or they prefer simpler tools. Both can be effective, but they require different approaches.

**Interviewer:** That makes sense. What about LinkedIn? You mentioned everyone has Recruiter licenses.

**Michael Chang:** Yeah, LinkedIn is a must-have. We're paying, I don't know, probably $250K to $300K a year for our LinkedIn licenses. It's our biggest recruiting tool expense. But it's necessary. Everyone uses LinkedIn to some degree.

**Lisa Anderson:** I use LinkedIn, but more as a supplement to Jewel. Like, I'll use LinkedIn to research candidates, look at their connections, see if I know anyone who can refer them. But for the actual sourcing - finding candidates - I usually start in Jewel because the filtering is more powerful.

**Kevin Park:** The LinkedIn integration with Greenhouse is also mediocre. There's an integration, but it's not seamless. People end up doing a lot of manual data entry to get candidate information from LinkedIn into Greenhouse.

**Interviewer:** What do you mean by that?

**Kevin Park:** Like, if you find someone in LinkedIn Recruiter and you want to add them to Greenhouse, there's a way to do it through the integration, but the data doesn't always flow correctly. Field mappings get messed up, information gets dropped. So recruiters end up having to manually correct things. It's inefficient.

**Michael Chang:** Yeah, the lack of good integration between our tools is definitely a pain point. We're spending a lot of time moving data between systems.

**Interviewer:** Let's dig into pain points more broadly. Beyond what you've mentioned, what are the biggest challenges you're facing with sourcing?

**Lisa Anderson:** For me, it's the specialization of the roles. Network engineering at Cloudflare is pretty unique. We're operating at a massive scale - we're in hundreds of cities, processing huge amounts of traffic. The candidate pool of people who've done this kind of work is not that big. So if I'm not really precise in my targeting, I waste a lot of time reaching out to people who aren't the right fit.

**Michael Chang:** And the market is competitive. Every tech company is hiring, and network infrastructure talent is in high demand. We need to be really strategic about who we target and how we engage them.

**Interviewer:** How do you differentiate in your outreach?

**Lisa Anderson:** Personalization is everything. I'm not sending templates. Every message I send is customized to that person's background. I might reference a specific project they worked on or a technology they have experience with that's relevant to our role. I'll explain why I think Cloudflare is a good fit for them specifically, not just generic stuff about how great the company is. That takes time, but it's worth it because my response rates are pretty good.

**Michael Chang:** What are your response rates typically?

**Lisa Anderson:** It varies, but I'm usually around 30%, sometimes higher. For really targeted searches where I'm reaching out to people who are a perfect fit, I might get 40 or 45% response rates.

**Michael Chang:** That's excellent.

**Lisa Anderson:** Yeah, but it's because I'm being really selective about who I reach out to. I'm not just blasting hundreds of people. I'm identifying the 20 or 30 people who are actually a great fit, and I'm spending time crafting good messages to them. Quality over quantity.

**Interviewer:** That makes sense. What other pain points are you dealing with?

**Kevin Park:** From an ops perspective, reporting and analytics are always challenging. We have data spread across multiple systems - Greenhouse, Jewel, LinkedIn. Pulling it all together to get a complete picture of our recruiting performance is time-consuming. I probably spend a quarter of my time just on data wrangling.

**Michael Chang:** And that's time Kevin could be spending on more strategic work, like process improvement or building better workflows for the team.

**Kevin Park:** Exactly. If we had better data integration, I could be much more efficient. I could focus on analysis and insights rather than just data collection and cleaning.

**Interviewer:** What kind of reporting do you need to produce?

**Kevin Park:** Oh, a lot. *laughs* We do weekly pipeline reviews, source of hire tracking, time to fill by role and by recruiter, offer acceptance rates, candidate experience metrics, diversity reports. And then monthly and quarterly executive reports. Cloudflare's leadership is very data-driven, so they want to see all the numbers.

**Michael Chang:** And being able to show ROI on our tools is important for budget planning. When I'm asking for budget for recruiting tools, I need to be able to show that they're driving results.

**Kevin Park:** Right. And Jewel actually helps with that because the analytics are built in. I can see which sources are producing candidates who convert through the funnel. But I still have to pull data from other places to tell the complete story.

**Interviewer:** What would make your life easier from a reporting standpoint?

**Kevin Park:** Better integrations, for sure. If all of our tools talked to each other seamlessly and I could query everything from one place, that would save me a huge amount of time. Or a centralized recruiting data warehouse where all our data flows in automatically. That's probably the dream.

**Michael Chang:** That would be amazing. *laughs*

**Kevin Park:** Yeah, I'm not holding my breath, but it would transform how we work.

**Interviewer:** Let's talk about budget. Michael, how do you think about the investment in recruiting tools?

**Michael Chang:** Tools are a significant expense. Our recruiting tech stack is probably costing us $500K to $600K a year all in. LinkedIn is the biggest piece - that's probably $250K or $300K. Then Jewel, then Greenhouse, plus some smaller tools for scheduling, assessments, things like that.

**Kevin Park:** And the Greenhouse AI sourcing credits that we're not using but still paying for.

**Michael Chang:** Right. So there's always pressure to optimize spend. Finance asks me regularly if we can consolidate or reduce our tool count. But the way I think about it is, what's the opportunity cost of not having the right tools? If we can't hire fast enough or we can't hire the right people, that's a much bigger problem than the cost of software. We're trying to protect and accelerate a huge portion of the internet. We need top talent, and we need to hire them efficiently.

**Lisa Anderson:** And from a productivity standpoint, good tools make a huge difference. Jewel probably makes me 40% more productive compared to when I was just using LinkedIn and basic search tools. That's significant.

**Michael Chang:** Yeah, exactly. If a tool costs us $100K but it makes the team 30% more productive, that's like getting several additional recruiters for free. The ROI is there.

**Interviewer:** That's a good way to frame it. Have you evaluated other sourcing tools? What else is out there?

**Michael Chang:** Oh yeah, we've looked at a lot of options over the years. The sourcing tool space is pretty crowded at this point.

**Kevin Park:** I maintain a vendor landscape spreadsheet. I think I'm tracking like 35 different sourcing tools right now.

**Interviewer:** Wow. Which ones have you seriously evaluated?

**Michael Chang:** We tried SeekOut maybe a year and a half ago. Did a three-month trial. It was interesting, but it didn't stick. I think the feedback was that it was expensive and the value wasn't clear enough compared to what we were already using.

**Lisa Anderson:** I tried HireEZ for a few weeks. It was fine, but the UI felt clunky. And I didn't love the way they were trying to automate everything. I want tools that enhance what I do, not tools that try to do it for me.

**Interviewer:** What do you mean by that?

**Lisa Anderson:** Like, some tools are pitching this vision of "AI will automatically find all your candidates and rank them for you." But I don't want that. I want to be actively involved in sourcing. I want to define my search criteria, I want to review candidates thoughtfully, I want to make decisions about who to reach out to. I want tools that make me faster and more efficient, but I don't want to hand over control to an algorithm.

**Michael Chang:** Although different recruiters have different preferences there. Some people might want more automation than Lisa does.

**Lisa Anderson:** That's true. I'm probably more hands-on than average.

**Kevin Park:** We also looked at Gem last year. The CRM features were impressive, but we already have CRM functionality in Jewel. And Gem really wants you to use their full platform. We weren't interested in replacing Greenhouse.

**Michael Chang:** Yeah, we're pretty committed to Greenhouse as our ATS. The switching costs would be enormous at this point. So we're looking for tools that integrate with Greenhouse, not tools that want to replace it.

**Interviewer:** That makes sense. Have you given Greenhouse feedback about their AI sourcing not working well?

**Michael Chang:** Yeah, we've told our account team. I'm sure they're aware of the issues. But I don't know what they're doing about it. It's a tough problem - they're trying to build something that works for all their customers, from small startups to big enterprises. Our needs are probably different from a 20-person company's needs.

**Kevin Park:** And the data quality issue is hard to solve. It's not really Greenhouse's core competency. They're an ATS company, not a data provider. So I'm not surprised their contact database isn't as good as companies that specialize in that.

**Interviewer:** That's a fair point. So thinking about the future, what would make your sourcing more effective? What would you change if you could?

**Lisa Anderson:** For me, it would be better organization of my saved searches. I have 20 saved searches now, and it's getting hard to manage. I wish I could put them in folders or categories. Like, all my CDN searches in one place, all my DDoS searches in another, all my DNS searches in a third category. That would make it easier to navigate.

**Michael Chang:** Better organization and management of saved content. That's a good point.

**Lisa Anderson:** And I wish it was easier to share searches with the team. Like, when we hire a new network engineering recruiter, I want to be able to quickly duplicate my searches for them so they have a starting point. Right now, I have to basically walk them through rebuilding each search manually, which is time-consuming.

**Kevin Park:** From my side, better cross-tool analytics and integration would be transformative. Being able to see the full candidate journey across all our systems without manual data work would save me so much time and give us better insights.

**Michael Chang:** More seamless integration generally. Less manual data entry, less copying and pasting between systems. That would make the whole team more efficient.

**Interviewer:** If you had that extra time, what would you do with it?

**Michael Chang:** More high-value recruiting activities. More time building relationships with candidates, more time on sourcing strategy, more time on pipeline development. Less time on administrative work.

**Lisa Anderson:** Yeah, if I could save even just an hour a day on system administration stuff, that's five hours a week I could spend finding and engaging candidates. That would directly impact my hiring numbers.

**Interviewer:** That's significant. What about new features? Is there anything you wish existed that doesn't today?

**Lisa Anderson:** Hmm, that's a good question. I think better candidate engagement tracking would be valuable. Like, if the system could tell me, "You reached out to this person six months ago and they said the timing wasn't right - maybe follow up now," or "This person opened your last three emails but didn't respond - try a different angle." That kind of intelligence would help me be more strategic about follow-ups.

**Michael Chang:** Yeah, engagement tracking and automated follow-up suggestions. That would be useful.

**Kevin Park:** From a data standpoint, I'd love industry benchmarking. Like, what's good performance for a network engineering search? How do our metrics compare to other infrastructure companies? I don't have much external context, so it's hard to know if we're doing well or if there's room for improvement.

**Interviewer:** So competitive benchmarking across similar companies or roles.

**Kevin Park:** Exactly. That would help me set better goals and identify areas to focus on.

**Interviewer:** Let's talk about decision-making. How do you evaluate whether to adopt a new tool or change what you're using?

**Michael Chang:** It usually starts with feedback from the team. If multiple recruiters are saying they need something or something isn't working, that's a signal. Lisa's been a strong advocate for Jewel, and that influenced our decision to expand our license count.

**Lisa Anderson:** I mean, I just tell people about what works. *laughs*

**Michael Chang:** And that's valuable! I want to hear from the team about what they need. But then I also have to think about budget and whether something makes sense for the whole team, not just a few people. What works for Lisa might not work for everyone.

**Kevin Park:** I do most of the vendor evaluations. I'll run demos, do trials, collect feedback, analyze costs and potential ROI. Then I make a recommendation to Michael.

**Michael Chang:** Yeah, and I'm weighing a bunch of factors - cost, functionality, ease of use, integration with our existing tools, vendor stability, training requirements, scalability. It's not just about which tool has the best features. It's about what makes sense for our team and our workflow.

**Interviewer:** Are there any specific changes you're planning for the next budget cycle?

**Michael Chang:** We're definitely going to have a conversation with Greenhouse about the AI sourcing credits. If we're not using them, can we get a different plan that doesn't include them? Or can we get some kind of credit back? I don't know if that's possible, but it's worth asking.

**Kevin Park:** And we're considering expanding our Jewel license. Right now we have about 20 licenses, but we have 28 recruiters. Not everyone has access. If we're seeing strong results from the people who use it, maybe we should roll it out more broadly.

**Lisa Anderson:** I think that would be great. If everyone had the tools I have, the whole team would be more effective.

**Michael Chang:** But we'd need to invest in training. Just giving someone a license doesn't automatically make them productive with it. We'd need onboarding and ongoing support.

**Kevin Park:** I could build that out. Training materials, workshops, office hours, that kind of thing.

**Michael Chang:** Yeah, let's talk about that. If we're going to expand, we should do it right.

**Interviewer:** That makes sense. Is there anything else you think I should know about your sourcing challenges or needs?

**Lisa Anderson:** I think the main thing is just the specialization factor. Cloudflare's infrastructure is unique. We're operating at a scale that very few companies operate at. The talent pool for the roles we're hiring is limited, and we need tools that can handle that complexity. Generic sourcing tools don't work for what we do. We need sophisticated filtering, the ability to target really precisely, and good data quality. Those are the non-negotiables for us.

**Michael Chang:** And we're continuing to grow, so scalability is important. What works at 70 hires per quarter might not work at 100 hires per quarter. We need solutions that can grow with us.

**Kevin Park:** Yeah, from an ops perspective, as the team scales, the complexity increases exponentially. More recruiters, more data, more systems to coordinate. We need infrastructure that can handle that growth.

**Interviewer:** Those are all great points. Well, I really appreciate you all taking the time. This has been super helpful.

**Michael Chang:** Of course. Thanks for taking the time to understand our needs. It's refreshing to have these kinds of conversations.

**Lisa Anderson:** Yeah, and if you build solutions to any of these problems, let us know. We're always looking for better ways to work.

**Kevin Park:** Happy to be a beta tester. *laughs*

**Interviewer:** *laughs* Noted. Thanks again, everyone.

---

**End of Transcript**  
**Word Count:** 4,000

