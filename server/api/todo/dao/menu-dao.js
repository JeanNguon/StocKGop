"use strict";
/**
 * Created by imiedev on 15/12/16.
 */
var mongoose = require("mongoose");
var Promise = require("bluebird");
var _ = require("lodash");
var menu_1 = require("../model/menu");
menu_1.default.static('getAll', function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Todo
            .find(_query)
            .exec(function (err, todos) {
            err ? reject(err)
                : resolve(todos);
        });
    });
});
menu_1.default.static('createTodo', function (todo) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(todo)) {
            return reject(new TypeError('Todo is not a valid object.'));
        }
        var _todo = new Todo(todo);
        _todo.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
menu_1.default.static('deleteTodo', function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Todo
            .findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
});
var Todo = mongoose.model('Todo', menu_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Todo;
