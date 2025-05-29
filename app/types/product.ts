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

export interface AppContextType {
  cart: CartItem[];
  favorites: Guitar[];
  productList: Guitar[];
  addReview: (productId: number, newReview: Review) => void;
  addToCart: (product: Guitar, quantity?: number) => void;
  reduceFromCart: (productId: number) => void;
  clearCart: () => void;
  toggleFavorite: (productId: number) => void;
  getTotal: () => number;
}
