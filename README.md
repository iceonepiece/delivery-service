This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run this project first run command `yarn` to install essential packages

### Run
`yarn start`

### Test
`yarn test`

## Case2
I'm not sure what `use the same route` term really means
then I wrote this case for two versions 

### First
this version not use the same route across all possible routes
when the route is assign to solution list it's not continue to explore

*** this version passes all example test cases

### Second
this version counts the visited times of each node (not count the start node)
If ABCA the count dict will be like { B: 1, C: 1, A: 1 }

*** This version passes first two example test cases
*** But for the bonus cases it must be set maxRepeats to be 3 (not 2 that mean exactly twice)
