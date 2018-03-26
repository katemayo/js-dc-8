# Events

## Learning Objectives
- Explain what a DOM event is and why it’s important for building interactive web pages
- Discuss the “event driven” paradigm and explain how it differs from our previous programs
- Define an “event listener” and explain its purpose
- Explain when in the lifecycle of an element we should add listeners 
- Describe the role of jQuery and how it makes DOM manipulation easier
- Explain how to stop the default behavior of an event
- Explain what event propagation is and how it affects handler lifecycle


## Introduction to Events
Goals:
  - introduce events and event types
  - talk about the most important/common events
  - discuss the event object


### Event Driven Development
- paradigm - way of approaching the construction of software
- in this case, event driven development means that user events determine the flow of the program
- events are typically user actions, but can also be sensor readings and output or messages from other programs
- event driven development is a dominant paradigm in JS application development
  - most often concerned with building out an application that is going to respond to user input
  - your War lab is a great example of event driven development, sort of
  - caveat is that we didn't need user input at each step in the loop
  - that is a refactor we could do that would make them even more event driven


### Event Types

Event Types:
Document: Events emitted by the `document` object
Window  : Events emitted by the `window` object
Mouse   : Events emitted from the mouse
Key     : Key press events (i.e. from they keyboard)
Form    : Form events (like `change` or `submit`)

- Going to dig in to a lot of these



### Specific Events

#### Document / Window Events
- load
- resize
- scroll
- unload

#### Mouse Events
- click
- dblclick
- mouseenter
- mouseleave

#### Key Events
- keypress
- keydown
- keyup

#### Form Events
- submit
- change
- focus


### Exercise 01
- learn about `document.onreadystatechange` and `window.onload`
- write the function that we want to be called when the event is triggered
- these events are part of objects that the browser gives us - they're built in
- we're providing the handler
- these events get fired whether we do anything with them or not, last class we didn't do anything with them
- what about attaching an event to an element, in addition to the event handler itself?


### Creating Event Listeners
Goals:
  - describe what an event listener is
  - create event listeners in JS for most common event types

Two ways of adding an event listener to an element:
- event specific function on the element object
- `addEventListener` function

Event Specific:
`someElement.onclick = function() { ... }`

Using `addEventListener`:
`someElement.addEventListener("click", eventHandler, false )`


### Exercise 02
Build out a basic counter by responding to events

### Exercise 03
Learn about the event object

### The Event Object
- stopping default behavior
- `stopPropagation()`

### Review: Anatomy of an Event Handler
