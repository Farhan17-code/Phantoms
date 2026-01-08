
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'Apparel' | 'Accessories' | 'Phantom Elite';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Message {
  role: 'user' | 'model';
  content: string;
}
