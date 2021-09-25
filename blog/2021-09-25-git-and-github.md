---
slug: very-simple-introduction-to-git-and-github
title: Easy Flutter Tutorial Series in Nepali
author: Damodar Lohani
author_title: Web and Mobile Developer
author_url: https://github.com/lohanidamodar
author_image_url: https://avatars1.githubusercontent.com/u/6360216?s=460&u=ccf757cc3aece5b674460c4909b4a77e1d5b6a19&v=4
tags: [flutter, nepali]
---

# A Very Simple Introduction to Git and GitHub

If you are a developer or planning to become a developer, you not only need to learn to code, but also learn some more tools and trades in the industry. One of those tools is the Git and GitHub. In this article we will learn about Git and GitHub. This is targeted towards someone who has little to no knowledge of Git and GitHub. To properly understand the concepts and follow the tutorial you will need to have the basic concepts of your operating system, files, directories and some basics of command line.

<!-- truncate -->

In this article we will learn the following concepts.

1. What is Git?
2. Why do we need Git?
3. What is GitHub?
4. Why do we need GitHub?
5. Getting started with Git
6. Getting started with GitHub
7. Basic Git Commands

## What is Git?

So what is Git? Git is a distributed version control system. Sounds like something huge right? Once you start learning and understanding the basics, git is very simple and very useful. So to understand git, let us understand what version and version control means. When you have a document in certain state and you make a modification to it, you get a new version of your document. If you later want to go back to later state, you need to save a backup of the old version before the modification. This is where the version control system comes in. With version control, we can keep a copy of as many versions of our documents. Keep making modifications and roll back to any version of the document at any time. So in version control all you do is, you have a document, you edit and save. And again, you edit and save. This goes on until you are satisfied or you roll back to pervious version. Git helps us track the changes we make to our files, so we have a history of changes. Git also allows collaboration easier as it allows merging changes from multiple people into one source. 

## Why do we need Git?

Git has two important features, tracking changes and facilitate collaboration by allowing changes from multiple people to be merged into single source. This makes git specially important for software development process. It allows us to track what changes were made by whom in our source code. It also allows us to rollback to previous changes if at any time we are not satisfied with the current state of our source code. It also allows multiple people to work on same source code making multiple changes and later bringing those together.

## Basic Terms

Before moving on to learn more about git and how to use git, let us learn some terms related to it. A git **Repository** or **repo** contains all the project files and the entire revision history for the project. We can take any ordinary folder on our computer and turn it into git repository using the git software. This creates a **.git** subfolder in our project folder that contains all the metadata required for tracking changes.

So, once we create a repository to track changes, how do we tell git to record our change? Each recorded change to a file or a set of files is called a commit. The way we tell git to record change consists of two steps. Once we make changes, first we tell git to stage the changed files and then we commit telling git to record those changes.

And, a remote repository is a copy of our local repository stored with an online host like GitHub or Bitbucket or other similar. Storing our repository with remote host allows us to upload our local changes as well as download changes uploaded by others. This makes collaboration between developers much easier. Each of us from a team can upload changes to remote repository and can also download changes uploaded by others. This process of upload and downloading changes from remote repository is called pushing and pulling.

## What is GitHub?

GitHub is one of the popular remote repository hosting service provider. It is even more popular among open source software projects. It facilitates collaboration between thousands of developers working on a same project using git to bring each others changes to a single project. We can use git without GitHub, locally. However, GitHub facilitates remote collaboration. GitHub hosts repositories for millions of softwares and developers. And above all, it's basic and important features are free to use for everyone.

## References

- <https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners>
- <https://www.nobledesktop.com/learn/git/what-is-git>
- <https://www.coursera.org/learn/introduction-git-github>