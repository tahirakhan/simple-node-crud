var express = require('express')

var userService = require('../service/user-service')
var router = express.Router()


router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })
  
router.get('/', function (req, res) {
    console.log('Inside Controller Get All Method')

    userService.getAll(req, res).then((err,data)=> {
    if(err) console.log(err)
    res.send(data)
    })

});

router.get('/:id', function (req, res) {
    console.log('Inside Controller Get By ID Method')
    userService.getById(req, res).then((err,data)=> {
        if(err) console.log(err)
        res.send(data)
        })
});

router.post('/', function (req, res) {
    console.log('Inside Controller Save Method')
    userService.save(req, res).then((err,data)=> {
        if(err) console.log(err)
        res.send(data)
        })
});

router.put('/:id', function (req, res) {
    console.log('Inside Controller Update Method')
    userService.update(req, res).then((err,data)=> {
        if(err) console.log(err)
        res.send(data)
        })
});

router.delete('/:id', function (req, res) {
    console.log('Inside Controller Delete Method')
    userService.delete(req, res).then((err,data)=> {
        if(err) console.log(err)
        res.send(data)
        })
});


module.exports = router