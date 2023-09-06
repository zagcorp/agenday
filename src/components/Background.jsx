export default function Background({ img }) {
  return (
    <div
      className="fixed inset-0 -z-50 w-full h-screen"
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
        backgroundPosition: "100% 100%",
        backgroundSize: "100% 100%",
      }}
    />
  );
}