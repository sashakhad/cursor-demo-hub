# Citadel Interview Transcript

**Date**: September 23, 2025
**Duration**: 63 minutes
**Company**: Citadel
**Interviewees**:
- Thomas Anderson (Managing Director - Global Recruiting)
- Kelly Zhang (VP of Technology Talent Acquisition)
- Brandon Lee (Senior Quantitative Researcher Recruiter)

**Interviewer**: Sarah Kim (Product Manager, Jewel)

---

## Opening

**Interviewer**: Thank you all for making time today. I know Citadel moves fast, so I appreciate you carving out time for this conversation. Maybe we could start with introductions?

**Thomas Anderson (Managing Director - Global Recruiting)**: Certainly. I'm Thomas Anderson, Managing Director of Global Recruiting at Citadel. I've been with the firm for fourteen years - started on the business side and moved into talent acquisition about eight years ago. I oversee all recruiting globally - we have teams in Chicago, New York, London, Hong Kong, and several other locations. In total, we're about 70 people focused on talent acquisition.

**Kelly Zhang (VP of Technology Talent Acquisition)**: Kelly Zhang, VP of Technology Talent Acquisition. I've been at Citadel for nine years. I focus specifically on hiring for our technology organization, which spans everything from trading systems to data infrastructure to cybersecurity. My team is about 30 recruiters.

**Brandon Lee (Senior Quantitative Researcher Recruiter)**: Brandon Lee, Senior Quantitative Researcher Recruiter. I've been here for seven years. I recruit for our quantitative research roles across both our hedge fund and our market making businesses. My team is about 12 recruiters.

**Interviewer**: Can you give me a sense of the scale of hiring at Citadel?

**Thomas Anderson**: We're hiring at significant scale. Firm-wide, we're bringing on probably 800 to 1,000 people annually. That's across both Citadel the hedge fund and Citadel Securities our market making business. Of that volume, I'd estimate 50% are technology roles, 20% are quantitative research and trading, and 30% are operations, business development, and corporate functions.

**Kelly Zhang**: On the technology side specifically, we're filling 400 to 500 roles per year. That's a mix of software engineers at all levels, data scientists, infrastructure engineers, security specialists, everything.

**Brandon Lee**: Quantitative research and trading is maybe 150 to 200 roles annually across hedge fund and market making. Lower volume than technology but very high touch, very competitive.

**Interviewer**: What does your recruiting tech stack look like?

**Thomas Anderson**: We have a custom internal ATS that was built probably ten years ago. It's been extensively customized for our needs. It's quite sophisticated actually - handles our complex approval workflows, integrates with our HR systems, has custom reporting. We also use LinkedIn Recruiter universally - every recruiter has a license. And we've been piloting Jewel for about a year now with part of the technology recruiting team.

**Kelly Zhang**: I led the Jewel pilot on my team. We started with about eight recruiters testing it for specific use cases - primarily software engineering and data science roles. The feedback has been positive enough that we're considering broader rollout.

**Brandon Lee**: I haven't used Jewel myself - I'm still primarily on LinkedIn and our internal systems for quantitative research recruiting. But I've been following the pilot with interest.

**Interviewer**: What prompted you to pilot Jewel?

**Thomas Anderson**: A few things. One, we're always looking for competitive advantages in talent acquisition. The talent market, especially for technology and quantitative roles, is incredibly competitive. Two, we recognized that LinkedIn alone wasn't sufficient for the complexity of our recruiting. Three, we wanted better data and analytics to drive continuous improvement.

## Current State Discussion

**Interviewer**: Let's dig into how recruiting works today. Kelly, can you walk me through how you've been using Jewel?

**Kelly Zhang**: Sure. So we started the pilot about a year ago with a subset of my team - recruiters who are hiring for software engineering and data science roles. The primary value proposition we were testing was whether Jewel's filtering and search capabilities were more sophisticated than LinkedIn for our complex use cases.

**Interviewer**: And what was the verdict?

**Kelly Zhang**: Positive overall. The recruiters using Jewel found that they could build more complex searches and save them more effectively than in LinkedIn. The UI is cleaner and more intuitive. The data quality seemed comparable. And the analytics were helpful for understanding sourcing effectiveness.

**Interviewer**: Can you give me a specific example of a search where Jewel worked well?

**Kelly Zhang**: Yeah, let me think of a good one. We were hiring for a distributed systems engineer for our trading infrastructure. This is someone who needs deep expertise in low-latency distributed systems - we're talking microsecond-level latency - plus understanding of financial markets and trading systems.

In LinkedIn, building that search is complex. You're layering in C++ or Rust programming skills, distributed systems keywords, low-latency keywords, trying to filter by companies that do similar work - other trading firms, exchange technology companies, maybe certain infrastructure teams at tech companies. The Boolean string gets unwieldy.

**Interviewer**: And in Jewel?

**Kelly Zhang**: In Jewel, the recruiter could build that multi-dimensional search more intuitively - programming skills, technical keywords, company experience, years of experience, location - and then save it. So when we had another similar role two months later, they just pulled up the saved search, maybe tweaked it slightly, and had a candidate pool immediately.

**Thomas Anderson**: That reusability is key. We hire for many similar roles over time. Being able to save and refine searches rather than rebuilding them is a meaningful efficiency gain.

**Interviewer**: How many of your technology team is using Jewel currently?

**Kelly Zhang**: About eight of my 30 recruiters are using it actively. They're the ones focused on software engineering and data science roles. We haven't rolled it out to infrastructure recruiting, security recruiting, or Brandon's quantitative research team yet.

**Interviewer**: Brandon, can you walk me through how you're currently sourcing for quantitative research roles?

**Brandon Lee**: Sure. So quantitative research at Citadel is quite specialized and it's different between our hedge fund business and our market making business. On the hedge fund side, we're developing systematic trading strategies - machine learning models, statistical arbitrage, multi-asset class strategies. On the market making side, we're building algorithms for market making, pricing models, risk management systems.

**Interviewer**: How do those different needs translate to sourcing?

**Brandon Lee**: Each requires different personas. Let me walk through a few. On the hedge fund side, one major persona is machine learning researchers who are developing ML-based trading strategies. These folks typically have PhDs in computer science, statistics, or related fields, often with publications in top ML conferences. They might be coming from academia, from tech companies with strong ML research teams, or from other quantitative hedge funds.

**Thomas Anderson**: The search criteria for these folks is very research-focused.

**Brandon Lee**: Right. I'm filtering for PhD in CS or related fields, looking for publications at NeurIPS, ICML, ICLR, looking for ML keywords - "deep learning," "reinforcement learning," "neural networks." Companies include Google Brain, DeepMind, Facebook AI Research, OpenAI, or other quant funds like Two Sigma, Renaissance, DE Shaw.

Another major persona is low-latency C++ engineers for our trading systems. These are the folks building the systems that execute trades in microseconds. They need exceptional C++ skills, deep understanding of computer systems and performance optimization, experience with low-latency trading systems.

**Kelly Zhang**: There's overlap with some of my infrastructure recruiting, actually.

**Brandon Lee**: Yeah, exactly. For these folks, I'm looking for modern C++, low-latency keywords, high-frequency trading experience. Companies are other market makers like Virtu, IMC, Jump Trading, or exchange technology companies, or certain infrastructure teams at big tech companies.

**Interviewer**: So similar to what Kelly described?

**Brandon Lee**: Similar, though the market making low-latency roles are even more extreme in terms of performance requirements. We're optimizing at the nanosecond level in some cases.

A third major persona is market data engineers. These are the folks building systems that ingest, normalize, and distribute market data from hundreds of exchanges around the world in real-time. They need expertise with market data protocols - FIX, ITCH, that sort of thing - low-latency messaging systems, understanding of exchange connectivity.

**Thomas Anderson**: These are very specialized roles.

**Brandon Lee**: Very specialized. I'm looking for market data keywords, exchange connectivity experience, FIX protocol, low-latency messaging. Companies include other market makers, market data vendors like Bloomberg or Refinitiv, exchange technology teams.

Then on the risk management side, we need quantitative researchers who build models to measure and manage our risk exposure. They need deep quantitative skills - stochastic calculus, risk models, understanding of derivatives pricing - plus strong programming skills.

**Interviewer**: And they're coming from different backgrounds?

**Brandon Lee**: Often from other banks' or hedge funds' risk management teams, from risk management software companies, or from quantitative finance PhD programs. The search criteria shifts to risk management keywords, quantitative finance, derivatives pricing, Value at Risk.

**Interviewer**: So you're managing multiple distinct personas just within quantitative research?

**Brandon Lee**: At least four or five major ones, each requiring completely different search strategies. And right now, I'm managing all of those in LinkedIn using Boolean search strings that I've built over seven years. It works, but it's not elegant.

**Thomas Anderson**: This is one of the questions we're evaluating with Jewel - would it help Brandon's team manage this complexity more effectively?

**Interviewer**: What's working well with your current setup?

**Thomas Anderson**: Our internal ATS is quite good for our needs. It handles complex workflows - we have multiple approval layers, compensation approvals, various compliance checks. It integrates with our other systems. It's not the most modern UI, but it's functional.

**Kelly Zhang**: LinkedIn has broad reach. For general software engineering roles, it's fine. Everyone knows how to use it, the data is generally reliable.

**Brandon Lee**: For very senior or very specialized roles, our network and referrals are still the best source. Personal connections, references from current employees, people we've built relationships with over years.

**Interviewer**: What about candidate relationship management?

**Thomas Anderson**: That's an area where we could be better. We don't have a systematic CRM. Recruiters manage relationships individually, usually through email and personal notes.

**Brandon Lee**: I keep detailed notes in our internal ATS on candidates I've talked to, but it's not a true CRM. If I want to resurface candidates from two years ago who weren't ready to move at the time, I'm searching through my own notes.

**Kelly Zhang**: Some of the recruiters piloting Jewel have been using its CRM features and finding them valuable. But it's not rolled out broadly enough yet for us to have systematic relationship management.

## Pain Points Exploration

**Interviewer**: Let's dig into challenges. Brandon, you mentioned managing multiple personas in quantitative research. Can you walk through all of them in more detail?

**Brandon Lee**: Sure. So I'd say within quantitative research and trading at Citadel, there are at least six major personas, each requiring completely different sourcing approaches.

First, low-latency C++ engineers for market making. These folks are building systems that need to execute trades in nanoseconds. They need world-class C++ skills, deep understanding of hardware, network protocols, kernel optimization. They're often coming from other market makers - Virtu, IMC, Jump, Tower - or from exchange technology teams. The search is highly technical - "C++," "low-latency," "high-frequency trading," "FPGA," "kernel bypass," "lock-free programming."

Second, ML researchers for systematic trading on the hedge fund side. PhD-level ML expertise, publications, creativity in applying ML to trading problems. Coming from academia, tech company AI labs, or other quant funds. Search focuses on ML publications, research background, "reinforcement learning," "deep learning," "quantitative finance."

**Thomas Anderson**: Very different from the low-latency engineers.

**Brandon Lee**: Completely different. Third persona is market data engineers who are building real-time data ingestion and distribution systems. Need expertise with market data protocols, exchange connectivity, low-latency messaging. Coming from other market makers, market data vendors, exchanges. Search focuses on "market data," "FIX protocol," "exchange connectivity," "real-time data."

Fourth, risk management quantitative researchers. Building models to measure and manage risk across our portfolios. Need strong quantitative finance background - derivatives pricing, risk models, stochastic calculus - plus programming skills. Coming from banks, other hedge funds, risk management software companies. Search is "risk management," "Value at Risk," "derivatives pricing," "quantitative finance."

Fifth, quantitative developers implementing trading strategies. Strong programming skills - usually C++ or Python - plus solid quantitative background. Often have master's or PhDs in quantitative fields. Coming from other quant funds or quantitative roles at banks. Search combines programming and quantitative trading keywords.

**Kelly Zhang**: And sixth?

**Brandon Lee**: Sixth is market microstructure researchers, which is more specific to market making. These folks are studying how markets work at a microstructural level - order book dynamics, optimal execution, market impact. They often have PhDs in economics or finance with focus on market microstructure, or they're coming from research roles at other market makers or academic finance departments.

**Interviewer**: So six completely different searches for roles that might all fall under "quantitative research"?

**Brandon Lee**: At minimum six. And there are sub-variations within each. For example, within ML researchers, someone focused on NLP for alternative data is different from someone focused on reinforcement learning for execution.

**Thomas Anderson**: This is the complexity we're trying to solve for. How do we create consistent, reusable search strategies for all these different personas?

**Kelly Zhang**: And it's not just in quantitative research. In technology, I have similar complexity. Let me walk through data engineering specifically.

Within data engineers, I have at least four distinct personas. First, data infrastructure engineers building our data platforms - distributed systems that ingest and process massive amounts of market data, alternative data, fundamental data. These folks need expertise in big data technologies - Spark, Kafka, distributed databases - plus strong systems programming. Coming from tech companies with data scale - Google, Facebook, Amazon, Netflix.

**Thomas Anderson**: The search is very infrastructure-focused.

**Kelly Zhang**: Right - "distributed systems," "Spark," "Kafka," "data infrastructure," "big data." Second persona is streaming data engineers focused specifically on real-time data processing. We process billions of market data messages per day in real-time. These folks need expertise in stream processing - Kafka Streams, Flink, that ecosystem - plus understanding of financial data.

**Brandon Lee**: There's actually overlap with my market data engineers.

**Kelly Zhang**: Exactly. The search is "stream processing," "real-time data," "Kafka," "Flink," "event-driven architecture." Third persona is ML platform engineers building infrastructure for our data science and ML work - model training systems, feature stores, model deployment. Need infrastructure engineering skills plus understanding of ML workflows. Coming from tech companies with mature ML platforms.

Fourth persona is data engineers with financial domain expertise - folks who understand financial data deeply, who can work with our traders and PMs to build the right data models and analytics. Often coming from other financial services firms rather than tech companies. The search emphasizes finance keywords - "financial data," "market data," "Bloomberg," "trading systems."

**Interviewer**: So similar challenge - multiple distinct personas requiring different search strategies?

**Kelly Zhang**: Exactly. And right now, each recruiter is managing this in their own way. Some have Word documents with search strings, some are using Jewel's saved searches if they're in the pilot, some are rebuilding searches each time.

**Thomas Anderson**: Inconsistency is the problem. We should have institutional knowledge captured in a systematic way.

**Interviewer**: How much time are your recruiters spending on search creation and refinement?

**Brandon Lee**: For me personally, probably four to five hours a week. Every new req requires thinking through which persona it maps to, building or refining the search, testing different keyword combinations.

**Kelly Zhang**: The recruiters using Jewel report spending less time because they can reuse saved searches. But we haven't formally measured it.

**Interviewer**: What other pain points are you experiencing?

**Thomas Anderson**: Contact data quality is always a challenge. Email bounce rates are probably 15 to 20%, which is frustrating when you're reaching a small pool of highly qualified candidates.

**Brandon Lee**: Data staleness too. Someone's LinkedIn profile hasn't been updated in two years, so the job history is outdated.

**Kelly Zhang**: Integration between our various tools could be better. Moving candidates from LinkedIn or Jewel into our internal ATS involves some manual work. We'd love more seamless integration.

## Competitive Landscape & Future Needs

**Interviewer**: What other sourcing tools have you evaluated?

**Thomas Anderson**: We've looked at pretty much everything over the years. Gem, SeekOut, Hired, various niche tools. We're also always looking at what our competitors - Two Sigma, DE Shaw, Jane Street, Renaissance - are using.

**Kelly Zhang**: We evaluated Gem a couple years ago. It's focused on engagement and sequencing, which is valuable, but it didn't solve our core sourcing challenges.

**Brandon Lee**: I've seen demos of various AI sourcing tools, but I'm skeptical of black-box AI. I need to understand and control my search criteria.

**Interviewer**: As you think about potentially expanding Jewel usage, what would you need to see?

**Thomas Anderson**: Clear ROI from the current pilot. Are the recruiters using Jewel more efficient? Are they finding better candidates? Are they filling roles faster? We need data on that.

**Kelly Zhang**: I'd like to see it work for more of my use cases. Right now it's primarily software engineering and data science. Can it handle infrastructure recruiting? Security recruiting? Can it handle Brandon's quantitative research complexity?

**Brandon Lee**: For me, the question is whether it can genuinely handle the six-plus personas I described. Can I build sophisticated, reusable searches for each? Can I refine them over time? Can I share them with my team?

**Thomas Anderson**: Integration with our internal ATS is important. We're not replacing our ATS, so Jewel needs to integrate seamlessly.

**Interviewer**: What would the ideal sourcing solution look like for Citadel?

**Kelly Zhang**: Sophisticated filtering that handles our complexity. Reusable searches that capture institutional knowledge. Clean UI that recruiters actually want to use. Good data quality. Strong analytics to measure effectiveness.

**Brandon Lee**: For quantitative research specifically, understanding of highly specialized roles. PhD filters, publications, company experience at specific trading firms or tech companies, ability to layer in multiple dimensions.

**Thomas Anderson**: And it needs to integrate with our existing systems, meet our security requirements, and demonstrate clear ROI.

**Interviewer**: What's your timeline for decisions on expanding Jewel or evaluating other tools?

**Thomas Anderson**: We're in evaluation mode. I'd say we're three to six months from a decision on whether to expand Jewel more broadly or continue with the limited pilot or potentially sunset it.

**Kelly Zhang**: We need to collect more data from the current pilot users, understand the ROI, and test it on more use cases.

**Brandon Lee**: I'd be open to trying it for my quantitative research recruiting if we decide to expand the pilot.

**Interviewer**: What about budget? How do you think about ROI for recruiting tools?

**Thomas Anderson**: We're currently spending probably $250,000 annually on LinkedIn Recruiter, plus the Jewel pilot costs. We're fortunate that talent acquisition is viewed as strategic and we have reasonable budget. But we need to justify investments with clear ROI.

**Kelly Zhang**: The ROI calculation is time savings plus quality improvement plus speed. If a tool makes our 70 recruiters 20% more efficient, that's enormous value. If it helps us find better candidates who are more successful long-term, that's valuable. If it helps us fill critical roles two months faster, that has real economic value.

**Interviewer**: This has been really helpful. Any final thoughts?

**Brandon Lee**: Just that recruiting for quantitative finance and technology at this level is incredibly specialized. The tools need to handle that complexity, not dumb it down.

**Kelly Zhang**: And change management is important. Whatever tools we adopt need to be intuitive enough that recruiters will actually use them, not go back to old habits.

**Thomas Anderson**: We're always looking for competitive advantages in talent acquisition. The right tools can be part of that. But they need to deliver clear value.

**Interviewer**: Understood. Thanks so much for your time and candor, everyone.

**Thomas Anderson**: Thank you.

**Kelly Zhang**: Thanks.

**Brandon Lee**: Thank you.

---

**End of transcript**
**Word count: 4,000 words**

