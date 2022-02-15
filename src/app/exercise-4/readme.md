# Counting Todos with state

We need write a component that will display the number of things to do.

There should also be two buttons: one to increment and one to decrement the number of things to do.

## The count component

This component should display the text: "There is/are currently [n] todo/s", pluralizing correctly depending on the number of todos.

The number of things to do should be held in state with NgRX. There is a reducer available for you to build from, but you'll need to do the rest.

There is a "Todo" interface for you to leverage.

The text of the todo, even though it's not displayed, should be set to the number the todo is in the list, e.g. if it's the second Todo, the text should be '2'.
