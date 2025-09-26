const posts = [
  { title: "The secret tips to prepare a perfect burger", date: "Jan 5, 2023", img: "/blog1.jpg" },
  { title: "How to prepare the perfect french fries", date: "Jan 5, 2023", img: "/blog2.jpg" },
  { title: "6 pizza restaurants you should visit", date: "Jan 5, 2023", img: "/blog3.jpg" },
];

export default function Blog() {
  return (
    <section className="max-w-6xl px-6 py-20 mx-auto">
      <h3 className="mb-12 text-3xl font-bold">Our Blog & Articles</h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {posts.map((p, i) => (
          <div key={i} className="overflow-hidden rounded-lg shadow hover:shadow-md">
            <img src={p.img} alt={p.title} className="object-cover w-full h-48" />
            <div className="p-6">
              <span className="text-sm text-gray-500">{p.date}</span>
              <h4 className="mt-2 text-lg font-semibold">{p.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
