import { Component } from '@angular/core';
import { TODOS } from './mock-todos'
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My To Do List'
  todos = TODOS
  addTodo(todo: Todo) {
    this.todos.push(todo)
  }
}
