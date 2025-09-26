const reviews = [
  { text: "Last night, we dined at place and were simply blown away...", name: "Sophire Robson", role: "Los Angeles, CA", img: "/user1.jpg" },
  { text: "Place exceeded my expectations on all fronts...", name: "Matt Cannon", role: "San Diego, CA", img: "/user2.jpg" },
  { text: "The culinary experience at place is first to none...", name: "Andy Smith", role: "San Francisco, CA", img: "/user3.jpg" },
  { text: "Warm staff and cozy atmosphere, highly recommended...", name: "Jordy Miller", role: "Chicago, IL", img: "/user4.jpg" },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <h3 className="mb-12 text-3xl font-bold text-center">What Our Customers Say</h3>
      <div className="grid max-w-6xl grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-4">
        {reviews.map((r, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow">
            <p className="mb-4 italic text-gray-700">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <img src={r.img} alt={r.name} className="object-cover w-10 h-10 rounded-full" />
              <div>
                <h5 className="font-semibold">{r.name}</h5>
                <span className="text-sm text-gray-500">{r.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
