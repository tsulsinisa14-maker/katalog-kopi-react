import type { Category, MenuItem } from '../types';

const groupKeywords: Record<Category, string> = {
  Kopi: 'minuman',
  'Non-Kopi': 'minuman',
  Camilan: 'makanan',
  Makanan: 'makanan',
};

export function matchesSearch(item: MenuItem, query: string): boolean {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length === 0) return true;

  const text = `${item.name} ${item.description}`.toLowerCase();
  const exact = [item.category.toLowerCase(), groupKeywords[item.category]];

  // "non kopi" (dengan spasi) dianggap sama dengan kategori "non-kopi"
  if (exact.includes(words.join('-'))) return true;

  return words.every((word) => text.includes(word) || exact.includes(word));
}