export default function AboutInfo() {
  return (
    <section className="grid items-center max-w-6xl gap-12 px-6 py-20 mx-auto bg-gray-50 md:grid-cols-2">
      <div>
        <h3 className="mb-6 text-3xl font-bold">A little information for our valuable guest</h3>
        <p className="text-gray-600">
          At place, we believe that dining is not just about food, but also about the overall
          experience. Our staff, renowned for their warmth and dedication, strives to make every
          visit an unforgettable event.
        </p>
      </div>
      <img src="/about-info.jpg" alt="Chef cooking" className="rounded-lg shadow-lg" />
    </section>
  );
}
