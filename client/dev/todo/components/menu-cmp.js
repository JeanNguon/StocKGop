"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Abstract_cpm_1 = require("./Abstract-cpm");
var MenuCmp = (function (_super) {
    __extends(MenuCmp, _super);
    function MenuCmp(_TodoService) {
        var _this = _super.call(this, _TodoService) || this;
        _this._TodoService = _TodoService;
        _this.todoForm = {
            "todoMessage": ""
        };
        return _this;
    }
    return MenuCmp;
}(Abstract_cpm_1.AbstractComponent));
MenuCmp = __decorate([
    core_1.Component({
        selector: 'menu-cmp',
        templateUrl: 'todo/templates/menu.html',
        styleUrls: ['todo/styles/menu.css']
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], MenuCmp);
exports.MenuCmp = MenuCmp;
