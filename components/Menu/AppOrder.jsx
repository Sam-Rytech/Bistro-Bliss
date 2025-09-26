import React from 'react'

const apps = [
  'ubereats',
  'grubhub',
  'postmates',
  'doordash',
  'foodpanda',
  'deliveroo',
  'instacart',
  'justeat',
  'didifood',
]

export default function AppOrder() {
  return (
    <section className="mt-16 flex flex-col items-center gap-10 bg-[#f9f9f7]">
      <div className="max-w-xl text-center">
        <h2 className="text-2xl font-bold">You can order through apps</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
          sed et aliquet aliquet risus tempor semper.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-20 items-center">
        {apps.map((app) => (
          <img
            key={app}
            src={`/Menu/${app}.png`}
            alt={app}
            className="max-w-[150px] h-auto mx-auto p-5 shadow-md hover:shadow-xl transition rounded-md"
          />
        ))}
      </div>
    </section>
  )
}
