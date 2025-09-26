export default function Footer() {
  return (
    <footer className="py-12 mt-20 text-gray-400 bg-gray-900">
      <div className="grid max-w-6xl grid-cols-1 gap-12 px-6 mx-auto md:grid-cols-4">
        <div>
          <img src="/FooterLogo.png" alt="Bistro Bliss"/>
          <p className="mb-4 text-sm">
            Indulge in delicious food and enjoy the best dining experience.
          </p>
          <div className="flex gap-4">
            <span className="w-8 h-8 bg-gray-700 rounded-full"></span>
            <span className="w-8 h-8 bg-gray-700 rounded-full"></span>
            <span className="w-8 h-8 bg-gray-700 rounded-full"></span>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Menu</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Utility Pages</h4>
          <ul className="space-y-2 text-sm">
            <li>Start Here</li>
            <li>Style Guide</li>
            <li>404 Not Found</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Follow us on Instagram</h4>
          <div className="grid grid-cols-2 gap-2">
            <img src="/Footer1.png" className="rounded-md" />
            <img src="/Footer2.png" className="rounded-md" />
            <img src="/Footer3.png" className="rounded-md" />
            <img src="/Footer4.png" className="rounded-md" />
          </div>
        </div>
      </div>
      <p className="mt-8 text-sm text-center text-gray-500">
        © 2025 Bistro Bliss. All rights reserved.
      </p>
    </footer>
  );
}
