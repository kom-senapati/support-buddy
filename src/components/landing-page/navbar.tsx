import Button from "@/components/shared/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#">
            <img src="landing-page/navbar/nav-logo.svg" alt="Support Buddy" className="h-10" />
            <span className="sr-only">Support Buddy</span>
          </Link>
          <nav className="hidden space-x-4 sm:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-foreground hover:underline"
            >
              Features
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-foreground hover:underline"
            >
              Contact
            </Link>
          </nav>
          <Button>Try for Free</Button>
        </div>
      </header>
  )
}