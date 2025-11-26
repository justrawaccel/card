export function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)] blur-[100px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] blur-[80px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
    </div>
  );
}
