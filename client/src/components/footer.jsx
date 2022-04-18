
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        Copyright &copy; {year} Idae. All Right Reserved.
      </p>
    </div>
  );
}
