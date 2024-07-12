import Button from "@/components/shared/button";

export default function CallToAction() {
  return (
    <section
      id="cta"
      className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <img
            src="landing-page/cta/chatbot-cta.jpg"
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
            Support Buddy is designed to streamline your customer support and
            provide personalized assistance, improving customer satisfaction and
            loyalty.
          </p>
          <div className="flex items-center gap-4">
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
