import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../interfaces/ITodo';
import { TodosService } from '../state/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos : Observable<ITodo[]>;
  
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todosService.todosList$;
  }

  decrementTodos(): void {
    this.todosService.decrementTodos();
  }

  incrementTodos(): void {
    this.todosService.incrementTodos();
  }
}
