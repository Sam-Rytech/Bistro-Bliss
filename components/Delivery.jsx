export default function Delivery() {
  return (
    <section className="grid items-center max-w-6xl gap-12 px-6 py-20 mx-auto md:grid-cols-2">
      <img src="/delivery.jpg" alt="Delivery service" className="rounded-lg shadow-lg" />
      <div>
        <h3 className="mb-4 text-3xl font-bold">Fastest Food Delivery in City</h3>
        <p className="mb-4 text-gray-600">
          Get your favorite meals delivered within 30 minutes. Fresh, hot, and delicious food
          at your doorstep.
        </p>
        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          <li>Delivery within 30 minutes</li>
          <li>Best Offer & Prices</li>
          <li>Online Services Available</li>
        </ul>
      </div>
    </section>
  );
}
