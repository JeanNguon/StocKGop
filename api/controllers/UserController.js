/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  login: function(req, res){
    res.view('login/logIn', {layout : 'layout', error: ''})
  },

  connection: function(req, res){
    sails.log("try connection");
    var error = {};
    var login = req.param('login');
    var password = req.param('password');
    //TODO : récupérer les utilisateurs gop
    User.findOne({login:login, password: password})
      .exec(function (err, user) {
        if(!err){
          if(user != undefined || user != null) {
            sails.log("connection success")
            req.session.me = user.id;
            res.redirect('/');
          }else {
            sails.log("connection fail");
            error.description = "Mauvais login/mot de passe";
            res.view('login/logIn', {layout: 'layout', error: error});
          }
        }
        else{

        }
      })
  },
  //TODO: Faire une Promises remplacer le .exec par .then
  //var reqAJAX : function(){récupérer liste des utilisateurs GOP.}
  //Promise.all([])

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
            res.redirect('/user');
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
        sails.log(list);
        res.view('userView/index', {layout:'layout', list: list});
      }
    })
  },

  update: function (req, res) {
    sails.log("update userView controller function");
    if (req.method == "POST") {
      sails.log("post");

      User.find({id: req.param('id')})
        .exec(function (err, userFound) {
          if(!err){
            var newRecorded = userFound.pop();

            newRecorded.id =  req.param('id');
              newRecorded.firstname =  req.param("firstname");
            newRecorded.lastname = req.param("lastname");
              newRecorded.displayName = req.param("displayName");
              newRecorded.login = req.param("login");
              newRecorded.password= req.param("password");
            newRecorded.save(function (err) {
             if(!err) {
               sails.log('user has been updated');
             }
              return res.redirect('/user');
            })
          }else{
            return res.negotiate(err);
          }
        })

    }else {
      User.findOne({id: req.param('id')})
        .exec(function (err, userFound) {
          if (!err) {
            res.view('userView/update', {layout: 'layout', user: userFound});
          }
        })
    }
  },

  delete: function (req, res) {
    sails.log("update userView controller function");
    User.destroy({id:req.param('id')})
      .exec(function (err) {
        if(!err){
          sails.log('user has been deleted');
          res.redirect('/user');
        }else{
          return res.negotiate(err);
        }
      })
  },



};

