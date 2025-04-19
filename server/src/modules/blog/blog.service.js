import { ConflictError, NotFoundError } from '../../utils/errors.js';
import BaseService from '../base/baseService.js';
import blogRepository from './blog.repository.js';

class BlogService extends BaseService {
  #testCaseRepository;
  constructor(repository, serviceName) {
    super(repository, serviceName);
    this.#testCaseRepository = repository;
  }

  async createBlog(blogEntry) {
    const blog =
      await this.#testCaseRepository.createBlog(blogEntry);
    return blog;
  }

  async getBlogs() {

    const blogs = await this.#testCaseRepository.getBlogs();
    return blogs;
  }
}

export default new BlogService(blogRepository, 'blog');
