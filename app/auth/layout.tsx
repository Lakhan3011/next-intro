export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="p-4 border-b text-center">Signin now.. Get 20% off</div>
      {children}
    </div>
  );
}
