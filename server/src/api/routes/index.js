import { Router } from 'express';


import blogRouter from '../../modules/blog/blog.route.js';
import adminUserRoute from '../../modules/admin-user/admin.user.route.js';
import customerUserRoute from '../../modules/customer-user/customer.user.route.js';
import categoryRoute from '../../modules/category/category.route.js';
import productRoute from '../../modules/product/product.route.js';
import authRouter from '../../modules/auth/auth.route.js';
import orderRouter from '../../modules/order/order.route.js';
import cartRouter from '../../modules/cart/cart.route.js'; 

const rootRouter = Router();


rootRouter.use(blogRouter);
rootRouter.use(adminUserRoute)
rootRouter.use(customerUserRoute);
rootRouter.use(categoryRoute);
rootRouter.use(productRoute);
rootRouter.use(authRouter);
rootRouter.use(orderRouter);
rootRouter.use(cartRouter);

export default rootRouter;
