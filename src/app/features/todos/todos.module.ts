import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './components/main/todos.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoFacadeService } from './services/todo-facade.service';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { EffectsModule } from '@ngrx/effects';
import { TodosNavigationEffects } from './redux/todos-navigation.effects';


@NgModule({
  declarations: [TodosComponent, TodoDetailComponent, TodoEditComponent, TodoAddComponent],
  providers: [TodoFacadeService],
  imports: [
    SharedModule,
    EffectsModule.forFeature([TodosNavigationEffects]),
    TodosRoutingModule
  ]
})
export class TodosModule { }
