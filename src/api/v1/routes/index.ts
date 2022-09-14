import { Router } from 'express';
import course from './course.route';
import upload from './upload.route';

const router = Router();

router.use('/course', course);
router.use('/upload', upload);

export default router;
