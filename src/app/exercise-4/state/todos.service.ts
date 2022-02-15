import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as todosActions from './actions/todos.actions';
import { ITodosState } from '../interfaces';
import { ITodo } from '../interfaces/ITodo';
import { incrementOrDecrementTodosSelector }from './selectors/todos.selectors';

@Injectable({
  providedIn: 'root',
})
export class TodosService {

  constructor(private store: Store<ITodosState>) {}

  // to return increment or decrement items as an Obserables<ITodo[]>
  get todosList$(): Observable<ITodo[]> {
    return this.store.pipe(select(incrementOrDecrementTodosSelector));
  }

  // to dispatch an increment action
  incrementTodos(): void {
    this.store.dispatch(todosActions.incrementTodosCount());
  }

  //to dispatch an decrement action
  decrementTodos(): void {
    this.store.dispatch(todosActions.decrementTodosCount());
  }
}
