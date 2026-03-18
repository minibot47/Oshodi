// components/GridSystem.jsx
// Real Unsplash fashion images so you can see how it looks

const products = [
    {
      id: 1,
      name: "Polka Dots Dress",
      originalPrice: "20.00 $",
      salePrice: "18.00 $",
      onSale: true,
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    },
    {
      id: 2,
      name: "Furry Jacket",
      originalPrice: null,
      salePrice: "15.00 $",
      onSale: false,
      img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    },
    {
      id: 3,
      name: "Dotted Dress",
      originalPrice: null,
      salePrice: "20.00 $",
      onSale: false,
      img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
    },
    {
      id: 4,
      name: "Long Neck Blouse",
      originalPrice: null,
      salePrice: "25.00 $",
      onSale: false,
      img: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=600&q=80",
    },
    {
      id: 5,
      name: "Long Neck Sweater",
      originalPrice: null,
      salePrice: "45.00 $",
      onSale: false,
      img: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=80",
    },
    {
      id: 6,
      name: "Long Jacket",
      originalPrice: "18.00 $",
      salePrice: "16.00 $",
      onSale: true,
      img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    },
  ];
  
  export default function GridSystem() {
    return (
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full mt-8"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-[3/4]"
          >
  
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
  
            <div className="absolute bottom-0 left-0 w-full px-4 pb-5 pt-10 bg-gradient-to-t from-black/60 to-transparent text-white">
              <p className="text-base font-medium mb-1">{product.name}</p>
              <div className="flex items-center gap-3">
                {product.onSale && (
                  <span className="text-sm line-through opacity-70">{product.originalPrice}</span>
                )}
                <span className="text-base font-semibold underline underline-offset-2">{product.salePrice}</span>
              </div>
            </div>
  
          </div>
        ))}
      </div>
    );
  }