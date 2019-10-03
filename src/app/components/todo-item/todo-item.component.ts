import { Component, OnInit, Input, EventEmitter ,Output } from '@angular/core';
import { Todo } from 'src/app/modules/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  setClasses(){
    let classes = {
      todo:true,
      'is-completed': this.todo.completed
    }

    return classes;
  }

  onDelete(todo){
    this.deleteTodo.emit(todo);
  }

  onToggle(todo){
    todo.completed=!todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(
      todos => console.log(todos)
    );
  }

}
