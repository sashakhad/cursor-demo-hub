# Toast Interview Transcript
**Company:** Toast  
**Attendees:** Richard Nelson (Director of Technical Recruiting), Ashley Kumar (Senior Technical Recruiter), Brandon Lee (Recruiting Operations Specialist)  
**Date:** March 25, 2024  
**Duration:** 54 minutes  
**Interviewer:** Alex Martinez (Jewel Product Team)

---

**Interviewer:** Thanks for joining me today. I know you all have packed schedules, so I really appreciate you making the time. Let's start with quick intros. Richard, want to kick us off?

**Richard Nelson (Director of Technical Recruiting):** Sure thing. I'm Richard, I've been at Toast for about four years now. I lead the technical recruiting team, which is currently about 15 people. We hire for all engineering roles, product managers, designers, data scientists. Toast has been on a pretty incredible growth trajectory, especially over the last few years. We've gone from a few hundred people when I joined to over 4,000 now. It's been quite a ride.

**Ashley Kumar (Senior Technical Recruiter):** Hi, I'm Ashley. I've been at Toast for two years. I focus primarily on embedded systems and hardware-software integration roles - so engineers who work on our point-of-sale hardware, our kiosks, payment terminals, that kind of thing. Before Toast, I was at Square, so I've been in the hardware payments space for about five years.

**Brandon Lee (Recruiting Operations Specialist):** Hey, I'm Brandon. I've been here for about 18 months. I handle recruiting operations - so our tools, our data, our reporting, process documentation. Basically, I support the recruiting team with all the operational infrastructure they need to be successful.

**Interviewer:** Great. Richard, can you give me a sense of the hiring volume you're managing?

**Richard Nelson:** Yeah, so right now we're filling about 50 to 60 technical roles per quarter. That's been pretty consistent for the last few quarters. We had a period where it was higher - we were closer to 80 per quarter in 2022 - but we've moderated a bit. Still a pretty aggressive pace though. And the roles are really diverse. We've got backend engineers, frontend engineers, mobile engineers, embedded systems engineers, data engineers, ML engineers. Toast is a complex product that touches a lot of different technical domains.

**Ashley Kumar:** And even within something like embedded systems, which is my world, there's a huge range. We're not hiring one type of embedded engineer. We need people who work on restaurant hardware with things like receipt printers and cash drawers, mobile engineers who build offline-first POS apps, backend engineers who handle high-scale transaction processing. These are really different skill sets even though they all support our point-of-sale product.

**Interviewer:** That's interesting. Tell me more about those different personas.

**Ashley Kumar:** Sure. So one major persona is embedded engineers with restaurant or retail hardware experience. These are people who've worked on point-of-sale systems, payment terminals, kiosks, self-service hardware. They understand the unique challenges of restaurant hardware - the environment is tough, things get greasy and wet, equipment needs to be reliable because restaurants can't afford downtime. I'm looking for people from companies like NCR, PAX Technology, Ingenico, Square, or maybe restaurant equipment manufacturers. They need to understand embedded Linux, hardware interfaces, maybe some electrical engineering background.

**Richard Nelson:** And that's a pretty specialized niche.

**Ashley Kumar:** Very specialized. Then we have mobile engineers who work on our POS application. But it's not like typical mobile development. Our app needs to work offline - restaurants can't stop serving customers if their internet goes down. So we need mobile engineers who understand offline-first architecture, local data sync, conflict resolution. I'm looking for people who've worked on apps that have strong offline capabilities - maybe companies like Uber, DoorDash, or other point-of-sale companies like Square or Clover. It's a different skill set from your typical mobile engineer who's just calling APIs.

**Brandon Lee:** And then there's the backend high-scale piece, right?

**Ashley Kumar:** Right. We also need backend engineers who can handle the scale of processing payments and orders for thousands of restaurants. During peak hours, we're processing huge volumes of transactions. We need people who understand distributed systems, high availability, consistency guarantees, all that stuff. I'm looking for people from companies that operate at scale - maybe fintech companies like Stripe or Square, or large-scale consumer companies like Airbnb or Uber. The focus is on reliability and performance under load.

**Interviewer:** So three distinct personas within the hardware-software integration space.

**Ashley Kumar:** Exactly. And they require completely different sourcing approaches. The skills, the companies, the backgrounds - they're all different.

**Interviewer:** So how do you manage that complexity? Walk me through your current sourcing setup.

**Brandon Lee:** We use Greenhouse as our ATS. We've been on Greenhouse for probably five years. For sourcing, most of the team uses Jewel. We also have LinkedIn Recruiter licenses for everyone. And we have Greenhouse AI sourcing credits that come with our plan, though not many people use those.

**Richard Nelson:** Yeah, the Greenhouse sourcing hasn't been great for us.

**Interviewer:** What's been the issue?

**Ashley Kumar:** The data quality is poor. I tried it when it first launched, maybe a year and a half ago, and the email bounce rates were terrible. Like 30 to 35% of my outreach emails would bounce. That's just not acceptable. If I'm spending time crafting personalized messages and a third of them don't even get delivered, that's a huge waste of my time.

**Brandon Lee:** I pulled the metrics on this a few months ago. Our bounce rate with Greenhouse sourcing was 34%. With Jewel, it's around 11%. So there's a significant difference in data freshness and quality.

**Richard Nelson:** And the frustrating thing is we're paying for those Greenhouse credits whether we use them or not. They're bundled into our contract. But if the quality isn't there, people won't use them. It's that simple.

**Interviewer:** That makes sense. So most people have moved to Jewel for sourcing?

**Ashley Kumar:** Yeah, I basically live in Jewel at this point. I've been using it for probably 18 months. For the kind of specialized recruiting I do, I absolutely need the saved search functionality. I couldn't do my job without it.

**Interviewer:** Tell me more about how you're using saved searches.

**Ashley Kumar:** Okay, so like I mentioned, I recruit for these three different personas in the hardware-software integration space. Each one requires a totally different search. For embedded engineers with restaurant hardware experience, I have a saved search that's filtering for very specific companies - NCR, PAX, Ingenico, Square, Clover, maybe Toast competitors like Lightspeed or TouchBistro. I'm looking for skills like embedded Linux, C or C++, hardware interfaces, maybe some IoT experience. I want to see people who talk about retail or restaurant environments in their profiles. That's a very targeted search.

**Interviewer:** And you've built that as a saved search in Jewel?

**Ashley Kumar:** Exactly. And then I have a completely different saved search for mobile engineers with offline-first experience. For those roles, I'm looking at companies where offline capability is critical - Uber, DoorDash, Lyft, airlines apps, maybe field service companies. I'm filtering for mobile skills - iOS or Android development - but also keywords like "offline mode," "local storage," "data synchronization," "conflict resolution." I might look for people who've worked on apps for industries where connectivity is unreliable. It's a different profile from the embedded hardware roles.

**Richard Nelson:** And then there's the backend high-scale search, right?

**Ashley Kumar:** Right. For backend engineers focused on high-scale transaction processing, I'm looking at fintech companies and high-scale consumer companies. Stripe, Square, PayPal, Adyen on the fintech side. Uber, Airbnb, DoorDash on the consumer side. I'm filtering for backend languages like Java, Go, Python. Keywords like "distributed systems," "high availability," "transaction processing," "database scaling." I want people who've dealt with reliability and performance at scale. It's a completely different search from the other two.

**Interviewer:** So you've built out these three distinct search profiles.

**Ashley Kumar:** Exactly. And within each category, I have variations. Like, I might have one search for senior embedded engineers and another for more mid-level folks. Or one search for iOS mobile engineers and another for Android. So I probably have 15 different saved searches at this point for all the variations of roles I recruit for. And being able to save them and pull them up when I need them is absolutely essential. I'm not starting from scratch every time I open a new req.

**Richard Nelson:** And Ashley's really mastered this approach. She's one of our top performers. But not everyone on the team is at that level yet.

**Interviewer:** Is onboarding new recruiters to this approach a challenge?

**Richard Nelson:** It can be. Ashley's been in the hardware payments space for years. She knows the market, she knows the companies, she knows what to look for. When we hire someone who doesn't have that background, there's definitely a learning curve. It might take them several months to build up their search library and really get proficient with the tools.

**Ashley Kumar:** Yeah, I try to help new people. I'll share my searches as examples, walk them through my thinking. But if someone's recruiting for backend web engineers or data scientists, my searches aren't going to be directly useful. They need to build their own expertise for their domain.

**Interviewer:** What about the rest of the team? Is everyone using Jewel?

**Richard Nelson:** Most people are, yeah. I'd say probably 70% of the team uses Jewel actively. Ashley and a few others are power users who've really built sophisticated search libraries. Some people are more basic users. And we have a few people who lean more heavily on LinkedIn or who focus more on inbound candidates.

**Brandon Lee:** It also depends on the role type. For some roles, we get good inbound volume. Toast has a decent employer brand in the restaurant tech space. But for specialized roles like Ashley's hardware roles, you really need to do proactive sourcing.

**Interviewer:** What about LinkedIn? You mentioned everyone has Recruiter licenses.

**Richard Nelson:** Yeah, LinkedIn is a must-have. We're paying probably $180K a year for our LinkedIn licenses. It's a significant expense, but it's necessary.

**Ashley Kumar:** I use LinkedIn, but honestly more for research and networking than for initial candidate sourcing. Like, I'll use LinkedIn to look at someone's full background, find mutual connections, see if there's a warm intro path. But for actually finding candidates, I usually start in Jewel because the filtering is more powerful and the data is fresher.

**Brandon Lee:** The integration between LinkedIn and Greenhouse is also not great. There's technically an integration, but it's clunky. People end up doing a lot of manual data entry to get information from LinkedIn into Greenhouse.

**Interviewer:** What makes it clunky?

**Brandon Lee:** The data doesn't transfer cleanly. Like, you export a candidate from LinkedIn and import them into Greenhouse, and field mappings don't work right, information gets dropped or formatted incorrectly. So recruiters have to manually clean things up. It's inefficient.

**Richard Nelson:** Yeah, the lack of seamless integration between tools is definitely a pain point. We spend a lot of time moving data between systems manually.

**Interviewer:** Let's talk about pain points more broadly. Beyond what you've mentioned, what are the biggest challenges you're facing?

**Ashley Kumar:** For me, it's the specialization and the small candidate pools. Like, embedded engineers with restaurant hardware experience is a pretty niche market. There aren't that many companies making restaurant POS hardware. So the talent pool is limited, and everyone's competing for the same people. If I'm not really precise in my targeting and really thoughtful in my outreach, I'm not going to be successful.

**Richard Nelson:** And the market is super competitive right now. Every tech company is hiring. And we're competing not just with other restaurant tech companies but with fintech companies, consumer tech companies, anyone who needs similar skills.

**Interviewer:** How do you differentiate in your outreach?

**Ashley Kumar:** Personalization is everything. I don't send template messages. Every message I write is specific to that person. I might reference a project they worked on at their current company or a technology they have experience with that's relevant to our role. I'll explain why I think they'd specifically be a good fit for Toast and this particular role. I talk about the interesting technical challenges we're solving. It takes time to write these messages, but it makes a huge difference in response rates.

**Richard Nelson:** What are your typical response rates?

**Ashley Kumar:** For cold outreach, I'm usually around 28 to 32%. For warm outreach where I have a referral or mutual connection, it's closer to 50 or 60%. So targeting and personalization definitely matter.

**Richard Nelson:** That's really strong performance.

**Ashley Kumar:** Yeah, but it's because I'm being really selective about who I reach out to. I'm not sending hundreds of messages. I'm identifying the 25 or 30 people who are truly the right fit, and I'm investing time in reaching out to them well. Quality over quantity.

**Interviewer:** That makes sense. What other challenges are you dealing with?

**Brandon Lee:** From an operations perspective, data and reporting are always challenging. We have data spread across multiple systems - Greenhouse, Jewel, LinkedIn. Pulling it all together to create cohesive reports is time-consuming. I probably spend 25 to 30% of my time just on data aggregation and cleaning.

**Richard Nelson:** And that's time Brandon could be spending on more strategic work, like process improvement or building better recruiting workflows.

**Brandon Lee:** Exactly. If we had better integration where data flowed automatically between systems, I could be way more efficient.

**Interviewer:** What kind of reporting do you need to do?

**Brandon Lee:** A lot. *laughs* We do weekly pipeline reviews with recruiting leaders. Monthly source of hire reporting. Quarterly diversity reports. Time to fill tracking. Offer acceptance rate analysis. Candidate experience surveys. And then we have quarterly business reviews with executive leadership where we present all the recruiting metrics. Our leadership team is very data-driven.

**Richard Nelson:** And we need to be able to show ROI on our recruiting investments. When I'm asking for budget for tools or headcount, I need data to back it up.

**Brandon Lee:** Right. And Jewel helps with that because the analytics are built in. I can see which sources are producing candidates who convert. But I still need to combine that with Greenhouse data and LinkedIn data to tell the full story.

**Interviewer:** What would make your life easier from a reporting standpoint?

**Brandon Lee:** Better integration, hands down. If all our systems talked to each other and I could pull everything from one dashboard, that would save me hours every week. Or if there was a centralized data warehouse where all our recruiting data automatically flowed, that would be ideal. Right now, I'm basically manually building that warehouse in spreadsheets.

**Richard Nelson:** The manual data work is definitely a productivity killer.

**Interviewer:** Let's talk about budget. Richard, how do you think about investment in recruiting tools?

**Richard Nelson:** Tools are a significant expense. I think we're spending around $350K to $400K a year on our full recruiting tech stack. LinkedIn is the biggest piece - that's close to $180K. Then Jewel, then Greenhouse, plus smaller tools for scheduling, assessments, background checks, video interviews.

**Brandon Lee:** And the Greenhouse AI sourcing credits that we're not really utilizing.

**Richard Nelson:** Right. So there's always pressure to optimize costs. Our CFO would love for us to reduce tool spend. But I always come back to the opportunity cost. What's the cost of not filling a critical role? What's the cost of losing a great candidate to a competitor because our sourcing wasn't effective? Those costs are way higher than software licenses.

**Ashley Kumar:** And from a productivity angle, good tools make a massive difference. Jewel probably makes me 35 to 40% more productive compared to when I was at Square and just using LinkedIn. That's like getting an extra recruiter for a fraction of the cost.

**Richard Nelson:** Exactly. If we can make our existing team more productive, that's a much better investment than just throwing more headcount at the problem.

**Interviewer:** That's a good way to think about it. Have you evaluated other sourcing tools? What else is out there?

**Richard Nelson:** Oh, we've looked at a bunch of stuff. Brandon probably tracks this more closely.

**Brandon Lee:** Yeah, I keep a landscape of sourcing tools. There are probably 30 to 40 vendors in the space now. It's gotten pretty crowded.

**Interviewer:** Which ones have you seriously evaluated?

**Richard Nelson:** We did a trial of SeekOut about a year ago. The diversity search features were interesting, but ultimately we didn't see enough incremental value to justify adding another tool.

**Ashley Kumar:** I tried HireEZ for a few weeks. It was okay, but I didn't love the experience. The search interface felt less intuitive than Jewel, and I didn't like how much they were trying to automate. I want tools that augment what I do, not tools that try to take over.

**Interviewer:** What do you mean by that?

**Ashley Kumar:** Like, some of these tools pitch this vision where AI automatically finds candidates and ranks them, and you just review the list. But I don't want that. I want to be actively involved in sourcing. I want to define my search criteria based on my understanding of the role and the market. I want to use my judgment about who to reach out to and how. The tools should make me faster and more effective, but I still want to be in the driver's seat.

**Richard Nelson:** Although some people might want more automation. It depends on your recruiting style.

**Ashley Kumar:** That's fair. I'm probably more hands-on than average.

**Brandon Lee:** We also looked at Gem. The CRM and sequencing features looked strong, but we already have CRM capability in Jewel. And Gem is really positioned as a full platform - they want you to use it for everything. We're not interested in moving off Greenhouse.

**Richard Nelson:** Yeah, Greenhouse works well for us as an ATS. The challenges are more on the sourcing and integration side.

**Interviewer:** So you're committed to Greenhouse for the foreseeable future?

**Richard Nelson:** Yeah, pretty committed. The switching costs would be really high. Our whole recruiting process is built around Greenhouse. We have integrations with our HRIS, our background check provider, our assessment tools. Moving to a different ATS would be a massive project. So we're looking for tools that work well with Greenhouse, not tools that want to replace it.

**Interviewer:** That makes sense. Thinking about the future, what would make your sourcing more effective? What would you change if you could?

**Ashley Kumar:** For me, better organization of saved searches would be huge. I have 15 saved searches right now, and they're just in one long list. I wish I could organize them into folders or categories. Like, all my embedded hardware searches in one folder, all my mobile offline-first searches in another, all my backend high-scale searches in a third. That would make it much easier to find what I need quickly.

**Richard Nelson:** Better organization and structure. That's a good point.

**Ashley Kumar:** And it would be great if I could more easily share or template my searches. Like, when we hire a new recruiter for hardware roles, I want to be able to quickly duplicate my searches for them so they have a starting point. Right now, I have to manually walk them through rebuilding each search, which takes hours.

**Brandon Lee:** From my perspective, better cross-tool integration and data flow would be transformative. If data moved seamlessly between all our systems without manual work, I could spend way less time on data wrangling and way more time on insights and strategy.

**Richard Nelson:** Yeah, integration is critical. Less manual work, more automation. That would make the whole team more efficient.

**Interviewer:** If you had that extra time, what would you do with it?

**Richard Nelson:** More strategic work. More time on sourcing strategy, talent pipeline development, employer branding, candidate experience improvements. Less time on administrative tasks and data entry.

**Ashley Kumar:** If I could save an hour a day on system administration stuff, that's five hours a week I could spend on candidate outreach and relationship building. That would directly translate to more hires.

**Interviewer:** That's significant. What about new features or capabilities? Is there anything you wish existed?

**Ashley Kumar:** Better candidate engagement tracking would be valuable. Like, I often reach out to people who are interested but not ready to move yet. It would be great if the system could automatically remind me to follow up in a few months, or alert me when someone changes jobs, because that's often a good time to re-engage. Right now, I'm tracking all that manually in spreadsheets.

**Richard Nelson:** Automated follow-up and engagement intelligence. That would be useful.

**Brandon Lee:** From a data perspective, I'd love industry benchmarking. Like, what's good performance for an embedded engineer search? How do our metrics compare to other hardware or restaurant tech companies? I don't have a lot of external context, so it's hard to know where we stand.

**Interviewer:** So comparative benchmarking across similar companies or roles.

**Brandon Lee:** Exactly. That would help me set better targets and identify areas where we need to improve.

**Interviewer:** Let's talk about your decision-making process. How do you evaluate whether to adopt a new tool or change what you're using?

**Richard Nelson:** It usually starts with feedback from the team. If multiple people are saying they need something or something isn't working, that's a signal. Ashley's been a strong advocate for Jewel, and that's definitely influenced our investment in it.

**Ashley Kumar:** I just speak up about what works and what doesn't. *laughs*

**Richard Nelson:** And that's valuable input. But I also have to think about what makes sense for the entire team, not just one person. And I have to balance functionality with budget, integration requirements, training needs, all of that.

**Brandon Lee:** I typically do the vendor evaluations. I'll run demos, coordinate trials, collect feedback from the team, analyze costs and potential ROI. Then I make a recommendation to Richard.

**Richard Nelson:** Yeah, and I'm weighing multiple factors - cost, functionality, user experience, integration with our existing stack, vendor stability and support, training requirements, scalability. It's not just about which tool has the most features. It's about what fits into our ecosystem and workflow.

**Interviewer:** Are there any specific changes you're considering for the next budget cycle?

**Richard Nelson:** We're definitely going to have a conversation with Greenhouse about the AI sourcing credits. If we're not using them and they're adding significant cost to our contract, we need to talk about that. Maybe there's a different plan option that doesn't include them.

**Brandon Lee:** And we're thinking about expanding our Jewel license. Right now, we have 12 licenses for 15 recruiters. Not everyone has access. If the people who are using it are seeing strong results, it might make sense to expand.

**Ashley Kumar:** I think that would be great. If everyone had access to the same tools I have, the whole team would be more effective.

**Richard Nelson:** But we'd need to invest in proper training. We can't just give people a license and expect them to figure it out. We'd need structured onboarding, documentation, ongoing support.

**Brandon Lee:** I could develop that. Training materials, video walkthroughs, office hours, best practices documentation. I've been thinking about building a more formal recruiting enablement program anyway.

**Richard Nelson:** Yeah, let's explore that. If we're going to expand tool access, we should do it right.

**Interviewer:** That makes sense. Is there anything else you think I should know about your sourcing challenges or needs?

**Ashley Kumar:** I think the main theme is just the specialization and complexity of what we do. Toast operates at the intersection of hardware, software, payments, and restaurants. It's a unique space. The roles we're hiring for require really specific backgrounds and skills. Having tools that can handle that nuance and complexity is critical. Generic sourcing tools don't work for what I do. I need sophisticated filtering, the ability to save complex searches, and high-quality data.

**Richard Nelson:** And as we continue to scale - both in terms of hiring volume and company size - we need solutions that can grow with us. What works at 50 hires per quarter might not work at 75 or 100. We need to be thinking ahead.

**Brandon Lee:** Yeah, from an ops perspective, as the team and the company scale, everything gets exponentially more complex. More data, more workflows, more coordination. We need systems and infrastructure that can handle that growth without breaking.

**Interviewer:** Those are all great points. Well, I really appreciate you all taking the time. This has been incredibly insightful.

**Richard Nelson:** Of course. Thanks for taking the time to understand our needs. It's helpful for us to step back and think through these things too.

**Ashley Kumar:** Yeah, and if you come up with solutions to any of these problems, definitely let us know.

**Brandon Lee:** We'd be happy to beta test. *laughs*

**Interviewer:** *laughs* I'll keep that in mind. Thanks again, everyone.

---

**End of Transcript**  
**Word Count:** 4,000

