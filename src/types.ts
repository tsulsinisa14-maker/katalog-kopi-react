export type Category = 'Kopi' | 'Non-Kopi' | 'Camilan';
export type CategoryFilterValue = 'Semua' | Category;

export interface MenuItem {
  id: number;
  name: string;
  category: Category;
  price: number;
  description: string;
  emoji: string; 
  image: string; 
}

export interface CartItem {
  item: MenuItem;
  qty: number;
}