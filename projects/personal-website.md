---
title: "Personal Website"
metatitle: "Blog post on Building a Personal Website"
metadescription: "Post on how I setup my personal website, which steps I needed to do."
layout: layouts/post.njk
date: Last Modified
eleventyNavigation:
  key: Personal Website
  parent: Projects
intro: How I setup my personal website, which goals I had in mind while choosing the different tools for the job, and a simple overview of the steps needed to make the website up and running. 
---

Inspired by one of my friends to try out blogging, to reflect by writing and expressing my opinions publicly, I got to putting it into action during my Sabbatical. Here I will give an overview of the details of the project, and how it was technically implemented.

## Goals of the Project
- Running on a server that is always available
- Design that is easy and intuitive
- Searchable for google with basic SEO
- Enable me to easily publish blog or project posts
- Quick and low effort deployments

## General Architecture
The basic architecture's aim is to highlight how the different components are used in the whole system and their interconnections. As I’ve decided to use a, mainly, static website design, the first part will be dedicated to how it works and its place in the system.

A simple overview of the system is given below:
![Test](/images/website-arch-overview.svg)

### Static Website
In simple words, a static website is a web page that shows the same data, irrespective of the user using it. In comparison, a dynamic website is able to change the content of the webpage by pulling in different data depending on the user. In technical terms, the code that is given to the browser during a normal session (HTML, CSS, and any resource files) will be the same across any user. It’s also typical for the source files to all be given in the initiaWith my own host, create a comment section and state for the page, with user statistics
l request, as this makes further navigation of the site smooth and basically lag free.

### Frontend
The frontend is based on 11ty and Bulma, two different libraries that each support each other.

#### 11ty
A flexible library that allows for templating your HTML, CSS and resource files. Mainly it’s geared towards using one of many templating engines in order to streamline and simplify the development, removing mainly code duplication and enabling writing articles directly in the source code in your templating language of choice.

#### Bulma
The CSS library of choice for this project, mainly because of its simplicity and that it’s open source. Documentation is also up to date and it’s being actively supported by its main developer and the community.

### Backend?
As it's a static website, there isn’t much of a backend to talk about. The only true backend is handled by the static website host, which in this case is Github Pages. The service here handles all necessary calls to deliver the processed code to the browser to be shown to the user. Because of this, we as developers don’t have to handle anything related to the backend when the service is set up.

## Infrastructure
The infrastructure for the project is set up as minimally as possible while fulfilling the needs and goals of the project. A static website host is used, Github Pages, and a simple connection is made with the service through Github Actions that handles the CI/CD.

### Github Pages
Github Pages is a static website service that allows you to push any files in your github repository, either before or after the pipeline has changed them, to the user. There isn’t too much more to it to be honest, what you see is what you get here more or less. 

In my case, the pipeline changes the files to be outputted, as not everything is needed by the user obviously and the templating engine needs to output the correct html code first. 

### CI/CD: Github Actions
The pipeline technology of choice was Github Actions because it covers all necessary features, is easy to use, and has streamlined integration with Github Pages.

The pipeline code can be seen in my repository, linked at the bottom of the article. It's a simple pipeline, that basically just:
- Builds the code, meaning it runs the templating engines of 11ty to create pure HTML, CSS and JS code for the browser
- Publish the generated code from 11ty to Github Pages

There are of course steps in between to allow each of these main steps, but these are the main CI and CD components. No testing is done, its supposed to be really lightweight and don't want to spend much time to test a static website. 

## Basic SEO
In order to fulfill the goal of being searchable by Google, and as we all know no-one ever goes to the second page, there was a need to setup basic SEO. In the end, I don’t need people to find my blog posts on their first search for something similar, but just that searching david billdal should bring my website up on the first page.

The basic SEO actions that I did:
- title, necessary for making clear what the content is about. Placed in meta tages
- meta description, more detailed description that is shown to the user while browsing with their search engine. Also placed in meta tags
- rel=“canonical”, basically a way to stop duplication of content for the search engine. If you have a post with multiple pages, you probably want the main page to be the one that is indexed and ranked, and not page 3 for example. It just self references itself. Don't think its necessary, as my posts are simple, but in case it helps google a bit
- meta robots, just a meta tag that helps the crawlers. Nothing special here, just added that they should index it, not necessary but why not, in case it helps the ranking a tiny bit

## Namespace and SSLs
As I want my own domain, I need to register it with a Domain Registrar. I used NameCheap for this, as they have some of the best rates on the market and offer all the needed features. User Interface is also simple enough, not the best but shouldn’t be a big problem getting your tasks done.

Setting up the SSL isn’t really something I need to do too much work. The main reason is that Github Pages already have a wildcard certificate for all their subdomains, and as I’m hosting it from their subdomain I’m then automatically covered. The only real action here is to activate it on the Github Pages settings page once the domain has been registered and I can repoint the Github Pages to this domain (in the end not an actual redirect, it’s just for Github Pages to know what my original domain is supposed to be). The actual CNAME config has to be done on NameCheap, which basically just means that I say that for the davidbilldal.com domain, use the github pages as the host. In the background, the DNS resolution then finds the IP address of the Github Pages, as that’s the actual location of the host.

And that’s it for Namespace and SSLs! Github Pages makes the process kind of pain free, although a warning is that it can be confusing to activate the domain name while doing the CNAME with Github. Just remember that there is usually a big delay between when you register your domain name and when it’s actually available at the DNS providers around the globe.

## Future Plans
As the project has reached its version 1.0 stage, where I now can use the posting feature without having to tweak source code, except for the actual article published, I will focus on writing posts for now. But there are certain bigger next steps that I probably will tackle at some point:
- Redesign the front page with images from relevant posts, tags, and a rss feed
- Change the host from github pages to my own host in a cloud provider to allow for more flexibility to add a custom backend
- With my own host, create a comment section and state for the page, with user statistics

## Github
You can find the project at my Github repository here: https://github.com/davidkybber/kybber-website.

