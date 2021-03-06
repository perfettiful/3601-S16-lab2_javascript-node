#Lab Tasks

For lab tasks from here on out, questions that require exploration and responding to on this markdown page will be in bolded text. You should respond to them directly within this markdown file. Markdown is effectively a plaintext, lighweight markup language that is designed to be converted into HTML; more simply, it's some text and symbols you can put into a document that will turn into pretty HTML.
Tasks that specify work to do without a written response will be bulleted.
If you're ever confused about what you need to do for a given task, ask.

## Part #1: exploring the node.js project
Study the project you have cloned. Run it according to the instrucitons in the README, including running the tests. Answer the following questions by editing this file.  This will give you a chance to play with markdown.

> Protip: Using Google to gain additional knowledge or support your conjectures about how something works is great! It's important that you think about everything and come to an understanding, though, so don't use Google as a scapegoat to get the questions done quickly or you will regret it!

#####What is the purpose of app.js? Explain what happens when a user is trying to access a page "kittens", when a user is trying to access the page "petForm", and when the user submits a form on "petForm". Explain what a "route" is.

> The purpose of app.js is provide routing specifications to user webpage requests. When accessing "kittens" users are directed to a page with the message Page under construction!, when accessing "petForm" users arrive at a webpage with a javascript text submission box, and with "petForm" users submit the string of their pets name to the node app.js. A route is a set of instructions for how we want the server to satisfy a certain get request for all the different part or pages of our website. For example, actually send them a page, send them a message, or an error message.

#####What is the contents of the "public" folder? What is each of the html files there and how are they referenced in app.js?

> The contents of the "public" folder are the files available to anyone through source code inquiry on their web browser. Each one of our html files is in public (about, index and petform), and they are reference in app.js as extensions to the web address in the form "/x.html".

#####In your project change the message that appears when the user is trying to access the page "kittens". Describe what you did and how it worked.

> We changed the message that would appear when someone clicked the link KITTENS, from a construction message to a silly message.

#####Also change the message that a user sees when they are trying to find a page that doesn't exist.

#####Describe what happens when you submit a form on petForm page. What are the form parameters in petForm? What is the method for the form? Where is the form submission handled in the project? How are parameters extracted? How is the resulting message generated? How is this different from accessing the page petForm the first time (to see the form)?

> When a user submits a petname, the node server which is listening receives the string that they sent. 
>method and action are parameters for the html form.
>the forms method is post
>form submissionj is handled in app.post() in app.js
>with the fuction arguments req and res
>with console.log()
>


#####Where is client-side Javascript defined? Name file(s) in which it is used.

> clientJavascript.js

#####Where is server-side Javascript helper file defined? Where can it be used? Add a function to it and experiment with where you can call this function.
> serverJavascript.js. It can be used in the app.js. We added calcPetAge function to serverJavascript.js to replace stringLength.

#####What is the purpose of package.json file? What's in it, and what does it mean?
>package.json provides information about the project including its name, version, owner, license, and which programs it requires to work. Our project depends on Jasmine and Karma to perform its tests, and Node as a server.

#####What's in .gitignore file? What's the purpose of it?
>.idea/*
node_modules/*
coverage/*
 The file tells the git version control system which files to ignore when sharing or updating. In our case node_modules is the file to be ignore in version controlling because it is transient. 

## Part #2: exploring testing

#####Find the testing file, describe where it is located and what it is testing. Run karma (the testing engine) as specified in the Readme and describe results. Do not edit any files at this time.

#####After having set up Travis CI with your forked project, play around the page for your project (build history, settings, branches, etc) and describe at least 3 features you think would be useful when troubleshooting a broken project.
> 1) Under Build History one can see after each push the build status 2) For a current build we can literally see what was executed in the terminal 3) We can also see the build statuses of all and any branch of a repo.

#####What was the build status of your project right after you got everything set up? Use Travis to find any problems, and describe what failed, if anything. (Which files, what lines, why did failure occur, etc.)

>After ours was set up initially it was in a failed state. The 3rd test was set up to fail beacue its expectation were incongruent to what was the name of the hyperlink in the index.html. We have since corrected this. 

#####Fix any problems described in the previous question. Describe how you fixed them. Push your fix to GitHub and post a link to the passing build (from build history) here.
> On the thrid test, the expectation statement didnt match the return statement for the returnKittens() function it was testing.
(https://travis-ci.org/perfettiful/3601-S16-lab2_javascript-node)

- Study jasmine testing syntax. Think of a Javascript function, describe its behavior by writing tests for it (this is test-driven development, or TDD). Add the function, run the tests. (Actually do this. Don't forget to commit your changes!)
- 
> Done!

## Part #3: adding a GPA calculator

- Add a page to the project (don't forget to add it to git) that has a form for letter grades and credits for three classes.

- In TDD fashion, add tests for functions needed to compute the GPA and then implement the functions themselves. Note, however, that karma doesn't work with exports, so after you have tested the functions, you would need to create copies of them that you are exporting. This is awkward and will be fixed in subsequent node setups. Also make sure to add the file that you are testing to karma.conf.js.

- Add a route to app.js to display the GPA on the resulting page.

- Add the basic html to the send so that the GPA is displayed as an html page. Don't add too much: later we will be using various libraries to take care of generating html.

- As you are working, don't forget to change drivers in pair-programming, practice TDD, write comments, and make frequent commits. As before, at the end just push all the changes to github.

