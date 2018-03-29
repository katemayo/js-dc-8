# ONE TIME ONLY

### Fork the JS DC 8 repo
- Follow Instructor on screen

### Remove the origin remote on your local repo
- `git remote rm origin`
- `git remote -v` to see there is no origin remaining

### Add the forked repo as your new origin remote
- Follow Instructor to copy the clone URL on github
- `git remote add origin THE_FORKED_GIT_URL_HERE`
- `git remote -v` to see the new origin

### Add the original JS DC 8 repo as an upstream remote
- Follow Instructor to copy the clone URL on github
- `git remote add upstream THE_ORIGINAL_GIT_URL_HERE`
- `git remote -v` to see the new upstream

### Set the `master` branch to track the origin/master branch
- `git branch -u origin/master`


# EACH HOMEWORK ASSIGNMENT

Do a `git pull upstream master` on the JS DC 8 repo

Do your homework in the `homework` folder, typically in a file or folder called `starter`

When finished, save your work

`git add` and `git commit` your work

`git push` on your master branch to push the code to your forked repo

Go to github.com and submit a Pull Request from the master branch of your forked repo against the master branch of the original JS DC 7 repo
- Please name the PR with *the name of the class folder of the lesson the homework was assigned in*, with the word 'homework' at the end. For example, today's homework is part of the `02-data_and_operators` lesson, so you would name your PR `02-data_and_operators homework`.
