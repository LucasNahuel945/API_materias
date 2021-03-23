import { Router } from 'express';
import {
  getCarrera, getCarreras, createCarrera, updateCarrera, deleteCarrera,
} from '../controllers/carrera.controller';

const router = Router();

router.get('/', getCarreras)
  .get('/:id', getCarrera)
  .post('/', createCarrera)
  .put('/', updateCarrera)
  .delete('/:id', deleteCarrera);

export default router;
