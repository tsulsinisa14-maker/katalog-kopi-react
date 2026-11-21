interface HeaderProps {
  title: string;
  studentName: string;
  nim: string;
  cartCount: number;
}

export default function Header({ title, studentName, nim, cartCount }: HeaderProps) {
  return (
    <header className="header">
      <div>
        <h1>{title}</h1>
        <p>
          {studentName} • NIM {nim}
        </p>
      </div>
      <nav className="nav" aria-label="Navigasi utama">
        <a href="#menu">Menu</a>
        <a href="#keranjang">Keranjang ({cartCount})</a>
      </nav>
    </header>
  );
}