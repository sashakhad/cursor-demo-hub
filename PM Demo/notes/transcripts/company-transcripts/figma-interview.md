# Figma Interview Transcript
**Date:** September 22, 2024  
**Attendees:** Amanda Lewis (Director of Technical Recruiting), Chris Johnson (Lead Recruiter, Engineering)  
**Interviewer:** Michael Torres (Jewel Product Team)  
**Duration:** 58 minutes

---

**Interviewer:** Hey Amanda, hey Chris! Thanks so much for making time for this. I know you both are super busy, so I really appreciate it.

**Amanda Lewis:** Of course! Happy to be here.

**Chris Johnson:** Yeah, no problem. Always happy to talk recruiting tools—it's kind of my favorite topic.

**Interviewer:** Ha, I love it. Okay, so just to level-set, we're doing these conversations to understand how companies are approaching technical sourcing in 2024. No sales pitch, no hidden agenda—we just want to learn from folks who are in the trenches doing this work every day. Does that work for you?

**Amanda Lewis:** Totally works for us. We're actually in the middle of evaluating our sourcing stack, so this is well-timed.

**Interviewer:** Perfect. So let's start with some context. Can you tell me a bit about Figma's recruiting team and your hiring volume?

**Amanda Lewis:** Sure. So our recruiting team is about eighteen people right now. We've grown quite a bit over the last couple of years. In terms of hiring volume, we're probably doing thirty-five to forty hires per quarter across all functions—eng, product, design, go-to-market, all of it.

**Chris Johnson:** And on the engineering side specifically, which is my focus, we're probably doing twenty to twenty-five eng hires per quarter. It's a good pace. Not insane, but definitely busy.

**Interviewer:** Got it. And what kind of engineering roles are you hiring for? What's the breakdown?

**Chris Johnson:** It's pretty varied. We hire a lot of full-stack engineers, obviously, because we're building a web-based product. But we also have some really specialized roles. We hire C++ systems engineers for our rendering engine, WebAssembly specialists for performance optimization, graphics engineers for our vector rendering pipeline. And then we have infrastructure engineers, data engineers, security engineers—you know, the whole gamut.

**Amanda Lewis:** The specialized roles are always the hardest to fill, which I'm sure comes as no surprise.

**Interviewer:** Yeah, absolutely. Okay, so let's talk about your current tech stack. What are you using for ATS and sourcing?

**Amanda Lewis:** We're on Greenhouse for ATS. We've been on Greenhouse for probably four years now? Maybe five? It's been a while.

**Chris Johnson:** Yeah, we were early Greenhouse adopters. We actually moved from Jobvite to Greenhouse back when we were much smaller.

**Amanda Lewis:** And for sourcing, we use LinkedIn Recruiter—that's table stakes. We also have Greenhouse's AI sourcing module, which came bundled with our contract when they launched it. And then we've been using Juicebox for about a year and a half now.

**Interviewer:** Nice. How did you end up with Juicebox?

**Chris Johnson:** I actually pushed for it. I'd heard good things from my network, and we were looking for something that had better filtering capabilities than what we were getting from LinkedIn and Greenhouse. We did a trial, and I was pretty much sold immediately.

**Amanda Lewis:** Chris became our Juicebox evangelist.

**Chris Johnson:** Guilty as charged. But seriously, the saved filters feature alone is worth the price of admission for me.

**Interviewer:** I want to dig into that in a bit. But first, let's talk about Greenhouse AI sourcing. You mentioned it came bundled with your contract. Are you actively using it?

**Amanda Lewis:** It's mixed. Some of our recruiters use it, some don't. It's kind of become a personal preference thing. I'd say maybe half the team uses it regularly?

**Chris Johnson:** I tried it for a few months, but I've mostly moved away from it at this point. It's not bad, it's just not great for the types of roles I'm hiring for.

**Interviewer:** Tell me more about that. What made it not great for your roles?

**Chris Johnson:** So the biggest issue is that it's too broad. Let me give you an example. We recently hired a WebAssembly performance engineer. This is someone who needs deep expertise in WebAssembly, understanding of browser rendering pipelines, experience with low-level performance optimization—it's a super niche role.

**Interviewer:** Mmhmm.

**Chris Johnson:** When I put that role into Greenhouse AI, it gave me back a bunch of generic frontend engineers and some backend engineers who had "performance" mentioned somewhere in their profile. But these weren't WebAssembly specialists. They were just... engineers. The AI wasn't able to understand the nuance of what I was looking for.

**Amanda Lewis:** And that's been a consistent theme with the AI sourcing tools we've tried. They're good for general roles, but when you get into specialized technical roles, they struggle.

**Interviewer:** Interesting. So what do you do for those specialized roles? How do you source for them?

**Chris Johnson:** That's where the persona-based approach comes in. I've basically built out different search personas in Juicebox for different types of engineering roles, and I can pull them up depending on what I'm hiring for.

**Interviewer:** Okay, this is interesting. Can you walk me through what you mean by persona-based approach?

**Chris Johnson:** Sure. So, okay, let me use that WebAssembly engineer example. When I'm sourcing for that role, I have a specific saved filter set in Juicebox that's optimized for finding WebAssembly specialists. I'm filtering for people who've worked at companies that use WebAssembly heavily—so like Figma, obviously, but also Google, Mozilla, Fastly, Cloudflare, Shopify. I'm looking for people whose titles or descriptions mention "WebAssembly," "WASM," "emscripten," "performance engineering."

**Interviewer:** Okay.

**Chris Johnson:** And I'm also looking at their GitHub profiles to see if they've contributed to WebAssembly-related projects. Juicebox pulls in some of that data, which is super helpful. So I've got this whole filter set dialed in for WebAssembly engineers, and I've saved it so I can reuse it whenever I have a similar role.

**Interviewer:** And you have other personas for other types of roles?

**Chris Johnson:** Yeah, I've got a whole library of them at this point. Let me think... I have one for C++ systems engineers, which is different from the WebAssembly persona because it's focused more on low-level systems programming, memory management, that kind of thing. I have one for graphics engineers, which is focused on people with computer graphics backgrounds, experience with rendering pipelines, knowledge of OpenGL or WebGL or WebGPU.

**Amanda Lewis:** Chris has become very sophisticated about this.

**Chris Johnson:** I mean, I've had to be, because if I just search for "software engineer," I get ten thousand results and ninety-nine percent of them aren't relevant. So I've learned to be very precise about my filtering. And once I've built out a good filter set, I save it so I'm not recreating the wheel every time.

**Interviewer:** How many of these personas do you have at this point?

**Chris Johnson:** Um, let me count. I have the WebAssembly one, the C++ systems one, the graphics engineer one. I also have one for infrastructure/SRE roles, one for frontend engineers with a focus on React and TypeScript, one for data engineers, and one for security engineers. So that's... seven? Yeah, seven different personas.

**Amanda Lewis:** And we're starting to think about how we can scale this approach across the whole team. Chris has been our pioneer here, but there's no reason the other recruiters couldn't use a similar approach for their roles.

**Interviewer:** That's fascinating. So Amanda, when you look at Chris's results versus other recruiters on the team, what are you seeing?

**Amanda Lewis:** Chris's response rates are consistently higher. Like, noticeably higher. I think part of that is that he's a good recruiter, obviously, but part of it is also that he's being so targeted in his outreach. Candidates can tell when you've actually done your homework and found them for a specific reason, versus just blasting out generic messages.

**Chris Johnson:** Yeah, I've had candidates tell me, "This is the first recruiting message I've actually been interested in," which is both flattering and kind of sad. But it speaks to the fact that most recruiting outreach is pretty bad.

**Interviewer:** Ha, yeah. Okay, so let's talk about the tools themselves. You mentioned you're using Juicebox for these saved filters. Are you on the paid version?

**Amanda Lewis:** We are. We upgraded from the free version about six months ago. The free version was actually pretty generous—we got access to the core filtering features and even some saved filters. But we hit the monthly search limit pretty quickly with a team our size, so we upgraded.

**Chris Johnson:** The paid version also gives us the Chrome extension, which is really handy. I can be looking at someone's LinkedIn or GitHub, click the extension, and it pulls up their Juicebox profile with all the enriched data. It's a nice workflow improvement.

**Interviewer:** How's the contact data quality?

**Chris Johnson:** It's pretty good. I'd say the email addresses are accurate maybe seventy-five to eighty percent of the time, which is on par with other tools we've used. The phone numbers are hit or miss—I don't really use those as much anyway.

**Amanda Lewis:** The one frustration we have is data staleness. Juicebox updates their database quarterly, and in tech, that's a long time. People move jobs, change titles, all that. So we definitely encounter situations where we're reaching out to someone at a company they left three months ago.

**Chris Johnson:** Yeah, that's probably my number one pain point with sourcing tools in general. The data is always a bit stale. It's not specific to Juicebox—we've had the same issue with every contact data provider we've used.

**Interviewer:** Right. So if you could wave a magic wand and fix that, what would the ideal solution look like?

**Chris Johnson:** I'd love monthly updates instead of quarterly. Or even better, real-time updates, but I know that's probably not realistic. I'd also love more transparency about when data was last updated. Like, show me a timestamp on each candidate profile so I know if the data is fresh or six months old.

**Amanda Lewis:** And I'd love better validation. If you're giving me an email address, tell me how confident you are that it's current. That way I can prioritize my outreach accordingly.

**Interviewer:** Those are great suggestions. Okay, so let's go back to the persona thing for a minute, because I'm really intrigued. Chris, can you walk me through one more persona so I can understand the nuance? Like, how different is the C++ systems engineer persona from the WebAssembly persona?

**Chris Johnson:** Oh, they're quite different. So the C++ systems engineer persona is focused on people who are doing low-level systems work. I'm looking for people who've worked at companies with complex C++ codebases—places like Google, Meta, Microsoft, Apple, Bloomberg, trading firms like Jane Street or Citadel.

**Interviewer:** Okay.

**Chris Johnson:** I'm filtering for titles that include "systems engineer," "C++ engineer," "performance engineer," things like that. And I'm looking for people who have experience with things like memory management, concurrency, compiler optimization. These are people who are really deep in the stack.

**Interviewer:** And how is that different from the WebAssembly persona?

**Chris Johnson:** So there's some overlap—a lot of WebAssembly engineers have C++ backgrounds—but the WebAssembly persona is more focused on the web platform specifically. I'm looking for people who understand how browsers work, who've dealt with the constraints of running code in a browser environment, who know about WASM's memory model and its interop with JavaScript. It's a different set of concerns.

**Amanda Lewis:** This is actually a great example of why generic AI sourcing doesn't work well for our roles. An AI might look at both of these roles and think, "Oh, they're both C++ engineers," and give you the same candidates for both. But in reality, they're different profiles with different backgrounds.

**Chris Johnson:** Exactly. And that's why I need to be able to manually control the filters. I need to be able to say, "For this role, I care about WebAssembly and browser experience. For this role, I care about low-level systems programming and performance optimization."

**Interviewer:** Right. So it sounds like control and transparency are really important to you.

**Chris Johnson:** A hundred percent. I'm not opposed to AI—I think AI can be powerful—but I need to understand what it's doing and be able to guide it. I can't just trust it blindly, especially for these niche roles.

**Interviewer:** That makes sense. Okay, let's talk about pain points more broadly. What are the biggest challenges you're facing in sourcing right now?

**Amanda Lewis:** Data staleness is number one, like we mentioned. Number two is probably the volume of tools we're using. It feels like we have a tool for everything—LinkedIn for basic searches, Juicebox for filtering, Greenhouse for ATS, GEM for sequencing, Slack for team communication about candidates. It's a lot of context-switching.

**Chris Johnson:** Yeah, I'd love more integration between tools. Like, ideally, I could do all my sourcing in one place and have it automatically sync with Greenhouse and my email. Right now, I'm doing a lot of manual copying and pasting between systems.

**Interviewer:** Have you looked at any tools that promise better integration?

**Amanda Lewis:** We've looked at a few. We tried GEM for a bit, which has some nice automation and sequencing features. But the search and filtering capabilities didn't feel as strong as Juicebox, so we ended up using both, which kind of defeats the purpose.

**Chris Johnson:** We've also had demos with SeekOut and HireEZ. SeekOut has a massive database, which is appealing, but the interface is overwhelming. There are so many options and toggles—it's a lot.

**Amanda Lewis:** And HireEZ has some interesting AI features, but we haven't fully explored them yet. We're kind of in this evaluation phase where we're trying to figure out what the right stack is for us going forward.

**Interviewer:** What does the budget situation look like? Are you constrained in terms of what you can spend on tools?

**Amanda Lewis:** We have budget for recruiting tools, but we're being more thoughtful about ROI than we were a couple of years ago. The market has shifted, and we need to show value for every dollar we spend. We can't just buy every shiny new tool that comes along.

**Chris Johnson:** Which is why I focus on efficiency so much. If I can use Juicebox's saved filters to cut my sourcing time in half, that's a measurable ROI. I don't need a super expensive AI tool that promises the world but doesn't actually make me faster.

**Interviewer:** Right. So when you're evaluating new tools, what are the key criteria you're looking at?

**Amanda Lewis:** ROI is number one. We need to see that it's making us faster or more effective. Number two is ease of use—we don't have time for tools with steep learning curves. Number three is data quality—if the contact data is bad, the tool is useless. And number four is integration with our existing stack, especially Greenhouse.

**Chris Johnson:** I'd also add flexibility. For the types of roles I recruit for, I need tools that give me a lot of control over the search parameters. Cookie-cutter solutions don't work for niche technical roles.

**Interviewer:** That makes sense. Let's talk about the competitive landscape for a minute. You mentioned you've looked at GEM, SeekOut, HireEZ. What else is on your radar?

**Amanda Lewis:** We're keeping an eye on what Greenhouse is doing with their AI features, since we're already paying for it. We've also heard good things about Dover and Ashby, though those are more ATS-focused than sourcing-focused.

**Chris Johnson:** I've been experimenting with some of the newer AI tools too. There are a bunch of startups building AI-powered sourcing tools right now. Some of them are interesting, but most of them are still pretty early. They don't have the feature depth or data quality I need yet.

**Interviewer:** What would need to be true for you to switch tools or add a new tool to your stack?

**Amanda Lewis:** It would need to solve a real pain point. Like, if someone came to us and said, "We have real-time contact data that's ninety-five percent accurate," that would get my attention. Or if someone said, "We have an AI that actually understands niche technical roles and can learn from your behavior," that would be interesting.

**Chris Johnson:** I'd also need to see that it integrates well with our existing tools. I'm not going to adopt something that creates more work for me. It needs to slot into my workflow seamlessly.

**Interviewer:** Got it. So let's talk about the future. Where do you see your sourcing stack going in the next year or two?

**Amanda Lewis:** I think we're going to continue to be multi-tool. I don't think there's one tool that does everything well, so we'll probably keep using different tools for different purposes. But I'd like to see better integration between them. Maybe that's something we build internally, or maybe vendors will get better at integrating with each other.

**Chris Johnson:** I'd also like to see AI tools get more sophisticated. Right now, they're kind of blunt instruments. They don't understand the nuance of technical roles. But I think over time, as the models get better, they could become really valuable. I'm cautiously optimistic about that.

**Interviewer:** What would make you feel like AI sourcing had "arrived"? Like, what would it need to do?

**Chris Johnson:** It would need to understand the difference between a C++ systems engineer and a WebAssembly engineer. It would need to learn from my behavior—like, if I keep selecting certain types of candidates and passing on others, it should pick up on those patterns. And it would need to be transparent. I want to know why the AI is suggesting a particular candidate. Show me the reasoning.

**Amanda Lewis:** I'd also want it to be able to handle the full workflow. Right now, AI tools are mostly focused on the search and discovery phase. But sourcing is more than just finding candidates. It's also outreach, follow-up, pipeline management. If an AI could help with all of that, that would be a game-changer.

**Interviewer:** That's really interesting. Okay, we're coming up on time, but I have a few more questions. You mentioned that Chris's persona-based approach is something you want to scale across the team. What's the plan for doing that?

**Amanda Lewis:** We're working on it. I think the first step is documentation. Chris needs to write down his approach, his personas, the filters he uses, all of that. Then we can train the other recruiters on it and help them build out their own personas for their role families.

**Chris Johnson:** Yeah, and I'm happy to do that. I think it would be really valuable for the team. The challenge is that it's kind of time-consuming to build out these personas from scratch. It's taken me over a year to build out my seven personas. So we need to figure out how to accelerate that for other people.

**Amanda Lewis:** One idea we've had is to create templates or starter personas that people can customize. Like, we could have a baseline "frontend engineer" persona that people can then tweak based on their specific needs.

**Interviewer:** That's a great idea. Have you thought about whether tools like Juicebox could help with this? Like, could they provide pre-built personas?

**Chris Johnson:** That would be interesting. I think it would need to be done carefully, though. Pre-built personas might be too generic to be useful. But if they could provide a framework or a starting point, that could be valuable.

**Amanda Lewis:** Yeah, I could see that being useful, especially for common role types. Like, if Juicebox had a starter persona for "backend engineer" or "data scientist," that could save people some time.

**Interviewer:** Cool. Okay, last few questions. If you were talking to a peer at another company who's evaluating their sourcing stack, what advice would you give them?

**Chris Johnson:** I'd say invest time in understanding your filters and building out personas. It's not sexy, but it's high-leverage. The better your filters, the better your results, and the more efficient you'll be.

**Amanda Lewis:** I'd say start with your pain points, not with what vendors are selling you. Figure out what's actually slowing you down, and then find tools that solve those specific problems. Don't just buy the most expensive tool and hope it fixes everything.

**Interviewer:** Great advice. And last question: if we were to reconnect in six months, what would have to be true for you to feel like you've made progress on sourcing?

**Amanda Lewis:** I'd want to see our time-to-fill come down, especially for those hard-to-fill specialized roles. And I'd want to see more consistency across the team in terms of sourcing quality.

**Chris Johnson:** I'd want to feel less tool fatigue. Right now, I'm juggling too many platforms. If we could consolidate or integrate better, that would be a win for me.

**Amanda Lewis:** And I'd want the whole team to be using a persona-based approach. If we could get there, I think we'd see a real step-change in our sourcing effectiveness.

**Interviewer:** Awesome. Well, thank you both so much for your time. This has been incredibly helpful. I really appreciate all the specific examples and the thoughtfulness of your answers.

**Amanda Lewis:** Of course! Happy to help.

**Chris Johnson:** Yeah, anytime. Good luck with your research.

**Interviewer:** Thanks! We'll be in touch.

---

**[End of transcript - 4,010 words]**

