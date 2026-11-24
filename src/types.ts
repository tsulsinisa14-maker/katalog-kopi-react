// Union type: nilai dibatasi hanya pilihan tertentu
export type Category = 'Kopi' | 'Non-Kopi' | 'Camilan' | 'Makanan';
export type CategoryFilterValue = 'Semua' | Category;
export type SortOption = 'default' | 'termurah' | 'termahal' | 'nama';

export interface MenuItem {
  id: number;
  name: string;
  category: Category;
  price: number;
  description: string;
  emoji: string; // cadangan kalau foto gagal dimuat, juga dipakai di keranjang
  image: string; // lokasi foto di folder public
  bestSeller?: boolean; // opsional: menu terlaris
}

export interface CartItem {
  item: MenuItem;
  qty: number;
}

export interface Order {
  id: string;
  customerName: string;
  items: CartItem[];
  total: number;
}