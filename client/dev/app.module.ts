import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { TodoCmp }   from './todo/components/todo-cmp';
import { TodoService }   from './todo/services/todo-service';
import {MenuCmp} from "./todo/components/menu-cmp";
import {MenuService} from "./todo/services/menu-service";

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
    ],
   declarations: [
      TodoCmp,
      MenuCmp
    ],
    providers: [
      TodoService,
      MenuService
    ],
    bootstrap: [
      TodoCmp,
      MenuCmp
    ],
})
export class AppModule {}
