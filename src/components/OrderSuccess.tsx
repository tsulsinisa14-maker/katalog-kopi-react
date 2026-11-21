import type { Order } from '../types';
import { formatRupiah } from '../utils/format';

interface OrderSuccessProps {
  order: Order;
  onClose: () => void;
}

export default function OrderSuccess({ order, onClose }: OrderSuccessProps) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="order-title">
      <div className="modal">
        <h2 id="order-title">Pesanan berhasil! </h2>
        <p>
          Terima kasih, <strong>{order.customerName}</strong>. Nomor pesanan: <strong>{order.id}</strong>
        </p>

        <ul className="order-list">
          {order.items.map((c) => (
            <li key={c.item.id}>
              <span>
                {c.qty}× {c.item.name}
              </span>
              <span>{formatRupiah(c.item.price * c.qty)}</span>
            </li>
          ))}
        </ul>

        <p className="cart-total">
          Total bayar: <strong>{formatRupiah(order.total)}</strong>
        </p>
        <button type="button" className="btn btn-primary" onClick={onClose}>
          Selesai
        </button>
      </div>
    </div>
  );
}