const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');

router.post('/signup', (req, res, next) => {
  const { email, name, username, password, phone, adress, longitude, latitude } = req.body
  const coordinates = [
    longitude,
    latitude
  ]
  const newUser = { email, name, username, phone, adress, location:coordinates  }
  console.log('nuevo usuario', {newUser})
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
    .then((user) => {
      console.log('populate', user);
      
      res.status(200).json({user})
    })
    .catch((err) => {
      console.log('err populate', err);
      
      res.status(500).json({ err })
    });
});

router.put('/profile', isAuth, (req, res, next) => {
  const { username, email, phone, address } = req.user
  User.findByIdAndUpdate({_id:req.user._id}, {username, email, phone, address})
  .then((user) => {

  })
})

router.get('/isLoggedin', (req, res, next)=> {
  return (req.user) ? res.status(200).send(req.user) : res.status(500).send(null)
  res.status(500).send(req.user)
})

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
