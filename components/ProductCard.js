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
        <div className="w-32 h-32 product-main sm:w-40 sm:h-40 flex-shrink-0 bg-gray-100 overflow-hidden group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Product Info - Middle */}
        <div className="flex-1 p-4 pb-0 sm:p-5 sm:pb-0 flex flex-col justify-between">
          
          {/* Stock Badge & Title */}
          <div>
            {/* Stock Badge */}
            <div className="flex items-center  gap-2 mb-2">
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
        <img
    src="/whatsapp.png" // or any URL
    alt="WhatsApp"
    className="whatsapp-img"
    
  />
          </button>
        </div>
      </div>
    </div>
  );
}
