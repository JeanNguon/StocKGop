/**
 * TypeController
 *
 * @description :: Server-side logic for managing types
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function (req, res) {
    sails.log("create type controller function");
    res.view('typeView/create', {layout: 'layout'});

  },

  submit: function (req, res) {
    sails.log("methode POST type")
    if (req.method == "POST") {
      Type.create({
        name: req.param("name"),
        code: req.param("code"),
      }).exec(function (err, recordedType) {
          if (!err) {
            sails.log(recordedType.firstname, "has been recorded")
            res.redirect('/type');
          } else {
            return res.serverError(err);
          }
        }
      )
    }
  },

  detail: function (req, res) {
    sails.log("detail type controller function");
    Type.findOne({id:req.param('id')})
      .exec(function (err, typeFound) {
        if(!err){
          res.view('typeView/detail', {layout:'layout', type: typeFound});
        }
      })
  },

  getAll: function(req, res){
    sails.log("list of types");
    Type.find().exec(function(err, list){
      if(!err){
        sails.log(list);
        res.view('typeView/index', {layout:'layout', list: list});
      }
    })
  },

  update: function (req, res) {
    sails.log("update typeView controller function");
    if (req.method == "POST") {
      sails.log("post");

      Type.find({id: req.param('id')})
        .exec(function (err, typeFound) {
          if(!err){
            var newRecorded = typeFound.pop();

            newRecorded.id =  req.param('id');
            newRecorded.name =  req.param("name");
            newRecorded.code = req.param("code");
            newRecorded.save(function (err) {
              if(!err) {
                sails.log('type has been updated');
              }
              return res.redirect('/type');
            })
          }else{
            return res.negotiate(err);
          }
        })

    }else {
      Type.findOne({id: req.param('id')})
        .exec(function (err, typeFound) {
          if (!err) {
            res.view('typeView/update', {layout: 'layout', type: typeFound});
          }
        })
    }
  },

  delete: function (req, res) {
    sails.log("update typeView controller function");
    Type.destroy({id:req.param('id')})
      .exec(function (err) {
        if(!err){
          sails.log('type has been deleted');
          res.redirect('/type');
        }else{
          return res.negotiate(err);
        }
      })
  },
};

