# Assignment

Complete the basic CRUD functionality for our Todo application. We already have the ability to Create, Read and Delete todos - you need to add the ability to edit a todo. Think about how that will work from the user's perspective.

- On the "show" view for a particular todo, the user should be able to click a link that says "Edit Todo". This should take them to a new page where they can edit their todo.
- The user needs to be able to see a form that has the info for their existing todo pre-filled in the form.
- The user can change the data in that form and submit it.
- When the user submits the form, it should be sent to the server (in either a `PUT` or `PATCH` request), update the correct record, and the user should be redirected back to the "show" route for the updated record.

So, what will you need to do in order to make this work?
- You'll need to create a link (anchor tag) on the "show" page to a new "edit" route that shows the user a form they can edit the todo in.
- You'll need a route that handles the request to see a form to edit the todo.
- You'll need a new view that has the form on it.
- You'll need a route that can handle the actual submission of the data from the form.

NOTE: As described above, you will need TWO new, different routes to make updating work - one route that's responsible for simply **showing the form** to the user, and then another route that **accepts the data** from the form when it's submitted.
