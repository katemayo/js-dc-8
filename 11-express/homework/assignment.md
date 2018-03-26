# Assignment

1. 99 Bottles of Beer

Build an express application that enables users to count down the number
of bottles of beer.

## Specs

- On the home page (`get "/"`), users should see:
  - "99 Bottles of beer on the wall"
  - a link that says "take one down, pass it around"
  - this should link to `/98`, where the number represents the number of bottles left.
- When a number is given in the url (`get "/:number_of_bottles"`), users should see:
  - number of bottles "Bottles of beer on the wall"
  - a link to "take one down, pass it around", where the href is number of bottles minus 1.
- If there are 0 bottles left, do not show a link to "take one down"
  - Add a link to start over, which directs the user back to the home page.

2. [Express in Action](https://www.manning.com/books/express-in-action) is a great book about Express and how to use it. Chapter 3 Foundations of Express, is available for free as a sample. Please read Chapter 3 before next class and follow along with the exercises in this folder, except the Guestbook exercise at the end of the chapter (we'll do that one together in class). Submit the code for the exercises by the start of next class.

# Express Documentation and Examples ( Bonus / Optional )
For extra context or information, review the documentation on [Express](http://expressjs.com/) (it's some of the best documentation out there!).

Additionally, the Express GitHub Repo contains a number of simple example applications built using Express. Read through the code of these [here](https://github.com/expressjs/express/tree/master/examples).
