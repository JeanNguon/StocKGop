"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by imiedev on 15/12/16.
 */
var core_1 = require("@angular/core");
var todo_service_1 = require("../services/todo-service");
var AbstractComponent = (function () {
    function AbstractComponent(_TodoService) {
        this._TodoService = _TodoService;
        this.title = "StocKGop";
        this.todos = [];
        this.todoForm = {
            "todoMessage": ""
        };
    }
    AbstractComponent.prototype.ngOnInit = function () {
        this._getAll();
    };
    AbstractComponent.prototype._getAll = function () {
        var _this = this;
        this._TodoService
            .getAll()
            .subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    AbstractComponent.prototype.add = function (message) {
        var _this = this;
        this._TodoService
            .add(message)
            .subscribe(function (m) {
            _this.todos.push(m);
            _this.todoForm.todoMessage = "";
        });
    };
    AbstractComponent.prototype.remove = function (id) {
        var _this = this;
        this._TodoService
            .remove(id)
            .subscribe(function () {
            _this.todos.forEach(function (t, i) {
                if (t._id === id)
                    return _this.todos.splice(i, 1);
            });
        });
    };
    AbstractComponent.prototype.detail = function (id) {
        this._TodoService
            .getAll();
    };
    return AbstractComponent;
}());
AbstractComponent = __decorate([
    core_1.Component({
        selector: 'todo-cmp',
        templateUrl: 'todo/templates/todo.html',
        styleUrls: ['todo/styles/todo.css']
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], AbstractComponent);
exports.AbstractComponent = AbstractComponent;
