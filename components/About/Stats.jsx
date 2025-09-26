const stats = [
  { value: "3", label: "Locations" },
  { value: "1995", label: "Founded" },
  { value: "65+", label: "Staff Members" },
  { value: "100%", label: "Satisfied Customers" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="grid max-w-4xl grid-cols-2 gap-6 mx-auto text-center md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="p-6 border rounded-lg bg-gray-50">
            <h4 className="text-3xl font-bold text-red-600">{s.value}</h4>
            <p className="mt-2 text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
