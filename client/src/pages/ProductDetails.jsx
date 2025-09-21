import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link, useParams } from "react-router-dom";
import {
  TbHeart,
  TbShoppingBagPlus,
  TbStarFilled,
  TbStarHalfFilled,
} from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";
import ProductDescription from "../components/ProductDescription";
import ProductFeatures from "../components/ProductFeatures";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetails = () => {
  const { products, currency, addToCart } = useContext(ShopContext);
  const { id } = useParams();

  const product = products.find((item) => item._id === id);
  const [image, setImage] = useState(null);
  const [size, setSize] = useState(null);

  useEffect(() => {
    if (product) {
      setImage(product.image[0]);
    }
  }, [product]);

  return (
    product && (
      <div className="max-padd-container py-16 pt-28 bg-primary">
        <p>
          <Link to={"/"}>Home</Link> /<Link to={"/collection"}>Collection</Link>{" "}
          /
          <Link to={`/collection/${product.category}`}>{product.category}</Link>{" "}
          /<span className="text-secondary">{product.name}</span>
        </p>
        {/* product data */}
        <div className="flex gap-10 flex-col xl:flex-row my-6">
          {/* Image */}
          <div className="flex flex-1 gap-x-2 max-w-[533px]">
            <div className="flex-1 flexCenter flex-col gap-[7px] flex-wrap">
              {product.image.map((item, i) => (
                <div key={i} className="bg-white">
                  <img
                    onClick={() => setImage(item)}
                    src={item}
                    alt={"productImg"}
                    className="object-cover aspect-square"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-[4] bg-white">
              <img src={image} alt="productImage" />
            </div>
          </div>
          {/* Product Info */}
          <div className="flex-1 px-5 py-3 bg-white">
            <h3 className="h3 leading-none">{product.name}</h3>
            {/* Rating a price*/}
            <div className="flex items-center gap-x-2 pt-2">
              <div className="flex gap-x-2 text-yellow-400">
                <TbStarFilled />
                <TbStarFilled />
                <TbStarFilled />
                <TbStarFilled />
                <TbStarHalfFilled />
              </div>
              <p className="medium-14">(22)</p>
            </div>
            <div className="h4 flex items-baseline gap-4 my-2">
              <h3 className="h3 line-through text-secondary">
                {currency}
                {product.price}.00
              </h3>
              <h4 className="h4">
                {currency}
                {product.offerPrice}.00
              </h4>
            </div>
            <p className="max-w-[555px]">{product.description}</p>
            <div className="flex flex-col gap-4 my-4 mb-5">
              <div className="flex gap-2">
                {[...product.size]
                  .sort((a, b) => {
                    const order = ["S", "M", "L", "XL", "XXL"];
                    return order.indexOf(a) - order.indexOf(b);
                  })
                  .map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setSize(item)}
                      className={`${
                        item === size
                          ? "ring-1 ring-slate-900/20"
                          : "ring-1 ring-slate-900/5"
                      } medium-14 h-8 w-10 bg-primary rounded-none`}
                    >
                      {item}
                    </button>
                  ))}
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <button
                onClick={() => addToCart(product._id, size)}
                className="btn-dark sm:w-1/2 flexCenter gap-x-2 capitalize"
              >
                Add to Cart <TbShoppingBagPlus />
              </button>
              <button className="btn-light">
                <TbHeart className="text-xl" />
              </button>
            </div>
            <div className="flex items-center gap-x-2 mt-3">
              <FaTruckFast className="text-lg" />
              <span className="medium-14">
                Free Delivery on orders over 500$
              </span>
            </div>
            <hr className="my-3 w-2/3" />
            <div className="mt-2 flex flex-col gap-1 text-gray-30 text-[14px]">
              <p>Authenticy You Can Trust</p>
              <p>Enjoy Cash on Delivery for Your Convenience</p>
              <p>Easy Returns and Exchanges Within 7 Days</p>
            </div>
          </div>
        </div>
        <ProductDescription />
        <ProductFeatures />
        {/* Related Products */}
        <RelatedProducts product={product} id={id} />
      </div>
    )
  );
};

export default ProductDetails;
