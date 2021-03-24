import 'reflect-metadata';
import { createConnection } from 'typeorm';
import normalizePort from './utils/normalizePort';
import server from './server';

const port = normalizePort(process.env.PORT || '3000');

createConnection()
  .then(() => {
    console.log('DB connected');
  })
  .catch((error) => {
    throw new Error(error);
  });

server.listen(port);
