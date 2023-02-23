import Link from "next/link";
import "../styles/global.css"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div>
        <Link href="/">
        <h1 className="text-3xl font-bold">
        teknary log
        </h1>
        </Link>
        <p>Welcome</p>
        <br/>s
      </div>
    </header>
  );
  const footer = (
    <footer>
      <div>
        <h3>Develop by Tien</h3>
      </div>
    </footer>
  );
  return (
    <html>
      <head />
      <body>
        {header}
        {children}
        {footer}
        </body>
    </html>
  );
}
