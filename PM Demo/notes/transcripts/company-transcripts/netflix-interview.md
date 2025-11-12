# Netflix Interview Transcript
**Date:** October 1, 2024  
**Attendees:** Amanda Foster (Senior Technical Recruiter), Carlos Rodriguez (Lead Recruiter, Content Platform), Jessica Liu (Sourcing Lead)  
**Interviewer:** Rachel Kim (Jewel Product Team)  
**Duration:** 61 minutes

---

**Interviewer:** Hey everyone! Thanks so much for joining today. I know you're all super busy, so I really appreciate you taking the time.

**Amanda Foster:** Of course! Happy to be here.

**Carlos Rodriguez:** Yeah, no problem. Always good to talk about recruiting tech.

**Jessica Liu:** Same here. Looking forward to it.

**Interviewer:** Awesome. So just to set expectations, we're doing these customer discovery conversations to understand how companies are approaching technical sourcing in 2024. We want to learn from you—what's working, what's not, what you wish existed. There's no sales pitch here, just genuine curiosity. Does that sound good?

**Amanda Foster:** Sounds perfect.

**Interviewer:** Great. So let's start with some context. Can you give me a quick overview of Netflix's recruiting operation? Team size, hiring volume, that kind of thing?

**Amanda Foster:** Sure. Our recruiting team is pretty large—we're about forty people globally. That includes recruiters, sourcers, coordinators, and recruiting ops. In terms of hiring volume, we're doing probably sixty to seventy hires per quarter right now, which is down from the peak a few years ago, but still substantial.

**Carlos Rodriguez:** And just to add some color, I focus specifically on content platform roles, which is a pretty significant chunk of that. We're probably hiring fifteen to twenty content platform engineers per quarter.

**Jessica Liu:** And I lead our sourcing team, which is about eight people. We support the recruiters by building pipelines for the harder-to-fill roles.

**Interviewer:** Got it. And when you say content platform roles, Carlos, what does that encompass?

**Carlos Rodriguez:** It's pretty broad. We have engineers working on content delivery—so like, CDN optimization, streaming protocols, all that. We have engineers working on our recommendation algorithms. We have engineers working on video encoding and transcoding. And then we have engineers working on content production technology—tools for our internal teams who are creating content. So it's a whole ecosystem.

**Amanda Foster:** And the challenge is that each of those areas requires pretty different skill sets. A content delivery engineer is not the same as a recommendation algorithm engineer, even though they both fall under the content platform umbrella.

**Interviewer:** That's really interesting. We'll definitely dig into that. But first, let's talk about your tech stack. What are you using for ATS and sourcing?

**Amanda Foster:** We're on Greenhouse for our ATS. We've been on Greenhouse for probably six or seven years now. Before that, we were on Jobvite, but we outgrew it.

**Jessica Liu:** And for sourcing, we use a bunch of tools. LinkedIn Recruiter is the baseline—everyone has that. We also have Jewel, which we started using maybe two years ago? That's been our primary sourcing platform.

**Carlos Rodriguez:** We also have Greenhouse's AI sourcing module, which came bundled with our contract. Some people use it, some don't. It's kind of optional.

**Interviewer:** Okay, interesting. So you're a Jewel customer. How did you end up with Jewel?

**Jessica Liu:** We did a pretty extensive vendor evaluation about two years ago. We looked at SeekOut, HireEZ, Juicebox, Gem, and Jewel. We ended up going with Jewel primarily because of the UX and the AI intake form feature.

**Amanda Foster:** Yeah, the AI intake form was a big differentiator for us. It makes the process of translating a job description into a search query so much easier. You basically have a conversation with the AI about what you're looking for, and it builds out the search parameters for you.

**Carlos Rodriguez:** And the UX is just clean. It's intuitive, it doesn't feel cluttered. After using tools like SeekOut, which have a million options and toggles, Jewel felt refreshing.

**Interviewer:** That's great to hear. So you've been using Jewel for about two years. How's it going?

**Jessica Liu:** Overall, it's been really positive. The team has adopted it well, and we're seeing good results. The one area where we've had to do some work is around building out the right search strategies for different role types.

**Interviewer:** Tell me more about that. What do you mean by different search strategies?

**Jessica Liu:** So, going back to what Carlos mentioned earlier, content platform roles are really diverse. The search strategy for a content delivery engineer is completely different from the search strategy for a recommendation algorithm engineer. And we've had to build out those different approaches deliberately.

**Carlos Rodriguez:** Yeah, and this is where Jewel's saved filters feature has been really valuable. I've basically built out different filter personas for different types of content platform roles, and I can pull them up depending on what I'm hiring for.

**Interviewer:** Okay, this is interesting. Can you walk me through what you mean by filter personas?

**Carlos Rodriguez:** Sure. So let me give you a concrete example. Let's say I'm hiring for a content delivery engineer. This is someone who's going to work on our CDN, optimize video streaming, deal with network protocols, all that. For that role, I have a saved filter set in Jewel that's optimized for finding people with that specific background.

**Interviewer:** Okay.

**Carlos Rodriguez:** I'm filtering for people who've worked at companies with large-scale video streaming operations—so like Netflix, obviously, but also YouTube, Twitch, Hulu, Disney+, Amazon Prime Video. I'm looking for people whose titles include "CDN," "content delivery," "video streaming," "network engineer." And I'm looking for people who have experience with protocols like HLS, DASH, WebRTC.

**Interviewer:** Mmhmm.

**Carlos Rodriguez:** And I've saved that whole filter set so I can reuse it whenever I have a content delivery role. But then, if I'm hiring for a recommendation algorithm engineer, I have a completely different saved filter set.

**Interviewer:** What does that one look like?

**Carlos Rodriguez:** That one is focused on people with machine learning and recommendation systems backgrounds. I'm looking for people who've worked at companies with sophisticated recommendation engines—Netflix, Spotify, YouTube, Amazon, TikTok. I'm looking for titles like "ML engineer," "recommendation systems," "personalization," "data scientist." And I'm looking for people who have experience with collaborative filtering, deep learning, A/B testing, all that.

**Amanda Foster:** You can see how different those are, right? If you just searched for "content platform engineer," you'd get a mishmash of all these different backgrounds, and you'd have to manually sift through to find the relevant ones. But by having these separate personas, Carlos can be really targeted.

**Interviewer:** That makes total sense. How many of these personas do you have, Carlos?

**Carlos Rodriguez:** For content platform specifically, I have four. There's the content delivery engineer persona, the recommendation algorithm engineer persona, the video streaming engineer persona—that's for people who work on encoding, transcoding, video codecs—and then the content production technology engineer persona, which is for people who build tools for our internal content creation teams.

**Jessica Liu:** And we're starting to roll out this persona-based approach to other role families too. It's not just content platform. Our infrastructure team has different personas for SRE versus platform engineering versus database engineering. Our product team has different personas for frontend versus backend versus full-stack.

**Interviewer:** This is fascinating. So Jessica, as the sourcing lead, how are you thinking about scaling this approach across the team?

**Jessica Liu:** It's a work in progress. We've identified that this persona-based approach is really effective, and now we're trying to systematize it. We're working on building out a library of personas for common role types, documenting the search strategies, and training the team on how to use them.

**Amanda Foster:** The challenge is that building out these personas takes time. Carlos has spent months refining his four content platform personas. We can't expect everyone to start from scratch, so we're trying to create some starter templates that people can customize.

**Interviewer:** That makes sense. So let's talk about Jewel specifically. You mentioned the AI intake form was a big reason you chose Jewel. How are you using that feature?

**Amanda Foster:** I use it all the time. Basically, when I'm starting a new search, instead of having to manually build out all the filters and Boolean strings, I can just have a conversation with the AI. It asks me questions like, "What's the role title? What are the must-have skills? What companies should we target?" And based on my answers, it builds out the search for me.

**Carlos Rodriguez:** And the nice thing is that it's not a black box. After the AI builds the search, you can see all the filters it applied, and you can tweak them if needed. So you still have control, but it saves you a ton of time on the initial setup.

**Jessica Liu:** For experienced recruiters like us, the AI intake form is a nice-to-have. We could build the searches manually if we needed to. But for newer members of the team, it's been a game-changer. It helps them ramp up much faster because they don't need to know all the tricks of Boolean search or advanced filtering.

**Interviewer:** That's really interesting. So it's almost like a training tool as well as a productivity tool.

**Jessica Liu:** Exactly. And it creates more consistency across the team, because everyone's using a similar process to build their searches.

**Interviewer:** Got it. Okay, let's talk about the other tools you're using. You mentioned Greenhouse AI sourcing. Are people using that at all?

**Amanda Foster:** It's mixed. Some people use it occasionally, but I don't think anyone is using it as their primary sourcing tool. It's more like a supplementary option.

**Carlos Rodriguez:** I tried it for a bit, but I didn't stick with it. The main issue for me was that the results weren't as good as what I could get from Jewel. The AI didn't seem to understand the nuance of the roles I was hiring for.

**Interviewer:** Can you give me an example of that?

**Carlos Rodriguez:** Sure. So I was hiring for a video streaming engineer—someone with deep expertise in video codecs, encoding, transcoding, all that. I put the role into Greenhouse AI, and it gave me back a bunch of generic backend engineers and some frontend engineers who happened to work at media companies. But they weren't video streaming specialists. The AI was making surface-level connections rather than understanding the actual technical requirements.

**Amanda Foster:** And the other issue is the UX. It feels like Greenhouse AI was bolted onto Greenhouse as an afterthought rather than being natively integrated. It's a separate tab, separate interface. It doesn't flow well with the rest of our workflow.

**Interviewer:** Right. So it sounds like integration and UX are important to you all.

**Amanda Foster:** Definitely. We're using these tools all day, every day. If something doesn't fit into our workflow smoothly, it's just adding friction.

**Interviewer:** That makes sense. Okay, let's talk about pain points more broadly. What are the biggest challenges you're facing in sourcing right now?

**Jessica Liu:** Data staleness is a big one. We're constantly running into situations where the contact data we have is outdated. Someone changed companies six months ago, or their email address changed, and we don't know about it until we reach out and get a bounce.

**Carlos Rodriguez:** Yeah, that's frustrating. It makes us look sloppy, and it wastes time.

**Amanda Foster:** The other pain point for me is just the volume of candidates. Even with good filters, we're often dealing with hundreds of potential candidates for a single role. It would be great to have better ways to prioritize or rank candidates within a result set.

**Interviewer:** Interesting. So like, the AI could say, "Here are a hundred candidates, but these top ten are the best matches"?

**Amanda Foster:** Exactly. And ideally, it would show me why those ten are the best matches. What signals is it looking at? What patterns is it seeing? I want transparency, not just a black box.

**Jessica Liu:** I'd also say that outreach and follow-up is still pretty manual. We're using Jewel for sourcing, but then we have to copy candidates over to our email sequencing tool, set up the sequences, track responses. It would be great to have more of that integrated.

**Interviewer:** Got it. So more automation around the outreach workflow. Have you looked at tools that do that?

**Jessica Liu:** We've looked at Gem, which has good sequencing features. But then we'd be adding another tool to the stack, which has its own costs and complexity. Ideally, our sourcing tool would just have those features built in.

**Amanda Foster:** Yeah, we're trying to avoid tool sprawl. We already have Greenhouse, Jewel, LinkedIn, Slack, email tools. Every additional tool is another login, another thing to manage, another thing to train people on.

**Interviewer:** Right. So consolidation would be valuable. What else is on your wishlist for sourcing tools?

**Carlos Rodriguez:** I'd love better analytics and insights. Like, show me which of my saved filter sets are performing best. Show me which sourcing channels are driving the most hires. Help me understand what's working so I can do more of it.

**Amanda Foster:** I'd love better collaboration features. Right now, if I find a good candidate, I have to manually share them with other recruiters who might have relevant roles. It would be great if the tool could say, "Hey, this candidate might also be a fit for this other role that your colleague is working on."

**Jessica Liu:** And I'd love if the tool could learn from our behavior over time. Like, if I keep selecting certain types of candidates and passing on others, the AI should pick up on those patterns and adjust its recommendations accordingly.

**Interviewer:** Those are all great suggestions. Let's talk about the competitive landscape for a minute. You mentioned you evaluated a bunch of tools before choosing Jewel. What did you like and dislike about the other tools?

**Jessica Liu:** SeekOut has a huge database, which is appealing. But the interface is overwhelming. There are so many options, so many toggles. It feels like you need a PhD to use it effectively.

**Amanda Foster:** HireEZ has some interesting AI features, but the contact data quality wasn't as good as Jewel's in our testing. We did a side-by-side comparison, and Jewel's email accuracy was consistently higher.

**Carlos Rodriguez:** Gem is interesting for the sequencing and automation side, but the search and filtering capabilities felt weaker than Jewel. It's like they're optimized for different parts of the sourcing funnel.

**Jessica Liu:** And Juicebox is good—we almost went with them—but the AI intake form feature in Jewel was the tiebreaker for us. That feature really accelerated our onboarding and made the team more productive faster.

**Interviewer:** That's really helpful context. So it sounds like you're pretty happy with Jewel overall?

**Amanda Foster:** Yeah, we are. I mean, there's always room for improvement—no tool is perfect—but overall, it's been a good fit for us.

**Jessica Liu:** The thing I appreciate most is that the Jewel team actually listens to feedback. We've submitted feature requests, and we've seen some of them get implemented. That makes us feel like partners rather than just customers.

**Interviewer:** That's great to hear. Okay, let's talk about the future. Where do you see your sourcing stack going in the next year or two?

**Jessica Liu:** I think we'll continue with Jewel as our primary sourcing platform. We're pretty invested at this point. But I think we might add some complementary tools for specific use cases. Like, maybe we add something for outreach automation, or maybe we add something for sourcing passive candidates on platforms beyond LinkedIn.

**Amanda Foster:** I'd also like to see more AI capabilities in Jewel. The AI intake form is great, but I think there's room for AI to help in other parts of the workflow. Like, AI-powered candidate ranking, AI-powered outreach message generation, AI-powered pipeline management.

**Carlos Rodriguez:** Yeah, as long as the AI is transparent and gives me control. I'm not interested in black box solutions where I don't understand what the AI is doing.

**Interviewer:** Right. So you want AI that augments your work rather than replacing your judgment.

**Carlos Rodriguez:** Exactly. I've been recruiting for ten years. I have good instincts. I don't want to just blindly follow what an AI tells me. But I'm happy to have AI help me be more efficient and catch things I might have missed.

**Interviewer:** That makes sense. Okay, we're coming up on time, but I have a few more questions. You mentioned that you're working on scaling the persona-based approach across the team. What's the plan for that?

**Jessica Liu:** We're building out a persona library. Basically, we're documenting all the personas that our top recruiters have built—Carlos's content platform personas, our infrastructure recruiter's personas, our product recruiter's personas—and we're creating templates that other people can use and customize.

**Amanda Foster:** We're also doing training sessions where the experienced recruiters share their approaches and teach the newer folks how to think about building personas. It's a combination of documentation and hands-on training.

**Interviewer:** That's great. Have you thought about whether Jewel could help with this? Like, could they provide pre-built personas for common roles?

**Jessica Liu:** That would be interesting. I think it would need to be done carefully, because every company is a little different. But having some starter personas or templates could be valuable, especially for common role types.

**Carlos Rodriguez:** I'd also like to see Jewel make it easier to share personas across the team. Right now, saved filters are personal—they're tied to my account. But it would be great if I could publish my personas to a team library so other people can use them.

**Amanda Foster:** Oh, that's a great idea. Like a shared persona library that the whole team can access.

**Interviewer:** I love that. Okay, last few questions. If you were talking to a peer at another company who's evaluating their sourcing stack, what advice would you give them?

**Jessica Liu:** I'd say think about the full workflow, not just the search functionality. Sourcing is more than just finding candidates—it's outreach, follow-up, pipeline management, analytics. Make sure the tool you choose supports the whole workflow, or at least integrates well with your other tools.

**Amanda Foster:** I'd say prioritize UX and ease of use. You're going to be using this tool every day, all day. If it's clunky or confusing, it's going to slow you down. And if it's hard to use, your team won't adopt it.

**Carlos Rodriguez:** I'd say invest in building out personas or search strategies for your key role types. Don't just rely on generic searches. The more targeted you can be, the better your results will be.

**Interviewer:** Great advice. And last question: if we were to reconnect in six months, what would have to be true for you to feel like you've made progress on sourcing?

**Jessica Liu:** I'd want to see our persona library fully built out and the whole team using it. That would mean we've successfully scaled the approach that Carlos and others have pioneered.

**Amanda Foster:** I'd want to see our response rates go up. If we're being more targeted in our outreach, candidates should be more interested. So I'd want to see that reflected in the metrics.

**Carlos Rodriguez:** I'd want to feel like we've tightened up our workflow. Less tool-switching, less manual work, more automation. Just a smoother, more efficient process end to end.

**Interviewer:** Awesome. Well, thank you all so much for your time. This has been incredibly insightful. I really appreciate the thoughtfulness of your answers and all the specific examples.

**Amanda Foster:** Of course! Happy to help.

**Carlos Rodriguez:** Yeah, anytime. This was fun.

**Jessica Liu:** Thanks for having us. Good luck with your research.

**Interviewer:** Thanks! We'll definitely be in touch.

---

**[End of transcript - 4,006 words]**

