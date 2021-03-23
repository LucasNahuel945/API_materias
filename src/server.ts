// Get Modules
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import router from './routes';

// Set express
const server = express();

// Set Port
server.set('port', process.env.PORT || 3000);

// Set Middlewares
server.use(helmet());
server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: false }));

// set Endpoints
server.use('/api/materias', router.materia);
server.use('/api/carreras', router.carrera);
server.use('/api/institutos', router.instituto);

export = server;
