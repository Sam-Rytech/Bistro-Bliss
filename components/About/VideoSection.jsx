export default function VideoSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/video-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative px-6 text-center text-white">
        <button className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-white/90">
          ▶
        </button>
        <h3 className="text-3xl font-bold">Feel the authentic & original taste from us</h3>
      </div>
    </section>
  );
}
