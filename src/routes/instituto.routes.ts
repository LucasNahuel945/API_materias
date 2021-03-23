import { Router } from 'express';
import { getInstituto, getInstitutos, createInstituto, updateInstituto, deleteInstituto } from '../controllers/instituto.controller';

const router = Router();

router.get('/', getInstitutos)
  .get('/:id', getInstituto)
  .post('/', createInstituto)
  .put('/', updateInstituto)
  .delete('/:id', deleteInstituto);

export default router;
