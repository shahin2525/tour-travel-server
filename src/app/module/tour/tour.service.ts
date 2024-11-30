import { ITour } from './tour.interface';
import { Tour } from './tour.model';

const createTourIntoDB = async (payload: ITour) => {
  const result = await Tour.create(payload);
  return result;
};
const getAllToursFromDB = async () => {
  const result = await Tour.find();
  return result;
};
const getSingleTourFromDB = async (id: string) => {
  const result = await Tour.findById(id);
  return result;
};
const updateTourFromDB = async (id: string, data: Partial<ITour>) => {
  const result = await Tour.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteTourFromDB = async (id: string) => {
  const result = await Tour.findByIdAndDelete(id);
  return result;
};
export const TourServices = {
  createTourIntoDB,
  getAllToursFromDB,
  getSingleTourFromDB,
  updateTourFromDB,
  deleteTourFromDB,
};
