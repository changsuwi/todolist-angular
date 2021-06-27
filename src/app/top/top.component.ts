import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo'
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  title = 'My To Do List';
  input = ""
  constructor() { }

  @Output() newTodoEvent = new EventEmitter<Todo>();

  addTodo(title: string) {
    let todo: Todo = {
      id: Math.random() * (100000),
      title,
      checked: false
    }
    this.newTodoEvent.emit(todo)
    this.input = ""

  }

  ngOnInit(): void {
  }

}
