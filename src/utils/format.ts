// Mengubah angka menjadi format rupiah, contoh: 18000 -> Rp 18.000
export function formatRupiah(value: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
}

// Mengubah rating menjadi satu angka desimal, contoh: 4.8 -> 4,8
export function formatRating(value: number): string {
  return value.toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}