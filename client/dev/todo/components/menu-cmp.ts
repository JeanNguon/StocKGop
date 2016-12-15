/**
 * Created by imiedev on 15/12/16.
 */
import {
  Component,
  Inject,
  OnInit
} from '@angular/core';

import {
  TodoService
} from '../services/todo-service';
import {AbstractComponent} from "./Abstract-cpm";

type Todo = {
  todoMessage: string;
  _id?: string;
}

@Component({
  selector: 'menu-cmp',
  templateUrl: 'todo/templates/menu.html',
  styleUrls: ['todo/styles/menu.css']
})
export class MenuCmp extends AbstractComponent implements OnInit {


  constructor(protected _TodoService: TodoService) {
    super(_TodoService);
    this.todoForm = {
      "todoMessage": ""
    };
  }



}
