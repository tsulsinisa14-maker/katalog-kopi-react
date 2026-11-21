interface FooterProps {
  brandName: string;
  studentName: string;
  nim: string;
}

export default function Footer({ brandName, studentName, nim }: FooterProps) {
  return (
    <footer className="footer">
      <p>
        &copy; {brandName} {new Date().getFullYear()} {studentName} • NIM {nim}
      </p>
    </footer>
  );
}