---
slug: very-simple-introduction-to-git-and-github
title: A very simple introduction to Git and GitHub
# author: Damodar Lohani
# author_title: Web and Mobile Developer
# author_url: https://github.com/lohanidamodar
# author_image_url: https://avatars1.githubusercontent.com/u/6360216?s=460&u=ccf757cc3aece5b674460c4909b4a77e1d5b6a19&v=4
tags: [git, github]
---

If you are a developer or planning to become a developer, you not only need to learn to code, but also learn some more tools and trades in the industry. One of those tools is the Git and GitHub. In this article we will learn about Git and GitHub. This is targeted towards someone who has little to no knowledge of Git and GitHub. To properly understand the concepts and follow the tutorial you will need to have the basic concepts of your operating system, files, directories and some basics of command line.

<!-- truncate -->

## What is Git?

So what is Git? Git is a distributed version control system. Sounds like something huge right? Once you start learning and understanding the basics, git is very simple and very useful. Git is a crucial software in modern day information technology world to maintain a healthy codebase for all kinds of IT resources. So to understand git, let us understand what version and version control means. When you have a document in certain state and you make a modification to it, you get a new version of your document. If you later want to go back to later state, you need to save a backup of the old version before the modification. This is where the version control system comes in. With version control, we can keep a copy of as many versions of our documents. Keep making modifications and roll back to any version of the document at any time. So in version control all you do is, you have a document, you edit and save. And again, you edit and save. This goes on until you are satisfied or you roll back to pervious version. Git helps us track the changes we make to our files, so we have a history of changes. Git also allows collaboration easier as it allows merging changes from multiple people into one source. 

## Why do we need Git?

Git has two important features, tracking changes and facilitate collaboration by allowing changes from multiple people to be merged into single source. This makes git specially important for software development process. It allows us to track what changes were made by whom in our source code. It also allows us to rollback to previous changes if at any time we are not satisfied with the current state of our source code. It also allows multiple people to work on same source code making multiple changes and later bringing those together.

## Basic Terms

Before moving on to learn more about git and how to use git, let us learn some terms related to it. A git **Repository** or **repo** contains all the project files and the entire revision history for the project. We can take any ordinary folder on our computer and turn it into git repository using the git software. This creates a **.git** subfolder in our project folder that contains all the metadata required for tracking changes.

So, once we create a repository to track changes, how do we tell git to record our change? Each recorded change to a file or a set of files is called a commit. The way we tell git to record change consists of two steps. Once we make changes, first we tell git to stage the changed files and then we commit telling git to record those changes.

And, a remote repository is a copy of our local repository stored with an online host like GitHub or Bitbucket or other similar. Storing our repository with remote host allows us to upload our local changes as well as download changes uploaded by others. This makes collaboration between developers much easier. Each of us from a team can upload changes to remote repository and can also download changes uploaded by others. This process of upload and downloading changes from remote repository is called pushing and pulling.

## What is GitHub?

GitHub is one of the popular remote repository hosting service provider. It is even more popular among open source software projects. It facilitates collaboration between thousands of developers working on a same project using git to bring each others changes to a single project. We can use git without GitHub, locally. However, GitHub facilitates remote collaboration. GitHub hosts repositories for millions of softwares and developers. And above all, it's basic and important features are free to use for everyone. Services like GitHub makes it easy to share our code and allows multiple people to collaborate on a same project seamlessly. These platforms provide other services like integration with CI/CD systems to run automated tests, automated deployment or all sorts of automation pipeline for our projects. These also provide additional features like issues, merge requests, user and permission management to allow collaboration in much more aspect and help manage the project development a lot easily.

## Getting Started

In order to continue with this tutorial, you first need to [install git](https://git-scm.com/downloads) in your system and create a GitHub account by going to [GitHub.com](https://github.com). Once you have installed git and created GitHub account, you can now continue with the following sections to learn the basics of git and GitHub.

### Starting a git project

In order to create a new git project, from our terminal line (if you are on Windows, use git bash) let's nagivate to a directory where we create our project. There let's create a new folder `first_git_repo`. This will be our very first git repository. Once the folder is created, we initiate  a new git project in the folder. First navigate to newly created folder and run the following command

```bash
git init
```

Here we go, we ran our first git command 👏. The init command initializes a new git repository on whichever directory it is ran.

### First commit

Now that we have a git repository, we can make changes and record the version history of our changes. So let's start by creating a new file. Inside our `first_git_repo` let us create a new text file and name it `readme.md`. You can do this using your favorite text editor. Let us now open the file in our text editor and there type some information as the following and save the file.

```md
# Our First Git Project

This is our first git project. And we are making our first commit.
```

Now in order to record our change, we need to commit it. As stated earlier it has two steps, staging and committing. So let's do it. From our command line, navigate to our project folder and first run the following command to stage the change.

```bash
git add readme.md
```

This command will stage the changes made in `readme.md` file ready to commit. We can stage multiple files to be committed in a single commit. Now in order to record the change, let's run the following command

```bash
git commit -m "first commit"
```

We did it. We, committed our first change 👏. Each commit needs a commit message telling what change we made. It's like a title given to our commit history. We can continue to make change and commit.

### Assignment

Add few more lines to the `readme.md` and create another commit.

### Creating a repo in GitHub

Login to GitHub and click on the plus icon at the top navigation and in the drop down select **New repository**. In the repository name text box, type **first_git_repo**. Below you can see more options like whether to make the repository public (accessible to everyone) or private (accessible to only account owner). Finally press on the **Create repository** button at the bottom. This will create a project and we will be redirected to the newly created repository page.

### Adding remote

Once we have a repository in GitHub, we need to link our local git repository to the GitHub repository we just created. This is the process of adding remote. In order to add remote we use the following command, still in our project directory in command line

```bash
git remote add origin git@github.com:<username>/<repo_name>
```

Here, we are using the `remote` sub command to add new remote named `origin` and link of the repository we just created. We can get the link from the repository page we were navigated to in the previous step. We are using SSH based URL as GitHub has stopped username/password based authentication. For this we need to setup SSH access to GitHub. You the [official documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh) to setup SSH access.

### Pushing Local Changes

Once we have linked the local and the remote repository, we can push our local changes. We can do that simply by running following command

```bash
git push origin <main_branch>
```

Here, we are pushing our local changes to the remote we just added above, we named the remote origin so we are pushing to origin. We could add multiple remotes each with different name and push to different remote repositories. The main branch used to be master, and might be main.

## References

- <https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners>
- <https://www.nobledesktop.com/learn/git/what-is-git>
- <https://www.coursera.org/learn/introduction-git-github>