# Databricks Interview Transcript
**Company:** Databricks  
**Attendees:** Jennifer Wu (Senior Director of Technical Recruiting), David Kim (Technical Recruiter - Infrastructure), Alex Rodriguez (Recruiting Operations Lead)  
**Date:** March 18, 2024  
**Duration:** 58 minutes  
**Interviewer:** Alex Martinez (Jewel Product Team)

---

**Interviewer:** Thanks for joining today. I know you all have busy schedules, so I really appreciate the time. Let's start with quick intros - Jennifer, you want to kick us off?

**Jennifer Wu (Senior Director of Technical Recruiting):** Sure, happy to. I'm Jennifer, I've been at Databricks for almost four years now. I lead the technical recruiting function - so that's engineering, product, design, data science, all the technical roles. My team is about 22 people now, which is pretty crazy because when I started we were like six people. Databricks has been on quite a growth trajectory.

**David Kim (Technical Recruiter - Infrastructure):** Hey, I'm David. I've been here for two and a half years. I focus primarily on infrastructure and platform engineering roles - so distributed systems engineers, data infrastructure, that kind of thing. Before Databricks I was at AWS, so I've been in the cloud infrastructure recruiting space for a while.

**Alex Rodriguez (Recruiting Operations Lead):** And I'm Alex. I've been at Databricks for about 18 months. I own recruiting operations, systems, data, reporting - basically everything that enables the recruiting team to do their jobs effectively. I came from Snowflake actually, where I was doing similar work.

**Interviewer:** Oh interesting, from Snowflake to Databricks. That's staying in the data world.

**Alex Rodriguez:** *laughs* Yeah, I clearly have a type. I like data infrastructure companies.

**Interviewer:** So Jennifer, can you give me a sense of the recruiting volume you're dealing with right now?

**Jennifer Wu:** Sure. We're filling... let me think, probably around 60 to 70 technical roles per quarter right now. That's a mix of engineering, data science, product, design. Engineering is the bulk of it - probably 45 to 50 of those are engineering roles. And it's incredibly diverse, like, we're not just hiring one type of engineer. We've got folks working on the core Databricks platform, we've got data scientists who are engineering-heavy, we've got developer advocates and field engineers. It's a wide spectrum.

**David Kim:** Yeah, and even within something like "platform engineering" which is what I mostly recruit for, the personas are really different. Like, we have roles where we need someone with deep distributed systems expertise - think Apache Spark internals, consensus algorithms, that level. But then we also have roles where we need data scientists who can write production code. Or developer relations folks who need to be technical but also great at communication and content creation. They're all technically "engineering" roles but the candidate profiles look completely different.

**Interviewer:** That's really interesting. So how do you manage that complexity in your sourcing? Walk me through your current setup.

**Alex Rodriguez:** So our ATS is Greenhouse, which we've been on for probably five years now. Pretty standard there. For sourcing tools, we have Jewel which most of the team uses heavily. We also have LinkedIn Recruiter licenses for everyone. And we have the Greenhouse AI sourcing credits that come bundled with our plan.

**Jennifer Wu:** Although I don't think many people actually use the Greenhouse sourcing anymore, right?

**Alex Rodriguez:** No, not really. We had a lot of issues with it early on.

**Interviewer:** What kind of issues?

**David Kim:** The email bounce rates were terrible. I tried it when it first launched, and I was seeing like 30, 35% of my emails bounce. That's just not usable. If I'm spending time crafting outreach messages and a third of them don't even get delivered, that's a huge waste.

**Alex Rodriguez:** Yeah, I pulled the data on this a few months ago. Our bounce rate with Greenhouse sourcing was 32%. With Jewel it's more like 12 or 13%, which is way more reasonable. So the data quality is just not there with Greenhouse.

**Jennifer Wu:** And it's frustrating because we're paying for those credits as part of our Greenhouse bundle. It's not like we can just not pay for them. But if the quality isn't there, people aren't going to use them.

**Interviewer:** That makes sense. So most people have gravitated toward Jewel for sourcing?

**David Kim:** Yeah, I mean, I basically live in Jewel. I can't imagine recruiting the roles I recruit without it at this point. The saved search functionality is absolutely critical for me.

**Interviewer:** Tell me more about that. How are you using saved searches?

**David Kim:** Okay, so like I mentioned, I recruit for infrastructure and platform roles, but those roles have really distinct personas. Let me give you a concrete example. We have a distributed systems engineer role - this is someone who's going to work on the core Databricks platform, optimizing Spark, working on our distributed query engine, that kind of thing. For that role, I'm looking for people with very specific backgrounds. I'm filtering for companies like Google, Facebook, Amazon - places that have built large-scale distributed systems. I'm looking for experience with specific technologies - Hadoop, Spark, Kafka, maybe some C++ or Scala. I want to see people who talk about performance optimization and scalability in their profiles.

**Interviewer:** And you've built a saved search for that specific persona?

**David Kim:** Exactly. And then I have a completely different saved search for our data scientist-engineer roles. These are data scientists who want to move more into engineering, or engineers who have strong ML backgrounds. For those roles, I'm looking at people with Python and SQL skills, ML frameworks like TensorFlow or PyTorch, but also some engineering fundamentals. I might look at companies like Airbnb or Netflix where data scientists often write production code. The skill set is totally different from the distributed systems role.

**Jennifer Wu:** And then David has another set of searches for developer relations roles, right?

**David Kim:** Yeah, that's a third persona. Developer advocates or developer relations engineers need to be technical enough to understand our product deeply, but they also need strong communication skills, content creation experience, maybe public speaking. So for those searches, I'm looking at people who've written technical blog posts, given conference talks, worked in developer advocacy at other companies. I'm looking at folks from companies like Twilio, MongoDB, places known for good developer relations. It's a completely different search.

**Interviewer:** So you've essentially built out these different search profiles for the different types of candidates you're looking for.

**David Kim:** Exactly. I probably have... I don't know, maybe 12 or 15 different saved searches now for all the different role types I recruit for. And it's not just the three I mentioned - there are variations and subcategories. But having those saved is huge because I can just go into Jewel, pull up the right search for whatever I'm working on that day, and I immediately have a refined candidate pool. I'm not starting from scratch every time.

**Alex Rodriguez:** And the thing is, building those searches takes time. David's been here for over two years, so he's refined these over time. When we bring on a new recruiter, they have to basically build their own search library from scratch, which can take months.

**Interviewer:** Is that a challenge for onboarding?

**Jennifer Wu:** It is, yeah. We've tried to get people to share their saved searches, and sometimes that works, but often the searches are pretty specific to the types of roles someone recruits. David's searches are great for infrastructure roles, but if you're recruiting for product engineers or frontend engineers, you need different searches.

**David Kim:** I've definitely helped new people get started, like I'll show them my searches and they can use them as templates. But ultimately everyone needs to build their own library for their role specialization.

**Interviewer:** What about the rest of the team? Is everyone using Jewel the way David is?

**Jennifer Wu:** We have a range. David is definitely one of our power users. I'd say probably half the team is pretty sophisticated with Jewel - they've built out saved searches, they're using the analytics, they're really leveraging it. The other half is maybe less consistent. Some people lean more on LinkedIn or they're more inbound-focused.

**Alex Rodriguez:** Part of it is personality and recruiting style. Some people are naturally more systematic and data-driven, and they love having the tools to build complex searches. Other people are more relationship-driven or they prefer simpler approaches. Both can be effective, but the tools they need are different.

**Interviewer:** That makes sense. What about LinkedIn? You mentioned everyone has Recruiter licenses.

**Jennifer Wu:** Yeah, LinkedIn is obviously a must-have. We're paying... I think it's close to $200K a year for our license count? Something in that ballpark. It's expensive but necessary.

**David Kim:** I use LinkedIn a lot, but more for research than for actual sourcing. Like, I'll use it to understand someone's background before I reach out, or to find people who've moved companies. But for the actual candidate search, I usually start in Jewel because the filtering is better.

**Alex Rodriguez:** The LinkedIn integration with Greenhouse is also not great. There's an integration, but it's clunky. We end up doing a lot of manual data entry.

**Interviewer:** What do you mean by clunky?

**Alex Rodriguez:** Like, if you find someone in LinkedIn and you want to add them to Greenhouse, you have to export their data and then import it, and the field mapping doesn't always work right. So you end up having to manually fix stuff. It's just inefficient.

**Jennifer Wu:** Yeah, the lack of seamless integration between tools is definitely a pain point. We're constantly moving data between systems.

**Interviewer:** Let's dig into pain points a bit more. Beyond what you've mentioned, what are the biggest challenges you're facing?

**David Kim:** For me, it's really about the specificity needed for our roles. Like, data infrastructure engineering is a pretty specialized field to begin with. And then within that, we have all these subspecialties. The candidate pools are not huge, and if you're not targeting really precisely, you end up wasting a lot of time reaching out to people who aren't the right fit.

**Jennifer Wu:** And the market is super competitive. We're competing with every other high-growth tech company for the same talent. So we need to be really smart about who we target and how we reach out.

**Interviewer:** How do you think about differentiation in your outreach?

**David Kim:** Personalization is key. I spend a lot of time on each message. I'm not sending templates. I'm looking at someone's background and explaining specifically why I think they'd be a good fit for this particular role. I might reference a project they worked on or a blog post they wrote. That level of personalization takes time, but it makes a big difference in response rates.

**Jennifer Wu:** What are your response rates typically?

**David Kim:** It varies by role, but I'm usually in the 25 to 30% range on cold outreach. Sometimes higher if it's a particularly good fit.

**Jennifer Wu:** That's pretty strong.

**David Kim:** Yeah, I think it's a combination of Databricks' brand, the quality of the roles we have, and the targeting. Because I've refined my saved searches so much, I'm really only reaching out to people who are genuinely a good fit. I'm not spamming people. Candidates appreciate that.

**Interviewer:** That's a great point about targeting precision. What other pain points are you dealing with?

**Alex Rodriguez:** From an ops perspective, reporting and analytics are always a challenge. We have data in Greenhouse, data in Jewel, data in LinkedIn. Pulling it all together to get a complete picture is difficult. I spend probably 20% of my time just wrangling data from different systems.

**Jennifer Wu:** And that's time you could be spending on more strategic work.

**Alex Rodriguez:** Exactly. If we had better integration and data flow between systems, I could be much more efficient.

**Interviewer:** What kind of reporting do you need to do?

**Alex Rodriguez:** Oh man, so much. *laughs* I'm doing weekly reports on pipeline health, source of hire analysis, time to fill by role type, offer acceptance rates, diversity metrics. And then monthly and quarterly rollups. Our leadership team is very data-driven, so they want to see the metrics.

**Jennifer Wu:** And being able to show ROI on our tools is important for budget conversations. Like, if I'm asking to renew our Jewel license or expand it, I need to be able to show that it's driving results.

**Alex Rodriguez:** Right. And Jewel's analytics help with that, like I can see which sources are producing candidates who convert. But I still have to pull data from multiple places to tell the full story.

**Interviewer:** What would make your life easier from a reporting standpoint?

**Alex Rodriguez:** Honestly, just better integrations. If all the data lived in one place or flowed seamlessly between systems, that would save me so much time. Or if there was like a universal recruiting data warehouse where everything fed in and I could query it all in one place, that would be amazing.

**Jennifer Wu:** I think that's the dream for a lot of recruiting ops people. *laughs*

**Alex Rodriguez:** Yeah, I'm not holding my breath. But it would be great.

**Interviewer:** Let's talk about budget for a minute. Jennifer, how do you think about the investment in recruiting tools?

**Jennifer Wu:** I mean, tools are expensive. Our recruiting tech stack is probably... I don't know exactly, but I'd guess we're spending $400K to $500K a year across all our tools? Something in that range. LinkedIn is the biggest piece, then Jewel, then Greenhouse, plus some smaller tools.

**Alex Rodriguez:** And the Greenhouse AI credits which we're not really using but we're still paying for.

**Jennifer Wu:** Right. So there's always pressure to optimize costs. But the way I think about it is, what's the cost of not filling roles? If we can't hire fast enough, that slows down the company. We're trying to build a multi-billion dollar business here. If a tool costs us $100K a year but it helps us fill 30 roles that we otherwise wouldn't have filled, and each of those engineers is generating millions in value, the ROI is obvious.

**David Kim:** And there's the productivity angle too. If Jewel makes me 30% more productive, that's like getting an extra recruiter for free. A recruiter costs way more than a software license.

**Interviewer:** That's a great way to think about it. Have you looked at other sourcing tools? What else is out there?

**Jennifer Wu:** Oh, we've looked at everything. *laughs* Alex, you probably have the full list.

**Alex Rodriguez:** Yeah, I track all the sourcing tools in the market. There's probably 30 or 40 at this point. It's getting crowded.

**Interviewer:** Which ones have you seriously evaluated?

**Jennifer Wu:** We tried SeekOut for a few months last year. It was interesting but didn't stick. The diversity search features were cool, but ultimately we didn't see enough value to justify adding another tool to the stack.

**David Kim:** I tried HireEZ for a bit. It was okay, but I didn't love the UI. And I felt like it was trying to automate too much. Like, I want tools that augment what I do, not tools that try to replace me.

**Interviewer:** What do you mean by that?

**David Kim:** Like, some of these tools pitch themselves as "AI will find all the candidates for you automatically." But I don't want that. I want to be actively involved in sourcing. I want to understand my search criteria and have control over them. I want to use my judgment about who to reach out to. The tools should make me faster and more efficient, but I still want to be the one driving the process.

**Jennifer Wu:** Although I think there's a spectrum there. Some recruiters want more automation than David does. It depends on your style.

**David Kim:** That's fair. I'm probably more hands-on than average.

**Alex Rodriguez:** We also looked at Gem maybe a year ago? The CRM features looked strong, but we already have CRM functionality in Jewel. And Gem really wants you to use their whole platform. We weren't interested in switching away from Greenhouse.

**Jennifer Wu:** Yeah, Greenhouse as an ATS works well for us. The problem is more on the sourcing side. So we're looking for tools that integrate with Greenhouse, not tools that want to replace it.

**Interviewer:** That makes sense. What about Greenhouse's perspective? Do they know people aren't using their AI sourcing?

**Jennifer Wu:** I'm sure they have the data. We've given them feedback through our account rep. I think they know it's not landing well, at least not with companies like us who have more sophisticated needs.

**Alex Rodriguez:** The challenge for Greenhouse is they're trying to build something that works for everyone - from small startups to large enterprises. And what works for a 10-person company isn't the same as what works for us.

**Interviewer:** That's a good point. So thinking about the future, what would make your sourcing more effective? If you could change anything, what would it be?

**David Kim:** For me, it's about making it easier to manage all these different search profiles. Like, I love that I can save searches in Jewel, but I have so many now that it's getting hard to organize them. I wish I could group them into categories or folders. Like, all my distributed systems searches in one folder, all my data scientist-engineer searches in another folder, all my DevRel searches in a third folder.

**Jennifer Wu:** That's a good point. Better organization of saved content.

**David Kim:** And it would be great if there was an easier way to share searches across the team. Like, if I've built a really great search for distributed systems engineers, and we hire another recruiter to work on those roles, I should be able to just duplicate my search for them with one click. Right now, I'd have to manually show them how to rebuild it.

**Alex Rodriguez:** From my perspective, better cross-tool analytics would be huge. I want to be able to see the full candidate journey from source to hire across all our systems. Right now that requires a lot of manual data work.

**Jennifer Wu:** More integration generally. Less manual data entry, less copying and pasting between systems. That would save the team a ton of time.

**Interviewer:** If you saved that time, what would you do with it?

**Jennifer Wu:** More high-value activities. More personalized outreach, more relationship building, more strategic thinking about our sourcing approach. Right now we spend too much time on administrative tasks.

**David Kim:** Yeah, agreed. Like, if I could save five hours a week on data entry and system administration, I could reach out to another 20 or 30 high-quality candidates. That would directly impact my hiring numbers.

**Interviewer:** That's significant. What about new features or capabilities? Is there anything you wish existed that doesn't today?

**David Kim:** Hmm. I think better intelligence about candidate engagement would be cool. Like, if the system could tell me, "This person has opened your last three emails but hasn't responded - maybe try a different approach," or "This person engaged with your outreach six months ago but it wasn't the right timing - maybe revisit now." That kind of insight would be valuable.

**Jennifer Wu:** Yeah, engagement tracking and follow-up cadence tools would be useful. We're doing a lot of that manually right now.

**Alex Rodriguez:** From a data perspective, I'd love more benchmarking. Like, what's good performance for a distributed systems engineer search? How do our metrics compare to other data infrastructure companies? I don't have a lot of external context, so it's hard to know where we stand.

**Interviewer:** That's interesting. So comparative benchmarking across similar companies or roles.

**Alex Rodriguez:** Yeah, exactly. That would help me understand if we're doing well or if there's room for improvement.

**Interviewer:** Let's talk about the decision-making process. How do you decide whether to adopt a new tool or change what you're using?

**Jennifer Wu:** It usually starts with the team. If recruiters are telling me they need something or something isn't working, I listen to that. David's been a big advocate for Jewel, and that feedback influenced our decision to expand our license count.

**David Kim:** I mean, I'm just vocal about what works. *laughs*

**Jennifer Wu:** And that's good! I want the team to tell me what they need. But then I also have to think about budget and whether something is scalable across the whole team. What works for David might not work for everyone.

**Alex Rodriguez:** I do a lot of the vendor evaluation. I'll do demos, run trials, collect feedback from the team, pull together data on costs and ROI. Then Jennifer makes the final call.

**Jennifer Wu:** Yeah, and I'm balancing a lot of factors - cost, functionality, ease of use, integration with our existing stack, support and training, scalability. It's not just about which tool has the most features. It's about what makes sense for our team and our workflow.

**Interviewer:** Are there any specific changes you're considering for the next budget cycle?

**Jennifer Wu:** We're definitely talking about what to do with the Greenhouse AI sourcing credits. Like, can we downgrade our plan or opt out of those? I need to talk to our Greenhouse rep about that.

**Alex Rodriguez:** And we might expand our Jewel license. Right now we have maybe 15 licenses, but we have 22 people on the recruiting team. Not everyone has access. If we're seeing good results from the people who are using it, it might make sense to expand.

**David Kim:** I'd love that. I think if everyone had the tools I have, the whole team would be more effective.

**Jennifer Wu:** But again, it comes back to training. Just giving someone a license doesn't mean they'll use it well. We need to invest in onboarding.

**Interviewer:** How would you approach that?

**Jennifer Wu:** I think we need a more structured training program. Right now it's pretty ad hoc - someone new joins and they shadow someone more experienced. But maybe we need formal training modules, best practices documentation, office hours where power users can help others. Something more systematic.

**Alex Rodriguez:** I could probably build out some of that. Like, I could create training materials, run workshops, that kind of thing.

**Jennifer Wu:** Yeah, that would be great. Let's talk about that offline.

**Interviewer:** This has been really helpful. Is there anything else you think I should know about your sourcing challenges or needs?

**David Kim:** I think the main theme for me is that recruiting for specialized technical roles requires specialized tools. Like, Databricks is hiring for some pretty cutting-edge stuff - distributed systems, data infrastructure, machine learning at scale. The candidate pools are not huge, and you need to be really precise in your targeting. Generic sourcing tools don't cut it. We need tools that can handle complexity and nuance.

**Jennifer Wu:** And we're scaling, which means we need solutions that can grow with us. What works at 60 hires per quarter might not work at 100 hires per quarter. We need to be thinking ahead.

**Alex Rodriguez:** Yeah, and from an ops perspective, as the team grows, the complexity compounds. More recruiters means more data to manage, more workflows to coordinate, more reporting to do. We need infrastructure that can handle that scale.

**Interviewer:** Those are all great points. Well, I really appreciate you all taking the time. This has been incredibly insightful.

**Jennifer Wu:** Of course, happy to help. Always good to step back and reflect on this stuff.

**David Kim:** Yeah, and if you come up with solutions to any of these problems, let us know. *laughs*

**Alex Rodriguez:** We'd love to be beta testers.

**Interviewer:** *laughs* Noted. Thanks again, everyone.

---

**End of Transcript**  
**Word Count:** 4,000

