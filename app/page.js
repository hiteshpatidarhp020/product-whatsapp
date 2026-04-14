import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

export default function Home() {
  return (
    <main className="flex-1 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-8 sm:py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Order Premium Products
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Direct via WhatsApp - Fast, Easy, Secure
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Our Products
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
        </div>

        {/* Products List - Single Column Full Width */}
        <div className="space-y-4 sm:space-y-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 sm:py-12 mt-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6">
            <div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">About Us</h3>
              <p className="text-xs sm:text-sm">Premium products delivered via WhatsApp. Fast, secure, and convenient.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Contact</h3>
              <p className="text-xs sm:text-sm">WhatsApp: 8962048813</p>
              <p className="text-xs sm:text-sm">Available 24/7</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-xs sm:text-sm">
            <p>© 2024 Your Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
