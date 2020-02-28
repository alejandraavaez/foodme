const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');

router.post('/signup', (req, res, next) => {
  const { email, name, username, password, phone, adress } = req.body
  const newUser = { email, name, username, phone, adress }
  User.register(newUser, password)
    .then((user) => res.status(201).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user });
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ user });
});

router.get('/home', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
  // .populate( {
  //     path: 'requestedFood',
  //     populate: {
  //       path: 'food',
  //     }
  //   }
    // )
    // .populate({
    //   path:'createdFood',
    //   populate:[{
    //     path: 'request',
    //     populate:{
    //       path: 'userReceive'
    //     }
    //   }]
    // })
    // .populate({
    //   path: 'requestedFood'
    // })
    
    // .populate('requestedFood')
    //   .populate({
    //     path: 'requestedFood',
    //       model: 'Request',
    //       populate: {
    //         path: 'food'
    //       }
    //   })
      // .populate({
      //   path: 'requestedFood',
      //   populate: {
      //     path:'food'
      //   }
      // })
    .then((user) => {
      console.log('populate', user);
      
      res.status(200).json({user})
    })
    .catch((err) => {
      console.log('err populate', err);
      
      res.status(500).json({ err })
    });
});

router.get('/isLoggedin', (req, res, next)=> {
  return (req.user) ? res.status(200).send(req.user) : res.status(500).send(null)
  res.status(500).send(req.user)
})

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
