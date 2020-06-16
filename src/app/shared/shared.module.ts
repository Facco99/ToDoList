import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './components/input-text/input-text.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoPreviewComponent } from './components/todo-preview/todo-preview.component';



@NgModule({
  declarations: [
    InputTextComponent, 
    TodoFormComponent, 
    TodoItemComponent, 
    TodoPreviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    TodoPreviewComponent,
    TodoItemComponent,
    TodoFormComponent
  ]
})
export class SharedModule { }
