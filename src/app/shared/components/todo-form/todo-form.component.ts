import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Todo } from 'src/app/core/model/todo';
import { TodoStep } from 'src/app/core/model/todo-step';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnChanges {

  @Input()
  todo: Todo;

  @Output()
  formSubmitEvent: EventEmitter<Todo> = new EventEmitter();

  @Output()
  undoEvent: EventEmitter<Todo> = new EventEmitter();

  todoForm: FormGroup;
  stepsArray: TodoStep[] = []

  get stepsControl(): FormArray {
    return this.todoForm.get('steps') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      id: null,
      title: ['', Validators.required],
      description: ['', Validators.required],
      steps: this.fb.array([])
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['todo'] && this.todo != null) {
      this.stepsArray = this.todo.steps;
      this.stepsControl.clear();
      this.stepsArray.forEach(step => {
        this.stepsControl.push(this.fb.group({
          id: step.id,
          done: step.done,
          title: [step.title, Validators.required]
        }));
      });
      this.todoForm.patchValue({
        id: this.todo.id,
        title: this.todo.title,
        description: this.todo.description
      })
    }
  }

  addStepToForm() {
    this.stepsArray.push({
      done: false,
      title: '',
      id: this.stepsArray.length
    });
    this.stepsControl.push(this.fb.group({
      done: false,
      title: ['', Validators.required]
    }));
  }

  removeStepToForm(index: number){
    this.stepsArray.splice(index, 1);
    this.stepsControl.removeAt(index);
  }

  confirmChanges() {
    this.formSubmitEvent.emit(this.todoForm.value);
  }

  cancel() {
    this.undoEvent.emit(this.todoForm.value);
  }

}
