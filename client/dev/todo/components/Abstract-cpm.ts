/**
 * Created by imiedev on 15/12/16.
 */
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

type Todo = {
  todoMessage: string;
  _id?: string;
}

@Component({
  selector: 'todo-cmp',
  templateUrl: 'todo/templates/todo.html',
  styleUrls: ['todo/styles/todo.css']
})
export class AbstractComponent implements OnInit {
  title: string = "StocKGop";
  todos: Todo[] = [];
  todoForm: Todo;

  constructor(protected _TodoService: TodoService) {
    this.todoForm = {
      "todoMessage": ""
    };
  }

  ngOnInit() {
    this._getAll();
  }

  private _getAll():void {
    this._TodoService
      .getAll()
      .subscribe((todos) => {
        this.todos = todos;
      });
  }

  add(message:string):void {
    this._TodoService
      .add(message)
      .subscribe((m) => {
        this.todos.push(m);
        this.todoForm.todoMessage = "";
      });
  }

  remove(id:string):void {
    this._TodoService
      .remove(id)
      .subscribe(() => {
        this.todos.forEach((t, i) => {
          if (t._id === id)
            return this.todos.splice(i, 1);
        });
      })
  }

  detail(id: string): void{
    this._TodoService
      .getAll()
  }
}
