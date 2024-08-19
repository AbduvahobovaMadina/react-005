import React, {memo} from "react";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Product />
    </div>
  );
};

export default memo (Home);