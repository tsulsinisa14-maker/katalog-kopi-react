interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search">
      <label htmlFor="search" className="sr-only">
        Cari menu
      </label>
      <input
        id="search"
        type="search"
        placeholder="Cari menu, kategori, atau bahan..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}