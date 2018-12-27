const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('Hello a/A');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
