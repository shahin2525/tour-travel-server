/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler, NextFunction } from 'express';

const globalErrorHandlers: ErrorRequestHandler = async (
  error,
  req,
  res,
  next: NextFunction,
) => {
  res.status(400).json({
    success: true,
    message: error.message || 'something went wrong',
    error: error,
  });
};

export default globalErrorHandlers;
