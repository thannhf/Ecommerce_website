import React, { useContext } from "react";
import Title from "./Title";
import { categories } from "../assets/data";
import { ShopContext } from "../context/ShopContext";

const Categories = () => {
  const { navigate } = useContext(ShopContext);

  return (
    <section className="max-padd-container pt-16">
      <Title
        title1={"Category"}
        title2={"List"}
        titleStyles={"pb-10"}
        paraStyles={"hidden"}
      />
      {/* Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => navigate(`/collection/${cat.name.toLowerCase()}`)}
            className="flexCenter flex-col cursor-pointer group"
          >
            <div className="bg-primary group-hover:bg-primaryDeep">
              <img src={cat.image} alt="" height={201} width={201} className="object-cover" />
            </div>
            <h5 className="h5 uppercase mt-6">{cat.name}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
