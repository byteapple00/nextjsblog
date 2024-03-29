import Link from "next/link";
import "../styles/global.css"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Link href="/">
          <h1 className="text-3xl text-white font-bold">noodle_nonsense's blog 💻</h1>
        </Link>
        <p className="text-slate-300">🖖 Welcome to my blog!</p>
        <br/>
      </div>
    </header>
  );
  const footer = (
    <footer>
      <div className="border-t border-slate-500 mt-6 py-6 text-center text-slate-500">
        <br/>
        <h3>Develop by noodle_nonsense</h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body >
        <div className="mx-auto border border-red-500 max-w-2xl px-6">
        {header}
        {children}
        {footer}
        </div>
      </body>
    </html>
  );
}


