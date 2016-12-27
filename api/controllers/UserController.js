/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function (req, res) {
    sails.log("create userView controller function");
    res.view('userView/create', {layout: 'layout'});

  },

  submit: function (req, res) {
    sails.log("methode POST User")
    if (req.method == "POST") {
      User.create({
        firstname: req.param("firstname"),
        lastname: req.param("lastname"),
        displayName: req.param("displayName"),
        login: req.param("login"),
        password: req.param("password")
      }).exec(function (err, recordedUser) {
          if (!err) {
            sails.log(recordedUser.firstname, "has been recorded")
          } else {
            return res.serverError(err);
          }
        }
      )
    }
  },

  detail: function (req, res) {
    sails.log("detail userView controller function");
    User.findOne({id:req.param('id')})
      .exec(function (err, userFound) {
        if(!err){
          res.view('userView/detail', {layout:'layout', user: userFound});
        }
      })
  },

  getAll: function(req, res){
    sails.log("list of users");
    User.find().exec(function(err, list){
      if(!err){
        res.view('userView/index', {layout:'layout', list: list});
      }
    })
  },

  update: function (req, res) {
    sails.log("update userView controller function");
    User.findOne({id:req.param('id')})
      .exec(function (err, userFound) {
        if(!err){
          res.view('userView/update', {layout:'layout', user: userFound});
        }
      })
  },



};

