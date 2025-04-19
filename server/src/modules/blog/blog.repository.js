import BaseRepository from '../base/baseRepository.js';
import { Blog } from '../../models/index.js';

class BlogRepository extends BaseRepository {
  #model;
  constructor(model) {
    super(model);
    this.#model = model;
  }

  async createBlog(blogEntry) {
    const blog = await this.#model.create(blogEntry);
    return blog;
  }

  async getBlogs() {
    // const { type } = reqQuery;
    // const where = type === 'all' ? {} : { type };

    const blogs = await this.#model.findAll({ });
    return blogs;
  }
}

export default new BlogRepository(Blog);
