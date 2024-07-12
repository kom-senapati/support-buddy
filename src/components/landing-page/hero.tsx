import Button from "@/components/shared/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="h-full flex flex-col justify-center gap-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Unlock the Power of Conversational AI
          </h1>
          <p className="text-lg text-muted-foreground">
            Support Buddy seamlessly integrates with your business to provide
            personalized and intelligent customer support.
          </p>
          <div className="flex items-center gap-4">
            <Button>Get Started</Button>
          </div>
        </div>
        <div className="relative">
          <img
            src="landing-page/hero/chatbot-hero.jpg"
            width="600"
            height="400"
            alt="AI Chatbot"
            className="mx-auto rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
