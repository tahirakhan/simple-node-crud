
var User = require('../model/user');

module.exports.getAll = function (req, res) {
    return new Promise((resolve,reject)=>{
        var user = new User();
        user.name = req.body.name;

        User.find({},(err, data) => {
            if (err) console.log(err)
            res.send ({
                'success':"200",
                'message':"Get All",
                'result':data
            })
          });

    });

}
module.exports.getById = function (req, res) {
    return new Promise((resolve,reject)=>{
        var query = {_id:req.params.id}
        User.find(query,(err, data) => {
            if (err) console.log(err)
            res.send ({
                'success':"200",
                'message':"Get By ID",
                'result':data
            })
          });

    });

}
module.exports.save = function (req, res) {
    return new Promise((resolve,reject)=>{
    
        var user = new User();
        user.name = req.body.name;

        user.save(function (err, data) {
            if (err) console.log(err)
            res.send ({
                'success':"200",
                'message':"Saved",
                'result':data
            })
            
          });
    });

}
module.exports.update = function (req, res) {
    return new Promise((resolve,reject)=>{

        var query = {_id:req.params.id}
        var obj = {name : req.body.name};
        

        User.update(query,obj, function (err, data) {
            if (err) console.log(err)
            res.send ({
                'success':"200",
                'message':"Updated",
                'result':data
            })
            
          });

    });

}

module.exports.delete = function (req, res) {
    return new Promise((resolve,reject)=>{
        var query = {_id:req.params.id}
        User.deleteOne(query,(err, data) => {
            if (err) console.log(err)
            res.send ({
                'success':"200",
                'message':"Delete",
                'result':data
            })
          });

    });

}
