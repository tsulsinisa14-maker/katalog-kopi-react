import type { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  { id: 1, name: 'Kopi Susu Gula Aren', category: 'Kopi', price: 18000, description: 'Espresso dengan susu segar dan gula aren.', emoji: '☕' },
  { id: 2, name: 'Americano', category: 'Kopi', price: 15000, description: 'Espresso dengan air panas, rasa kuat dan segar.', emoji: '☕' },
  { id: 3, name: 'Cappuccino', category: 'Kopi', price: 20000, description: 'Espresso, susu panas, dan busa susu yang lembut.', emoji: '☕' },
  { id: 4, name: 'Matcha Latte', category: 'Non-Kopi', price: 22000, description: 'Matcha pilihan dengan susu yang creamy.', emoji: '🍵' },
  { id: 5, name: 'Coklat Panas', category: 'Non-Kopi', price: 18000, description: 'Coklat pekat yang hangat dan manis.', emoji: '🍫' },
  { id: 6, name: 'Teh Lemon Dingin', category: 'Non-Kopi', price: 12000, description: 'Teh segar dengan perasan lemon.', emoji: '🍋' },
  { id: 7, name: 'Kentang Goreng', category: 'Camilan', price: 15000, description: 'Kentang goreng renyah dengan saus pilihan.', emoji: '🍟' },
  { id: 8, name: 'Roti Bakar Coklat Keju', category: 'Camilan', price: 17000, description: 'Roti bakar hangat dengan coklat dan keju.', emoji: '🍞' },
  { id: 9, name: 'Pisang Goreng Keju', category: 'Camilan', price: 14000, description: 'Pisang goreng dengan taburan keju.', emoji: '🍌' },
  { id: 10, name: 'Cookies Coklat', category: 'Camilan', price: 10000, description: 'Cookies renyah dengan chocolate chip.', emoji: '🍪' },
];