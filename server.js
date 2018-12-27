const express = require('express');
const app = express();
const bp = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const tweets = require('./routes/api/tweets');
const User = require('./models/Users');

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

mongoose
   .connect(
      db,
      { useNewUrlParser: true }
   )
   .then(() => console.log('Connected to Mongo DB'))
   .catch((err) => console.log(`DB Error: ${err}`));

app.get('/', (req, res) => {
   const user = new User({
      handle: 'jim',
      email: 'jim@jim.com',
      password: 'jimisgreat123'
   });
   user.save();
   res.send('Hello a/A');
});

app.use('/api/users', users);
app.use('/api/tweets', tweets);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
