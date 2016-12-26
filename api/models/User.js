/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      columnName: 'id',
      primaryKey: true,
      required: true
    },
    firstname: {
      type: 'string',
      columnName: 'firstname',
    },
    lastname: {
      type: 'string',
      columnName: 'lastname'
    },
    displayName: {
      type: 'string',
      columnName: 'display_name'
    },
    login:{
      type: 'string',
      columnName: 'login',
      unique: true,
      required: true
    },
    password:{
      type: 'string',
      columnName: 'login',
      required: true
    }
  }
};

