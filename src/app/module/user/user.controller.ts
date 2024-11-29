import { NextFunction, RequestHandler } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';

const createUser: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const payload = req.body;
    const result = await UserServices.createUserIntoDB(payload);

    sendResponse(res, {
      statusCode: 500,
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
