const express = require('express'); 
const helmet = require('helmet'); 
const morgan = require('morgan'); 
const projectRouter = require('./data/helpers/projectRouter.js');
const actionModel = require('./data/helpers/actionModel.js');
const mappers = require('./data/helpers/mappers.js');

const server = express();

server.use('/api/', projectRouter);
server.use(express.json());
server.use(helmet());
server.use(morgan('tiny'));

server.get('/', (req, res) => {
  

  res.send(`
  <h2>Projects and Actions</h2>
  <p>This is where the Projects and Actions live</p>
  `);
});







module.exports = server;