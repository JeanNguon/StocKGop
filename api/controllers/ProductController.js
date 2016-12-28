/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function (req, res) {
    sails.log("create productView controller function");
    res.view('productView/create', {layout: 'layout'});

  },

  submit: function (req, res) {
    sails.log("methode POST Product")
    if (req.method == "POST") {
      Product.create({
        name: req.param("name"),
        descriptionLocation: req.param("descriptionLocation"),

      }).exec(function (err, recordedProduct) {
          if (!err) {
            sails.log(recordedProduct.name, "has been recorded")
            res.redirect('/product');
          } else {
            return res.serverError(err);
          }
        }
      )
    }
  },

  detail: function (req, res) {
    sails.log("detail productView controller function");
    Product.findOne({id:req.param('id')})
      .exec(function (err, productFound) {
        if(!err){
          res.view('productView/detail', {layout:'layout', product: productFound});
        }
      })
  },

  getAll: function(req, res){
    sails.log("list of product");
    Product.find().exec(function(err, list){
      if(!err){
        sails.log(list);
        res.view('productView/index', {layout:'layout', list: list});
      }
    })
  },

  update: function (req, res) {
    sails.log("update productView controller function");
    if (req.method == "POST") {
      sails.log("post");

      Product.find({id: req.param('id')})
        .exec(function (err, productFound) {
          if(!err){
            var newRecorded = productFound.pop();

            newRecorded.id =  req.param('id');
            newRecorded.name =  req.param("name");
            newRecorded.descriptionLocation = req.param("descriptionLocation");
            newRecorded.save(function (err) {
              if(!err) {
                sails.log('product has been updated');
              }
              return res.redirect('/product');
            })
          }else{
            return res.negotiate(err);
          }
        })

    }else {
      Product.findOne({id: req.param('id')})
        .exec(function (err, productFound) {
          if (!err) {
            res.view('productView/update', {layout: 'layout', product: productFound});
          }
        })
    }
  },

  delete: function (req, res) {
    sails.log("update productView controller function");
    Product.destroy({id:req.param('id')})
      .exec(function (err) {
        if(!err){
          sails.log('product has been deleted');
          res.redirect('/product');
        }else{
          return res.negotiate(err);
        }
      })
  },

  getAllType: function(req, res){
    sails.log("list of types");
    Type.find().exec(function(err, list){
      if(!err){
        sails.log(list);
        res.send({list: list});
      }
    })
  },

};

