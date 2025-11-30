export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export type Page = 
  | 'HOME' 
  | 'STORE' 
  | 'ABOUT' 
  | 'NEWS'
  | 'LOGIN'
  | 'SIGNUP'
  | 'PROFILE'
  | 'MEMBERSHIP'
  | 'ORDERS'
  | 'FAVORITES'
  | 'REWARDS'
  | 'CUSTOMER_CARE';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}