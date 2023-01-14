---
title: Building ReactBits Website from Scratch
slug: building-reactbits-website-from-scratch
image: /img/blog/reactbits/reactbits.png
---

![ReactBits](/img/blog/reactbits/reactbits.png)

Last week, I rebuilt the [ReactBits](https://reactbits.com) website from scratch, replacing the outdated WordPress theme with a new tech stack. The website was where I used to share my hand picked favorite videos on various topics from YouTube. I decided to rebuild it from scratch as I was no longer working with WordPress, updating the website was too much work. In this article, I discuss the tech stack I chose as well as the development process.

<!-- truncate -->

## Tech Stack

In order to rebuild ReactBits, I chose the following tech stack.

1. Appwrite Cloud (Which is still in invite only beta)
2. Svelte Kit
3. Vercel
4. GitHub

### Appwrite

As you all know I’ve been working at Appwrite as a software engineer for 2 years now. The product has grown a lot, and recently we have launched invite only beta of Appwrite cloud. This was the perfect time for me to experiment with cloud. Even though the cloud is still in beta, Appwrite itself is well tested in the open source community edition so I was confident about using Appwrite as the back-end. For this particular project I needed two things, to automate getting new videos from my favorite channels and database to save and query those videos. I could use the Appwrite cloud function that runs periodically to automate getting new videos from my favorite channels and then store them in the Appwrite’s database service. In the front-end I could query database using one of the Appwrite’s SDKs.

### Svelte Kit

Well, I already loved svelte and svelte kit, and recently svelte kit 1.0 was launched. So again, this was perfect choice as I could generate server side rendered websites or even build a complete static website depending on where I wanted to deploy. Svelte kit provides great frame for developing modern websites. I even configured two separate route systems for admin and public so that publicly deployed version would not even contain the admin module that I use to manage my videos.

### Vercel

Vercel was the perfect choice for me, as it had a lot of features that I was looking for. It had out of the box support for popular frameworks like Svelte kit, GitHub integration for automatic deployment, and a generous pricing plan that allowed me to host multiple projects. I'd already been using Vercel to host a few of my other projects so the decision felt like an obvious one. Plus, they had a great reputation for being reliable and offering excellent customer service, so I knew that I would be in good hands when I chose them for my hosting needs.

### GitHub

I already use GitHub for my personal open source projects, for Appwrite, and for many other projects in the past, so it was an obvious choice to host the code for this project too. It has a great user interface, plenty of features to make sure my code is secure.

## Development

Once the tech stack was decided, now came the fun part, to develop. I love the challenge of building something from the ground up, as it gives me the opportunity to explore various technologies and expand my knowledge. It's an incredibly rewarding experience to be able to take an idea and bring it to life, watching it evolve from a concept to a fully-fledged product. The satisfaction I get from crafting something from nothing is one of the reasons why I'm so passionate about coding.

### Appwrite Setup

I started by setting up Appwrite, I created two projects, one for development mode and one for production mode so that I could break things once I deployed the website. Then in the development I setup the collections and attributes required for storing the videos. The I used Appwrite CLI to initialize those collections into `appwrite.json` then just by changing the project ID in the `appwrite.json` file, I deployed the same collection structure to the production project as well.

### Automating Getting New Videos from Favorite Channels

First I initialized a Appwrite Cloud function using Node JS and then implemented the functionality that will, given the channel ID get the details of latest videos from the channel and add it to my collection. I used the RSS feed provided by YouTube to get the video details. Once it was tested, I deployed the function in the Appwrite and scheduled it to run every 24 hours. I also used the MD5 of video ID as the actual document ID in the Appwrite collection, so that there would not be any duplicates. There were several hiccups, and I even managed to find a bug that was not easily reproducible in Appwrite cloud functions and Appwrite team quickly managed to solve it. Finally I got the function working and videos were added to the database and kept as draft. Next I would need to develop and admin functionality where I could edit the details and publish the videos or remove the ones I didn’t like.

### The Website

Next, first thing I built was website to display those videos, and for the style, I chose the existing style of ReactBits, which was minimal and easy. I used custom CSS and not framework for styling. With multiple trial and error I managed to get the content listing working, pagination working and video player working. I use only two extra dependencies apart from those required by svelte kit.

- [Appwrite SDK](https://www.npmjs.com/package/appwrite) for communicating with Appwrite server
- [plyr](https://plyr.io/) for video player for YouTube videos

### Admin Panel

I wanted to have the admin panel, but not deploy it along side the website so that I can use it only locally and may be deploy in separate project, right now it’s not even polished. So I used a hack, by using a environment variable, if the variable `APP_MODE` is set to `admin` I would use the svelte kit config to use a separate directory for routes and if the `APP_MODE` was empty or set to anything else than `admin` it would use another directory which would only have the public website. And for admin mode I wanted both the public site to see the demo in effect and the admin panel so that the admin modes route directory included both public and admin routes. The admin panel at the moment is very simple, it lists all the videos, allows me to query by status. Then I can edit, update the details and publish the videos. Finally in the admin, I also wanted to add a single video so that whenever I came across a great video I could go and add the particular video. For this I added a field where I would paste the ID of the video I liked then using the YouTube API, would fetch the details of the video and populate the form. Then I could update the details and save it to my database and publish it.

### Deployment

As the source code was hosted in GitHub, I was able to quickly link the repository to my Vercel account and deploy it. Assigned my domain to the production deployment and that’s it. It was live in couple of minutes, with every push to main deploying to production and every other PR being deployed in development mode where I could easily test the progress.

## Conclusion

It took me around one week, working part time after office and not sacrificing my family time much, to get it a working condition. You can view it live right now at [https://reactbits.com](https://reactbits.com). I have already started curating my favorite videos on various topics. I hope you will like the website and find the content useful. Overall the experience of developing with Appwrite and Svelte Kit and finally deploying to Vercel was so smooth that I’m already planning couple of more side projects.