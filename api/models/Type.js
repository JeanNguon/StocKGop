/**
 * Type.js
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
    },
    code: {
      type: 'string',
      columnName: 'code',
    },
    name: {
      type: 'string',
      columnName: 'name'
    },

    owner:{
      model:'product'
    }
  }
};

