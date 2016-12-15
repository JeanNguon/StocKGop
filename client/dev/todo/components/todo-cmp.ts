import {
  Component,
  Inject,
  OnInit
} from '@angular/core';

import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';

import {
  TodoService
} from '../services/todo-service';
import {AbstractComponent} from "./Abstract-cpm";

type Todo = {
  todoMessage: string;
  _id?: string;
}

@Component({
  selector: 'todo-cmp',
  templateUrl: 'todo/templates/todo.html',
  styleUrls: ['todo/styles/todo.css']
})
export class TodoCmp extends AbstractComponent implements OnInit {


  constructor(protected _TodoService: TodoService) {
    super(_TodoService);
    this.todoForm = {
      "todoMessage": ""
    };
  }



}
