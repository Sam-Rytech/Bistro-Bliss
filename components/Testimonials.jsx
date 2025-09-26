const reviews = [
  { text: "The best restaurant! The food is amazing...", name: "Sophia Rebecca", role: "Los Angeles, CA" },
  { text: "Simply delicious! Great service and tasty meals...", name: "Matt Cannon", role: "San Diego, CA" },
  { text: "One of a kind restaurant! Cozy vibe and awesome menu...", name: "Jordy Smith", role: "New York, NY" },
];

export default function Testimonials() {
  return (
    <section className="py-20 text-center bg-gray-50">
      <h3 className="mb-12 text-3xl font-bold">What Our Customers Say</h3>
      <div className="grid max-w-6xl grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-3">
        {reviews.map((r, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow">
            <p className="mb-4 italic text-gray-700">"{r.text}"</p>
            <h5 className="font-semibold">{r.name}</h5>
            <span className="text-sm text-gray-500">{r.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
