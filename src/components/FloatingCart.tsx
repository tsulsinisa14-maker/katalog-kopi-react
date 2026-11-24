interface FloatingCartProps {
  count: number;
}

export default function FloatingCart({ count }: FloatingCartProps) {
  // Tampil hanya kalau keranjang ada isinya
  if (count === 0) return null;

  return (
    <a href="#keranjang" className="fab" aria-label={`Lihat keranjang, ${count} item`}>
      <span>Keranjang</span>
      <span className="fab-count">{count}</span>
    </a>
  );
}