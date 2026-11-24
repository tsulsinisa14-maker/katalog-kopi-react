import type { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  { id: 1, name: 'Kopi Susu Gula Aren', category: 'Kopi', price: 18000, description: 'Espresso dengan susu segar dan gula aren.', emoji: '☕', image: '/images/KopiSusuGulaAren.jpg', bestSeller: true },
  { id: 2, name: 'Americano', category: 'Kopi', price: 15000, description: 'Espresso dengan air panas, rasa kuat dan segar.', emoji: '☕', image: '/images/Americano.jpg' },
  { id: 3, name: 'Cappuccino', category: 'Kopi', price: 20000, description: 'Espresso, susu panas, dan busa susu yang lembut.', emoji: '☕', image: '/images/Cappucino.jpg', bestSeller: true },
  { id: 4, name: 'Matcha Latte', category: 'Non-Kopi', price: 22000, description: 'Matcha pilihan dengan susu yang creamy.', emoji: '🍵', image: '/images/MatchaLatte.jpg' },
  { id: 5, name: 'Coklat Panas', category: 'Non-Kopi', price: 18000, description: 'Coklat pekat yang hangat dan manis.', emoji: '🍫', image: '/images/CoklatPanas.jpg' },
  { id: 6, name: 'Teh Lemon Dingin', category: 'Non-Kopi', price: 12000, description: 'Teh segar dengan perasan lemon.', emoji: '🍋', image: '/images/IceLemonTea.jpg' },
  { id: 7, name: 'Kentang Goreng', category: 'Camilan', price: 15000, description: 'Kentang goreng renyah dengan saus pilihan.', emoji: '🍟', image: '/images/FrenchFries.jpg' },
  { id: 8, name: 'Roti Bakar Coklat Keju', category: 'Camilan', price: 17000, description: 'Roti bakar hangat dengan coklat dan keju.', emoji: '🍞', image: '/images/RotiBakarCoklatKeju.jpg', bestSeller: true },
  { id: 9, name: 'Pisang Goreng Keju', category: 'Camilan', price: 14000, description: 'Pisang goreng dengan taburan keju.', emoji: '🍌', image: '/images/PisangGorengKeju.jpg' },
  { id: 10, name: 'Cookies Coklat', category: 'Camilan', price: 10000, description: 'Cookies renyah dengan chocolate chip.', emoji: '🍪', image: '/images/CookiesCoklat.jpg' },
    { id: 11, name: 'Nasi Goreng Spesial', category: 'Makanan', price: 22000, description: 'Nasi goreng bumbu khas dengan telur, ayam suwir, dan kerupuk.', emoji: '🍛', image: '/images/NasiGoreng.jpg' },
  { id: 12, name: 'Kwetiau Goreng', category: 'Makanan', price: 22000, description: 'Kwetiau goreng dengan sayuran, telur, dan bakso.', emoji: '🍜', image: '/images/KwetiauGoreng.jpg' },
];