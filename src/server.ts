// Get Modules
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import router from './routes';

// Set express
const server = express();

// Set Middlewares
server.use(helmet());
server.use(morgan('dev'));
server.use(express.urlencoded({ extended: false }));
server.use(router);

export default server;
