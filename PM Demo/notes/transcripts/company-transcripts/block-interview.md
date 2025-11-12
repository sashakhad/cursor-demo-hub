# Block (Square/Cash App) Interview Transcript

**Date**: September 25, 2025
**Duration**: 61 minutes
**Company**: Block (Square/Cash App)
**Interviewees**:
- William Jackson (VP of Talent Acquisition - Cash App)
- Rebecca Scott (Senior Director of Engineering Recruiting)
- Nathan Green (Recruiting Technology Manager)

**Interviewer**: Sarah Chen (Principal Product Manager, Jewel)

---

## Opening

**Interviewer**: Hi everyone, thanks so much for carving out time today. I know you're all incredibly busy, especially with multiple products and teams to support. I'm Sarah Chen from Jewel, and I'm working on understanding how large-scale recruiting operations like yours are thinking about sourcing and recruiting technology. Should we start with quick intros?

**William Jackson (VP of Talent Acquisition - Cash App)**: Absolutely. William Jackson, I'm VP of Talent Acquisition for Cash App specifically. I've been at Block for about four years now, came over from PayPal before that. Cash App TA is about 45 people right now, supporting probably 2,000 employees in the Cash App division.

**Rebecca Scott (Senior Director of Engineering Recruiting)**: Rebecca Scott, Senior Director of Engineering Recruiting. I actually support both Cash App and Square, which makes things interesting since they're pretty different products with different tech stacks. My team is about 22 recruiters focused on engineering roles. I've been here three years, came from Amazon.

**Nathan Green (Recruiting Technology Manager)**: Nathan Green, I manage recruiting technology for the whole Block recruiting organization. So that's Cash App, Square, TIDAL, Spiral, all our business units. I think about our tech stack, what tools we need, vendor management, data integration, all that fun stuff. Been here almost five years.

**Interviewer**: That's a complex environment to support. How many total recruiters across all of Block?

**William Jackson**: Across all business units, we're probably around 120 recruiters. It varies a bit with contractors and fluctuation, but that's roughly the size.

**Nathan Green**: Which makes technology decisions really interesting because we need tools that can scale across different business units with different needs. Cash App is different from Square is different from TIDAL. They're all fintech or related, but the recruiting needs vary.

**Interviewer**: That makes sense. Let's talk about your current tech stack. What are you working with today?

**William Jackson**: So we're on Workday for our core ATS. That's an enterprise-wide decision, not a recruiting team decision. It's... functional. Does what it needs to do from a compliance and process perspective, but it's not built for recruiter efficiency.

**Rebecca Scott**: For sourcing, we primarily use LinkedIn Recruiter. I think we have about 60 seats across the organization. We've also built some internal tools over the years - there's a candidate database we built, a referral tracking system, some automation tools. Mixed results on those.

**Nathan Green**: Yeah, the internal tools thing is... it's a mixed bag. The intent is good - we have talented engineers, why not build custom solutions? But recruiting tools aren't the top priority for our product engineering teams, so they don't get maintained or updated the way they need to be. We've ended up with some technical debt there.

**Interviewer**: Interesting. Have you looked at external sourcing tools beyond LinkedIn?

**William Jackson**: We've done demos with various vendors over the years. Greenhouse came up when we were evaluating ATS options, but we went with Workday at the enterprise level. We've looked at some of the newer sourcing platforms, but we haven't pulled the trigger on anything significant.

**Rebecca Scott**: Part of the challenge is that we have different needs across business units. What works for Cash App mobile recruiting might not work for Square hardware engineering recruiting. We need flexibility.

**Nathan Green**: And integration is always the question. If it doesn't integrate well with Workday, it creates data silos and manual work. That's a non-starter for us at scale.

## Current State Discussion

**Interviewer**: Let's dig into the specifics of how sourcing works today. Rebecca, walk me through your process when you get a new engineering req.

**Rebecca Scott**: Okay, so let's say I get a req for a backend engineer on the Cash App payments team. First thing, I'm doing an intake with the hiring manager to understand exactly what they need. Payments is a broad area - are we talking about someone working on peer-to-peer payments, direct deposit, Cash Card processing, Bitcoin transactions, stock trading? These are all different technical domains within "payments."

**William Jackson**: And that specificity is really important because Cash App has diversified a lot. We're not just peer-to-peer payments anymore. We're doing direct deposit, we're doing debit cards, we're doing Bitcoin, we're doing stock trading. Each of those has different technical requirements.

**Rebecca Scott**: Right. So once I understand the specific area, I'm going to LinkedIn Recruiter to build a search. For payments infrastructure, I'm looking for people with experience at other payment companies - Stripe, PayPal, Venmo, that ecosystem. I'm looking for specific technical skills around payment processing, distributed systems, high availability, that sort of thing.

**Interviewer**: How long does that initial sourcing typically take?

**Rebecca Scott**: For a role like that, I'm probably spending 10 to 15 hours building the initial pipeline. I want to get to 60 to 80 qualified candidates before I start outreach. And I'm not just doing keyword searches - I'm looking at people's backgrounds, their trajectory, trying to assess if they're actually a fit or just have the right keywords on their profile.

**Nathan Green**: And that 10 to 15 hours is per role, and Rebecca's team is probably working on 40 to 50 open reqs at any given time. So you can see how the hours add up.

**Interviewer**: That's significant. What happens after you've built that initial pipeline?

**Rebecca Scott**: Then I'm doing outreach. We have some email templates, but I try to personalize each message - reference something specific about their background, explain why this role might be interesting for them. Response rates are... okay. Maybe 20% for cold outreach, higher if it's a warmer introduction.

**William Jackson**: And then it's the typical recruiting funnel. Phone screen, technical interviews, team interviews, offer. From first outreach to offer accepted, we're probably looking at 60 to 90 days for a mid-level to senior role.

**Interviewer**: You mentioned building searches in LinkedIn. Are you saving those searches for reuse?

**Rebecca Scott**: Yes and no. LinkedIn has a saved search feature, but it's pretty basic. I can save the parameters, but if I've really dialed in a complex Boolean string or specific company filters, I need to document that separately. I have a Notion page where I keep my best searches documented.

**Nathan Green**: And that's just Rebecca. Other recruiters have their own systems - Google Docs, personal notes, whatever. There's no centralized knowledge management for sourcing strategies. When someone leaves the team, their expertise leaves with them.

**Interviewer**: That sounds like a significant pain point. We'll come back to that. Let me ask about the different types of engineering roles you're recruiting for. You mentioned payments, but what else?

**Rebecca Scott**: Oh man, so many. Okay, so for Cash App specifically, we've got several major categories. There's payments infrastructure, which I mentioned. There's also mobile engineering - we've got iOS and Android apps that millions of people use daily. Then there's blockchain engineering for our Bitcoin features. There's backend infrastructure for all the services that power the app. There's data engineering and machine learning for fraud detection, personalization, that sort of thing.

**William Jackson**: And then on the Square side, which Rebecca also supports, you've got hardware-software integration engineers working on our POS systems. You've got payment processing engineers working on the merchant side. You've got the Square platform team building APIs for third-party developers.

**Nathan Green**: It's a really diverse set of technical domains. We're not a company where you can just hire "software engineers" generically. Each role requires specific domain expertise.

**Interviewer**: Let's dig into that diversity. How different are these roles from a sourcing perspective?

**Rebecca Scott**: Hugely different. Like, take mobile engineers for Cash App versus backend engineers working on payment processing. Totally different profiles.

For mobile engineers, I'm looking at consumer fintech app experience. Companies like Venmo, Robinhood, Coinbase, other consumer financial apps. I need people who understand mobile security - we're handling people's money, security is paramount. I need people who've built features at scale - Cash App has tens of millions of users. And I need people who understand financial transactions from a mobile perspective.

**William Jackson**: Those engineers are often coming from consumer tech companies. They might not have payment processing experience on the backend, and that's fine. They're building the interface that users interact with.

**Rebecca Scott**: But payment processing engineers? Totally different background. These folks are often coming from payment infrastructure companies - Stripe, Adyen, Braintree, the payment networks themselves. They need to understand payment routing, transaction processing, settlement, chargebacks, dispute resolution. They need to know about PCI compliance, which is a whole regulatory framework. They might need experience with specific payment protocols and networks.

**Interviewer**: So completely different company filters, different keywords, different experience requirements.

**Rebecca Scott**: Exactly. And then blockchain engineers are yet another profile. For our Bitcoin features, I need people with real cryptocurrency experience. They might be coming from Coinbase, Gemini, Kraken, other crypto exchanges. Or they might be coming from blockchain infrastructure companies. They need to understand blockchain protocols, cryptocurrency security, wallet management, transaction verification.

**William Jackson**: And these folks often have a different career path. Many of them came from traditional software engineering and moved into crypto. Some are true believers in cryptocurrency who want to work on democratizing access to Bitcoin, which aligns with our mission.

**Rebecca Scott**: Then you've got compliance and regulatory engineers, which is huge for us because we're regulated as a financial services company. These folks are building systems for anti-money laundering, know-your-customer checks, transaction monitoring, regulatory reporting. They need to understand the regulatory landscape - FinCEN, state regulators, federal regulators. They need to understand compliance technology.

**Nathan Green**: Often coming from other regulated financial services companies, or from compliance software vendors, or from consulting firms that specialize in fintech compliance.

**Interviewer**: So you're managing at least four or five distinct sourcing profiles just within the engineering organization. How are you keeping track of all of these different approaches?

**Rebecca Scott**: Honestly, it's a bit chaotic. I have my Notion page with my best searches. Other recruiters have their own systems. We share knowledge through Slack messages and team meetings, but it's ad hoc. There's no systematic way to say "Here's our vetted approach for sourcing blockchain engineers" that everyone can access and use.

**Nathan Green**: From a recruiting ops perspective, this is one of our biggest opportunities. If we could capture this institutional knowledge in a systematic way - save these complex filter sets, make them reusable, share them across the team, update them over time - we'd be way more efficient.

**William Jackson**: And we'd have more consistency. Right now, two different recruiters might source for the same role type in completely different ways. One might be more effective than the other, but we don't have a good way to share and scale that effectiveness.

## Pain Points Exploration

**Interviewer**: Let's dig deeper into this pain point around saved searches and filter sets. It sounds like this is a major issue. Can you walk me through a specific example of how this shows up?

**Rebecca Scott**: Sure. So a few months ago, I was recruiting for a blockchain engineer to work on our Bitcoin custody systems. This is someone who needs deep expertise in Bitcoin protocol, understanding of custody and key management, experience with high-security systems, probably some background in financial services or regulated environments.

So I spend several hours building this search. I've got keywords around Bitcoin, blockchain, cryptocurrency, custody, key management, security. I've got company filters for Coinbase, Gemini, Kraken, Anchorage, BitGo, companies that do institutional crypto custody. I've got education filters because for security-critical roles we tend to look at strong computer science backgrounds. I dial it in, I get a great pipeline, we fill the role.

**William Jackson**: And then three months later, you've got another blockchain custody role.

**Rebecca Scott**: Exactly. And I can't just pull up that search and reuse it. LinkedIn's saved searches are limited. So I'm going back to my notes, trying to remember exactly what I did, rebuilding the filters. If I refined the search during the process and didn't document it, that knowledge is lost.

**Interviewer**: And you mentioned other recruiters might build different searches for similar roles.

**Nathan Green**: Yeah, so we have a few recruiters who work on blockchain roles. If they're all building their own searches from scratch, they might come up with different approaches. One might focus more on exchange experience, another might focus more on custody specialists, another might cast a wider net to blockchain infrastructure companies. We don't know which approach is most effective because we're not systematizing it.

**Rebecca Scott**: And if someone leaves the team - which happens, people move around - their expertise walks out the door. We had a recruiter who was fantastic at sourcing fraud detection and machine learning engineers. She had this whole methodology, specific companies she'd target, specific filters she'd use. She left for another opportunity, and we lost a lot of that knowledge.

**William Jackson**: This is where technology should be helping us. We should be able to codify best practices, save them, share them, iterate on them. But our current tools don't really support that workflow.

**Interviewer**: What would the ideal workflow look like? If you could design it from scratch?

**Rebecca Scott**: I'd want a library of saved filter sets for each of our major role types. "Blockchain Engineer - Custody Focus," "Payment Processing Engineer - Platform Experience," "Mobile Engineer - Consumer Fintech," that sort of thing. Each filter set would have all the parameters dialed in - keywords, company filters, education filters, experience level, location.

**Nathan Green**: And it would be shareable across the team. If Rebecca figures out the best way to source blockchain engineers, she saves that filter set and anyone else recruiting for blockchain roles can use it. We're scaling expertise instead of duplicating effort.

**Rebecca Scott**: Plus, we could iterate over time. If I refine a search and find that adding certain companies to the filter improves candidate quality, I update the saved filter set once and everyone benefits.

**William Jackson**: It's like building a playbook. In sales, you have sales playbooks that codify best practices. We should have recruiting playbooks that codify our best sourcing approaches for each role type.

**Interviewer**: That's a great analogy. Are there other pain points beyond the saved filter issue?

**Rebecca Scott**: Data quality is a big one. We'll pull contact data from LinkedIn and probably 15 to 20% of emails bounce. Wrong email address, person changed jobs, email format changed, whatever. We're constantly having to hunt down current contact information.

**Nathan Green**: And it's not just email. Job titles change, people move companies, companies get acquired and renamed. We had a whole list of people we'd sourced from a company, and then that company got acquired and everyone's company name changed in LinkedIn. Our saved searches broke because they were filtering on the old company name.

**William Jackson**: Phone numbers are even worse. I'd say 30 to 40% of phone numbers in LinkedIn are outdated. Which is fine because we mostly do email outreach anyway, but it speaks to the overall data quality issue.

**Interviewer**: How are you handling that today?

**Rebecca Scott**: Manual work, mostly. I'll Google people, check their GitHub profiles, look at their personal websites or Twitter. If I really want to reach someone, I can usually find a way, but it takes time.

**Nathan Green**: We've looked at data enrichment tools, but then it's another vendor to manage, another integration to build, another cost. We haven't pulled the trigger on any of them.

**Interviewer**: What about the CRM side? How are you managing candidate relationships over time?

**William Jackson**: That's another gap. Workday has some candidate database functionality, but it's not really designed for relationship management. If I meet someone at a conference who's great but not looking right now, I can put them in Workday, but there's no good way to nurture that relationship over time.

**Rebecca Scott**: I need reminders to follow up, ability to track the history of our interactions, ability to see when someone might be ready to make a move. That's not really supported in our current tools.

**Nathan Green**: We've talked about implementing a proper CRM, but again, it's integration, it's cost, it's change management. We haven't made it a priority yet, but it's a known gap.

**Interviewer**: Let me ask about your internal tools. You mentioned you've built some things. How's that working?

**Nathan Green**: Mixed bag, honestly. We built a referral tracking system that works pretty well. We built a candidate database that was supposed to supplement Workday, but it hasn't been maintained and people don't really use it. We built some automation for scheduling interviews that's helpful. But overall, I'd say our internal tools haven't solved our core problems.

**William Jackson**: The challenge is that recruiting tools aren't a priority for our product engineering teams. They'll build something, but then they move on to other priorities and it doesn't get updated. We end up with tools that are 80% there but missing key features or falling behind on maintenance.

**Rebecca Scott**: And honestly, I'd rather buy best-in-class tools than build mediocre ones ourselves. Recruiting technology isn't our core competency. Let's find vendors who specialize in this and integrate their tools into our stack.

**Nathan Green**: Which brings us back to the integration question. That's always the key issue for us. Can it integrate with Workday? Can we get data flowing bidirectionally? Can we maintain a single source of truth for candidate data?

## Competitive Landscape

**Interviewer**: Let's talk about what else you've evaluated or are considering. You mentioned you've done demos with various vendors. What's on your radar?

**William Jackson**: So we've looked at Greenhouse in the context of their ATS, but that ship has sailed - we're committed to Workday. But Greenhouse has AI sourcing features that some folks have mentioned. We haven't deeply evaluated them because the ATS piece doesn't work for us.

**Rebecca Scott**: I've heard mixed things about Greenhouse AI sourcing anyway. It's very automated - the AI finds candidates and reaches out for you. I'm not sure I want to fully automate the sourcing process. I think there's value in human judgment about who to reach out to and how to message them.

**Nathan Green**: We've also looked at some of the newer players - tools like SeekOut, HireEZ, those sorts of platforms. They're trying to be more sophisticated than LinkedIn with AI-powered matching, diversity sourcing features, that sort of thing.

**Interviewer**: Have you tried any of those?

**Nathan Green**: Not in a formal way. We've done demos, but we haven't committed to a pilot or implementation. Part of it is bandwidth - we're stretched thin. Taking on a new tool means time for evaluation, implementation, training, change management. We need to be confident it's going to deliver real value before we invest that time and effort.

**William Jackson**: And there's the consolidation question. We have LinkedIn Recruiter, which is expensive but everyone uses it. Do we replace it with something else? Do we add another tool on top of it? Do we try to consolidate? These are strategic questions, not just tactical tool decisions.

**Rebecca Scott**: For me, the bar is high. A new tool needs to be materially better than LinkedIn in meaningful ways. Better data, better filtering, better usability, better integration. If it's only marginally better, the switching cost isn't worth it.

**Interviewer**: What about tools like Juicebox or other LinkedIn alternatives?

**Nathan Green**: We've heard of Juicebox. The pitch is that they're cheaper than LinkedIn with fresher data. We haven't evaluated them seriously. At our scale, cost isn't necessarily the primary driver - it's capability and integration.

**William Jackson**: If a tool is 30% cheaper but only 70% as effective, that's not a good trade for us. We have the budget to invest in the right tools. We just need to find the right tools.

**Interviewer**: Where does Jewel fit into your thinking? What's your understanding of what we offer?

**Nathan Green**: Honestly, we're early in our understanding. We know you've got a talent CRM platform, you've got sourcing features, you've got analytics. We're trying to understand whether you're positioned as a LinkedIn replacement, a LinkedIn complement, or something else entirely.

**Rebecca Scott**: And whether you can handle our scale and complexity. We're not a small company. We've got 120 recruiters across multiple business units with different needs. We need tools that can scale with us.

**William Jackson**: The questions I have are around integration - how does Jewel connect with Workday? What's the data flow look like? And around feature depth - can you support the sophisticated filtering and saved searches we need? Can you handle our CRM requirements?

**Nathan Green**: And then there's the vendor relationship. Are you stable? Are you going to be around in five years? What's your product roadmap? How do you handle enterprise customers? What's the support model?

**Interviewer**: Those are all fair questions. Let me ask this - if Jewel could solve the saved filter sets problem, improve data quality, integrate cleanly with Workday, and provide strong CRM and analytics, would that be interesting to you?

**Rebecca Scott**: Absolutely. If you can nail those things, there's a real opportunity. The saved filter sets thing alone would be huge for us. That's the number one pain point in my day-to-day work.

**Nathan Green**: And integration is key. If we're moving data manually between systems, it defeats the purpose. We need seamless integration with Workday as our source of truth.

**William Jackson**: But we'd need to see it in action. Demos are nice, but we'd need a real pilot with real reqs and real recruiters to assess whether it actually delivers on the promise.

## Future Needs & Closing

**Interviewer**: That makes sense. Let's talk about future needs. If you're thinking 12 to 18 months out, what does your ideal recruiting tech stack look like?

**William Jackson**: I want fewer tools that do more. Right now we have Workday for ATS, LinkedIn for sourcing, various internal tools, various point solutions. I'd rather have a more integrated stack where data flows seamlessly and recruiters aren't constantly context-switching between tools.

**Rebecca Scott**: I want tools that learn and improve over time. If I'm sourcing for blockchain engineers and I find that candidates from certain companies convert at higher rates, the tool should surface that insight and maybe adjust its recommendations. That's where AI could actually be valuable - not replacing recruiter judgment, but augmenting it with data-driven insights.

**Nathan Green**: I want better analytics and reporting. Right now, pulling data out of Workday is painful. I want to easily see our funnel metrics, our sourcing channel effectiveness, our time-to-fill by role type, all without spending hours building custom reports.

**Rebecca Scott**: And I want that CRM functionality. I want to track relationships over time, get reminded to follow up with people, see the history of our interactions. I want recruiting to feel less transactional and more relationship-driven.

**Interviewer**: Those are great. What about the decision-making process? If you were to seriously evaluate a new sourcing platform, what would that look like?

**Nathan Green**: It starts with a clear business case. What problem are we solving? What's the cost of not solving it? What's the expected ROI? I'd need to build that case and get buy-in from William and his peers.

**William Jackson**: Then it's vendor evaluation. We'd probably look at two or three options in depth, do detailed demos, talk to reference customers, understand pricing and contract terms. That's probably a two to three month process.

**Nathan Green**: If we decide to move forward, then it's pilot time. We'd start with a small group - maybe Rebecca's team or a subset of it. Run it for a quarter, measure results, gather feedback. That's another three months.

**Rebecca Scott**: And if the pilot is successful, then it's rollout planning - training, change management, phased deployment to the broader team. That's another few months. So from initial evaluation to full deployment, we're talking nine to twelve months.

**Interviewer**: That's a significant timeline. What's driving that length?

**William Jackson**: Partly it's our process - we're thoughtful about tool decisions and we want to get it right. Partly it's change management - we have a large team and rolling out new tools takes time and effort. And partly it's just the reality of operating at scale in a regulated environment.

**Nathan Green**: We also need to do security reviews, legal reviews, contract negotiations. That adds time. But it's necessary to make sure we're making good decisions and protecting the company and our candidates.

**Interviewer**: What about budget? Is that a constraint right now?

**William Jackson**: We're not in a cost-cutting mode, but we're being strategic about investments. We have budget for the right tools. But we need to see clear value. If a tool costs $200K a year, that's fine if it saves us 500 recruiter hours a year or improves our time-to-fill by 20%. The ROI needs to be there.

**Nathan Green**: And we're thinking about total cost of ownership. It's not just the software license. It's implementation, training, support, maintenance, integration work. All-in costs matter.

**Rebecca Scott**: But if a tool genuinely solves our problems, we'll find the budget. We're willing to invest in recruiting excellence. We just need to be smart about it.

**Interviewer**: Last question for each of you - if you could fix one thing about your current sourcing workflow, what would it be?

**Rebecca Scott**: Easy. Saved filter sets that I can reuse and share across the team. That would save me hours every week and make the whole team more effective.

**Nathan Green**: Better integration between our tools. I want data flowing seamlessly from sourcing tools to ATS to analytics. I want recruiters to have a single pane of glass instead of constantly switching between systems.

**William Jackson**: For me, it's scalability and consistency. As we grow the team and evolve our products, I want our sourcing approaches to scale with us. I want new recruiters to be able to leverage the expertise of senior recruiters. I want consistency across the organization. Technology should enable that.

**Interviewer**: Those are all really clear needs, and I think Jewel can help with all of them. I'd love to set up a deeper session to walk through our saved filter functionality, show you our Workday integration, and maybe get Rebecca and a couple of her team members access to pilot the sourcing features for some real reqs.

**William Jackson**: That sounds good. Let's see it in action and measure the results. That's how we'll know if it's the right fit.

**Nathan Green**: I'd also want to talk technical details on the integration side. I'd probably bring in someone from our IT team to understand the architecture and data flow.

**Rebecca Scott**: And I'd want to talk to some reference customers, ideally other fintech or payments companies who are using Jewel at scale.

**Interviewer**: Absolutely, I can set all of that up. I'll follow up with some time options and we'll get the ball rolling. Thanks so much for the time today and for being so candid about your challenges and needs. This has been incredibly valuable.

**William Jackson**: Thanks for taking the time to understand our business. We appreciate it.

**Rebecca Scott**: Yeah, looking forward to seeing more.

**Nathan Green**: Thanks, Sarah.

---

**End of transcript**
**Total word count: 4,000 words**

