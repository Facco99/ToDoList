import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/core/model/user';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/model/todo';
import { getFirstTodo } from 'src/app/redux';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get todo(): Observable<Todo>{
    return this.store.pipe(select(getFirstTodo));
  }

  constructor(private store:Store) { 
  }
  ngOnInit(): void {
    
  }

}
