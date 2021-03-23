import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Carrera from '../entities/carrera';

export const getCarreras = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const carreras = await getRepository(Carrera).find();
  return res.json(carreras);
};

export const getCarrera = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const results = await getRepository(Carrera).findOne(req.params.id);
  return res.json(results);
};

export const createCarrera = async (req:Request, res: Response): Promise<Response> => {
  const newCarrera = getRepository(Carrera).create(req.body);
  const results = await getRepository(Carrera).save(newCarrera);
  return res.json(results);
};

export const updateCarrera = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const carrera = await getRepository(Carrera).findOne(req.params.id);
  if (carrera) {
    getRepository(Carrera).merge(carrera, req.body);
    const results = await getRepository(Carrera).save(carrera);
    return res.json(results);
  }

  return res.json({ msg: 'Carrera not found' });
};

export const deleteCarrera = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Carrera).delete(req.params.id);
  return res.json(results);
};
