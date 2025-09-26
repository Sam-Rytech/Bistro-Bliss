export default function About() {
  return (
    <section className="grid items-center max-w-6xl gap-12 px-6 py-20 mx-auto md:grid-cols-2">
      <img src="/about.jpg" alt="About us" className="rounded-lg shadow-lg" />
      <div>
        <h3 className="mb-4 text-3xl font-bold">We provide healthy food for your family</h3>
        <p className="mb-6 text-gray-600">
          Our story began with a vision to create a unique dining experience blending delicious
          meals with a cozy atmosphere.
        </p>
        <button className="px-6 py-3 text-white bg-red-600 rounded-md hover:bg-red-700">
          More About Us
        </button>
      </div>
    </section>
  );
}
