---
slug: intro-to-linux-command-line
title: Introduction to Linux Command Line
tags: [linux, command-line]
---

Linux is famous for its command line. Everything can be done with the help of commands, which makes it very easy to automate things by writing a script that combines these commands to carry out multiple actions. This makes linux very essential for developers, security analysts, data analysts or anyone in technology field. So in this article we will learn the basics of linux command line. To continue with this you will need to access to a unix system. These commands work on macos terminals, Windows Subsystem Linux terminals and any linux distribution terminals. So Let's get started.

<!-- truncate -->

## Basic commands

Let's start by going through some of the basic commands that you can use in unix terminal.

### Cal
The **cal** command is used to display the calendar of the current month in your terminal. It displays the calendar of the current month highlighting the current date.

```bash
$ cal
```

```
   September 2021
Su Mo Tu We Th Fr Sa
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30
```

### Date

The **date** command is used to display the current date and time details.

```bash
$ date
```

```
Mon Sep 27 06:47:07 +0545 2021
```

### PWD

The **pwd** or (print working directory) command is used to print name of the present working directory active in the command line.

```bash
$ pwd
```

```
/home/dl
```

### Man

The **man** command gives the manual of the any command specified after it.

```bash
$ man pwd
```

This command will give us the manual of the **pwd** command. Which has few options

```
PWD(1)                    BSD General Commands Manual                   PWD(1)

NAME
     pwd -- return working directory name

SYNOPSIS
     pwd [-L | -P]

DESCRIPTION
     The pwd utility writes the absolute pathname of the current working directory to the standard output.

     Some shells may provide a builtin pwd command which is similar or identical to this utility.  Consult the
     builtin(1) manual page.

     The options are as follows:

     -L      Display the logical current working directory.

     -P      Display the physical current working directory (all symbolic links resolved).

     If no options are specified, the -L option is assumed.
```

### CD

The **cd** or change directory is used to change the directory in command line. When we know where we are using **pwd** command we can go to other directory using **cd** command.

```bash
$ cd /home
$ pwd
```

```
/home
```

Here, we changed to */home* directory and when we used **pwd** command, we could see that */home* was our current directory. Wherever we go, we can use the **pwd** command to check where we are in the command line.

### Exit

The **exit** command is used to terminate the terminal session. It is always a good practice to end the session once you are done using the terminal.

```bash
$ exit
```

> **Note**: <br />
> You can use the UP and DOWN arrow keys to navigate the command line history. <br />
> You can use LEFT and RIGHT arrow keys to navigate withing the current command to modify it as required

### Echo

The **echo** command is used to print message in the terminal. It prints any string passed to it

```bash
$ echo "Namaste, World"
```

```
Namaste, World
```

### Mkdir

The **mkdir** command is used to create directories

```bash
$ mkdir src
```

This will create a new *src* directory in the current directory. We can use the **-v** option to get the message that the directory was created.

```bash
$ mkdir -v bin
```

```
mkdir: created directory 'bin'
```

### Ls

The **ls** command is used to list the files and directories in the current directory

```
$ ls
```

```
src    bin
```

We can also verify that **mkdir** command successfully created new directory by using **ls** command. We can also pass a path as argument to the **ls** command to list the contents of any directory

```bash
$ ls /home/dl
```

This will display the contents of */home/dl* instead of current directory.

> **Note**: To learn more about any command you can use the **man** command we discussed above

### Less

The **less** command is used to view the contents of a text file.

```bash
$ less /path/to/text/file.txt
```

This will display the contents of the text file. If the content doesn't fit on the terminal screen, we can use the *space* to move forward and *b* to move backwards. We can then use the **q** key to exit the less and get back to the terminal. We can also use **-N** flag to enable the display of line numbers while viewing the text file.

In this article we learned the basics of Linux command line. We will have more articles to cover more on Linux and linux command line. I hope you enjoyed this article. Thank you 🙏

## References

- [Linux Command Line Full Course](https://www.youtube.com/watch?v=2PGnYjbYuUo)
