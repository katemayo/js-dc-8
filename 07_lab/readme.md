# War
You have been contracted to build a command line game that models the card game `War`.

## Overview
`War` is a very simple card game, played between two players. A deck of cards
is shuffled and divided evenly between the two players. Each player draws the
first card in their deck, and puts it down. The player who draws a card with a
higher score wins the round and collects both cards, putting them at the bottom
of their deck.

Gameplay continues in rounds, with each player drawing a card, the player who
draws the highest scoring card winning the round and collecting the cards.

If the players draw cards that have the same score, then `War` is declared: the
two players must continue to draw cards until one is declared a winner. The
winner then collects all cards that have been drawn and adds them to their deck.

Neither player is allowed to know what cards are in their deck at any given
time. Nor are players allowed to look at the cards in their deck.

A winner of the game is declared when they have all 52 cards in their deck and
the other player has none.

## Minimum requirements
Your game should start by running `node index.js` from the command line. The
two players should then each be prompted for their usernames. Gameplay should
then start and continue until a player wins.

Your program should print something to the console at each round, showing the
current round, which cards each player drew, who is the winner and how many
cards each player has left. If it is a tie, then you should print "War!" to the
console before drawing more cards from each player.

Use [Prompt](https://www.npmjs.com/package/prompt) to implement
asking the user(s) questions via the command line, i.e. for their user name.

## Getting Unstuck
If you get stuck, first retrace your steps. I highly recommend using
`console.log` to print things to the screen to check and make sure you're
getting what you expect (i.e. I'm expecting this to be an object, is it?
`console.log` it to find it's a number. Why would it be a number? I guess maybe
this is the index, rather than the object itself? hmm...).

If you're really stuck and can't figure it out, then look back at the previous
assignments. Look specifically for any previous exercises that are similar to
the problem you're stuck on. Look at how you solved the problem then. Is there
anything there that you could try here? Don't copy and paste your code willy
nilly, as that will lead to more bugs! But, do look at how you solved the
problem then, think through it and see if it gives you ideas for solving the
problem you're stuck on.

If you're still stuck after all of that, check with your neighbor. Maybe they
can help you think through the bug or problem?

After that, raise your hand and Sean or Ramsay will come over to help you.

## Bonus Level 1
Use one or more npm packages to make your command line interface more user
friendly. Be creative! The sky is the limit. Here are some suggested packages.
Implement one or two.

- [Colors](https://www.npmjs.com/package/colors)
- [Chalk](https://www.npmjs.com/package/chalk)
- [Clear](https://www.npmjs.com/package/clear)
- [Figlet](https://www.npmjs.com/package/figlet)
- [Clui](https://www.npmjs.com/package/clui) *More advanced*

## Bonus Level 2
Use `object oriented programming`, modeling Cards, Decks, and Players. Your
file should be broken up into multiple files, grouping your code by
functionality and purpose.

## Bonus Level 3
Use `functional programming`, making it so all your functions are pure (have no side effects)
