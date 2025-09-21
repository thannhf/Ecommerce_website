import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import toast from "react-hot-toast";

const ProductList = () => {
  const { products, currency, fetchProducts, axios } = useContext(ShopContext);

  const toggleStock = async(productId, inStock)=>{
    try {
      const {data} = await axios.post('/api/product/stock',{productId, inStock})
      if(data.success) {
        fetchProducts()
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="px-2 sm:px-6 py-12 m-2 h-[97vh] bg-primary overflow-y-scroll lg:w-4/5 rounded-xl">
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[1fr_3.5fr_1fr_1fr_1fr] items-center py-1 px-2 bg-white bold-14 sm:bold-15 mb-1 rounded">
          <h5>Image</h5>
          <h5>Name</h5>
          <h5>Category</h5>
          <h5>Price</h5>
          <h5>InStock</h5>
        </div>
        {/* Products list */}
        {products.map((product) => (
          <div key={product._id} className="grid grid-cols-[1fr_3.5fr_1fr_1fr_1fr] items-center gap-2 p-2 bg-white rounded-lg">
            <img
              src={product.image[0]}
              alt="productImg"
              className="w-12 rounded bg-primary"
            />
            <h5 className="text-sm font-semibold">{product.name}</h5>
            <p className="text-sm font-semibold">{product.category}</p>
            <div className="text-sm font-semibold">
              {currency}
              {product.offerPrice}
            </div>
            <div>
              <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                <input
                  onClick={()=>toggleStock(product._id, !product.inStock)}
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked={product.inStock}
                />
                <div className="w-10 h-6 bg-slate-300 rounded-full peer peer-checked:bg-secondary transition-colors duration-200" />
                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4" />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
