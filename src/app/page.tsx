import Link from "next/link";
import Chatbot from "@/components/ChatBot";

function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-lg bg-green-500 px-4 py-2 text-white">
      {children}
    </button>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-[100dvh] flex-col bg-background">

      <Chatbot />

      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#">
            <img src="nav-logo.svg" alt="Support Buddy" className="h-10" />
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

      <main className="flex-1">

        <section id="hero" className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="h-full flex flex-col justify-center gap-6">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Unlock the Power of Conversational AI
              </h1>
              <p className="text-lg text-muted-foreground">
                Support Buddy seamlessly integrates with your business to
                provide personalized and intelligent customer support.
              </p>
              <div className="flex items-center gap-4">
                <Button>Get Started</Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="chatbot-hero.jpg"
                width="600"
                height="400"
                alt="AI Chatbot"
                className="mx-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        <section id="features" className="bg-muted py-20 sm:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <img src="features/chat.svg" className="h-8" />
                <h3 className="text-xl font-bold text-foreground">
                  Intelligent Conversations
                </h3>
                <p className="text-muted-foreground">
                  Our AI-powered chatbot understands natural language and
                  provides personalized responses, ensuring seamless
                  interactions.
                </p>
              </div>
              <div className="space-y-4">
                <img src="features/integration.svg" alt="integration" className="h-8" />
                <h3 className="text-xl font-bold text-foreground">
                  Seamless Integrations
                </h3>
                <p className="text-muted-foreground">
                  Easily integrate our chatbot with your existing systems and
                  platforms, creating a unified customer experience.
                </p>
              </div>
              <div className="space-y-4">
                <img src="features/fast.svg" alt="fast setup" className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  Effortless Setup
                </h3>
                <p className="text-muted-foreground">
                  Get your chatbot up and running in no time with our
                  user-friendly interface and comprehensive documentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <img
                src="chatbot-cta.jpg"
                width="600"
                height="400"
                alt="AI Chatbot"
                className="mx-auto rounded-xl object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Enhance Your Customer Experience
              </h2>
              <p className="text-lg text-muted-foreground">
                Support Buddy is designed to streamline your customer support
                and provide personalized assistance, improving customer
                satisfaction and loyalty.
              </p>
              <div className="flex items-center gap-4">
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-muted text-foreground py-6 mt-10">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="font-heading text-lg font-bold">Support Buddy</h2>
          <p className="text-sm mt-2">© 2024 All rights reserved</p>
          <p className="text-sm mt-1">Made with ❤️ by <Link className="text-primary" href="https://github.com/kom-senapati">kom-senapati</Link></p>
        </div>
      </footer>
      
    </div>
  );
}
