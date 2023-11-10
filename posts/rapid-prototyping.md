---
title: "Rapid Prototyping"
metatitle: "Rapid Prototyping"
metadescription: "A blog post on how to do rapid prototyping in a software developer context."
layout: layouts/post.njk
date: Last Modified
eleventyNavigation:
  key: Rapid Prototyping
  parent: My Blogs
intro: Rapid Prototyping helps software engineers test out new systems or components, before implementing them into their main product or project. It reduces the chance of side-affects changing the outcome and also enables the developer to focus on the core goal of the prototype itself.
---

As Software Engineers, a common problem we come across is testing out new features and technical solutions, before implementing them into the product. A common pitfall I see is to add it on top of the current product, and try to make it fit directly. This usually leads to very long prototyping time, as there are many side effects taking place and sometimes even conclusions that are false.

I will present a different way to handle prototyping in the context of software development that focuses on small and light prototypes that are thrown out and redone until the result is found. The goal is to reduce the side effects of prototyping, ensure the effects of the new feature or solution is fully understood, and ease the burden on the developers.

## The methodology
There are some key concepts that need to be followed in order to gain the benefits of small and agile prototypes. These points are:
- Start a new project from scratch, with as little existing code as possible. The code that is included, which might be basic components that are needed in any project for your use case, needs to be fully understood, especially their side effects.
- When developing, never add components that aren’t directly needed for what you’re testing. Keep it as lean as possible, if you have code that at some point isn’t needed anymore, try to remove it when you can, don’t leave it hanging around.
- Try to work on a prototype for only 2-4 hours max. Delete the whole project and start from scratch again when the time limit is reached or you’re noticing that you’ve gone down the wrong rabbit hole. Don’t try to fix your project! It’s a prototype, they’re meant to be thrown away.
- Automate your project creation if needed. A rule of thumb is that you should only need max 5 minutes to start a new project with all you need. If you need more time than that, try to automate the process. Probably you will use the same tech stack every time you do a prototype, so having a shared starting project for prototyping in your team might make sense.

The main idea is to keep your prototype as lean as you possibly can, while fully understanding its processes while you’re testing out its new component. A challenge I had when trying this out was to throw away my prototype after 2 hours, as it seems a bit unproductive. It’s simply a mechanism to stop you from spending too much time fiddling on smaller issues on the prototype, and not focusing on getting it up and running. In the end, for most software components, recreating something you’ve done before doesn’t demand much time and you can continue from where you left off, but hopefully this time with a clearer mind and with some new learnings.

## Tips for efficiently using prototyping
1. Don’t be afraid to spend a substantial amount of time to understand your starter project, it's of utmost importance that you do understand all the effects it has on your future prototypes.
2. Try creating a starter project from scratch from time to time, don’t let the process become stale. If you haven’t created an up to date starter project in a while, have it as a small task during the day to try it out.
3. When prototyping, always have a clear goal. Don’t start a prototype with the goal of “exploring authentication” or something to that end, as that is too vague in order to create a working prototype. Instead, a goal like “prove that basic authentication flow works” is more helpful, as you can work towards it without seeing the need to add much fluff outside of what you’re trying to achieve.
4. The point of having a lean prototype is to make it easier to grasp what is going on, not using this opportunity to fully understand the system would be a wasted one.

## Summary
Rapid prototyping is a great tool to have in your software engineer toolbox. It allows you to quickly test your wanted feature without getting bogged down in endless bug tracing and side-effect tracking. It’s one of many tools of course, and not something that will work in any scenario, as the time limit obviously limits the size of the prototype to something that can reasonably be done in that time. But if the goal is clear and concise, I would think that would go for most scenarios.
