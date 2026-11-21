import type { MenuItem } from '../types';
import MenuCard from './MenuCard';

interface MenuListProps {
  items: MenuItem[];
  onAdd: (item: MenuItem) => void;
}

export default function MenuList({ items, onAdd }: MenuListProps) {
  if (items.length === 0) {
    return <p className="empty">Menu tidak ditemukan.</p>;
  }

  return (
    <div className="grid">
      {items.map((item) => (
        <MenuCard key={item.id} item={item} onAdd={onAdd} />
      ))}
    </div>
  );
}