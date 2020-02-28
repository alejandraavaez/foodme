const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const User = require('../models/User');
const Request = require('../models/Request');


router.get('/request/:id', (req,res, next) => {
  const { id:food } = req.params 
  const { _id: userReceive }= req.user
  Request.create({ food, userReceive})
  .then(requestCreated => {
    User.update({ _id:userReceive }, {$push:{requestedFood: requestCreated._id}})
    .then(response  =>  res.status(201).json(requestCreated))
  })
  .catch(err => console.log(err))
})

//owner acepta y el userReceive obtiene feedback
router.get('/request/:id/:status', (req, res, next) => {
  const { id, status } = req.params
  Request.update({ _id:id},{ status })
  .then(request => {
    console.log(request);
    res.status(201).json(request)
  })
})


module.exports = router