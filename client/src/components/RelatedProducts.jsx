import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { ShopContext } from "../context/ShopContext";
import Item from "./Item";

const RelatedProducts = ({ product, id }) => {
  const [relatedProducs, setRelatedProducts] = useState([]);
  const { products } = useContext(ShopContext);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(
        (item) => item.category === product.category && id !== item._id
      );
      setRelatedProducts(productsCopy.slice(0, 6));
    }
  }, [products]);

  return (
    <section className="pt-16">
      <Title title1={"Related"} title2={"Products"} titleStyles={"pb-10"} />
      {/* container */}
      {
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            555: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1150: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1350: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay]}
          className="min-h-[399px]"
        >
          {relatedProducs.map((product) => (
            <SwiperSlide key={product._id}>
              <Item product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </section>
  );
};

export default RelatedProducts;
