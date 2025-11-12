# Gitlab Interview Transcript

**Date**: September 18, 2025
**Duration**: 58 minutes
**Attendees**: 
- Michelle Harris (Director of Talent Acquisition)
- Oliver Thompson (Senior Technical Recruiter - EMEA)
- Jasmine Patel (Remote Recruiting Specialist)
**Interviewer**: Sarah Kim (Product Manager, Jewel)

---

**Interviewer**: Thanks so much for taking the time today, everyone. I know coordinating across time zones can be tricky, so I really appreciate you all joining. Maybe we could start with quick introductions? Michelle, want to kick us off?

**Michelle Harris**: Sure! I'm Michelle Harris, Director of Talent Acquisition at Gitlab. I've been here about three years now, actually came from HashiCorp, so I have some experience with the fully remote model. I oversee our global recruiting efforts - we've got about 22 recruiters spread across, gosh, probably 15 different countries at this point.

**Oliver Thompson**: Hey, I'm Oliver Thompson. I'm based in London, been with Gitlab for about 18 months. I focus primarily on technical recruiting across EMEA - so that's everything from backend engineers to SREs, DevOps folks, security roles. Before this I was at Canonical, so also the remote world.

**Jasmine Patel**: Hi! Jasmine Patel here. I'm in Vancouver, and I've been at Gitlab for just over two years. My role is a bit unique - I'm specifically focused on what we call "remote recruiting optimization," which means I think a lot about how we recruit for distributed teams, how we assess remote work experience, and making sure we're not just defaulting to hiring people in major tech hubs.

**Interviewer**: That's super helpful context. So just to level set - what does recruiting volume look like for you all right now? How many roles are you typically filling per quarter?

**Michelle Harris**: So we're, um, we're still hiring but definitely more measured than 2021, 2022. I'd say we're filling probably 80 to 100 roles per quarter globally. That's down from our peak, but we're being really intentional about growth. Maybe 60% of that is engineering and technical roles, the rest is split across product, marketing, sales, G&A.

**Oliver Thompson**: Yeah, and on my side in EMEA, I'm probably handling about 20 to 25 technical roles per quarter. A lot of SRE and infrastructure positions. We've been growing our European presence deliberately.

**Jasmine Patel**: And just to add - one thing that's unique about us is that literally every role is remote. Like, we don't have an office. So when we're recruiting, we're not just looking for someone who can work remotely, we're looking for people who will thrive in an async-first, fully distributed environment. That changes how we source.

**Interviewer**: Absolutely. So let's dive into your current tech stack. What are you using today for your ATS and sourcing tools?

**Michelle Harris**: We're on Greenhouse, have been for probably five years now. That's our ATS. For sourcing, we use Jewel pretty heavily - we've been customers for about a year and a half, I think? We use the sourcing module, the CRM features quite a bit, and the analytics are really valuable for our recruiting ops team.

**Oliver Thompson**: We also use Fetcher, specifically for EMEA. And honestly, Fetcher has better data coverage in Europe than most tools. Like, Jewel is great, but when I'm recruiting in Germany or Poland or the Nordics, Fetcher just has more comprehensive contact data. It's frustrating to have to use two tools, but the data quality difference is real.

**Michelle Harris**: Yeah, and then everyone on the team has LinkedIn Recruiter licenses. That's sort of the baseline. But we try to limit how much we're relying on LinkedIn because, you know, everyone's on there, it's noisy, response rates aren't amazing.

**Jasmine Patel**: I'd say the Jewel CRM integration has been really valuable for us because we do a lot of relationship building. Like, I might connect with someone who's not quite ready to move, but they're at a company with good remote culture, they have the skills we need - I want to stay in touch with them. The CRM helps us manage those relationships over months or even years.

**Interviewer**: That's great to hear. So when you're actually sourcing - walk me through a typical search. Maybe Oliver, since you mentioned the EMEA complexity?

**Oliver Thompson**: Yeah, sure. So let's say I'm hiring an SRE for one of our infrastructure teams. First thing is, I need to figure out what kind of SRE I'm actually looking for, because that title is so broad now, right? Are we talking about someone who's deep in Kubernetes and container orchestration? Someone who's really strong with observability and monitoring tools? A security-focused SRE? Someone who specializes in CI/CD pipelines?

**Interviewer**: Mm-hmm.

**Oliver Thompson**: And the challenge is, each of those is almost like a different role. Like, I recruited for two SRE positions last quarter - one was really focused on our CI/CD infrastructure, so I needed someone with deep GitLab CI experience, obviously, plus Jenkins, CircleCI, understanding of pipeline optimization. The other role was for our observability team, so I needed someone who really knew Prometheus, Grafana, OpenTelemetry, that ecosystem.

**Michelle Harris**: This is the thing that comes up constantly across our recruiting team. Every role has these sub-personas within it.

**Oliver Thompson**: Exactly. So what ends up happening is I have to create multiple different searches. I'll have one search that's filtering for CI/CD keywords - GitLab CI, Jenkins, pipeline, continuous integration - and I'm looking at people who've worked at companies known for good CI/CD practices. Then I have a completely separate search for observability SREs where I'm filtering for Prometheus, Grafana, Datadog, monitoring, observability, distributed tracing.

**Jasmine Patel**: And then you add the remote work layer on top of it.

**Oliver Thompson**: Right! So I also need to filter for people who have experience working remotely, or who are at companies with strong remote cultures. Because someone who's been in an office their whole career - there's just a different skill set needed for async communication, self-direction, all of that.

**Interviewer**: So you're essentially maintaining multiple saved searches for what's nominally the same role title?

**Oliver Thompson**: Yeah, exactly. And then I also have to think about geography and time zones. Like, we have teams that are primarily US-based, we have teams that are primarily Europe-based. If I'm hiring for a Europe-based team, I want someone who's roughly in the UTC-2 to UTC+3 range because they need to have decent overlap with their teammates.

**Michelle Harris**: This time zone thing is huge for us. It's not just about where someone's located - it's about when they can collaborate.

**Jasmine Patel**: We've had situations where someone's technically in an "acceptable" location but their time zone means they'd be working completely off-cycle from their team. Like, we hired someone in New Zealand once for a team that was primarily European, and it just... it didn't work. There was almost no overlap in working hours.

**Interviewer**: So how do you filter for time zone in your searches?

**Oliver Thompson**: Honestly, it's pretty manual. I'll filter by country or region, and I have a mental map of what time zones those correspond to. But there's not really a great "show me people in UTC-2 to UTC+3" filter in most tools. So I'll search for UK, Ireland, France, Germany, Netherlands, Belgium, Spain, Italy, Poland - like, I'm literally listing out countries.

**Jasmine Patel**: And then you miss people! Like, someone in Portugal is in a good time zone for a European team, but if you forget to add Portugal to your country filter, you don't surface them.

**Michelle Harris**: We've talked about this internally so much. We need better ways to filter for time zone compatibility and remote work experience. It's not just a nice-to-have for us - it's core to every role we recruit for.

**Interviewer**: That makes total sense. So let me make sure I'm understanding the SRE example - you mentioned CI/CD specialists versus observability specialists. Are there other sub-types you're filtering for?

**Oliver Thompson**: Oh yeah. So infrastructure as code is another big one. Like, we need SREs who are really strong with Terraform, Ansible, that declarative infrastructure mindset. That's a different persona than someone who's an expert in Kubernetes.

**Jasmine Patel**: And then security automation SREs are almost a completely different role. They need to understand security tooling, vulnerability scanning, compliance automation, security-first infrastructure design.

**Oliver Thompson**: Right. So when I'm sourcing for what the hiring manager calls "an SRE," I'm actually creating four or five different searches. One for CI/CD pipeline specialists - I'm looking for GitLab CI, Jenkins, CircleCI, pipeline optimization experience. One for observability and monitoring - Prometheus, Grafana, Datadog, OpenTelemetry. One for infrastructure as code - Terraform, Ansible, CloudFormation. One for security automation - security tooling, vulnerability management, compliance. And then each of those needs to be filtered by geographic region and ideally time zone compatibility.

**Interviewer**: Wow. And you're managing all of those separately?

**Oliver Thompson**: Yep. I have a whole folder of saved searches in Jewel just for SRE variations. And then I have another folder for backend engineers, another for frontend, another for security engineers. It's... it's a lot to manage.

**Michelle Harris**: And this is every recruiter on our team. We all have these complex folder structures of saved searches because roles just aren't one-size-fits-all anymore.

**Interviewer**: How do you keep them organized? Like, how do you remember which search is which?

**Oliver Thompson**: I have pretty detailed naming conventions. Like, "SRE - CI/CD Pipeline - EMEA" or "SRE - Observability - Americas." But even with good naming, I have probably 40 or 50 saved searches just for the roles I typically recruit for.

**Jasmine Patel**: I do something similar. And what's tricky is when you're handing off a search to someone else or when new recruiters join. They don't have the context for why a search is set up a certain way or which persona it's targeting.

**Interviewer**: That's really helpful. Are there other role types where you see this same pattern?

**Michelle Harris**: Oh, everywhere. Backend engineers are another big one.

**Jasmine Patel**: Yeah, "backend engineer" could mean so many different things at Gitlab. We need people with deep database expertise, we need people who are strong with distributed systems, we need people who are API specialists, people with message queue and event streaming experience.

**Michelle Harris**: Product managers too. We've got PMs who are really technical, almost like TPMs. We've got PMs who are more growth and data-focused. We've got PMs who need deep domain expertise in CI/CD or security or observability.

**Oliver Thompson**: Data engineers are another one where the sub-personas are really different. Like, data infrastructure engineers who build pipelines versus analytics engineers who are closer to the business versus ML engineers who need research backgrounds.

**Interviewer**: So it sounds like this is a pretty universal challenge across technical roles. How much time would you say you spend just managing these searches and keeping them updated?

**Oliver Thompson**: Too much, honestly. Probably a few hours a week? I'll open a search and realize the company filters are outdated because I've learned about new companies with good remote cultures, or the skills keywords need tweaking because the tech landscape changed.

**Michelle Harris**: We've talked about having a shared library of searches across the team, but it's hard because everyone recruits slightly different role variations and different geographies.

**Interviewer**: What about the data quality in the tools you're using? You mentioned Fetcher has better EMEA coverage, Oliver. Can you say more about that?

**Oliver Thompson**: Yeah, so when I'm sourcing in the UK, Jewel is pretty solid. Good data, decent contact accuracy. But when I go into Germany, France, Poland - Fetcher just has more profiles and the contact data seems more current. I don't know if it's because they have better partnerships with European data providers or what, but I've done side-by-side comparisons and Fetcher consistently surfaces more candidates in those markets.

**Michelle Harris**: It's frustrating because we'd love to standardize on one tool, but we can't sacrifice the data quality. And Jewel has features that Fetcher doesn't have - the CRM integration, better analytics, more sophisticated filtering.

**Oliver Thompson**: Yeah, Fetcher is kind of bare-bones on features. It's basically just search and email. There's no relationship management, no analytics, the UI is pretty basic. But if the data isn't there in the first place, the features don't matter.

**Jasmine Patel**: We've had similar issues recruiting in Asia-Pacific. Like, Australia and Singapore are okay, but if we're trying to hire in India or Japan, the data coverage is patchy across the board.

**Interviewer**: How do you work around that?

**Jasmine Patel**: Honestly, a lot of manual work. LinkedIn becomes more important, we do more referral sourcing, we work with local recruiters who have networks. It's just slower and more expensive.

**Michelle Harris**: The dream would be one tool with great global coverage, strong feature set, and the ability to handle all these complex filtering scenarios we've been talking about. We're not there yet.

**Interviewer**: What about Greenhouse's AI sourcing? Have you used that much?

**Michelle Harris**: We tried it early on. It wasn't great for us, honestly.

**Oliver Thompson**: Yeah, I found it pretty surface-level. It would suggest candidates, but they often didn't match the nuances of what we needed. Like, it would show me general "DevOps engineers" when I needed that specific CI/CD pipeline expertise.

**Jasmine Patel**: And it definitely didn't understand the remote work component. It would suggest people who had never worked remotely, or who were in time zones that didn't make sense for the role.

**Michelle Harris**: I think it's improved since we last tried it, but we're pretty embedded with Jewel at this point. We've invested in training the team on it, building out our saved searches, integrating it with our workflows.

**Interviewer**: Makes sense. What about budget? How do you think about the ROI of these sourcing tools?

**Michelle Harris**: So we're definitely mindful of costs, especially in the current environment. We spend, let's see... probably around $80K annually on Jewel for the team, another $30K or so on Fetcher for EMEA, and then LinkedIn Recruiter is expensive - that's probably close to $100K for all the licenses.

**Oliver Thompson**: LinkedIn is really expensive for what we get out of it, honestly. But it's like, you have to have it because that's where everyone is.

**Michelle Harris**: Right. So we're spending over $200K annually on sourcing tools, and we still have gaps. We still have the time zone filtering problem, we still have the data coverage issues in certain regions, we still have this complex saved search management challenge.

**Jasmine Patel**: I think we'd pay more for a solution that actually solved those problems. Like, if there was a tool that had great global data coverage, understood time zones and remote work filtering, and had a better way to manage multiple persona variations for each role - that would save us so much time.

**Interviewer**: What would that look like to you? Like, if you could design the ideal solution?

**Jasmine Patel**: Okay, so first, I'd want actual time zone filtering. Not just countries, but like, "show me candidates in UTC-2 to UTC+3" or "show me candidates with at least 4 hours of overlap with US Pacific time."

**Oliver Thompson**: And I'd want the ability to create what I'd call "persona sets" for a role. So instead of maintaining five separate searches for SRE variations, I could have one SRE role with five different persona filters within it. And I could easily switch between them or search across all of them at once.

**Michelle Harris**: Ooh, yeah. And those persona sets could be shared across the recruiting team. So when we hire a new recruiter, they're not starting from scratch - they can use the persona sets that have been refined by people who've been recruiting those roles for years.

**Jasmine Patel**: And remote work experience should be a first-class filter, not something I have to approximate with company names. Like, "show me people who've worked remotely for at least 2 years" or "show me people at companies with async-first cultures."

**Oliver Thompson**: Better data coverage globally, obviously. If I'm paying for a tool, I want it to work in London and Berlin and Warsaw equally well.

**Michelle Harris**: And I'd love better integration between sourcing and relationship management. Like, when I find someone through a search, I should be able to immediately see if anyone else on the team has already reached out to them, what stage they're at in the CRM, any notes people have left.

**Interviewer**: The CRM integration is something you mentioned earlier as a strength of Jewel. How do you use that today?

**Jasmine Patel**: So we do a lot of long-term relationship building, especially for senior roles or niche skills. Like, I might identify someone who's at Google, they've been there for two years, they're probably not ready to move yet. But they have deep Kubernetes expertise and they've worked remotely before. So I'll add them to the CRM, send a soft intro message, maybe connect with them on LinkedIn, add a reminder to check back in six months.

**Michelle Harris**: It's really valuable for passive candidates who aren't actively job searching but might be open to the right opportunity down the line.

**Oliver Thompson**: And we use the CRM to track different engagement stages. Like, someone might be "Aware" - they know about Gitlab and have expressed some interest. Then they become "Engaged" - we've had a real conversation, they're interested but timing isn't right. Then hopefully eventually "Ready" - they're actively interested in opportunities.

**Interviewer**: How well does that integrate with your actual sourcing workflow?

**Michelle Harris**: Decently well. I think there's room for improvement. Sometimes I'll source someone in Jewel and then realize they're already in our CRM from a previous conversation, but that's not immediately obvious in the search results.

**Jasmine Patel**: Yeah, it would be great if CRM records were highlighted in search results. Like, "You've already talked to this person, here are the notes."

**Oliver Thompson**: Or even better, using CRM data to inform future searches. Like, if I've had good success with candidates from certain companies or with certain backgrounds, the tool could learn from that and surface similar profiles.

**Interviewer**: That's interesting. More of an AI-driven approach?

**Michelle Harris**: Potentially. I think we'd be open to it if it actually worked well and understood the nuances. But honestly, we've been burned by AI tools that claim to understand what we need and then just... don't.

**Oliver Thompson**: Yeah, I'd rather have really good, flexible filtering that I control than an AI that makes decisions for me and I can't understand why.

**Jasmine Patel**: I think there's a middle ground. Like, AI could help with things like identifying synonymous skills or suggesting related companies. But the core filtering and persona definition should be in my control.

**Interviewer**: That makes sense. Let's talk a bit more about the competitive landscape. You mentioned trying Greenhouse AI sourcing. What other tools have you evaluated?

**Michelle Harris**: We looked at Gem before we went with Jewel. Gem was interesting but it felt more focused on the outbound sequencing side than the actual sourcing and filtering side. We needed something that would help us find the right people first, then we could figure out outreach.

**Oliver Thompson**: We've had demos with Hired and Vettery, but those are more marketplace models and they don't really give us the control we need. Plus they're very US-centric.

**Jasmine Patel**: There's also Ashby, but we didn't want to switch ATSs and they're kind of all-in-one. We're happy with Greenhouse for the actual applicant tracking side.

**Michelle Harris**: Honestly, we wish Greenhouse's sourcing was better because it would be nice to have it all in one place. But they're just not competitive on the sourcing features compared to Jewel.

**Interviewer**: What would make you consider switching away from your current setup?

**Michelle Harris**: Better global data coverage would be a big one. If we could get Fetcher-level coverage in EMEA within a single tool, that would eliminate one of our vendors.

**Oliver Thompson**: Solving the time zone and remote work filtering challenges would be huge. That's a daily pain point for literally every recruiter on our team.

**Jasmine Patel**: And a better way to manage persona variations within roles. The folder full of saved searches thing works, but it's not elegant.

**Michelle Harris**: Price would matter too, obviously. We're not going to pay 2x more unless the ROI is really clear. But I think we'd pay 20-30% more for a tool that solved those core problems because it would save us time and help us hire better candidates faster.

**Interviewer**: How do you measure recruiting success? What metrics matter most to you?

**Michelle Harris**: Time to fill is important, but quality of hire is more important. We'd rather take an extra few weeks to find the right person than rush and hire someone who doesn't work out.

**Jasmine Patel**: Source channel effectiveness is something we track closely. Like, what percentage of our hires come from outbound sourcing versus inbound applications versus referrals. Sourcing is usually about 30-35% of our hires.

**Oliver Thompson**: We also look at response rates to outreach, and then conversion rates at each stage. And diversity metrics are important - we want to make sure we're building a globally diverse team.

**Michelle Harris**: The remote work aspect gives us an advantage there, actually. Because we can hire anywhere, we naturally have more geographic diversity than companies that are office-based. But we still have to be intentional about it.

**Interviewer**: How do your sourcing tools help or hinder diversity goals?

**Jasmine Patel**: That's a good question. I think having good global data coverage helps because we can source in more regions. But the tools don't really have built-in diversity features beyond basic filtering.

**Oliver Thompson**: We've tried things like gender filtering, but the data quality is often questionable. Like, the tool is guessing based on names, which is not reliable.

**Michelle Harris**: We mostly approach diversity from the top of the funnel - making sure we're sourcing from a diverse set of companies, regions, educational backgrounds. The tools can help with that if they give us good filtering options.

**Interviewer**: Last few questions as we're coming up on time. What does your decision-making process look like for new tools? Like, who needs to be involved, what's the procurement process?

**Michelle Harris**: For recruiting tools, I typically own the decision along with input from the team. So I'll have recruiters test out tools and give feedback. If it's a significant investment, I need to get approval from our CFO and probably our Chief People Officer.

**Oliver Thompson**: We're pretty nimble compared to larger companies, I think. But there's still a process.

**Michelle Harris**: Yeah, we're not going to sign a contract without doing a proper evaluation. Usually that means a pilot with a few recruiters for a month or two, see how it performs, look at the data quality, evaluate the ROI.

**Jasmine Patel**: And talking to references is important. We want to hear from other fully remote companies that have used the tool.

**Interviewer**: That makes sense. Any other pain points we haven't covered?

**Michelle Harris**: Email deliverability is always a challenge. We see bounce rates of 15-20% sometimes with contact data, which is frustrating.

**Oliver Thompson**: And reply rates continue to decline. Everyone's inbox is so noisy now. We're always looking for ways to make our outreach more personalized and relevant.

**Jasmine Patel**: The data staleness issue is real too. Like, we'll pull a list of candidates and by the time we reach out, some of them have already changed jobs. Quarterly data refreshes aren't frequent enough.

**Michelle Harris**: And there's always the challenge of scale. Like, we're not Google trying to fill 1,000 engineering roles per quarter, but we're also not a tiny startup where recruiters can manually source everyone. We're in this middle zone where we need tools that are powerful but not overly complex.

**Interviewer**: This has been incredibly helpful. Really appreciate you all taking the time and sharing so candidly about what's working and what's not. Any final thoughts?

**Oliver Thompson**: Just that I think there's a real opportunity for sourcing tools to better serve globally distributed companies. It's not just about having international data - it's about understanding the complexities of remote work, time zones, async collaboration. That's the future of work, and the tools need to catch up.

**Jasmine Patel**: Agreed. And the persona filtering thing - I think that's going to become more important as roles get more specialized. We need tools that can handle that complexity.

**Michelle Harris**: Yeah, thanks for listening to all our pain points! We do actually like Jewel overall - there are just areas where we think it could be even better. We're excited to see how the product evolves.

**Interviewer**: Great. Thanks again, everyone. I'll send over some follow-up questions if anything comes up, but this was really thorough. Appreciate it.

**Michelle Harris**: Thanks, Sarah!

**Oliver Thompson**: Cheers!

**Jasmine Patel**: Thanks!


