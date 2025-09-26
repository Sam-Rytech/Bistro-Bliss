const features = [
  {
    title: 'Multi Cuisine',
    desc: 'In the new era of technology we look in the future with certainty life.',
    icon: '🍽️',
  },
  {
    title: 'Easy To Order',
    desc: 'In the new era of technology we look in the future with certainty life.',
    icon: '🛒',
  },
  {
    title: 'Fast Delivery',
    desc: 'In the new era of technology we look in the future with certainty life.',
    icon: '🚚',
  },
]

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="grid max-w-6xl grid-cols-1 gap-8 px-6 mx-auto text-center md:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="p-6">
            <div className="mb-4 text-4xl">{f.icon}</div>
            <h4 className="mb-2 text-xl font-semibold">{f.title}</h4>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
