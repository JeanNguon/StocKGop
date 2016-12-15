"use strict";
var todo_controller_1 = require("../controller/todo-controller");
var menu_controller_1 = require("../controller/menu-controller");
var TodoRoutes = (function () {
    function TodoRoutes() {
    }
    TodoRoutes.init = function (router) {
        router
            .route('/api/todos')
            .get(todo_controller_1.TodoController.getAll)
            .post(todo_controller_1.TodoController.createTodo);
        router
            .route('/api/todos/:id')
            .delete(todo_controller_1.TodoController.deleteTodo);
        router
            .route('/api/menu')
            .get(menu_controller_1.MenuController.getAll);
        // router
        //   .route('/api/menu/:id')
        //   .delete(MenuController.deleteTodo);
    };
    return TodoRoutes;
}());
exports.TodoRoutes = TodoRoutes;
