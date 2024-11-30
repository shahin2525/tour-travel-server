import { model, Schema } from 'mongoose';
import { ITour, ITourMethods, UserModel } from './tour.interface';

const tourSchema = new Schema<ITour, UserModel, ITourMethods>({
  name: { type: String, required: true },
  durations: { type: Number, required: true },
  averageRating: { type: Number, default: 5 },
  price: { type: Number, required: true },
  coverImage: { type: String, required: true },
  images: { type: [String] },
  startDates: { type: [Date], required: true },
  startLocation: { type: String },
  locations: { type: [String] },
  slug: { type: String },
});

// instance methods
tourSchema.methods.getNextNearestDate = function () {
  const todaysDate = new Date();

  const futureDates = this.startDates?.filter((startDate: Date) => {
    return startDate > todaysDate;
  });

  futureDates?.sort((a: Date, b: Date) => a.getTime() - b.getTime());

  const nearestStartDate = futureDates[0];
  const estimatedEndDate = new Date(
    nearestStartDate.getTime() + this.durations * 60 * 60 * 1000,
  );
  return {
    nearestStartDate,
    estimatedEndDate,
  };
};

// 3. Create a Model.
export const Tour = model<ITour, UserModel>('Tour', tourSchema);
