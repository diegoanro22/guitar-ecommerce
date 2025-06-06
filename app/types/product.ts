export interface Review {
  rating: number;
  comment: string;
  author: string;
  date: string;
}

export interface Guitar {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  discount: number;
  category: string;
  dateAdded: string;
  reviews: Review[];
}

export interface CartItem extends Guitar {
  quantity: number;
}
