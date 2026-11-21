import { useState } from 'react';
import type { CartItem } from '../types';
import { formatRupiah } from '../utils/format';

interface CartProps {
  items: CartItem[];
  onChangeQty: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  onClear: () => void;
  onCheckout: (customerName: string) => void;
}

export default function Cart({ items, onChangeQty, onRemove, onClear, onCheckout }: CartProps) {
  const [customerName, setCustomerName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const total = items.reduce((sum, c) => sum + c.item.price * c.qty, 0);

  const handleCheckout = () => {
    const name = customerName.trim();
    if (name === '') {
      setError('Nama pemesan wajib diisi.');
      return;
    }
    onCheckout(name);
    setCustomerName('');
    setError('');
  };

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

          <label htmlFor="customer" className="cart-label">
            Nama pemesan
          </label>
          <input
            id="customer"
            className="cart-input"
            type="text"
            placeholder="Contoh: Tsulsi"
            value={customerName}
            onChange={(e) => {
              setCustomerName(e.target.value);
              setError('');
            }}
          />
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <div className="cart-buttons">
            <button type="button" className="btn btn-primary" onClick={handleCheckout}>
              Pesan sekarang
            </button>
            <button type="button" className="btn" onClick={onClear}>
              Kosongkan
            </button>
          </div>
        </>
      )}
    </aside>
  );
}