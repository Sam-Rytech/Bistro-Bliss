export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/BistroHero.png')" }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative px-6 text-center text-white">
        <h2 className="mb-4 text-5xl font-bold">Best food for your taste</h2>
        <p className="max-w-xl mx-auto mb-6 text-lg">
          Discover delectable cuisine and unforgettable moments in our restaurant.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 font-semibold bg-red-600 rounded-md hover:bg-red-700">
            Book a Table
          </button>
          <button className="px-6 py-3 font-semibold border border-white rounded-md hover:bg-white hover:text-black">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
}
