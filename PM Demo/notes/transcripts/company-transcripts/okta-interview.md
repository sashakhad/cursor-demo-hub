# Okta Interview Transcript
**Date:** April 5, 2024
**Company:** Okta (Partial Customer)
**Attendees:** 
- Elizabeth Moore (VP Talent Acquisition)
- Gregory Taylor (Director of Engineering Recruiting)
- Samantha White (Lead, Recruiting Operations & Systems)

**Interviewer:** Michelle Rodriguez (Jewel Product Team)

---

## Opening

**Interviewer:** Hi everyone, thanks so much for taking the time today. I know you're all busy, so I really appreciate you making space for this conversation. Just to set the stage, we're doing some user research to understand how recruiting teams like yours are thinking about sourcing - what's working, what's not, where the pain points are. This is purely a learning conversation, nothing formal or binding. Sound good?

**Elizabeth Moore (VP Talent Acquisition):** Absolutely, happy to help. We're always interested in talking about recruiting, especially sourcing. It's a big focus area for us right now.

**Gregory Taylor (Director of Engineering Recruiting):** Yeah, and we're Jewel customers already on the ATS side, but we haven't fully explored the AI sourcing capabilities yet. So this is timely.

**Samantha White (Lead, Recruiting Operations & Systems):** And just to give context on my role - I oversee recruiting operations, which includes our tech stack, integrations, data infrastructure, reporting, all the operational side of recruiting.

**Interviewer:** Perfect, that's really helpful to have all those perspectives. So to kick us off, can you give me a sense of the scale we're talking about? How big is your recruiting team, what's your hiring volume?

**Elizabeth Moore:** Sure. So our TA team is about 60 people globally. We're split primarily between engineering recruiting, which is probably 40 people, and then go-to-market, corporate functions, that kind of thing. On the engineering side, we're hiring between 80 to 100 people per quarter, roughly. That's been pretty consistent over the last six months or so.

**Gregory Taylor:** And I'd say the composition is probably 50% software engineers, 25% security engineers, 15% infrastructure and site reliability, and 10% data and analytics. Those are rough numbers, but that's the mix.

**Interviewer:** Got it. And what does your recruiting tech stack look like today?

**Samantha White:** So we're on Workday for HRIS, and we've been on Workday for about four years. We're on Jewel for ATS, which we migrated to about a year and a half ago. That's been a good move for us - it's a big improvement over what we had before. For sourcing, we're primarily on LinkedIn Recruiter. We have about 30 seats. And then we have some smaller tools - we use Codility for technical assessments, Greenhouse for scheduling, and we've been experimenting with a couple of newer sourcing tools.

**Elizabeth Moore:** The Jewel-Workday integration has been pretty solid. There have been a few hiccups here and there, but overall it's worked well. We were deliberate about choosing an ATS that would integrate cleanly with Workday because we didn't want data silos.

**Gregory Taylor:** And LinkedIn is kind of the workhorse for sourcing. It's what everyone knows, it's what everyone uses. We've looked at alternatives but haven't found anything compelling enough to make a big change.

**Interviewer:** Interesting. Have you evaluated Workday's AI or sourcing offerings at all?

**Samantha White:** We have, and... they're not competitive. To be blunt, Workday is great for the core HR functions, but their recruiting and sourcing tools are pretty weak compared to specialized platforms.

**Elizabeth Moore:** Yeah, we looked at their talent intelligence product and it was clear pretty quickly that it wouldn't work for technical recruiting. It's too basic, the AI isn't sophisticated enough, and it doesn't understand the nuances of security engineering or software engineering.

**Gregory Taylor:** We need best-of-breed tools for recruiting. Workday is great for what it does, but sourcing isn't their strength.

## Current State Discussion

**Interviewer:** That makes sense. So let's dig into sourcing. Walk me through how it works today. What does a typical sourcing process look like at Okta?

**Gregory Taylor:** Okay, so let's say we get a req for a senior security engineer. The hiring manager will submit the req, and we'll schedule an intake meeting to understand what they're looking for - what domain within security, what technical skills, what level of seniority, all of that.

**Elizabeth Moore:** The intake process is really important for us because security is such a broad field. If we don't get clear requirements upfront, we end up sourcing the wrong people and wasting time.

**Gregory Taylor:** Right. So once we have clear requirements, the req gets assigned to one of our technical recruiters. We have recruiters who specialize in different areas - some focus on security, some focus on infrastructure, some focus on backend or frontend development. They do full-cycle recruiting, which includes sourcing.

**Interviewer:** So your recruiters are doing their own sourcing? You don't have dedicated sourcers?

**Gregory Taylor:** We have a small sourcing team - I think it's three people right now - but they can't cover all the reqs. They focus on high-priority or high-volume roles, and the recruiters handle the rest.

**Samantha White:** And they're all using the same tools, primarily LinkedIn Recruiter. So it's not like the sourcers have different capabilities, they're just dedicated to sourcing full-time.

**Interviewer:** Got it. So when someone's sourcing on LinkedIn, what does that look like? Walk me through the process.

**Gregory Taylor:** They'll build a search query using LinkedIn's filters - job title, location, current company, skills, years of experience. And then they'll layer on Boolean search for keywords in the profile text. So for a security role, you might search for "security engineer" OR "application security" OR "AppSec" and then add keywords like "OWASP," "penetration testing," "vulnerability management," depending on what the hiring manager needs.

**Samantha White:** We've built up a library of Boolean strings over time. We have a shared Notion page where recruiters can find pre-built searches for common roles. It helps with consistency and it's good for onboarding new team members.

**Gregory Taylor:** But even with that, it's still really manual. You're scrolling through profiles, clicking into each one, reading their experience, trying to assess if they're a fit. For a single role, you might look at 100-plus profiles to identify 20-30 people to reach out to.

**Interviewer:** How much time are recruiters spending on sourcing per week?

**Gregory Taylor:** Um, I'd say on average, probably 10-15 hours a week. For the dedicated sourcers, it's obviously more - probably 35-40 hours a week.

**Elizabeth Moore:** That's a big chunk of time. And the question we're constantly asking is, how can we make this more efficient? Can we get better results in less time?

**Interviewer:** That's a great question. How are the results currently? Are you finding the right people?

**Gregory Taylor:** It depends on the role. For more generic software engineering roles - backend, frontend, full-stack - LinkedIn works pretty well. There's a large talent pool and it's relatively easy to find qualified people. But for security roles, especially specialized security roles, it's much harder.

**Interviewer:** Tell me more about that. Why is security harder?

**Gregory Taylor:** So, security engineering is actually a really broad umbrella. At Okta, we hire security engineers across several different domains, and the skillsets are really different. You've got application security engineers who are focused on secure code review, vulnerability scanning, penetration testing. You've got infrastructure security engineers who are focused on cloud security, network security, hardening systems. You've got identity and access management specialists who are focused on authentication, authorization, SSO, all of that. And given that we're an identity company, IAM is a big focus for us.

**Samantha White:** And they all get labeled as "security engineer" in most companies' org structures, but the technical depth and focus areas are really different.

**Interviewer:** So when you're sourcing for these roles, are you treating them differently?

**Gregory Taylor:** We should be, and our more experienced recruiters do. But it's inconsistent. If you're a newer recruiter or you're covering a role outside your normal area, you might just search for "security engineer" and not really differentiate.

**Elizabeth Moore:** This is a gap we've identified. We have institutional knowledge about what makes a good AppSec engineer versus a good infrastructure security engineer versus a good IAM specialist, but it's not codified. It's in people's heads, or maybe in some informal documentation, but it's not systematized.

**Interviewer:** Can you give me a specific example of where this came up?

**Gregory Taylor:** Yeah, absolutely. So we had a req a couple of months ago for a senior application security engineer. This was for our product security team, and they were looking for someone who could do threat modeling, secure code reviews, work with our engineering teams to build security into the development lifecycle. Ideally someone with a development background who moved into security.

**Samantha White:** I remember this role because it took almost four months to fill, which is longer than we'd like.

**Gregory Taylor:** Right. So the challenge was, when you search for "application security" on LinkedIn, you get a really wide range of people. You get pentesters who are focused on breaking into systems. You get security analysts who are focused on monitoring and incident response. You get compliance folks who are focused on frameworks and audits. Those are all valid security roles, but they're not AppSec with a dev background.

**Interviewer:** So how did you source for that role?

**Gregory Taylor:** The recruiter started with keywords like "application security," "secure code review," "SAST," "DAST," "OWASP." They found some candidates, but a lot of them were more on the pentesting or vulnerability scanning side. Not the secure development lifecycle focus we needed.

**Elizabeth Moore:** And the hiring manager was getting frustrated because they were spending time on phone screens with people who weren't quite the right fit. They'd have security experience, but not the dev background or the AppSec specialization we were looking for.

**Gregory Taylor:** So we refined the search. We added keywords like "SDLC," "secure development," "security champion," and we looked at people from companies known for strong AppSec programs - like, Airbnb, Netflix, Salesforce. We also looked for people who had transitioned from software engineering to security, which you can sometimes see in their job history.

**Interviewer:** And that worked better?

**Gregory Taylor:** It did, but it took a lot of iteration. And the thing is, we've had similar roles before and we'll have them again. We shouldn't have to reinvent the wheel each time. We should be able to say, "This is an AppSec role with a dev background, here's the search strategy that works for this," and just execute.

**Samantha White:** This is where I think technology could really help. If a tool could understand the different types of security roles and suggest search strategies or filter sets for each one, that would save a ton of time and improve quality.

**Interviewer:** That makes a lot of sense. So sticking with the current state for another minute, once you've identified candidates on LinkedIn, what happens next?

**Samantha White:** They'll save the profiles or export a list. Then they need to find contact information - email addresses, phone numbers. LinkedIn doesn't always provide that, so they're using other tools like Hunter, RocketReach, Apollo.

**Gregory Taylor:** The contact data thing is annoying because we're already paying for LinkedIn, and then we have to pay for additional tools to actually reach people. It feels inefficient.

**Elizabeth Moore:** And once they have contact info, they'll reach out via email or LinkedIn InMail. If someone responds positively, they get added to Jewel and we move them through the recruiting process.

**Interviewer:** How are response rates looking?

**Gregory Taylor:** It varies. For really hot roles like security engineering or site reliability engineering, response rates might be 10-15% because those people are getting hit up constantly. For more niche specialties, it can be a bit better - maybe 20%. And our brand helps. Okta is well-known in the identity and security space, so that opens doors.

**Samantha White:** But even with decent response rates, the conversion from response to hire is pretty low. We might reach out to 100 people, get 15 responses, get 5 to phone screen, and hire 1. So the funnel is pretty leaky.

**Elizabeth Moore:** Which is why targeting is so important. If we can improve the quality of the people we're reaching out to - make sure they're actually the right type of security engineer or the right type of software engineer - we can improve those conversion metrics.

## Pain Points Exploration

**Interviewer:** Okay, so let's go deeper on the pain points. It sounds like there are some key themes - the specialization within security roles, the time intensity of sourcing, contact data. What else is frustrating you?

**Elizabeth Moore:** Budget is always a consideration. We're spending, what, around $250K a year on LinkedIn?

**Samantha White:** Yeah, with 30 seats at roughly $8,500 per seat, we're looking at about $255K annually just for LinkedIn Recruiter.

**Elizabeth Moore:** Right. And that's a significant investment. We need to make sure we're getting value for that, and we should be continuously evaluating whether there are better or complementary tools.

**Gregory Taylor:** From a day-to-day perspective, the biggest pain point is just the time sink of sourcing. Recruiters spend a huge chunk of their time scrolling through profiles, reading job descriptions, trying to figure out if someone's a fit. It's tedious, and it takes away from other parts of the job like candidate experience and hiring manager partnership.

**Samantha White:** And from an ops perspective, data visibility is really challenging. I can pull reports from LinkedIn on activity - searches, InMails, response rates. And I can pull reports from Jewel on candidates in the pipeline. But connecting those to understand end-to-end sourcing effectiveness and ROI is really hard.

**Interviewer:** What would perfect data visibility look like for you?

**Samantha White:** I'd want full funnel visibility. How many profiles reviewed, how many outreach attempts, how many responses, how many phone screens, how many onsites, how many offers, how many acceptances. And then I'd want to cut that by role type, by recruiter, by source, by geography. And ideally, I'd tie it to quality metrics - how are the people we sourced actually performing six months or a year after hire?

**Elizabeth Moore:** That feedback loop would be incredibly valuable. If we could see that candidates sourced through a particular strategy or from a particular company tend to be high performers, we could double down on that. Right now, that's all anecdotal.

**Interviewer:** Let's go back to the security role specialization, because that seems like a really core pain point. You gave the example of the AppSec role. Are there other examples where this nuance comes up?

**Gregory Taylor:** Oh yeah, constantly. Let me give you another one. We hire infrastructure security engineers, and within that, there's a lot of variation. Some of our teams need people who are deep in cloud security - AWS IAM, security groups, cloud-native security controls. Other teams need people who are more focused on network security - firewalls, VPNs, DDoS protection. Other teams need people who are focused on endpoint security or container security or Kubernetes security. Those are all "infrastructure security," but they're different skillsets.

**Samantha White:** And if you just search for "infrastructure security engineer," you get everyone. You get people who've done a little bit of everything but aren't deep in any one area. You get traditional network security people who haven't really done cloud. You get cloud engineers who've done some security but it's not their primary focus.

**Gregory Taylor:** Right. So you end up screening a lot of people who sound good on paper but aren't quite the right fit. And you miss people who would be perfect because they don't show up in your broad search.

**Interviewer:** So if you could design a solution, what would it look like?

**Elizabeth Moore:** I think we need a way to define different candidate profiles or search strategies for different types of security roles. So we'd have one profile for AppSec engineers with a dev background - looking at specific keywords, company backgrounds, career transitions. Another profile for cloud security engineers - looking at cloud certifications, specific tools, cloud-native companies. Another profile for IAM specialists - looking at identity protocols, authentication systems, companies in the identity space.

**Gregory Taylor:** And those profiles would be maintained as institutional assets. When we learn something new - like, "Oh, people from Company X tend to be a great fit for this role" - we add that to the profile. It becomes a living, evolving knowledge base rather than just one recruiter's personal notes.

**Samantha White:** Yeah, and it needs to be integrated into the workflow. When a recruiter picks up a cloud security req, the system should say, "For this type of role, here's the recommended search profile." They can use it as-is or customize it, but they have a strong starting point.

**Interviewer:** That makes a lot of sense. Are there other role types where you see this same pattern?

**Gregory Taylor:** Definitely. We see it in infrastructure and SRE roles - there are people who are more platform engineering focused versus observability focused versus reliability focused. We see it in backend engineering - there are people who are more API/microservices focused versus data systems focused versus distributed systems focused. These nuances exist across most technical roles.

**Elizabeth Moore:** And the hiring managers often don't articulate it clearly in the intake meeting. They'll say "I need a security engineer," and you have to probe - okay, what kind? What will they be working on? What's the tech stack? What's the first project? It takes a lot of domain knowledge to extract the real requirements.

**Interviewer:** What other pain points should I know about?

**Samantha White:** Integration is a big one. We have data spread across LinkedIn, Jewel, Workday, various spreadsheets. Getting a unified view for reporting is really painful. I probably spend 8-10 hours a week just wrangling data for executive dashboards.

**Gregory Taylor:** And there's no good way to track engagement history over time. If we reached out to someone a year ago for a different role and they weren't interested, we should know that before we reach out again. But there's no system that tracks that across recruiters and over time.

**Elizabeth Moore:** Candidate experience suffers when we don't have that visibility. We might reach out to the same person multiple times, or reach out to someone who already told us they're not interested in Okta. That's not a good look for our brand.

**Interviewer:** How do you manage that today?

**Samantha White:** Mostly through recruiter memory and manual notes in Jewel. Recruiters are pretty good about documenting conversations, but across 40 recruiters, there's definitely duplication and inefficiency.

**Gregory Taylor:** And data staleness is an ongoing issue. LinkedIn profiles are often out of date. Someone's listed at Company X but they left a year ago. Or their skills haven't been updated in years. We waste time on stale data.

**Interviewer:** How often is that a problem?

**Samantha White:** I'd estimate 20-25% of profiles have some level of outdated information. Sometimes it's not a dealbreaker - like, they moved to a different but still relevant company. But it adds noise.

**Elizabeth Moore:** If there were a way to validate data freshness or cross-reference multiple sources automatically, that would be helpful.

## Competitive Landscape

**Interviewer:** That's good context. Let's talk about other tools you've looked at. Have you evaluated alternatives to LinkedIn or complementary tools?

**Samantha White:** We've looked at several over the last year. We did demos with HireEZ, SeekOut, and Findem. And we've been watching Juicebox, but we haven't tried it yet.

**Gregory Taylor:** HireEZ was interesting. It aggregates data from multiple sources - LinkedIn, GitHub, Stack Overflow, other places. The idea is you get a more complete picture of a candidate. The demo was solid, but when we really dug in, we weren't sure it was different enough from LinkedIn to justify the switch.

**Elizabeth Moore:** Yeah, the bar is high. It can't just be a little better or a little different. It has to be meaningfully better to justify the change management, the training, the transition costs.

**Interviewer:** What would make something meaningfully better?

**Elizabeth Moore:** It would need to be a step change improvement in at least one key dimension - candidate quality, sourcing speed, integration, or cost. Ideally, a combination. And it needs to work for our specific use cases, which is security-heavy engineering recruiting.

**Gregory Taylor:** And it has to be trustworthy. We're not going to adopt something that's unreliable or produces inconsistent results. We're hiring for security roles - we need quality and accuracy.

**Interviewer:** What did you think of the other tools?

**Gregory Taylor:** SeekOut was interesting mostly for the diversity features. They have good filtering and analytics for underrepresented groups, which is important to us. But the core sourcing didn't feel dramatically better than LinkedIn.

**Samantha White:** Findem had a nice pitch around AI and data accuracy. They claim to have better matching algorithms and fresher data. But we haven't tested it hands-on, so I can't speak to whether it delivers.

**Elizabeth Moore:** And Juicebox is getting a lot of buzz, but it feels early. We'd want to see it mature before we'd seriously consider it for our use case.

**Interviewer:** Have any of these tools addressed the security role specialization or profile filtering challenge you've been describing?

**Gregory Taylor:** Not really. They all have saved search functionality, but it's basic - you save your filters and re-run them later. They're not helping you think through the different personas within security engineering or suggesting strategies based on role type.

**Elizabeth Moore:** If someone could solve that problem well, it would be a major differentiator. Show us that you understand the nuance of security roles and can help us source more effectively for each specialty.

**Interviewer:** Good to know. What about integration? How important is that in your evaluation?

**Samantha White:** It's critical. We're on Jewel and Workday. Any new tool needs to integrate seamlessly. Candidates need to flow into Jewel automatically, activity needs to be tracked, sourcing attribution needs to be captured. If we're doing manual exports and imports, that defeats the purpose.

**Elizabeth Moore:** This is actually a potential advantage for Jewel. You're already our ATS. If your AI sourcing module is tightly integrated, that removes a lot of friction. We don't have to worry about syncing data between systems or duplicate records.

**Gregory Taylor:** But the integration needs to be deep. It's not enough to just create a candidate record in Jewel. We need full activity tracking, source attribution, notes, everything. Otherwise, we're back to manual data management.

**Interviewer:** That's fair. What about pricing? How do these tools compare?

**Samantha White:** Most of them are in a similar price range to LinkedIn - maybe slightly cheaper per seat, but not dramatically. So pricing isn't usually the deciding factor. It's more about functionality, integration, and results.

**Elizabeth Moore:** We're willing to pay for value. If a tool demonstrably improves our sourcing efficiency and quality, the ROI is there. But we need to see evidence - case studies, metrics, proof points.

**Gregory Taylor:** Yeah, and we're thinking about total cost of ownership. Subscription cost, implementation cost, training cost, productivity impact during transition - all of that factors in.

## Future Needs & Closing

**Interviewer:** That makes sense. So looking ahead, what would the ideal sourcing solution look like for Okta? If you could design it from scratch, what would you build?

**Elizabeth Moore:** I think we've touched on most of it. First, it would understand the nuances of security engineering roles. It would know the difference between AppSec with a dev background, infrastructure security with cloud focus, IAM specialists, and so on. And it would help us source accordingly.

**Gregory Taylor:** Second, it would let us define, save, and share search profiles for different types of roles. And it would be smart enough to recommend the right profile based on the role description. That institutionalization of knowledge is huge.

**Samantha White:** Third, it would have seamless integration with Jewel and Workday. One source of truth, no manual data movement, full tracking and attribution, and comprehensive reporting from sourcing to hire.

**Elizabeth Moore:** Fourth, it would have built-in contact data that's accurate and current. And it would have engagement tracking so we know our history with each candidate.

**Gregory Taylor:** And fifth, the AI would be transparent and explainable. I should be able to understand why it's suggesting certain candidates and adjust the parameters if needed. No black boxes.

**Interviewer:** Those are great. What about the evaluation and decision-making process? How do you go from demo to adoption?

**Elizabeth Moore:** We typically start with a demo to see if it's worth pursuing. If it looks promising, we'll do a pilot with a small group of recruiters - maybe 8-10 people - for 6-8 weeks. During that time, we're measuring results - candidate quality, sourcing efficiency, response rates, conversion rates - and gathering feedback.

**Samantha White:** In parallel, I'm doing the technical diligence. Security review, integration assessment, compliance check, vendor risk assessment. We have a rigorous process for any tool that handles candidate data.

**Gregory Taylor:** If the pilot is successful and the technical review is clean, we'll build a business case. What's the cost? What's the expected ROI? What's the implementation plan? And we'll take that to Elizabeth and ultimately to our CFO for approval.

**Elizabeth Moore:** And even after approval, we'd do a phased rollout. Start with a larger pilot group, build success stories, train people, and then expand to the full team over a quarter or two.

**Interviewer:** What's your timeline for making a decision?

**Elizabeth Moore:** We're hoping to have something in place by late Q3. So we'd want to wrap up evaluations by end of Q2, make a decision in early Q3, and start implementation by mid-to-late Q3.

**Gregory Taylor:** And we'd probably want a full quarter of usage before we assess impact. So implement in Q3, evaluate in Q4, and then decide whether to expand or adjust course.

**Samantha White:** That's our typical approach. Test, learn, iterate, scale what works. We don't make big bets without evidence.

**Interviewer:** Makes sense. What else should I know about your evaluation criteria?

**Elizabeth Moore:** The most important thing is proven results. Don't just tell us it works - show us. Case studies from similar companies, metrics on improvements, customer references. We need evidence.

**Gregory Taylor:** And be honest about limitations. If there are things the tool can't do or areas where it's still improving, tell us upfront. We'd rather know the reality than be sold a vision that doesn't materialize.

**Samantha White:** And think about the full picture - training, enablement, support, ongoing product development. It's not just about the tool itself, it's about the partnership. Are you going to help us be successful with it?

**Interviewer:** Those are all really good points. Anything else you'd want from a vendor?

**Elizabeth Moore:** Responsiveness and a commitment to continuous improvement. We know no product is perfect on day one. But we need to know you're going to listen to feedback, iterate on the product, and work with us to make it better over time.

**Gregory Taylor:** And good enablement materials - training docs, best practices, user community, regular webinars or office hours. The easier you make it to adopt and use effectively, the better our results will be.

**Samantha White:** And transparency on the roadmap. What's coming next? What are you investing in? We want to know we're partnering with a platform that's going to keep evolving and improving.

**Interviewer:** All of that makes a lot of sense. Well, I think I've learned a ton today. This has been incredibly valuable. Is there anything else you want to share or any questions for me?

**Elizabeth Moore:** I don't think so. This was a helpful conversation. It forced us to articulate what we really need from a sourcing solution, which is clarifying.

**Gregory Taylor:** Yeah, and the persona filtering for security roles is really the key unlock. If Jewel or anyone else can solve that problem well - helping us codify and apply the different search strategies for AppSec versus infrastructure security versus IAM - that would be a game-changer.

**Samantha White:** Agreed. And if you have solutions or ideas that address these pain points, we're definitely interested in learning more.

**Interviewer:** Noted. Well, thank you all so much for your time. I'll take everything back to the team and we can reconnect in a few weeks.

**Elizabeth Moore:** Sounds great. Thanks, Michelle.

**Gregory Taylor:** Thanks.

**Samantha White:** Appreciate it, thanks.

