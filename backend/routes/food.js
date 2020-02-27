const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const User = require('../models/User');
const uploadCloud = require('../config/cloudinary');


//CRUD

//Create 
router.post('/food', uploadCloud.single('photoURL'), (req, res, next) => {
  console.log('file2', req.file);
  
    const { name, price, description } = req.body
    const { _id } = req.user
    const { secure_url } = req.file
    const newFood = { name, price, description, owner: _id, image: secure_url}
    console.log( 'creating', newFood )
    Food.create(newFood)
    .then((food) => {
      User.update({ _id }, {$push:{createdFood:food._id}}).then(res => console.log(res)).catch(err => console.log(err))
      res.status(201).json({ food })
    })
    .catch((err) => console.log(err))
    //res.status(500).json({ err }));
})

//Read all
router.get('/food', (req, res, next) => {
    Food.find()
    .then(( food ) => res.status(200).json({ food }))
    .catch((err) => res.status(500).json({ err }));
})

//Read one
router.get('/food/:id', (req, res, next) => {
    Food.findById(req.params.id)
    .then(( food ) => res.status(200).json({ food }))
    .catch((err) => res.status(500).json({ err }));
})

//Upload
router.post('/food/upload', uploadCloud.single('photoURL'),
    async (req, res, next) => {
      const { secure_url } = req.file
      const food = await Food.findByIdAndUpdate( req.food._id,
        { photoURL: secure_url },
        { new: true }
      )
      res.status(200).json({ food })
    }
  )

//Delete
router.delete('/food/:id', (req, res, next) => {
    const { id } = req.params
    Food.findOneAndDelete( id )
    res.status(200).json( { msg: 'food deleted' })
    }
)


module.exports = router