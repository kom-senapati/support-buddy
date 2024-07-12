import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted text-foreground py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="font-heading text-lg font-bold">Support Buddy</h2>
        <p className="text-sm mt-2">© 2024 All rights reserved</p>
        <p className="text-sm mt-1">
          Made with ❤️ by{" "}
          <Link className="text-primary" href="https://github.com/kom-senapati">
            kom-senapati
          </Link>
        </p>
      </div>
    </footer>
  );
}
