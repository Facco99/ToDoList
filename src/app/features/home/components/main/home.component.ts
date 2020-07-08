import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/core/model/user';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/model/todo';
import { getFirstTodo, getCurrentUser } from 'src/app/redux';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get todo(): Observable<Todo>{
    return this.store.pipe(select(getFirstTodo));
  }

  get user(): Observable<string> {
    return this.store.pipe(
      select(getCurrentUser),
      filter(user => !!user),
      map(user => user.name)
    );
  }

  constructor(private store:Store) { 
  }
  ngOnInit(): void {
    
  }

}
