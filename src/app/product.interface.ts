export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  rating?: number; // Optional rating
  reviews?: number; // Optional review count
}
