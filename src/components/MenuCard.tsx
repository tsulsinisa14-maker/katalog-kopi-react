import { useState } from 'react';
import type { MenuItem } from '../types';
import { formatRupiah } from '../utils/format';

interface MenuCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

export default function MenuCard({ item, onAdd }: MenuCardProps) {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  return (
    <article className="card">
      <div className="card-emoji" aria-hidden="true">
        {item.emoji}
      </div>
      <h3>{item.name}</h3>
      <span className="badge">{item.category}</span>
      <p className="price">{formatRupiah(item.price)}</p>

      {showDetail && <p className="desc">{item.description}</p>}

      <div className="card-actions">
        <button type="button" className="btn" onClick={() => setShowDetail((prev) => !prev)}>
          {showDetail ? 'Tutup detail' : 'Lihat detail'}
        </button>
        <button type="button" className="btn btn-primary" onClick={() => onAdd(item)}>
          + Keranjang
        </button>
      </div>
    </article>
  );
}