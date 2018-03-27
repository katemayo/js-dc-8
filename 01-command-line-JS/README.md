# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Command line (2:45)

| Timing | Type |Topic|
| --- | --- | --- |
| 20 min | [Opening](#opening) | JavaScript & Web Technology |
| 45 min | [Codealong](#codealong1) | Introduction to the Terminal|
| 60 min | [Codealong](#codealong2)  | Introduction to Git/GitHub  |
| 30 min | [Codealong](#codealong3)  | JS in the Terminal with Node |
| 10 min | [Conclusion](#conclusion)| Final Questions & Exit Tickets |

### Learning Objectives

- Use the most common commands to navigate and modify files / directories via the terminal window.
- Initialize a local Git repository and push/pull changes to a remote Git repository.
- Run basic JavaScript script on the command line using Node.

### Preparation
*Before this lesson, students should already be able to:*

- Summarize the client-server model and explain how a DNS Lookup works.
- Installing and configuring Node.js, npm, Git, and other command line tools.
- Writing pseudocode and think programmatically.
- Using HTML and CSS to create static Web pages.

>Note: In the last class, students set their computers up with command line tools like Git and Node, and they worked on a pseudocode exercise. Check to make sure everyone understands the materials covered in the last class and has their command line utilities installed and configured.

---
<a name="opening"></a>
## JS & Web Tech (20 min)

#### What Can JavaScript Do?

* JavaScript is used mostly to add interactive elements like animations, buttons, and user input forms to the front-end. Increasingly, however, it is also being used to interact with APIs and databases and to perform back-end tasks.
* JavaScript has very few steps to run. You can add Javascript directly to HTML and it will run in your browser. You can also run Javascript in node.js by giving it a file containing your code.
* JavaScript works on users’ computers even when they are offline.
* JavaScript allows you to create highly responsive interfaces that improve the user experience and provide dynamic functionality, without the need to wait for the server to react and show another page.
* JavaScript can load content into the document if and when the user needs it, without the need to reload the entire page. This is commonly referred to as Ajax.
* JavaScript can determine your browser’s functional limitations and react accordingly. This is referred to as principles of _unobtrusive JavaScript_, or _progressive enhancement_.
* JavaScript can power website backends, scripts, and even physical devices thanks to node.js

#### The Downside of JavaScript

* JavaScript can be functionally flaky because the environment in which it operates is unknown: You don’t know the capabilities of computer on the receiving end of your Web page, you don’t know how busy the computer is with other functions, and you don’t know if JavaScript open in another tab of the browser is affecting the computer’s functionality.
* JavaScript (or some of its functions) is occasionally turned off in browsers for security purposes or because it is often used for annoying pop-windows or intrusive advertising.

Citation: [W3C](https://www.w3.org/community/Webed/wiki/What_can_you_do_with_JavaScript)

#### Node.js

>Note: Students should be made aware that we will be using Node during Unit 1 so we can run JavaScript on the command line. This will allow us to learn the fundamentals of programming and the syntax of JavaScript without the distractions of the browser.

We will be using node.js to interpret JS code in the class. Here's a bit more about Node.js.

The makers of Node.js made JavaScript (which normally runs only in the browser) available on the server side (and on your computer!). This allows you to build fast, scalable APIs and sites in JavaScript. JavaScript is already immensely popular; being able to use it on the back-end adds the option of using a single programming language throughout an entire full-stack application.

All this is helpful to engineers because it results in less context switching. Switching between JavaScript, HTML, CSS, and a back-end language (Ruby, Python, PHP, Java, etc.) is time consuming. Using a single language increases efficiency by cutting out all the back and forth.

Additionally, Javascript is designed to be event-driven and asynchronous. While other languages can perform only one task at a time, Javascript can send nearly everything to the background and keeps going.

Imagine a newspaper delivery boy stopping at each house, throwing the paper on the doorstep, and waiting to make sure the person comes out to pick it up before he moves on to the next house. That’s what we call blocking: each line of code finishes before moving on to the next line of code.

Think of it this way: A paperboy throws a newspaper on your porch and immediately moves on to the next house, and so on. By the time you pick your paper, he’s already  several houses up the street. This is non-blocking, or asynchronous—and it’s what makes Node so powerful.


#### Frameworks

> Note: Due to the increasing popularity of front-end frameworks, many students will wonder when they will be learning Angular, React, Ember, etc. The purpose of this section is to set clear expectations for what will be covered in the course and why. Toward the end of the course, you will have an opportunity to teach [an intro lesson on a JS framework of your choice](../16-instructor-student-choice/readme.md). We recommend you mention this now to give students who are excited about frameworks something to look forward to.

* As with all programming languages, several frameworks and libraries are available that extend JavaScript's native capabilities. In this class, we won't be using frameworks. We will however be learning a popular JS libarary, jQuery, and a templating engine called Handlebars.

* Recent years have seen the development of frameworks that brings the MVC (Model View Controller) concept from back-end languages to front-end JavaScript. Angular, React, Ember, and Backbone are some of the more popular ones.

* These frameworks are very powerful; they're also highly complex and technical. In order to leverage these  frameworks, you will need to have to have a solid working knowledge of the fundamentals of JavaScript, APIs, the DOM, and the browser. The majority of this class will focus on these fundamentals; as the class proceeds, we will  introduce you to more advanced frameworks and concepts like the MVC model.

* The world of frameworks is evolving at a rapid pace. More important than knowledge of any one framework is an ability to learn new tools quickly. The JavaScript skills you learn in this class will provide the foundation you need to work with any framework or library more easily.

---
<a name="codealong1"></a>

## Introduction to the Terminal (45 min)

We learned how to execute some scripts on the command line during Installfest. You will soon find that the command line is the heart of your operating system. Almost anything you can do from a GUI (Graphical User Interface), you can also do from the command line, but FASTER! We'll learn how to navigate computer files and folders using the terminal; this will help us begin pushing our projects to GitHub.  

#### Command Line Basics

Here are some important UNIX commands to know as you're working on the terminal.


| Command | Description | Command| Description |
| --- | --- | --- | --- |
| `ls` | **L**i**s**t the contents of the directory | `subl` | Open sublime text|
| `cd` | **C**hange **d**irectories| `pwd`| **P**rint **w**orking **d**irectory |
| `mkdir` | **M**a**k**e **dir**ectory | `say`| Make your computer talk |
| `rmdir` | **R**e**m**ove empty **dir**ectories  | `open`| Open a particular file in their default application|
| `rm` | **R**e**m**ove files or directories | `./`  | The current folder|
| `touch` | Create an empty file | `../`| One folder above your current working directory
| `echo` | Return a string |  `~/` | The home folder  |

#### Command Line Codealong

**For Macs**:
  * Open the "Terminal" app (Applications > Utilities > Terminal)
  * Optionally, download and install [iTerm 2](https://www.iterm2.com/), which is a replacement for the terminal app that is more configurable.

**For Windows**:
 * Open the "Command Prompt" application.
 * For a better experience, try [Console](http://sourceforge.net/projects/console/).


**Get familiar with the basic commands on the terminal!**


1.  Navigate to your Documents Folder from your Root Directory. ```cd ~``` and then ```cd Documents```

2. Create a directory named Advanced_JS.  ```mkdir Advanced_JS```

3. Change into this directory. ```cd Advanced_JS```

4. Create a file named "index.html" using the touch command. ```touch index.html```

5. Demonstrate how to open "index.html" in Sublime Text from the terminal. ```subl```

6. Have students set up Sublime for their working environment. (Show them the open files side bar.)

7. Using HTML comments, type "This is how you should take notes in class." Some students will need a refresher on how to write HTML comments (i.e., `<!-- comment -->`). Briefly explain comments and let students know we will be covering comments in greater depth during the next lesson.

8. Create an empty directory within the Advanced JS folder and remove it. ```mkdir test_folder ``` and ```rmdir test_folder ```

>Note: Be sure to explain each command while students code along. Switch back to the finder often, so students can make the connection between how the GUI and CLI function.

#### More Independent Practice

Complete the following instructions below in the Terminal application.

1. Create a folder in your ~/Sites/ folder titled goals.

2. Once inside that folder, create three empty files:
  - goals.html
  - worries.html
  - index.html

3. Open Sublime Text, click File > Open and navigate to your newly created ~/Sites/goals folder.
In the respective files (goals.html and worries.html), write your top three goals and top three worries for this course.

4. Paste the following contents into index.html:

  ```javascript
  <html>
  <head></head>
  <body>
    <a href="goals.html"><img src="http://i.imgur.com/dosK05U.gif" /></a>
    <br>
    <a href="worries.html"><img src="http://i.imgur.com/2s0HwpM.gif" /></a>
  </body>
  </html>
  ```

5. Open index.html with your browser and make sure you see your goals and worries.

---

<a name="codealong2"></a>
## Introduction to Git/GitHub (40 min)

#### What is Git?

Git is a tool that:
* Primarily stores code, but can also store files, like Dropbox or Google Drive
* Maintains each file’s history, including all document changes (like Apple's Time Machine software)
* Is now commonplace in any company that employs engineers

#### Why is Git So Popular with Developers?

* Because Git stores a history of the code, it allows developers to “go back in time” if something breaks
* Git tracks changes so you can see who worked on what

#### What is GitHub?
GitHub is a platform that:
* Facilitates the sharing and managing of code, making it easy for multiple engineers to collaborate on the same project.
* Hosts files on the Web so you can share the finished product with other people

We setup our GitHub account and _SSH Key_ in the last lesson.

#### Why is GitHub So Popular with Developers?

* Much like Dropbox or Google Drive lets multiple people collaborate on the same document; GitHub allows this for code
* GitHub allows team members to provide feedback on the code, which potentially increases code quality

#### How Does GitHub Work in a Collaborative Environment?

GitHub's collaborative process can work many different ways, but this is the most common:

1. Each GitHub project has a Git _repository_, or _repo_. Engineers joining a team start by "cloning" the repo. That is, they copy the Git repo from GitHub's cloud and save it in a local folder.
2. The main, stable version of the codebase is on the default "branch" in Git, which is called `master`.
- Engineers typically create new branches for certain features or portions of the code they will work on, but we won't be creating branches in this class.
3. As engineers work on a project, they "add" and "commit" their changes. This establishes a saved version of a project and creates a history of the previous iteration. With these saved versions, engineers are able to revert to an earlier version if an issue arises that cannot be fixed.
4. If multiple engineers are working on a project, other engineers can review the committed code and provide feedback. For this class, the instructors will be reviewing and providing feedback on your code.
- We will be working with our own default `master` branch for each of our projects.

#### Git/GitHub Vocabulary

* **Git** - A version control program that saves the state of your project's files and folders; It takes a "snapshot" of what all your files look like at that moment and stores a reference to that "snapshot".

>Note: You may want to compare Git to an organizational backup tool used to save and organize work; be mindful of your students' experience and try not to use too much technical vocabulary.

* **Repository** - A central location in which data—typically project-related—is stored and managed
* **Clone** - To download data from the cloud to your local machine (laptop, computer, etc.)
* **Commit** - To save a version of your project to Git

>Note: We suggest you draw a diagram and explain what happens when you push/pull and stage a commit. Make sure students understand that changes first need to be added and then committed before they can be pushed. Remember to explain the differences between your local working repository vs. what is on GitHub. And don’t forget to review the vocabulary!

### GitHub Exercise

In this codealong, students will create their first GitHub repository and push to it.

>Note: The instructional team should walk the room and help any students who get stuck during this codealong. This will be many students’ first time using the terminal for an extended period, so proceed slowly, make sure they understand their tasks, and take time to explain anything that’s not clear.

**Creating and pushing to your first repository**

  >Note: During this stage of the codealong, the instructional team should also explain what each component of each command means (i.e., the "." or "origin").

1. Create a new repository on github.com titled "username.github.io" (where "username" is your GitHub username).
2. ```cd``` into your ```~/Sites``` folder.
3. Clone the repository (hint: GitHub tells you how to do this with Git clone ... on the newly created repository page).
4. ```cd``` into your ```~/Sites/username.github.io``` folder.
5. Move the files from your "goals" folder from the previous exercise into your ```~/Sites/username.github.io``` folder.
6. Add all files in the ```~/Sites/username.github.io``` folder to the Git stage.
7. Commit your changes in Git with the message "Initial commit."
8. Push your changes to GitHub and verify that the changes were received in the Web interface
9. Try visiting https://username.github.io/goals (where "username" is your actual GitHub username)

  > Note: This exercise can require helping students on lots of small, fiddly
  > points such as using HTTPS vs SSH (they should use SSH as we set that up
  > last lesson), accidentally initializing a respository with a `README.md`
  > file requiring a `git push -f` to overwrite, etc.

  >Note: Many students will not have mastered GitHub, even after completing this exercise. Assure them that practice makes perfect and that we'll be using GitHub regularly throughout the course. We _highly recommend_ that you continue to demo the basic GitHub workflow in class. That is, after completing an exercise in class, push it up to GitHub.

---

<a name="codealong3"></a>
## JS in the Terminal (30 min)

You may be more familiar with JS in the browser, but in order to get used to working with the terminal—and thinking like a programmer—we’ll be using JS on the command line during the first unit of this class. Remember when we installed Node and npm? We'll be using these tools to make scripts run in the terminal.

### Executing a JS program: Codealong

Starting next class, we'll be creating our own JavaScript files and building out from it. Before we dive in, though, we need to explore the power of the terminal and run JavaScript inside of it.

The terminal is to a programmer what a Swiss Army knife is to a survivalist. It’s a multi-faceted tool that we will always be using to move our projects forward. And, for now, it helps us focus our learning. The computer has always had a text-only interface. Some of you may remember DOS or the early text-only games before complex graphical interfaces. The terminal is a tool from that era that professional developers still use every day.

> **Note:** The following exercise uses basic data types (variables and strings) unexperienced programming students will likely be unfamiliar with. We recommend that you quickly explain these data types as you lead this codealong and let students know we will be explaining these concepts in greater depth next class.

#### Part 1: Write and execute some code in a file!

1. In your working directory, start the Node console by typing in ```node```

2. Now we can type in some JavaScript and see what happens.
Let's start off with a classic programming exercise, printing 'Hello World'.

  ```javascript
  console.log('Hello World')
  ```

You should see Hello World printed. Underneath you will see that it outputs `undefined`. This means that after it has completed the output, there is no further value to return. We just wrote our first bit of Node / JavaScript!

3. Now we can take it to the next level. Let's drop in some variables:

  ```javascript
  var x = 5;
  var y = 2;
  ```

4. We can also print these variables to our console by typing ```console.log(x)```. We do not include quotes around variables like we do with 'Hello World'.

  > Note: Ask the class why this is the case and make sure they understand the difference between logging variables and strings as a precursor for the next lesson on datatypes. Students frequently get hung up on logging variables with quotes and strings without quotes.

#### Part 2: Let's do some basic math!

  1. What happens if you do:

    `x + y`

    or

    `y * 4`

  2. We can even update the variable like this:

    `x = 9`

  3. Now if we add x and y together we get a different result.

    `x + y`

  4. While this is only the tip of the iceberg, it starts to lay the foundation for us in terms of what we will be able to accomplish in the near future.

    To exit the console hit CTRL + c + c.

---
<a name="conclusion"></a>
## Conclusion (5 min)

#### Review

Make sure the lesson objectives have been met.

* Understand what GitHub does and why we'll be using it.
* Understand how we will be using Node in the class.

#### The Developer Mentality

Here are some tips that you'll want to keep in mind as you continue coding!

  * Choose the right OS, editors and tools for your projects. Remember to do your research.
  * Leverage the online community's vast libraries and documentation.
  * Be efficient: Use the keyboard as much as possible instead of the mouse.
  * If you find yourself doing the same thing repeatedly, automate it.

#### Further Resources

* [iTerm2](http://iterm2.com/)
* [Review Git](https://www.codeschool.com/courses/try-git)
