import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Item = ({ product }) => {
  const { navigate, addTocart } = useContext(ShopContext);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="overflow-hidden p-5 bg-white">
      {/* Image */}
      <div
        onClick={() => {
          navigate(
            `/collection/${product.category.toLocaleLowerCase()}/${product._id}`
          );
          scrollTo(0, 0);
        }}
        onMouseEnter={()=>setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
        className="flexCenter bg-[#f5f5f5] overflow-hidden relative"
      >
        <img
          src={
            product.image.length > 1 && hovered
              ? product.image[1]
              : product.image[0]
          }
          alt="productImg"
          className="group-hover:bg-primaryDeep transition-all duration-300"
        />
      </div>
      {/* Info */}
      <div className="pt-3">
        <h4 className="bold-15 line-clamp-1 !py-0 uppercase">{product.name}</h4>
        <p className="line-clamp-1">{product.description}</p>
        <div className="flexBetween pt-2 gap-2">
          <p className="h5">{product.category}</p>
          <button onClick={()=>addTocart(product._id)} className="btn-outline !py-2 !px-0 w-full !text-xs">
            Add to Cart | ${product.offerPrice}.00
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
