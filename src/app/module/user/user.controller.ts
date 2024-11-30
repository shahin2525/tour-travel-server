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
// get all users
const getAllUsers: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const result = await UserServices.getAllUsersFromDB();

    sendResponse(res, {
      statusCode: 500,
      success: true,
      message: 'get all users successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get single user
const getSingleUser: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const id = req.params.id;
    const result = await UserServices.getSingleUserFromDB(id);

    sendResponse(res, {
      statusCode: 500,
      success: true,
      message: 'get single user successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
};
