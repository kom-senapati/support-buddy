export default function Features() {
  return (
    <section id="features" className="bg-muted py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <img src="landing-page/features/chat.svg" className="h-8" />
            <h3 className="text-xl font-bold text-foreground">
              Intelligent Conversations
            </h3>
            <p className="text-muted-foreground">
              Our AI-powered chatbot understands natural language and provides
              personalized responses, ensuring seamless interactions.
            </p>
          </div>
          <div className="space-y-4">
            <img
              src="landing-page/features/integration.svg"
              alt="integration"
              className="h-8"
            />
            <h3 className="text-xl font-bold text-foreground">
              Seamless Integrations
            </h3>
            <p className="text-muted-foreground">
              Easily integrate our chatbot with your existing systems and
              platforms, creating a unified customer experience.
            </p>
          </div>
          <div className="space-y-4">
            <img
              src="landing-page/features/fast.svg"
              alt="fast setup"
              className="h-8 w-8 text-primary"
            />
            <h3 className="text-xl font-bold text-foreground">
              Effortless Setup
            </h3>
            <p className="text-muted-foreground">
              Get your chatbot up and running in no time with our user-friendly
              interface and comprehensive documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
