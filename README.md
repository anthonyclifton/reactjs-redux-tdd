## React Redux TDD Kata


### Why am I doing this?

Most developers find it difficult to understand React and state management
packages such as Redux.  Their architecture and lifecycle can be confusing,
especially for developers who don't understand callback functions, and
design patterns like Observer.

Aside from this, developers can't find it even more challenging to test
drive code in these frameworks while feeling confident that the tests
are providing value and understanding where the tests fit into the test
pyramid. 

You'll struggle and story cards will require excessive time to complete if:

* don't understand the architecture and lifecycle of the frameworks
* how they interact with other frameworks in a running system
* don't take a methodical approach to driving in change

You may struggle with:

* naming of code modules, functions, variables
* trying to change too many pieces at once
* conceiving of what to test that's valuable
* how objects, callback functions, and events move through the lifecycle
* how to design or choose patterns for new features


### What will I get out of it?

You will have experience with:

* Test driving behavior into a ReactJS and Redux project
* Test driving with Cypress, Testing-Library/React, and Jest/Enzyme
* Understanding the ReactJS and Redux frameworks and lifecycles

### What am I doing?

You will test drive some functionality into a base ReactJS/Redux app.
This will consist of a numeric input, a running tally of previous inputs,
and a total of all previous inputs.

You can accomplish this 
with unit tests, integration tests, acceptance/e2e tests, or a combination.

A reasonable rule of thumb to add a feature involving the Redux lifecycle 
is that you'll end up with on the order of 4 unit tests for each 1 or 2 integration 
or e2e tests.


#### Kata Requirements

##### Kata Requirement #1 - Input Number

As a user, I want to input numbers one at a time, so that I can see them
appear on the running tally as I enter them

Given I have input a number
When I add it to the tally
Then it appears on the tally, most recent input on top


##### Kata Requirement #2 - Total Inputs

As a user, I want to see a total of all previous inputs, so I can use that
value in other calculations

Given I have added one or more inputs
Then I see a total of all previous inputs

##### Future Kata Requirement #3 - Persist Total

As a user, I want to send my total of inputs to the accounting system, so that
it can be archived

Acceptance criteria are not yet determined


### How will I do it?

Think of the Redux lifecycle as starting with the Store.  State is maintained 
there.  You provide properties from this state to the View, where you display 
it.  When you click a button to perform an operation or change a value, you 
may want to update the state either directly with the new value, or with the 
response from an API call.  So you call an Action Creator.  The action 
creator may or may not call an API to send or retrieve some data, but 
will almost always emit one or more events.  Those events are "heard" by 
one or more reducers which will use tcomb to return state updates based 
on the events' payload.

Most of kata exercises can be completed methodically by following something
like the following process:

1. Write an acceptance test that will demonstrate you've met acceptance
criteria for both frontend and backend, as necessary
2. Unit or integration test drive changes into the View.  Provide empty
functions as properties if necessary.
3. Unit or integration test drive changes into Action Creators.  Provide
empty or stubbed API calls if necessary.  
4. Wire a new action creator to the view through the Connector if necessary.
5. Unit or integration test drive changes into API calls.  (You may find it
easier to swap the order of playing #3 and #5.)
6. Unit or integration test drive changes into Reducers.  Make sure your
actions match in your action creator and your reducer.
7. Wire your reducer into combineReducers if necessary.
8. Your acceptance test should now pass unless it relies on changes to the
backend.  If so drive changes into your backend.

Obstacles that will trip you up:
* Views, action creators, actions, reducers can end up with very similar names.
Watch out for imports pointing to the wrong thing.  Typically, you'll see
error complaints about your call signature when this happens.
* Don't feel compelled to test that an action emitted by your action creator 
is received by a reducer.  Are you testing your code or the framework?


### What do I have to work with?

You'll start with a project designed to show how we want to structure
applications on the frontend in ReactJS.  It has the following 
frameworks and dependencies set up for you:

* ReactJS (core framework) https://reactjs.org/
* Redux (state management) https://react-redux.js.org/
* jest (unit and integration testing) https://jestjs.io/
* Enzyme ()
* Testing-Library/React (black box unit testing)
* cypress (e2e and/or acceptance testing) https://www.cypress.io/


#### Start the Frontend App
```npm run start```

#### Unit Test the Frontend App
```npm run test```

#### Acceptance Test the Frontend App
Run the backend and frontend before running this command:

```./node_modules/.bin/cypress open```
or
```npx cypress open```
