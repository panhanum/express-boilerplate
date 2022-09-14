import { Router } from 'express';
import courseController from '../controllers/course.controller';

const router = Router();

router.get('/', courseController.findAll);
router.get('/:id', courseController.findOne);
router.post('/', courseController.create);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.destroy);

export default router;
