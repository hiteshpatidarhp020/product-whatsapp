'use client';

export default function ProductCard({ product }) {
  const handleWhatsAppOrder = () => {
    // Format the WhatsApp message
    const message = `*Order Details*
📦 Product: ${product.name}
📝 ${product.description}
🆔 ID: ${product.id}
💰 Price: ₹${product.price}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Redirect to WhatsApp
    window.open(`https://wa.me/6263481054?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Horizontal Container - Image Left, Info Right */}
      <div className="flex items-stretch">
        
        {/* Product Image - Left Side */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 bg-gray-100 overflow-hidden group">
          <imggit add .
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Product Info - Middle */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
          
          {/* Stock Badge & Title */}
          <div>
            {/* Stock Badge */}
            <div className="flex items-center gap-2 mb-2">
              {product.stock > 15 ? (
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                  In Stock: {product.stock}
                </span>
              ) : (
                <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
                  Low Stock: {product.stock}
                </span>
              )}
            </div>

            {/* Product Name */}
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2 mb-1">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>
          </div>

          {/* Price */}
          <div className="mt-2">
            <p className="text-lg sm:text-xl font-bold text-gray-900">
              ₹<span>{product.price.toLocaleString('en-IN')}</span>
            </p>
          </div>
        </div>

        {/* WhatsApp Button - Right Side */}
        <div className="w-14 sm:w-16 flex-shrink-0 bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center hover:from-green-100 hover:to-green-200 transition-colors duration-200 active:bg-green-200">
          <button
            onClick={handleWhatsAppOrder}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-lg active:scale-95 transform flex-shrink-0"
            title="Order on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.41 2.124 7.738L2.929 22.5l8.272-2.737c2.226 1.214 4.72 1.856 7.297 1.856h.005c5.395 0 9.799-4.383 9.799-9.781 0-2.62-.648-5.023-1.88-7.152a9.865 9.865 0 00-7.617-3.98z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
