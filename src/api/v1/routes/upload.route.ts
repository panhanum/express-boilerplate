import { Router } from 'express';
import multer from 'multer';
import uploadController from '../controllers/upload.controller';
import utils from '../utils';

const router = Router();

router.put(
  '/',
  multer({
    storage: utils.diskStorage,
  }).single('image'),
  uploadController.upload,
);

export default router;
