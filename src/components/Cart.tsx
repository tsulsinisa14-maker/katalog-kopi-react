import type { CartItem } from '../types';
import { formatRupiah } from '../utils/format';

interface CartProps {
  items: CartItem[];
  onChangeQty: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  onClear: () => void;
}

export default function Cart({ items, onChangeQty, onRemove, onClear }: CartProps) {
  const total = items.reduce((sum, c) => sum + c.item.price * c.qty, 0);

  return (
    <aside className="cart" id="keranjang" aria-label="Keranjang">
      <h2>Keranjang</h2>

      {items.length === 0 ? (
        <p className="cart-empty">Keranjang masih kosong. Tambahkan menu favoritmu.</p>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((c) => (
              <li key={c.item.id} className="cart-item">
                <div className="cart-info">
                  <strong>
                    {c.item.emoji} {c.item.name}
                  </strong>
                  <span>{formatRupiah(c.item.price * c.qty)}</span>
                </div>
                <div className="cart-controls">
                  <button type="button" className="qty" onClick={() => onChangeQty(c.item.id, -1)} aria-label={`Kurangi ${c.item.name}`}>
                    −
                  </button>
                  <span className="qty-value">{c.qty}</span>
                  <button type="button" className="qty" onClick={() => onChangeQty(c.item.id, 1)} aria-label={`Tambah ${c.item.name}`}>
                    +
                  </button>
                  <button type="button" className="btn btn-sm btn-danger" onClick={() => onRemove(c.item.id)}>
                    Hapus
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <p className="cart-total">
            Total: <strong>{formatRupiah(total)}</strong>
          </p>
          <button type="button" className="btn" onClick={onClear}>
            Kosongkan keranjang
          </button>
        </>
      )}
    </aside>
  );
}