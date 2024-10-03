import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1 className="text-4xl font-bold mb-4 py-16">
        <Link href="/">Newspaper Site Updated</Link>
      </h1>
      <nav className="flex gap-4 border-t border-b">
        <Link className="p-4" href="/">
          Home
        </Link>
        <Link className="p-4" href="/politics">
          Politics
        </Link>
        <Link className="p-4" href="/weather">
          Weather
        </Link>
        <Link className="p-4" href="/sports">
          Sports
        </Link>
        <Link className="p-4" href="/international">
          International
        </Link>
        <Link className="p-4" href="/educational">
          Educational
        </Link>
        <Link className="p-4" href="/others">
          Others
        </Link>
      </nav>
    </header>
  );
}
