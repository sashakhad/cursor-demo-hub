# Capital One Interview Transcript
**Date:** March 28, 2024
**Company:** Capital One (Partial Customer)
**Attendees:** 
- Sandra Williams (SVP Talent Acquisition)
- Marcus Johnson (Director of Technology Recruiting)
- Amy Chen (Manager, Recruiting Operations & Technology)

**Interviewer:** David Park (Jewel Product Team)

---

## Opening

**Interviewer:** Hey everyone, thanks so much for making time today. I know you're all juggling a lot, so I really appreciate you carving out the time. Just to set expectations, this is really a discovery conversation. We're trying to understand how teams like yours are thinking about sourcing, what's working, what needs improvement, where the opportunities are. There's nothing formal about this - we're just here to learn. Does that sound good?

**Sandra Williams (SVP Talent Acquisition):** Absolutely. We're always happy to talk recruiting. And to be honest, we're actively evaluating our sourcing strategy right now, so the timing is good.

**Marcus Johnson (Director of Technology Recruiting):** Yeah, we're Jewel customers on the ATS side, as you know, but we're not using the AI sourcing module yet. That's something we're definitely interested in exploring.

**Amy Chen (Manager, Recruiting Operations & Technology):** And just to give you context on my role - I sit at the intersection of recruiting and technology. I think about our recruiting tech stack, integrations, data, reporting, all of that operational infrastructure.

**Interviewer:** Perfect, that's really helpful. So to start, can you give me a sense of the scale we're dealing with? How big is the TA organization, what's your hiring volume looking like?

**Sandra Williams:** Sure. So our TA organization is about 120 people globally. We're split across technology, which is the largest segment - probably 70 recruiters - and then banking operations, customer service, corporate functions, all of that. On the technology side, we're hiring between 200 and 250 people per quarter, give or take.

**Marcus Johnson:** And I'd say the mix is probably 60% software engineering, 20% data and analytics, 10% cybersecurity, and 10% infrastructure and cloud. Those are rough numbers, but that gives you a sense of the distribution.

**Interviewer:** Got it. And what does your recruiting tech stack look like today?

**Amy Chen:** So we're on Workday for our HRIS and core HR functions. We're on Jewel for ATS, which we've been using for about two years now. For sourcing, we're primarily using LinkedIn Recruiter - we have about 50 seats. And then we have some ancillary tools like Codility for technical assessments, GoodTime for interview scheduling, things like that.

**Sandra Williams:** The Workday-Jewel integration has generally worked well. There are occasional hiccups, but overall it's been pretty smooth. We did a pretty rigorous vendor selection process before choosing Jewel, and one of the key criteria was integration with Workday.

**Marcus Johnson:** Yeah, and LinkedIn is kind of the default for sourcing. Everyone knows it, everyone uses it. We've looked at alternatives over the years but haven't found anything compelling enough to switch.

**Interviewer:** Interesting. Have you looked at Workday's own sourcing or AI offerings?

**Amy Chen:** We have, and... they're not great. To be blunt, Workday's strength is in the core HRIS functionality - payroll, benefits, org management. But their recruiting tools, and especially their AI capabilities, are pretty far behind the dedicated recruiting platforms.

**Sandra Williams:** Yeah, we've been disappointed by Workday on the talent acquisition side. We love them for HRIS, but for recruiting, we need best-of-breed tools. That's why we went with Jewel.

## Current State Discussion

**Interviewer:** That makes sense. So let's dig into sourcing specifically. Walk me through how it works today. What does a typical sourcing process look like?

**Marcus Johnson:** Okay, so let's take a typical role - say, a senior software engineer for one of our cloud engineering teams. The hiring manager submits a req, we do an intake meeting to understand the requirements - what cloud platforms they're working with, what kind of projects they'll be on, what technical skills are must-haves versus nice-to-haves.

**Sandra Williams:** The intake quality has improved a lot over the last year. We implemented a structured intake template that forces hiring managers to be specific about what they need. It's made a big difference.

**Marcus Johnson:** Right. So once we have clear requirements, the req gets assigned to one of our technology recruiters. We have recruiters who specialize in different domains - some focus on cloud and infrastructure, some focus on data and analytics, some focus on cybersecurity. They do full-cycle recruiting, which includes sourcing.

**Interviewer:** So your recruiters are sourcing themselves? You don't have dedicated sourcers?

**Marcus Johnson:** We have a small sourcing team - I think it's five people right now - but they can't cover all the reqs. So they focus on the high-volume or strategic roles, and the recruiters handle sourcing for everything else.

**Amy Chen:** And the sourcers use the same tools as the recruiters - primarily LinkedIn Recruiter. So it's not like they have special capabilities, they're just dedicated to sourcing full-time versus juggling it with other responsibilities.

**Interviewer:** Got it. So when someone's sourcing on LinkedIn, what does that actually look like? Walk me through the process.

**Marcus Johnson:** They'll start by building a search query. LinkedIn has filters for things like job title, location, current company, past company, years of experience, skills. And then you can layer on Boolean search for keywords in their profile. So for a cloud engineer role, you might search for "cloud engineer" OR "solutions architect" OR "DevOps engineer" and then add keywords like "AWS" or "Azure" or "Kubernetes" depending on what the hiring manager needs.

**Amy Chen:** And we've built up a library of Boolean strings over time. We have a shared document where recruiters can go and find pre-built searches for common role types. It's helpful for consistency and for onboarding new recruiters.

**Marcus Johnson:** Right. But even with that, it's still pretty manual. You're scrolling through pages of profiles, clicking into each one, reading the job descriptions, trying to figure out if they're a good fit. It's time-consuming.

**Interviewer:** How much time are your recruiters spending on sourcing per week?

**Marcus Johnson:** Um, I'd say it varies by recruiter and by the roles they're working on. But on average, probably 10-15 hours a week. For our dedicated sourcers, it's more like 30-35 hours a week.

**Sandra Williams:** That's a significant portion of their time. And the question we're always asking is, is there a more efficient way to do this? Can we get the same or better results in less time?

**Interviewer:** That's a great question. How are the results currently? Are you finding the right people?

**Marcus Johnson:** It depends on the role. For more generalist software engineering roles, LinkedIn works pretty well. There's a large talent pool, and if you know what to search for, you can find good candidates. But for more specialized roles, especially in cloud engineering, it gets harder.

**Interviewer:** Tell me more about that. What makes cloud engineering harder?

**Marcus Johnson:** So, cloud engineering is actually a pretty broad category at Capital One. We use it as an umbrella term, but underneath that, there are really distinct types of roles with different skill requirements. You've got AWS solutions architects who are designing and building cloud architectures for our applications. You've got DevOps and SRE folks who are focused on CI/CD pipelines, monitoring, reliability, incident response. You've got cloud security engineers who are focused on IAM, compliance, security controls in the cloud. And you've got FinOps people who are optimizing cloud costs and resource utilization.

**Amy Chen:** And they all get labeled as "cloud engineer" in most companies' job postings, but the skills and backgrounds are really different.

**Interviewer:** That's interesting. So when you're sourcing for these roles, are you treating them differently?

**Marcus Johnson:** We should be, but honestly, it's inconsistent. Our more experienced recruiters understand the nuances and will tailor their searches accordingly. But for recruiters who are newer or who don't specialize in cloud roles, they might just search for "cloud engineer" and hope for the best.

**Sandra Williams:** This is actually a problem we've identified. We have this institutional knowledge about what makes a good AWS solutions architect versus a good SRE, but it's not codified anywhere. It's in people's heads. And when people leave or move to different roles, that knowledge walks out the door.

**Interviewer:** Can you give me a specific example of where this came up?

**Marcus Johnson:** Yeah, absolutely. We had a req a few months ago for a cloud security engineer. This was for our central cloud security team, and they were looking for someone who could design and implement security controls for our AWS environment - things like IAM policies, security groups, encryption strategies, compliance frameworks like PCI-DSS and SOC 2.

**Amy Chen:** I remember this one because it took almost five months to fill, which is way longer than our target.

**Marcus Johnson:** Right. So the challenge was, "cloud security" can mean a lot of different things. There are application security folks who focus on vulnerability scanning and penetration testing. There are network security folks who focus on firewalls and intrusion detection. And then there are cloud security specialists who focus specifically on securing cloud infrastructure and services.

**Interviewer:** So how did you source for that role?

**Marcus Johnson:** The recruiter started by searching for "cloud security engineer" plus keywords like "AWS," "IAM," "security controls," "compliance." They found some candidates, but a lot of them were application security people or general security engineers who happened to have some cloud exposure. Not the deep cloud infrastructure security expertise we needed.

**Sandra Williams:** And the hiring manager was frustrated because they were spending time interviewing candidates who looked good on paper but didn't have the right depth of experience. It was slowing down the process.

**Marcus Johnson:** So we ended up refining the search. We looked at people from AWS itself, from other financial services companies with mature cloud practices, from cloud security startups like Lacework or Wiz. We added more specific keywords like "CSPM," "CASB," "zero trust." And eventually we found someone from a competitor bank who had exactly the right background.

**Interviewer:** That sounds like it took a lot of iteration and refinement.

**Marcus Johnson:** It did. And the thing is, we shouldn't have to relearn this every time we have a cloud security role. We should be able to say, "Okay, this is a cloud security role, here's the search strategy that works for this type of role," and just execute on that.

**Amy Chen:** This is where I think AI could really help. If a tool could understand the different personas within cloud engineering and suggest the right search strategy or filter set for each one, that would save a ton of time and improve quality.

**Interviewer:** That makes a lot of sense. So sticking with the current state for another minute, once you've found candidates on LinkedIn, what happens next?

**Amy Chen:** They'll usually save the profiles in LinkedIn or export a list. Then they need to find contact information, which LinkedIn doesn't always provide. So they're using tools like Hunter, Apollo, RocketReach, or just manually finding emails.

**Marcus Johnson:** The contact data thing is a constant frustration. We're paying a lot for LinkedIn, but then we still have to pay for separate contact data tools. It feels inefficient.

**Sandra Williams:** And once they have contact info, they'll reach out via email or LinkedIn InMail. If someone responds positively, they get added to Jewel and we move them through the recruiting process from there.

**Interviewer:** How are your response rates looking?

**Marcus Johnson:** It varies by role and by recruiter, honestly. For highly competitive roles like ML engineering or cloud architecture, response rates might be 10-15% because everyone's getting hit up by recruiters. For more niche roles, it can be better - maybe 20-25%. And our brand helps. People know Capital One as a tech-forward financial services company, so that opens some doors.

**Amy Chen:** But conversion from response to hire is still pretty low. We might reach out to 100 people to get 15 responses to get 5 phone screens to get 1 hire. So the funnel is pretty leaky.

**Sandra Williams:** Which is why efficiency is so important. If we can improve the quality of the candidates we're reaching out to, we can improve those conversion metrics and reduce the time and effort required.

## Pain Points Exploration

**Interviewer:** Okay, so let's go deeper on the pain points. It sounds like there are a few big themes emerging - the specialization within cloud engineering, the time intensity of sourcing, contact data challenges. What else is frustrating you?

**Sandra Williams:** Budget is always top of mind. We're spending, what, over $400K a year on LinkedIn alone?

**Amy Chen:** Yeah, with 50 seats at about $8,500 per seat, we're looking at $425K annually just for LinkedIn Recruiter.

**Sandra Williams:** Right. And that's a significant investment. We need to make sure we're getting value for that, and we need to continuously evaluate whether there are better alternatives or complementary tools that would improve our ROI.

**Marcus Johnson:** From a day-to-day perspective, the biggest pain point is just how manual and time-consuming sourcing is. Even with LinkedIn's filters and our Boolean strings, you're still spending hours scrolling through profiles, reading job descriptions, trying to assess fit. It's tedious and it takes recruiters away from other parts of their job.

**Amy Chen:** And from an ops perspective, the data visibility is really challenging. I can pull reports from LinkedIn on activity metrics - searches run, InMails sent, response rates. And I can pull reports from Jewel on candidates in the funnel. But connecting those two things to understand end-to-end sourcing effectiveness is really hard.

**Interviewer:** What would you want to see if you had perfect data visibility?

**Amy Chen:** I'd want to see the full funnel from sourcing to hire. How many profiles did we review? How many did we reach out to? How many responded? How many got to phone screen? How many got to onsite? How many got offers? How many accepted? And then I'd want to cut that by role type, by recruiter, by source, by geography, by time period. All of it.

**Sandra Williams:** And ideally, we'd be able to see quality metrics too. Of the people we sourced and hired, how are they performing? Are they getting promoted? Are they still at the company a year later? That feedback loop would be incredibly valuable for refining our sourcing strategies.

**Interviewer:** Let's go back to the cloud engineering persona thing, because that seems like a really specific and important pain point. You gave the example of the cloud security role. Are there other examples where this came up?

**Marcus Johnson:** Oh yeah, constantly. Let me give you another one. We hire a lot of DevOps engineers, or SREs - we kind of use those terms interchangeably. But even within that category, there's a lot of variation. Some of our teams are looking for people who are really strong in infrastructure as code - Terraform, CloudFormation, that kind of thing. Other teams are looking for people who are strong in observability and monitoring - Datadog, Splunk, Grafana. Other teams need people who are really deep in Kubernetes and container orchestration.

**Amy Chen:** And if you just search for "DevOps engineer" or "SRE," you get everyone. You get people who've done a little bit of CI/CD work but aren't deep in any particular area. You get people who are more traditional sysadmins who've learned some cloud tools but don't have the DevOps mindset.

**Marcus Johnson:** Right. So you end up screening a lot of people who aren't quite right, and you miss people who would be perfect because they don't show up in your generic search.

**Interviewer:** So if you could design a solution to this, what would it look like?

**Sandra Williams:** I think we need a way to define different search profiles or filter sets for different types of cloud roles. So we'd have one for AWS solutions architects that's looking at specific companies, certifications, project types. Another for SREs that's looking at different signals - incident management experience, monitoring tools, reliability metrics. Another for cloud security that's looking at security frameworks, compliance experience, specific technical controls. And another for FinOps that's looking at cost optimization, resource management, financial acumen.

**Marcus Johnson:** And those profiles would be maintained and improved over time. So if we learn that candidates from a certain company background tend to do well, we add that to the profile. If a certain keyword is giving us too many false positives, we adjust the Boolean logic. It becomes an institutional asset rather than tribal knowledge.

**Amy Chen:** Yeah, and ideally it would be integrated into the workflow. So when a recruiter picks up a cloud security req, the system would say, "Hey, for this type of role, here's the recommended search profile." They could use it as-is or customize it, but they'd have a starting point rather than building from scratch every time.

**Interviewer:** That makes a lot of sense. Are there other role categories where you see this same pattern?

**Marcus Johnson:** Data engineering is a big one. We hire data engineers, but that term covers data pipeline engineers, analytics engineers, ML engineers, data platform engineers. Those are all different skill sets. Security is another - application security, network security, cloud security, identity and access management. They all get lumped under "security engineer."

**Sandra Williams:** And honestly, this pattern exists across most of our technical roles. Backend engineering, frontend engineering, mobile engineering - there are always sub-specialties and variations that don't come through clearly in job titles.

**Interviewer:** What other pain points should I know about?

**Amy Chen:** Integration is a big one. We've got data in LinkedIn, data in Jewel, data in Workday. Getting a unified view is really hard. I spend probably 10-15 hours a week pulling data from different systems and trying to stitch it together for executive reporting.

**Marcus Johnson:** And there's no good way to track sourcing attribution over time. If we sourced someone two years ago and they weren't interested, but now they are, how do we know that? LinkedIn doesn't track it, Jewel doesn't track it. So we might be reaching out to the same person multiple times without realizing it.

**Sandra Williams:** Candidate experience is another concern. If we're not tracking our outreach history, we might be annoying people by reaching out too frequently or for roles that don't match their interests. That damages our brand.

**Interviewer:** How do you handle that today?

**Amy Chen:** Mostly through recruiter memory and manual notes. Recruiters are pretty good about tracking who they've reached out to recently. But across 70 recruiters, there's definitely duplication and inefficiency.

**Marcus Johnson:** And data quality is an ongoing issue. LinkedIn profiles are often outdated - someone says they work at Company X but they left six months ago. Or their skills are from three jobs ago and don't reflect what they're currently doing. We waste a lot of time on stale data.

**Interviewer:** How often is that happening?

**Amy Chen:** I'd estimate 20-30% of profiles have some level of outdated information. It's not always a dealbreaker, but it adds friction to the process.

**Sandra Williams:** This is where real-time data validation would be helpful. If a tool could cross-reference multiple sources and flag when information seems out of date, that would save time.

## Competitive Landscape

**Interviewer:** That's helpful context. Let's talk about other tools you've looked at. Have you evaluated alternatives to LinkedIn or complementary tools?

**Amy Chen:** We've looked at several tools over the last year or so. We did demos with HireEZ, SeekOut, Findem, and we've been watching Juicebox, although we haven't tested it yet.

**Marcus Johnson:** HireEZ was interesting. It aggregates data from multiple sources beyond just LinkedIn - GitHub, Stack Overflow, Kaggle, other public profiles. And it has some AI matching capabilities. The demo was solid, but when we dug into the details, we weren't sure it was different enough from LinkedIn to justify switching.

**Sandra Williams:** Yeah, the question is always, "Is this meaningfully better?" Not just a little better or different, but enough better to justify the change management, the training, the migration effort.

**Interviewer:** What would make something meaningfully better?

**Sandra Williams:** It would have to be a step change in one or more dimensions. Significantly better candidate quality, significantly faster sourcing, significantly better integration, or significantly lower cost. Ideally some combination of those.

**Marcus Johnson:** And it has to work for financial services. We have specific compliance requirements, data privacy considerations, security standards. If a tool can't meet those requirements, it's a non-starter no matter how good it is.

**Amy Chen:** Yeah, we have to do security and compliance reviews for any new tool that touches candidate data. That's a multi-week process involving legal, information security, risk management. So we're not going to go through that unless we're pretty confident the tool is worth it.

**Interviewer:** That makes sense. What did you think of the other tools you looked at?

**Marcus Johnson:** SeekOut was interesting primarily for the diversity analytics. They have good filtering and reporting on underrepresented groups, which is important to us. But the core sourcing capability didn't feel dramatically better than LinkedIn.

**Amy Chen:** Findem had a nice demo. They claim to have better AI, more accurate data, and better integration capabilities. But we haven't done a hands-on trial yet, so I can't speak to how it actually performs in practice.

**Sandra Williams:** And Juicebox is on our radar because it's getting a lot of buzz, but it's pretty early-stage. We'd want to see it mature a bit more before we'd seriously consider it.

**Interviewer:** Have any of these tools addressed the persona or filter set challenge you've been describing?

**Marcus Johnson:** Not really. They all have saved search features, but it's pretty basic - you can save your filters and Boolean strings and re-run the search later. But they're not helping you think through the different personas within a role category or suggesting search strategies based on the role type.

**Sandra Williams:** If someone could crack that, it would be a real differentiator. Show us that you understand the nuance of cloud engineering or data engineering or security roles and that you can help us source more effectively for each sub-specialty.

**Interviewer:** Good to know. What about integration? How important is that in your evaluation?

**Amy Chen:** It's critical. We're already on Jewel and Workday. Any new tool needs to integrate seamlessly with those systems. Candidates need to flow into Jewel automatically, activity needs to be tracked, sourcing attribution needs to be captured. If we have to do manual exports and imports, that defeats the purpose.

**Sandra Williams:** Yeah, and this is actually an advantage for Jewel. You're already our ATS, so if your AI sourcing module is tightly integrated, that removes a lot of friction. We don't have to worry about data syncing or duplicate profiles or integration breakage.

**Marcus Johnson:** That said, the integration needs to be deep, not superficial. It's not enough to just push a candidate record into Jewel. We need full activity tracking, source attribution, notes, tags, all of it. Otherwise we're back to manual data management.

**Interviewer:** That's a fair point. What about pricing? How do these tools compare to LinkedIn?

**Amy Chen:** LinkedIn is expensive, but it's also the incumbent. We know what we're getting. Most of the alternatives are in a similar price range - maybe slightly cheaper on a per-seat basis, but not dramatically. So price isn't usually the deciding factor. It's more about functionality and integration.

**Sandra Williams:** We're willing to pay for value. If a tool saves each recruiter 5-10 hours a week and improves candidate quality, the ROI is there even if the price is similar to or slightly higher than LinkedIn. But we need to see evidence of that value.

**Marcus Johnson:** Yeah, and we're thinking about total cost of ownership, not just the subscription fee. Implementation costs, training costs, ongoing maintenance, potential productivity loss during the transition - all of that factors in.

## Future Needs & Closing

**Interviewer:** That's a great way to think about it. So looking ahead, what would the ideal sourcing solution look like for Capital One? If you could design it from scratch, what would you build?

**Sandra Williams:** I think we've covered a lot of it. First and foremost, it would understand the nuances of different types of technical roles, especially cloud engineering. It would know the difference between solutions architects, SREs, cloud security engineers, FinOps specialists. And it would help us source accordingly.

**Marcus Johnson:** Second, it would have the ability to define, save, and share search profiles or filter sets for different personas. And it would be smart enough to recommend which profile to use based on the role description. That codification of institutional knowledge is huge.

**Amy Chen:** Third, it would have seamless integration with Jewel and Workday. One source of truth, no manual data movement, full activity tracking and source attribution. And it would enable end-to-end reporting from sourcing activity to hire to quality-of-hire.

**Sandra Williams:** Fourth, it would have built-in, accurate contact data. No more juggling multiple tools to find email addresses. And it would have engagement tracking so we know who we've reached out to before and what their response history is.

**Marcus Johnson:** And fifth, the AI would be transparent and trustworthy. I should be able to understand why it's suggesting certain candidates and adjust the parameters if needed. No black boxes.

**Interviewer:** Those are great. What about the decision-making process? How do you actually go from evaluation to adoption?

**Sandra Williams:** We typically start with a demo to see if it's in the ballpark. If it looks promising, we'll do a trial with a subset of recruiters - maybe 10-15 people - for 6-8 weeks. During that time, we're gathering quantitative data - how many candidates were sourced, response rates, conversion rates - and qualitative feedback from the recruiters.

**Amy Chen:** In parallel, I'm doing the technical evaluation. Security review, compliance review, integration assessment, data privacy review. We have a pretty rigorous process for any tool that touches candidate data.

**Marcus Johnson:** If the trial is successful and the technical review is positive, we'll put together a business case. What's the cost? What's the expected ROI? What's the implementation timeline? What resources do we need? And we'll present that to Sandra and ultimately to our CFO for approval.

**Sandra Williams:** And even after approval, we'd probably do a phased rollout. Start with a pilot group, work out any issues, build some success stories, and then expand to the full team over a couple of quarters.

**Interviewer:** What kind of timeline are you thinking?

**Sandra Williams:** We're hoping to make a decision by end of Q2 or early Q3. Ideally, we'd have something implemented and ramping in Q3 so we can see full impact by Q4 and into next year.

**Marcus Johnson:** Yeah, and we'd want to give ourselves a full quarter of usage before we assess whether it's working. So if we implement in Q3, we'd evaluate results in Q4 and decide whether to expand or adjust.

**Amy Chen:** That's our typical approach. We don't make big bets without evidence. We test, learn, iterate, and scale what works.

**Interviewer:** Makes sense. What else should I know about your evaluation criteria?

**Sandra Williams:** I think the most important thing is proven results. Show us case studies from other financial services companies or similar enterprises. Show us the data - improvements in time-to-fill, improvements in sourcing efficiency, improvements in quality-of-hire. We need to see evidence, not just promises.

**Marcus Johnson:** And be realistic about what it can and can't do. If there are limitations or areas where it's still being developed, tell us upfront. We'd rather know the truth than be disappointed later.

**Amy Chen:** And think about the full implementation picture. It's not just about the tool itself, it's about training, change management, ongoing support, product roadmap. We need a partner who's going to work with us to make it successful, not just sell us a license and disappear.

**Interviewer:** Those are all really good points. Anything else you'd want from a vendor?

**Sandra Williams:** Strong customer support and a commitment to continuous improvement. We know no tool is perfect out of the box. But if we're going to commit to a partnership, we need to know the vendor is responsive, they're listening to feedback, and they're improving the product over time.

**Marcus Johnson:** And good enablement resources. Training materials, best practice guides, user community, regular webinars or office hours. The more you help us be successful with the tool, the better the outcomes for everyone.

**Amy Chen:** And transparency on the roadmap. What's coming in the next six months? What's coming in the next year? We want to know we're investing in a platform that's going to keep getting better, not stagnate.

**Interviewer:** All of that makes a lot of sense. Well, I think I've learned a ton today. This has been incredibly helpful. Is there anything else you want to share or any questions for me?

**Sandra Williams:** I don't think so. This was a good conversation. It helped us clarify our thinking about what we really need from a sourcing solution.

**Marcus Johnson:** Yeah, and I think the persona filtering thing is really the key insight. If Jewel or anyone else can solve that problem well, it would be a huge value add.

**Amy Chen:** Agreed. And if you have ideas or capabilities that address these pain points, we're definitely interested in hearing more.

**Interviewer:** Noted. Well, thank you all so much for your time. I'll take everything I learned today back to the team, and we'll follow up in a few weeks.

**Sandra Williams:** Sounds great. Thanks, David.

**Marcus Johnson:** Thanks.

**Amy Chen:** Appreciate it, thanks.

