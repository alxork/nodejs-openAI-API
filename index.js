const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// Enable body parser
app.use(express.json());

// Enable URL encoded data: https://www.urlencoder.io/learn/
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static('public'));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));
