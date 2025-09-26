const items = [
  { title: "Breakfast", desc: "Start your day right with our breakfast menu." },
  { title: "Main Dishes", desc: "Tasty and delicious dishes for your appetite." },
  { title: "Drinks", desc: "Refreshing beverages to complement your meals." },
  { title: "Desserts", desc: "Sweet treats to end your meal perfectly." },
];

export default function Menu() {
  return (
    <section className="py-20 text-center">
      <h3 className="mb-12 text-3xl font-bold">Browse Our Menu</h3>
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-4">
        {items.map((item, i) => (
          <div key={i} className="p-6 border rounded-lg shadow hover:shadow-md">
            <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full"></div>
            <h4 className="mb-2 text-xl font-semibold">{item.title}</h4>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
