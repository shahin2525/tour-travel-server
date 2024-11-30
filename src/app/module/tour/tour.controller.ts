import { NextFunction, RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse';
import { TourServices } from './tour.service';

const createTour: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const payload = req.body;
    const result = await TourServices.createTourIntoDB(payload);

    sendResponse(res, {
      statusCode: 500,
      success: true,
      message: 'tour created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// get all tours
const getAllTours: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const result = await TourServices.getAllToursFromDB();

    sendResponse(res, {
      statusCode: 500,
      success: true,
      message: 'get all tours successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get single tour
const getSingleTour: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const id = req.params.id;
    const result = await TourServices.getSingleTourFromDB(id);

    sendResponse(res, {
      statusCode: 500,
      success: true,
      message: 'get single tour successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const TourController = {
  createTour,
  getAllTours,
  getSingleTour,
};
