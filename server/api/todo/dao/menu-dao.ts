/**
 * Created by imiedev on 15/12/16.
 */
import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as _ from 'lodash';
import menuSchema from '../model/menu';

menuSchema.static('getAll', ():Promise<any> => {
  return new Promise((resolve:Function, reject:Function) => {
    let _query = {};

    Todo
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });
  });
});

menuSchema.static('createMenu', (todo:Object):Promise<any> => {
  return new Promise((resolve:Function, reject:Function) => {
    if (!_.isObject(todo)) {
      return reject(new TypeError('Todo is not a valid object.'));
    }

    var _todo = new Todo(todo);

    _todo.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
});

menuSchema.static('deleteMenu', (id:string):Promise<any> => {
  return new Promise((resolve:Function, reject:Function) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    Todo
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
});

menuSchema.static('selectMenu', (id:string):Promise<any> => {
  return new Promise((resolve:Function, reject:Function) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    Todo
      .findById(id)
      .exec((err, selected) => {
        err ? reject(err)
          : resolve(selected);
      });
  });
});

let Todo = mongoose.model('Todo', menuSchema);

export default Todo;
