import Link from "next/link";

const products = [
    {
      id: 16,
      name: "iPhone 17 Pro Max",
      originalPrice: "₦ 2,400,000",
      salePrice: "₦ 2,250,000",
      onSale: true,
      img: "/images/iPhone17pro.jpg",
    },
    {
      id: 18,
      name: "Macbook Pro 2025",
      originalPrice: "₦ 4,300,000",
      salePrice: "₦ 3,600,000",
      onSale: true,
      img: "/images/macbookpro2025.jpg",
    },
    {
      id: 8,
      name: "JBL Heaphones",
      originalPrice: null,
      salePrice: "₦ 89,000 ",
      onSale: false,
      img: "/images/jblheaphones.jpg",
    },
    {
      id: 17,
      name: "LX 570 2020",
      originalPrice: null,
      salePrice: "₦ 90,000,000",
      onSale: false,
      img: "/images/lexus.jpg",
    },
    {
      id: 2,
      name: "Washing Machine",
      originalPrice: null,
      salePrice: "₦ 280,000",
      onSale: false,
      img: "/images/appliances.jpg",
    },
    {
      id: 14,
      name: "Smart TV",
      originalPrice: "₦ 380,000",
      salePrice: "₦ 319,000",
      onSale: true,
      img: "/images/tv.jpg",
    },
  ];
  
  export default function GridSystem() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full mt-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/shop/${product.id}`}
            className="relative overflow-hidden cursor-pointer group w-full h-[420px] block"
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
                <span className="text-xl font-semibold underline-offset-2">{product.salePrice}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }