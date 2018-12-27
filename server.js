const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

mongoose
   .connect(
      db,
      { useNewUrlParser: true }
   )
   .then(() => console.log('Connected to Mongo DB'))
   .catch((err) => console.log(`DB Error: ${err}`));

app.get('/', (req, res) => {
   res.send('Hello a/A');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
