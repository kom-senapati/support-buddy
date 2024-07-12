export default function LandingPageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-[100dvh] flex-col bg-background">
      {children}
    </div>
  );
}
