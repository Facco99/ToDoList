import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/model/todo';
import { Router } from '@angular/router';
import { TodoFacadeService } from '../../services/todo-facade.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  constructor(private router:Router,private todosFacadeService:TodoFacadeService) { }

  ngOnInit(): void {
  }

  undo() {
    this.router.navigateByUrl("/todo")
  }

  addTodo(todo: Todo) {
    this.todosFacadeService.addTodo(todo);
  }

}
