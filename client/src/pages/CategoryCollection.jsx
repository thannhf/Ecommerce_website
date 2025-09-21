import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item";
import { useParams } from "react-router-dom";

const CategoryCollection = () => {
  const { products, searchQuery } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const itemsPerPage = 10;
  const {category} = useParams()

  useEffect(() => {
    let result = products

    // filter by category from URL
    if(category) {
      result = result.filter((product)=>product.category.toLowerCase() === category.toLowerCase())
    }

    if (searchQuery.length > 0) {
      setFilteredProducts(
        result = result.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    setFilteredProducts(result);
    setCurrPage(1);
  }, [products, searchQuery, category]);

  const totalPages = Math.ceil(
    filteredProducts.filter((p) => p.inStock).length / itemsPerPage
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currPage]);

  return (
    <div className="max-padd-container py-16 pt-28 bg-primary">
      <Title title1={`${category}`} title2={"Products"} titleStyles={"pb-10"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {filteredProducts.length > 0 ? (
          filteredProducts
            .filter((product) => product.inStock)
            .slice((currPage - 1) * itemsPerPage, currPage * itemsPerPage)
            .map((product) => <Item key={product._id} product={product} />)
        ) : (
          <h4 className="h4 text-red-500">Oops! Nothing matched your search</h4>
        )}
      </div>
      {/* Pagination */}
      <div className="flexCenter flex-wrap gap-2 sm:gap-4 mt-14 mb-10">
        <button
          disabled={currPage === 1}
          onClick={() => setCurrPage((prev) => prev - 1)}
          className={`${
            currPage === 1 && "opacity-50 cursor-not-allowed"
          } btn-dark !py-1 !px-3`}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrPage(index + 1)}
            className={`${
              currPage === index + 1 && "!bg-tertiary !text-white"
            } btn-white !py-1 !px-3`}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currPage === totalPages}
          onClick={() => setCurrPage((prev) => prev + 1)}
          className={`${
            currPage === totalPages && "opacity-50 cursor-not-allowed"
          } btn-dark !py-1 !px-3`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CategoryCollection;
