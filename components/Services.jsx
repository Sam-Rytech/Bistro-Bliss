const services = [
  { title: "Caterings", desc: "Delicious food catered for all events." },
  { title: "Birthdays", desc: "Celebrate birthdays with our special menus." },
  { title: "Weddings", desc: "Perfect catering for your special day." },
  { title: "Events", desc: "Food & drinks for corporate or private events." },
];

export default function Services() {
  return (
    <section className="py-20 text-center">
      <h3 className="mb-12 text-3xl font-bold">We also offer unique services for your events</h3>
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-4">
        {services.map((s, i) => (
          <div key={i} className="overflow-hidden rounded-lg shadow hover:shadow-md">
            <img src={`/service-${i+1}.jpg`} alt={s.title} className="object-cover w-full h-40" />
            <div className="p-6">
              <h4 className="mb-2 text-xl font-semibold">{s.title}</h4>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
