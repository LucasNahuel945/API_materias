import 'reflect-metadata';
import { createConnection } from 'typeorm';
import server from './server';

require('dotenv').config();

createConnection()
  .then(() => {
    console.log('DB connected');
  })
  .catch((error) => {
    console.log(error);
  });

server.listen(server.get('port'));
console.log('Server ON');
