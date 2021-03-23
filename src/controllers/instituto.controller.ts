import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Instituto from '../entities/instituto';

export const getInstitutos = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const institutos = await getRepository(Instituto).find();
  return res.json(institutos);
};

export const getInstituto = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const results = await getRepository(Instituto).findOne(req.params.id);
  return res.json(results);
};

export const createInstituto = async (req:Request, res: Response): Promise<Response> => {
  const newInstituto = getRepository(Instituto).create(req.body);
  const results = await getRepository(Instituto).save(newInstituto);
  return res.json(results);
};

export const updateInstituto = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const instituto = await getRepository(Instituto).findOne(req.params.id);
  if (instituto) {
    getRepository(Instituto).merge(instituto, req.body);
    const results = await getRepository(Instituto).save(instituto);
    return res.json(results);
  }

  return res.json({ msg: 'Instituto not found' });
};

export const deleteInstituto = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Instituto).delete(req.params.id);
  return res.json(results);
};
