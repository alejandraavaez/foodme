const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const uploadCloud = require('../config/cloudinary');


//CRUD

//Create 
router.post('/food',(req, res, next) => {
    const { name, price, description } = req.body
    const { _id } = req.user
    const newFood = { name, price, description, owner: _id }
    Food.create(newFood)
    .then((food) => res.status(201).json({ food }))
    .catch((err) => res.status(500).json({ err }));
})

//Read
router.get('/food', (req, res, next) => {
    Food.findById(req.food._id)
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