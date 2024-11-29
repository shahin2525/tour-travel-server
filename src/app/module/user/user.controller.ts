import { NextFunction, RequestHandler } from 'express';
import { UserServices } from './user.service';

const createUser: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const payload = req.body;
    const result = await UserServices.createUserIntoDB(payload);
    res.status(500).json({
      success: true,
      message: 'user created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const UserController = {
  createUser,
};
