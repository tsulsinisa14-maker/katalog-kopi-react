import type { SortOption } from '../types';

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <div className="sort">
      <label htmlFor="sort">Urutkan</label>
      <select id="sort" value={value} onChange={(e) => onChange(e.target.value as SortOption)}>
        <option value="default">Bawaan</option>
        <option value="termurah">Harga termurah</option>
        <option value="termahal">Harga termahal</option>
        <option value="nama">Nama A–Z</option>
      </select>
    </div>
  );
}