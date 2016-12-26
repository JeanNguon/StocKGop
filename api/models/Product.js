/**
 * Product.js
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
    name: {
      type: 'string',
      columnName: 'name',
    },
    descriptionLocation: {
      type: 'string',
      columnName: 'description_location'
    },

  }
};

