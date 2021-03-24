import express from 'express';
import materia from './routes/materia.routes';
import carrera from './routes/carrera.routes';
import instituto from './routes/instituto.routes';

const router = express.Router();

router.use('/api/materias', materia)
  .use('/api/carreras', carrera)
  .use('/api/institutos', instituto);

export default router;
