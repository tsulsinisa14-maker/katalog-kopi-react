interface HeaderProps {
  title: string;
  studentName: string;
  cartCount: number;
}

export default function Header({ title, studentName, cartCount }: HeaderProps) {
  return (
    <header className="header">
      <div>
        <h1>{title}</h1>
        <p>{studentName}</p>
      </div>
      <nav className="nav" aria-label="Navigasi utama">
        <a href="#keranjang">Keranjang ({cartCount})</a>
      </nav>
    </header>
  );
}