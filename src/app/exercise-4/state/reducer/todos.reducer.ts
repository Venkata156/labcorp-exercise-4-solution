import {
  Action,
  createReducer,
  on
} from '@ngrx/store';

import * as ToDoActions from '../actions/todos.actions';
import { ITodosState } from '../../interfaces';

export const initialState: ITodosState = {
  todos: [
    {
      text: '1',
    },
    {
      text: '2',
    },
    {
      text: '3',
    }
  ],
};

export function reducer(state: ITodosState, action: Action)  {
  return createReducer(
    initialState,
    on(ToDoActions.incrementTodosCount, (state): ITodosState  => {
      const todos = JSON.parse(JSON.stringify(state.todos)); // clone of todos array
      todos.push({ text: `${state.todos.length + 1}`})
      return { ...state,  todos}; // update state with new item
    }),
  
    on(ToDoActions.decrementTodosCount, (state): ITodosState => {
      let todos = JSON.parse(JSON.stringify(state.todos)); // clone of todos array
      todos.splice(state.todos.length - 1, 1); // remove an last item from todos array
      return { ...state,  todos};
    })
  )(state, action);
}
