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
import {MenuService} from "../services/menu-service";

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


  constructor(protected menuService: MenuService) {
    super(menuService);
    this.todoForm = {
      "todoMessage": ""
    };
  }



}
