import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Materia } from '../entities/materia';

export const getMaterias = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const materias = await getRepository(Materia).find();
  return res.json(materias);
};

export const getMateria = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const results = await getRepository(Materia).findOne(req.params.id);
  return res.json(results);
};

export const createMateria = async (req:Request, res: Response): Promise<Response> => {
  const newMateria = getRepository(Materia).create(req.body);
  const results = await getRepository(Materia).save(newMateria);
  return res.json(results);
};

export const updateMateria = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const materia = await getRepository(Materia).findOne(req.params.id);
  if (materia) {
    getRepository(Materia).merge(materia, req.body);
    const results = await getRepository(Materia).save(materia);
    return res.json(results);
  }

  return res.json({ msg: 'Materia not found' });
};

export const deleteMateria = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Materia).delete(req.params.id);
  return res.json(results);
};
