const express = require('express');
const router = express.Router();
const User = require('../../models/Users');
const bcrypt = require('bcryptjs');

router.get('/register', (req, res) => {
   User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
         return res
            .status(400)
            .json({ email: 'A user is already registered with that email' });
      } else {
         const newUser = new User({
            handle: req.body.handle,
            email: req.body.email,
            password: req.body.password
         });

         bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
               if (err) {
                  throw err;
               }
               newUser.password = hash;
               newUser
                  .save()
                  .then((user) => res.json(user))
                  .catch((err) => console.log(err));
            });
         });
      }
   });
});

router.get('/test', (req, res) => {
   res.json({ msg: 'this is the user route' });
});

module.exports = router;
