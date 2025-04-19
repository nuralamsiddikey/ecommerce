import catchError from '../../middleware/errors/catchError.js';
import { BadRequestError } from '../../utils/errors.js';
import responseHandler from '../../utils/responseHandler.js';
import blogService from './blog.service.js';
import { blogQueryValidate, blogValidate } from './blog.validate.js';

class BlogController {
  #blogService;
  constructor(blogService) {
    this.#blogService = blogService;
  }

  createBlog = catchError(async (req, res, next) => {
    // const files = req.files;
    // const image = files['image'][0];

    // const { error, value } = blogValidate({
    //   ...req.body,
    //   image: image.filename,
    // });

    // if (error) {
    //   throw new BadRequestError(error);
    // }

    const data = await this.#blogService.createBlog(req.body);
    const resDoc = responseHandler(201, 'Successfully created blog');
    res.status(resDoc.statusCode).json(resDoc);
  });

  getBlogs = catchError(async (req, res, next) => {
    // const { error, value: reqQuery } = blogQueryValidate(req.query);
    // if (error) {
    //   throw new BadRequestError(error);
    // }
    const data = await this.#blogService.getBlogs();
    const resDoc = responseHandler(200, 'Successfully fetched blogs', data);
    res.status(resDoc.statusCode).json(resDoc);
  });
}

export default new BlogController(blogService);
