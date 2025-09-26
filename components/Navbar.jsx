export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        <h1 className="text-2xl font-bold text-red-600">Bistro Bliss</h1>
        <nav className="hidden gap-8 text-gray-700 md:flex">
          <a href="#" className="hover:text-red-600">Home</a>
          <a href="#" className="hover:text-red-600">About</a>
          <a href="#" className="hover:text-red-600">Menu</a>
          <a href="#" className="hover:text-red-600">Pages</a>
          <a href="#" className="hover:text-red-600">Contact</a>
        </nav>
        <button className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700">
          Book a Table
        </button>
      </div>
    </header>
  );
}
