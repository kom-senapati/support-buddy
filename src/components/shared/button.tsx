export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-lg bg-green-500 px-4 py-2 text-white">
      {children}
    </button>
  );
}
