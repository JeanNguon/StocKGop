"use strict";
var AbstractComponent = (function () {
    function AbstractComponent(abstractService) {
        this.abstractService = abstractService;
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
        this.abstractService
            .getAll()
            .subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    AbstractComponent.prototype.add = function (message) {
        var _this = this;
        this.abstractService
            .add(message)
            .subscribe(function (m) {
            _this.todos.push(m);
            _this.todoForm.todoMessage = "";
        });
    };
    AbstractComponent.prototype.remove = function (id) {
        var _this = this;
        this.abstractService
            .remove(id)
            .subscribe(function () {
            _this.todos.forEach(function (t, i) {
                if (t._id === id)
                    return _this.todos.splice(i, 1);
            });
        });
    };
    AbstractComponent.prototype.detail = function (id) {
        this.abstractService
            .getAll();
    };
    return AbstractComponent;
}());
exports.AbstractComponent = AbstractComponent;
