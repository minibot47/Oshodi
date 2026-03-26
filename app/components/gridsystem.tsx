// components/GridSystem.jsx
// Real Unsplash fashion images so you can see how it looks

const products = [
    {
      id: 1,
      name: "iphone 16",
      originalPrice: "₦ 1,050,000",
      salePrice: "₦ 950,000",
      onSale: true,
      img: "/images/iphone16.jpg",
    },
    {
      id: 2,
      name: "Macbook pro 2021",
      originalPrice: null,
      salePrice: "₦ 1,350,000",
      onSale: false,
      img: "/images/macbook.jpg",
    },
    {
      id: 3,
      name: "JBL Heaphones",
      originalPrice: null,
      salePrice: "₦ 150,000 ",
      onSale: false,
      img: "/images/jblheaphones.jpg",
    },
    {
      id: 4,
      name: "LX 570 2020",
      originalPrice: null,
      salePrice: "₦ 90,000,000",
      onSale: false,
      img: "/images/lexus.jpg",
    },
    {
      id: 5,
      name: "Washing Machine",
      originalPrice: null,
      salePrice: "₦ 450,000",
      onSale: false,
      img: "/images/appliances.jpg",
    },
    {
      id: 6,
      name: "Smart TV",
      originalPrice: "₦ 600,000",
      salePrice: "₦ 480,000",
      onSale: true,
      img: "/images/tv.jpg",
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
            className="relative overflow-hidden cursor-pointer group w-full h-[420px]"
          >
  
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
  
            <div className="absolute bottom-0 left-0 w-full px-4 pb-5 pt-10 bg-gradient-to-t from-black/20 to-transparent text-white">
              <p className="text-lg mb-1">{product.name}</p>
              <div className="flex items-center gap-7">
                {product.onSale && (
                  <span className="text-xl line-through opacity-70">{product.originalPrice}</span>
                )}
                <span className="text-xl font-semibold  underline-offset-2">{product.salePrice}</span>
              </div>
            </div>
  
          </div>
        ))}
      </div>
    );
  }