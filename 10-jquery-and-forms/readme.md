# Working with Forms

## Learning Objectives
- Explain the anatomy of a form and list the different types of elements within it
- Explain what the default behavior of a form is without any JavaScript applied to it
- Be able to stop the default behavior of a form submission
- Explain what the event object is and what information it carries
- Explain the role of jQuery (and similar libraries) in helping to query and manipulate the DOM
- List some of the different event types that are specific to forms and inputs
- Explain what query parameters are and how they work

## Working with Forms (6:45)
- Why are forms so vital to the web?
- What are some difficulties in dealing with forms on the web?

### Anatomy of a form (7:00)
  - Form tag
    - action and method attributes
  - Input types
    - Text
    - Password
    - Checkbox
    - Radio
    - Button
    - File
    - Submit
    - Hidden
    - Search
    - Number
    - Color
    - Date
  - Other form elements
    - Textarea
    - Select

### Default form behavior (7:15)
  - defaults to `GET` method and action is the same page
  - when a form is 'submitted', it sends the form data to the action URL and requests a new page at that URL - meaning our page goes away

**BREAK** (7:30)

### Query Parameters (7:35)
- As we said, the default behavior of a form is to submit a `GET` request. `GET` requests submit the data from forms via query parameters, which are part of the URL of the page
- Query params are serialized key/value pairs - structured data that is stored in a way that can be decoded by programs for later use. In the case of query params, they always begin with a `?` character and are separated by `&` symbols. The key/value pairs themselves are separated by the `=` sign.
- Query params allow users to send along custom inputs to webpages, so that programs (both client and server side) can decode the inputs and use them to produce different output on the page
- Think of query parameters like arguments to functions, but instead of sending an argument to a single function, we're sending arguments to the entire webpage

### Form Events (7:55)
  - oftentimes, we don't want the current page to go away - we just want to "submit" a form, but stay on the current page and work with the values on the page
  - to achieve this, we need to take a look at the `event` object
    - Using `event.preventDefault()`
  - Other Events:
    - Submit
    - Change
    - Focus/Blur

**BREAK** (8:20)

### jQuery (8:25)
- What is jQuery?
- How can we replace all the DOM logic we have currently with jQuery?
- What else does jQuery offer? (`empty`, `append`, `prepend`, etc.)


**DOG SEARCH EXERCISE** (8:45)
