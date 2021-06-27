import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[] = [];

  onCheck(id: Number): void {
    let index = this.todos.findIndex((todo) => todo.id === id)
    this.todos[index].checked = !this.todos[index].checked
    console.log(id)
  }

  delete(id: Number): void {
    let index = this.todos.findIndex((todo) => todo.id === id)
    this.todos.splice(index, 1)
  }

  setTodoContentClass(isChecked: Boolean): string {
    if (isChecked === true) return 'checked'
    return 'un-checked'
  }


  constructor() { }

  ngOnInit() {
  }

}