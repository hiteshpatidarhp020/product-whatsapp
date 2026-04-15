export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ProductHub hp</h1>
              <p className="text-xs text-gray-500">Modern eCommerce</p>
            </div>
          </div>

          {/* Right Side - Info */}
          <div className="text-right">
            <p className="text-sm text-gray-600 font-medium">Premium Products</p>
            <p className="text-xs text-gray-400">Direct via WhatsApp</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
