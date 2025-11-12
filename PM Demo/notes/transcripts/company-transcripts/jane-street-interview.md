# Jane Street Interview Transcript

**Date**: September 19, 2025
**Duration**: 62 minutes
**Company**: Jane Street
**Interviewees**:
- Alexandra Chen (Head of Recruiting)
- David Kumar (Senior Technical Recruiter - Quantitative Research)
- Sarah Mitchell (Campus Recruiting Lead)

**Interviewer**: Rachel Kim (Product Manager, Jewel)

---

## Opening

**Interviewer**: Thank you all for taking the time today. I know how valuable your time is, so I really appreciate you making space for this conversation. Maybe we could start with quick introductions?

**Alexandra Chen (Head of Recruiting)**: Of course. I'm Alexandra Chen, I head up recruiting here at Jane Street. I've been with the firm for about eight years now, actually started as a campus recruiter and moved into this role about three years ago. I oversee our global recruiting efforts - we have teams in New York, London, and Hong Kong primarily.

**David Kumar (Senior Technical Recruiter - Quantitative Research)**: Hi, I'm David Kumar. I'm a Senior Technical Recruiter, and I focus specifically on quantitative research and trading roles. I've been at Jane Street for five years. Before this, I was actually at Two Sigma, so I have some perspective on recruiting in this space more broadly.

**Sarah Mitchell (Campus Recruiting Lead)**: Sarah Mitchell. I lead our campus recruiting program, which is a big part of what we do here. I've been at Jane Street for three years, came from McKinsey's campus recruiting team before that.

**Interviewer**: Great, thank you. Just to set some context - what does recruiting volume look like for you? How many people are you hiring annually?

**Alexandra Chen**: So we're a bit unique in that we're selective but we do hire at meaningful scale. We're probably bringing on 150 to 200 people globally per year. Of that, I'd say 60 to 70% are coming through our campus recruiting program - mostly new graduates from top universities. The rest are experienced hires, which is where David's team comes in.

**David Kumar**: Yeah, on the experienced hire side, we're filling maybe 50 to 60 roles per year. It's not a huge volume compared to a tech company, but the bar is exceptionally high and the roles are very specialized.

**Interviewer**: And what's your current tech stack look like for recruiting?

**Alexandra Chen**: We have a custom internal ATS that our engineering team built. It's... it's fine. It does what we need it to do for applicant tracking, but it's not best-in-class by any means. It was built probably eight years ago and it's maintained but not heavily invested in. For sourcing, everyone on the team has LinkedIn Recruiter licenses. That's really our primary external tool. We also work with a few executive search firms for very senior roles - managing director level and above.

**Sarah Mitchell**: On the campus side, we have some additional tools for managing university relationships and events, but that's pretty niche. The core stack is really just our internal ATS and LinkedIn.

**Interviewer**: Got it. And you mentioned you're evaluating Jewel. What prompted that?

**Alexandra Chen**: Honestly, we've been aware that our sourcing capabilities are pretty limited. LinkedIn works, but it's not sophisticated. And for the experienced hire roles especially, we need to be more strategic and data-driven. We've been exploring whether there are tools that could help us be more effective without adding significant overhead.

## Current State Discussion

**Interviewer**: Let's dig into how things work today. David, maybe you could walk me through your current process when you're sourcing for a role?

**David Kumar**: Sure. So typically a hiring manager will come to me with a req. Let's say they need a quantitative researcher for one of our trading desks. First thing I need to understand is what kind of quantitative researcher. Are we talking about someone who's going to be developing new trading strategies, someone who's going to be optimizing existing strategies, someone who's focused on market making algorithms, or someone who's more on the risk management side?

**Alexandra Chen**: And these are really different profiles.

**David Kumar**: Completely different. A quantitative researcher developing new strategies needs deep mathematical modeling skills, usually a PhD in mathematics, physics, statistics, or economics. They need to be creative, they need to understand market dynamics, and they need strong research skills. We're looking at people who've published papers, who have strong academic credentials from top programs.

**Interviewer**: Mm-hmm.

**David Kumar**: Versus someone who's optimizing existing strategies - they need to be very detail-oriented, strong with numerical analysis, deep understanding of statistics and machine learning techniques. They're often coming from different backgrounds - maybe they have a PhD in computer science with a focus on machine learning, or they're coming from tech companies where they've done applied research.

**Sarah Mitchell**: The academic pedigree matters a lot for us. We're looking at MIT, Stanford, Harvard, Princeton, Berkeley, CMU - that caliber of institution.

**David Kumar**: Right. So when I'm sourcing on LinkedIn, I'm starting with education filters. Top-tier universities, advanced degrees - usually PhDs. Then I need to layer in skills. But here's where it gets tricky. The keywords for a trading strategy researcher versus a risk management researcher are quite different.

**Interviewer**: Can you give me an example?

**David Kumar**: Yeah, so for trading strategy research, I'm looking for keywords like "quantitative trading," "algorithmic trading," "statistical arbitrage," "market microstructure," "alpha generation." For risk management, I'm looking for "risk modeling," "Value at Risk," "stress testing," "portfolio risk," "risk analytics." There's some overlap, but they're distinct.

**Alexandra Chen**: And then you have the engineering side.

**David Kumar**: Right, so we also hire quantitative traders who are more on the engineering side - they're building the systems that execute our strategies. These folks need OCaml experience, which is incredibly rare. Or they need deep expertise in low-latency systems, high-performance computing, that sort of thing.

**Interviewer**: OCaml is your primary language?

**Alexandra Chen**: Yes, we're one of the largest users of OCaml in the world. It's a functional programming language, and it's core to our trading systems. So when we're hiring software engineers, OCaml experience or at least strong functional programming background is highly valued.

**David Kumar**: Which makes sourcing really challenging because there are maybe a few thousand OCaml developers in the world total. I can't just search for "software engineer" - I need to search for OCaml specifically, or Standard ML, or Haskell, or F# - other functional languages where the skills transfer.

**Interviewer**: How do you manage all these different search variations today?

**David Kumar**: Honestly, it's pretty manual. I have a document where I keep my best Boolean search strings for different role types. When I have a req, I pull up the relevant search string, copy it into LinkedIn, adjust it for the specific needs of that role, and start reviewing profiles.

**Alexandra Chen**: It's not ideal from a consistency standpoint. Different recruiters have different search strings, different approaches. When David goes on vacation and someone has to cover his roles, they're starting from scratch or trying to figure out what he would search for.

**Sarah Mitchell**: And we can't really leverage campus recruiting for some of these experienced roles because we need specific industry experience or technical depth that you can't get as a new graduate.

**Interviewer**: What percentage of your experienced hires are coming from sourcing versus inbound?

**David Kumar**: Probably 60% sourcing, 40% inbound. We do get decent inbound - our reputation in the industry is strong - but for specialized roles, we need to be proactive.

**Alexandra Chen**: And our inbound tends to be higher quality on average because people self-select. But we can't rely on it exclusively. If we need a specific profile, we need to go find them.

**Interviewer**: What about the internal ATS you mentioned? How does that support sourcing?

**Alexandra Chen**: It doesn't, really. It's an applicant tracking system - it tracks candidates through the interview process, stores resumes, manages interview scheduling. But there's no sourcing functionality built in. No contact database, no CRM features, no analytics beyond basic metrics.

**David Kumar**: Yeah, once I find someone on LinkedIn and reach out, if they respond positively, I put them in the ATS manually. But there's no integration, no ability to save searches or segment candidates.

**Interviewer**: Do you maintain relationships with candidates who aren't quite right for a current role but might be good for future roles?

**Alexandra Chen**: We try to. I think we're probably not as good at it as we should be. David keeps a spreadsheet of interesting candidates he's talked to, but it's not systematic.

**David Kumar**: Right, I have, like, an Excel file with probably 300 names in it. People I've had conversations with over the years who weren't quite right for the role at the time, or weren't ready to move, or were great but we didn't have an opening. I'll periodically go through it and reach back out to people, but it's not scalable.

**Alexandra Chen**: This is an area where we know we could be better. We meet a lot of talented people who aren't ready to move when we first connect with them, but might be six months or a year later. We don't have good systems for maintaining those relationships.

## Pain Points Exploration

**Interviewer**: Let's dig into the challenges you're facing. David, you mentioned the complexity of different role types. Can you walk me through all the different variations you're managing?

**David Kumar**: Yeah, so let me think about how to categorize this. Within quantitative research roles, which is a big part of what I recruit for, I'd say there are at least four distinct personas.

First, you have quantitative researchers who are focused on developing new trading strategies. These are the folks I mentioned earlier - PhDs in mathematics, physics, statistics, economics. They need strong mathematical modeling skills, creativity, deep understanding of market dynamics and microstructure. They're often coming from academia - postdocs who are looking to move into industry, or researchers from other quantitative trading firms.

**Alexandra Chen**: And the search criteria for these folks is very specific. Top-tier PhD programs, publications in strong journals or conferences, research focus in relevant areas.

**David Kumar**: Right. So when I'm building a search for this persona, I'm filtering by PhD from top universities, looking for keywords like "mathematical modeling," "stochastic processes," "quantitative finance," "econometrics." I'm looking at Google Scholar to see if they've published. It's a very research-focused profile.

Then the second persona is quantitative researchers who are more focused on implementing and optimizing existing strategies. These folks need strong programming skills - usually Python, sometimes C++ - deep understanding of machine learning and statistical techniques, and experience with large-scale data analysis.

**Interviewer**: And they're coming from different places?

**David Kumar**: Often, yeah. They might have PhDs in computer science with a focus on machine learning, or they're coming from tech companies - Google, Facebook, Netflix - where they've done applied machine learning work. They might have worked on recommendation systems or ad optimization, and those skills transfer well to trading strategy optimization.

**Sarah Mitchell**: The educational background is often different too. More CS PhDs than pure math or physics.

**David Kumar**: Exactly. So my search criteria changes - I'm still filtering for top universities, but now I'm looking at CS departments specifically. I'm looking for keywords like "machine learning," "deep learning," "data science," "statistical modeling," "Python," "large-scale data." I'm looking at companies known for strong ML work.

The third persona is quantitative traders or researchers with a systems engineering focus. These are the people building the infrastructure that executes our trading strategies - the low-latency systems, the risk management systems, the data pipelines. They need strong systems programming skills, ideally OCaml or other functional languages, understanding of distributed systems, low-latency optimization.

**Alexandra Chen**: This is where the OCaml requirement comes in, or other functional programming languages.

**David Kumar**: Right. So now my search completely changes again. I'm looking for "OCaml," "Standard ML," "Haskell," "F#," "functional programming." I'm looking for "low-latency," "high-performance computing," "distributed systems." I'm looking at companies like Citadel, Tower Research, Jump Trading, IMC - other trading firms that use similar tech stacks.

**Interviewer**: So three very different searches for what might all be called "quantitative researcher" on a job description?

**David Kumar**: At least three, yeah. And then the fourth persona is risk management quantitative researchers. These folks are building models to measure and manage our risk exposure. They need deep understanding of risk metrics - Value at Risk, stress testing, scenario analysis - regulatory knowledge, strong quantitative skills, and often a background in risk management specifically.

**Alexandra Chen**: And they're often coming from other financial institutions - banks, other trading firms - that have mature risk management functions.

**David Kumar**: Exactly. So my search criteria shifts to "risk management," "Value at Risk," "VaR," "stress testing," "credit risk," "market risk," "risk analytics." I'm looking at companies like Goldman Sachs, Morgan Stanley, JPMorgan - banks with large risk management teams.

**Interviewer**: So you're essentially managing four completely different sourcing strategies for roles that might all fall under "quantitative researcher"?

**David Kumar**: At minimum, yeah. And that's just within quantitative research. We also hire software engineers, which have their own variations, and traders who are less quantitatively focused, and operations people, and business strategy folks.

**Alexandra Chen**: This is one of the core challenges we're trying to solve. How do we create consistent, reusable search strategies for all these different personas? Right now, it's all in David's head or in his document. If he leaves, we lose all that institutional knowledge.

**Sarah Mitchell**: And we can't easily share best practices across the team. If David figures out that searching for candidates with experience at specific companies yields better results, there's no systematic way to capture that learning.

**Interviewer**: How much time are you spending building and refining these searches?

**David Kumar**: Too much. Probably four to six hours a week just on search creation and optimization. Every time I have a new req, I need to think about which persona it maps to, pull up the relevant search string, adjust it for the specific nuances of this particular role, test it, refine it.

**Alexandra Chen**: And that's just for experienced hires. Sarah's team has similar challenges on the campus side, though the search criteria are different.

**Sarah Mitchell**: Yeah, for us it's more about identifying students at target universities with relevant coursework, projects, or internship experience. But we have similar challenges - a student who's a good fit for a software engineering role is very different from a student who's a good fit for a quantitative research role.

**Interviewer**: How do you think about return on investment for your time? Like, if you could cut that search time in half, what would that mean?

**David Kumar**: Honestly, it would be huge. If I could cut sourcing time from six hours a week to three, that's 150 hours a year I could spend on other things - candidate engagement, interview process optimization, hiring manager consultation. Or we could take on higher recruiting volume with the same team size.

**Alexandra Chen**: And it's not just about time efficiency. It's about consistency and quality. If we had standardized, optimized search strategies that everyone on the team could use, I'm confident we'd see better candidate quality across the board.

**Interviewer**: What other pain points are you experiencing with your current setup?

**Alexandra Chen**: Contact data quality is a challenge. LinkedIn has decent coverage, but email deliverability isn't great. We see bounce rates of probably 20 to 25%, which is frustrating when you're trying to reach a small pool of highly specialized candidates.

**David Kumar**: And the data goes stale quickly. Someone's LinkedIn profile might say they're at Citadel, but they moved to Two Sigma six months ago and haven't updated their profile. So I'm reaching out about opportunities for Citadel alums and they're like, "I haven't worked there in a year."

**Sarah Mitchell**: On the campus side, we have different challenges. We need to track relationships with professors, recruiting events at different universities, student organizations. There's not a good tool for managing all of that.

**Alexandra Chen**: We're also not great at measuring effectiveness. Like, I can tell you how many hires we made last year, but I can't easily tell you which sourcing strategies are most effective, which companies are the best sources of talent, how our outreach messaging impacts response rates. The data exists, but it's fragmented across different systems and spreadsheets.

**Interviewer**: Do you track candidates through a pipeline or CRM?

**Alexandra Chen**: Not systematically. David has his spreadsheet, other recruiters have their own systems. It's not coordinated. If we had a proper CRM integrated with our sourcing, that would be valuable.

**David Kumar**: Yeah, I mean, relationship management is crucial in this market. I might talk to a candidate in January who's not ready to move, but by June they're interested. I need to stay on their radar, periodically check in, share interesting content. Right now, I'm doing that manually with calendar reminders.

## Competitive Landscape

**Interviewer**: Let's talk about what else is out there. What other tools have you looked at or considered?

**Alexandra Chen**: So we've looked at a few options over the years. Obviously LinkedIn Recruiter is what we use today. It's the baseline, everyone has it. The reach is good, the data quality is decent, our recruiters know how to use it. But the filtering and search capabilities are limited for our needs.

**David Kumar**: Yeah, LinkedIn is fine for broad searches, but when you need to get really specific - like finding OCaml developers with experience at quantitative trading firms who have PhDs from top-tier programs - the Boolean search gets unwieldy fast.

**Interviewer**: Have you looked at other sourcing tools?

**Alexandra Chen**: We had demos with Hired and Vettery a few years ago, but those are marketplace models. They're too passive for what we need. We need to be actively sourcing specific profiles, not waiting for candidates to come to us.

**David Kumar**: We looked at Gem as well. It's more focused on the outbound engagement side - sequencing, email campaigns, that sort of thing. Which is valuable, but it doesn't solve our core problem, which is finding the right people in the first place.

**Sarah Mitchell**: Some of the big enterprise recruiting platforms like Oracle Taleo or SAP SuccessFactors have been floated, but they're overkill for us. We're not a 50,000-person organization. We need something more nimble.

**Alexandra Chen**: And honestly, we've been hesitant to adopt too many external tools because we have high security and confidentiality requirements. Any tool we use needs to meet our security standards, and the vendor evaluation process is rigorous.

**Interviewer**: What does that process look like?

**Alexandra Chen**: It starts with a business case - why do we need this tool, what problem does it solve, what's the expected ROI. That goes through our recruiting leadership and finance. If it's approved, we move into vendor evaluation, which includes security review, legal review, technical architecture review. We need to understand where data is stored, who has access, how it's encrypted, what happens if we terminate the contract.

**David Kumar**: It's thorough, which is appropriate given who we are. But it does mean we can't just sign up for a tool and start using it. There's a process.

**Alexandra Chen**: The whole cycle is probably three to six months for a significant tool. So we need to be confident before we start that process that it's the right solution.

**Interviewer**: That makes sense. Have you evaluated Jewel previously, or is this your first look?

**Alexandra Chen**: This is our first serious look. We've been aware of Jewel as a CRM platform, but we hadn't considered it for sourcing until recently. We've heard good things from peers in the industry - I think Two Sigma uses Jewel for some of their data science recruiting.

**David Kumar**: Yeah, my former colleagues there speak highly of it. They like the CRM integration and the analytics features. The question for us is whether it can handle the complexity of our sourcing needs.

**Interviewer**: What would you need to see to be convinced it's the right fit?

**David Kumar**: For me, it's really about the filtering capabilities. Can I build sophisticated, reusable search strategies for all the different personas I'm recruiting for? Can I save those searches, share them with colleagues, refine them over time? Can I layer in multiple criteria - education, skills, company background, years of experience - and have it actually surface relevant candidates?

**Alexandra Chen**: And can we integrate it with our existing systems? We're not replacing our ATS, so it needs to play nicely with what we have. Can we push candidates from Jewel into our ATS seamlessly?

**Sarah Mitchell**: From my perspective, I'm curious about whether it can support campus recruiting workflows. That's probably not the core use case, but if it can, that's a bonus.

**Alexandra Chen**: And then there's the data quality question. How fresh is the contact data? What's the email deliverability rate? How comprehensive is the coverage, especially for specialized profiles?

**Interviewer**: Those are all fair questions. What about budget? How do you think about the ROI calculation?

**Alexandra Chen**: So we're currently spending probably $60,000 a year on LinkedIn Recruiter for the team. If we're adding another tool, we need to understand the incremental value. Is it going to make us 20% more efficient? 50% more efficient? Will it improve candidate quality? Will it help us fill roles faster?

**David Kumar**: Time-to-fill matters a lot. If a trading desk needs a quantitative researcher and it takes us four months to fill the role, that's lost productivity for the desk. If a tool can help us fill it in two months, that's real value.

**Alexandra Chen**: We'd probably be comfortable spending $50,000 to $100,000 annually for the right solution. Maybe more if the ROI is really clear. But we need to be able to justify it.

**Interviewer**: Do you benchmark against other firms in terms of tooling?

**Alexandra Chen**: Somewhat. We talk to peers at other trading firms, we hear what they're using. But every firm has different needs and different constraints. What works for Citadel might not work for us, and vice versa.

**David Kumar**: I think we're generally more conservative than some of our competitors when it comes to adopting new technology for recruiting. We want to see proven results, not be the first adopter.

**Sarah Mitchell**: Which is consistent with our firm culture overall. We're rigorous, we're thoughtful, we want to make good decisions with high conviction.

## Future Needs & Closing

**Interviewer**: Looking ahead, what would the ideal sourcing solution look like for Jane Street?

**David Kumar**: For me, it's all about sophistication and reusability. I want to be able to create these complex, multi-dimensional search strategies for different personas, save them, refine them over time, and share them with colleagues. I want to be able to say, "Here's our gold standard search for quantitative researchers focused on strategy development," and have that be a living document that improves as we learn what works.

**Alexandra Chen**: I'd love to see better analytics and reporting. What sourcing channels are most effective? Which outreach messages get the best response rates? How does candidate quality vary by source? I want data-driven insights that help us optimize our process.

**Sarah Mitchell**: Integration is key for me. If we're going to invest in a new tool, it needs to fit seamlessly into our existing workflows. I don't want recruiters maintaining candidate information in multiple systems.

**David Kumar**: And relationship management features would be huge. A proper CRM where I can track all my interactions with candidates, set reminders to follow up, see the full history of engagement. That would be really valuable.

**Alexandra Chen**: Ultimately, we want a tool that makes us more effective without adding significant overhead. We're a small, efficient team. We can't afford to have a tool that requires tons of maintenance or configuration.

**Interviewer**: What would the decision-making process look like if you decided to move forward with Jewel?

**Alexandra Chen**: We'd want to start with a more detailed evaluation - see the platform in depth, understand the feature set, talk to references who are using it for similar use cases. If that goes well, we'd probably do a pilot with David's team - maybe three to six months, see how it performs, measure the impact.

**David Kumar**: I'd want to test it on a few different role types - quantitative researchers, software engineers, maybe a risk management role. See if it actually handles the complexity we need.

**Alexandra Chen**: Then we'd need to go through the formal vendor evaluation - security review, legal review, all of that. Assuming everything checks out, we'd make a decision on whether to roll it out more broadly.

**Interviewer**: What's the timeline for making a decision?

**Alexandra Chen**: We're in information gathering mode right now. I'd say we're probably three to four months from a decision. We want to be thoughtful, we want to see a few options, we want to talk to peers about their experiences.

**David Kumar**: And we need to build the internal business case. We need data on our current sourcing effectiveness so we can measure improvement.

**Interviewer**: That makes sense. Is there anything else I should understand about your recruiting challenges or needs?

**Sarah Mitchell**: I think the only thing I'd add is that cultural fit is really important to us. We have a very specific culture here - collaborative, intellectually rigorous, low ego. The best candidates aren't just technically excellent, they're also people who will thrive in our environment. I'm not sure how a sourcing tool helps with that, but it's worth mentioning.

**Alexandra Chen**: That's a good point. We do a lot of behavioral interviewing and culture assessment in our process. The sourcing tool gets us to the right candidates, but then we need to evaluate fit.

**David Kumar**: Although, I will say, company background can be a proxy for culture fit. Someone who's thrived at another quantitative trading firm with a similar culture is more likely to be a fit here. So being able to filter by company in a sophisticated way is helpful.

**Interviewer**: Absolutely. Well, this has been incredibly helpful. I really appreciate you taking the time and being so candid about your challenges. I'll follow up with some additional materials - maybe some case studies from other trading firms using Jewel, more detailed information on the filtering capabilities, and we can set up a deeper product demonstration if that makes sense as a next step.

**Alexandra Chen**: That sounds great. I think a detailed product demo would be valuable, especially focused on the advanced filtering and saved search capabilities. And references would be helpful - specifically other quantitative trading firms or hedge funds.

**David Kumar**: Yeah, I'd love to talk to someone who's recruiting for similar roles and hear how they're using the platform.

**Alexandra Chen**: Thanks for your time, Rachel.

**Interviewer**: Thank you all. I'll be in touch soon.

---

**End of transcript**
**Word count: 4,000 words**




