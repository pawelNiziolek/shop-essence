import React from "react";
import HomeWelcomeSection from "../components/HomeWelcomeSection";
import HomeTopCategorySection from "../components/HomeTopCategorySection";
import HomeGlobalSaleSection from "../components/HomeGlobalSaleSection";
import HomePopProductSection from "../components/HomePopProductSection";
import HomeBrands from "../components/HomeBrands";
import BtnUp from "../layouts/BtnUp";

const Home = () => {
  return (
    <>
      <HomeWelcomeSection />
      <HomeTopCategorySection />
      <HomeGlobalSaleSection />
      <HomePopProductSection />
      <HomeBrands />
      <BtnUp />
    </>
  );
};

export default Home;
