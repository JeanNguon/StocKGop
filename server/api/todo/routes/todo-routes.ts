"use strict";

import * as express from 'express';
import {TodoController} from '../controller/todo-controller';
import {MenuController} from "../controller/menu-controller";

export class TodoRoutes {
    static init(router: express.Router) {
      router
        .route('/api/todos')
        .get(TodoController.getAll)
        .post(TodoController.createTodo);

      router
        .route('/api/todos/:id')
        .delete(TodoController.deleteTodo);

      router
        .route('/api/menu')
        .get(MenuController.getAll)

      // router
      //   .route('/api/menu/:id')
      //   .delete(MenuController.deleteTodo);
    }
}
