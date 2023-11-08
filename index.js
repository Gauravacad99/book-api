const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://17ucs056:password@cluster0.grenzmn.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use('/api', bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
