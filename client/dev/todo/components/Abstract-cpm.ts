/**
 * Created by imiedev on 15/12/16.
 */
import {
  Component,
  Inject,
  OnInit
} from '@angular/core';



import {
  AbstractService
} from '../services/abstractService';

type Todo = {
  todoMessage: string;
  _id?: string;
}


export class AbstractComponent implements OnInit {
  title: string = "StocKGop";
  todos: Todo[] = [];
  todoForm: Todo;

  constructor(protected abstractService: AbstractService) {
    this.todoForm = {
      "todoMessage": ""
    };
  }

  ngOnInit() {
    this._getAll();
  }

  private _getAll():void {
    this.abstractService
      .getAll()
      .subscribe((todos) => {
        this.todos = todos;
      });
  }

  add(message:string):void {
    this.abstractService
      .add(message)
      .subscribe((m) => {
        this.todos.push(m);
        this.todoForm.todoMessage = "";
      });
  }

  remove(id:string):void {
    this.abstractService
      .remove(id)
      .subscribe(() => {
        this.todos.forEach((t, i) => {
          if (t._id === id)
            return this.todos.splice(i, 1);
        });
      })
  }

  detail(id: string): void{
    this.abstractService
      .getAll()
  }
}
