import { Router } from 'express';
import blogController from './blog.controller.js';
import { upload } from '../../middleware/upload/index.js';

const blogRouter = Router();

blogRouter.post(
  '/blog',
  upload.fields([
    { name: 'image', maxCount: 1 },
  ]),

  blogController.createBlog
);

blogRouter.get('/blog', blogController.getBlogs);

export default blogRouter;
