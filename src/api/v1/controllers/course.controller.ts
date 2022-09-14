import * as Sentry from '@sentry/node';
import { Request, Response } from 'express';
import courseService from '../services/course.service';

const create = async (req: Request, res: Response): Promise<any> => {
  try {
    const course = await courseService.create(req.body);
    return res.status(201).json({
      course,
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

const findAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const courses = await courseService.findAll();
    res.status(200).send({ data: courses });
  } catch (err: any) {
    Sentry.captureException(err);
    res.status(500).send(err.message);
  }
};

const findOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const course = await courseService.findById(id);
    res.status(200).send({ data: course });
  } catch (err: any) {
    Sentry.captureException(err);
    res.status(500).send(err.message);
  }
};

const update = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  try {
    const [updated] = await courseService.update(id, req.body);

    if (updated) {
      const updatedCourse = await courseService.findById(id);
      return res.status(201).json({
        course: updatedCourse,
      });
    }
    throw new Error('Course not found');
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

const destroy = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const course = await courseService.destroy(id);
    res.status(200).send({ data: course });
  } catch (err: any) {
    Sentry.captureException(err);
    res.status(500).send(err.message);
  }
};

export default {
  create,
  findAll,
  findOne,
  update,
  destroy,
};
