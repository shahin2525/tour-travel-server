export interface ITour {
  name: string;
  durations: number;
  averageRating?: number;
  price: number;
  coverImage: string;
  images?: string[];
  startDate?: Date;
  startLocation?: string;
  locations?: string[];
  slug?: string;
}
