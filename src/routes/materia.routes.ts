import { Router } from 'express';
import {
  getMateria, getMaterias, createMateria, updateMateria, deleteMateria,
} from '../controllers/materia.controller';

const router = Router();

router.get('/', getMaterias)
  .get('/:id', getMateria)
  .post('/', createMateria)
  .put('/', updateMateria)
  .delete('/:id', deleteMateria);

export default router;
