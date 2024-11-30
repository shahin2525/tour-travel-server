import { model, Schema } from 'mongoose';
import { ITour } from './tour.interface';

const tourSchema = new Schema<ITour>({
  name: { type: String, required: true },
  durations: { type: Number, required: true },
  averageRating: { type: Number, default: 0 },
  price: { type: Number, required: true },
  coverImage: { type: String, required: true },
  images: { type: [String], default: [] },
  startDate: { type: Date },
  startLocation: { type: String },
  locations: { type: [String], default: [] },
  slug: { type: String },
});

// 3. Create a Model.
export const Tour = model<ITour>('Tour', tourSchema);
