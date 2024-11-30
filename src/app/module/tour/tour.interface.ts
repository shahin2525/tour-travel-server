import { Model } from 'mongoose';

export interface ITour {
  name: string;
  durations: number;
  averageRating?: number;
  price: number;
  coverImage: string;
  images?: string[];
  startDates: Date[];
  startLocation?: string;
  locations?: string[];
  slug?: string;
}

// mongoose instance methods
export interface ITourMethods {
  getNextNearestDate(): {
    nearestStartDate: Date | null;
    estimatedEndDate: Date | null;
  };
}

// Create a new Model type that knows about IUserMethods...
export type UserModel = Model<ITour, Record<string, unknown>, ITourMethods>;
