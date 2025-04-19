import { BadRequestError } from '../../utils/errors.js';
import { verifyAccessToken } from '../../utils/jwt.js';

export const jwtAuth = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization;
    if (!bearer || !bearer.startsWith('Bearer')) {
      throw new BadRequestError('token not found');
    }
    const token = bearer.split('Bearer ')[1].trim();
    const payload = await verifyAccessToken(token);
    if (!payload) throw new BadRequestError('unauthorized');
    req.user = { ...payload.user };
    next();
  } catch (err) {
    next(err);
  }
};

export const jwtAuthAdmin = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization;
    if (!bearer || !bearer.startsWith('Bearer')) {
      throw new BadRequestError('token not found');
    }
    const token = bearer.split('Bearer ')[1].trim();
    const payload = await verifyAccessToken(token);
    if (!payload) throw new BadRequestError('unauthorized');
    if (!payload.user.admin_id) throw new BadRequestError('unauthorized');
    req.user = { ...payload.user };
    next();
  } catch (err) {
    next(err);
  }
};


export const jwtAuthCustomer = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization;
    if (!bearer || !bearer.startsWith('Bearer')) {
      throw new BadRequestError('token not found');
    }
    const token = bearer.split('Bearer ')[1].trim();
    const payload = await verifyAccessToken(token);
    console.log(payload)
    if (!payload) throw new BadRequestError('unauthorized');
    if (!payload.user.customer_id) throw new BadRequestError('unauthorized');
    req.user = { ...payload.user };
    next();
  } catch (err) {
    next(err);
  }
};          