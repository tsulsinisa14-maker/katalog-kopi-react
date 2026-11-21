interface FooterProps {
  studentName: string;
  nim: string;
}

export default function Footer({ studentName, nim }: FooterProps) {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} {studentName} • NIM {nim} • Tugas Pertemuan 7 Pengembangan Aplikasi Web
      </p>
    </footer>
  );
}