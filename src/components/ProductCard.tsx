import Container from './Container'
import { productCard } from '../constants/productCard'

const ProductCard = () => {
  return (
    <Container className="mt-20">
      <div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">Best Seller Products</h2>
          <p className="text-gray-600">There are many variations of passages</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {productCard.map((produit, index) => (
            <div key={index} className=" group bg-white rounded-lg p-4">
              <div className="relative w-full overflow-hidden rounded-md">
                <span className="flex items-center justify-center absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold w-15 h-15 rounded-full">
                  Sale
                </span>

                <img
                  src={produit.image}
                  alt={produit.name}
                  className="w-full object-cover  rounded-md"
                />
              </div>
              <h3 className="text-lg font-normal mt-2 group-hover:font-bold ">{produit.name}</h3>
              <div className="flex items-center justify-start">
                <p
                  className={`text-xl font-semibold mt-1 pl-3 ${produit.edit ?? ''} transition-all duration-300 group-hover:hidden`}
                >
                  ${produit.price}
                </p>
                {produit.discount && (
                  <p className="text-xl font-semibold mt-1 pl-3 group-hover:hidden transition-all duration-300">
                    ${produit.discount}
                  </p>
                )}
              </div>
              <button className="hidden group-hover:flex bg-red-500 text-white py-3 px-15 rounded-2xl transition-all duration-300 justify-center cursor-pointer">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default ProductCard
