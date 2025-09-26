export default function AboutHero() {
  return (
    <section className="grid items-center max-w-6xl gap-12 px-6 pb-16 mx-auto bg-white pt-28 md:grid-cols-2">
      <div className="relative">
        <img src="/about.png" alt="Pizza plate" className="rounded-lg shadow-lg" />
        <div className="absolute p-6 text-white bg-gray-800 rounded-lg bottom-6 right-6 w-72">
          <h4 className="mb-4 text-lg font-semibold">Come and visit us</h4>
          <p className="mb-2 text-sm">📞 (414) 857 – 0107</p>
          <p className="mb-2 text-sm">📧 happytummy@restaurant.com</p>
          <p className="text-sm">📍 837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
        </div>
      </div>
      <div>
        <h2 className="mb-6 text-4xl font-bold">We provide healthy food for your family.</h2>
        <p className="mb-6 text-gray-600">
          Our story began with a vision to create a unique dining experience that merges fine dining,
          exceptional service, and a vibrant ambiance. Rooted in city’s rich culinary culture, we aim
          to honor our local roots while infusing a global palate.
        </p>
        <p className="text-gray-600">
          At place, we believe that dining is not just about food, but also about the overall
          experience. Our staff, renowned for their warmth and dedication, strives to make every
          visit an unforgettable event.
        </p>
      </div>
    </section>
  );
}
