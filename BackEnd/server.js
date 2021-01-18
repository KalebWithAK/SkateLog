const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const routes = require('./Routes/routes.js');

const app = express();

dotenv.config();

app.use(express.json());

app.use(cors());

app.use(cors());

app.use('/', routes);
app.listen(4000, () => console.log('Server is up and running at localhost:4000.'));