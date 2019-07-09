import React from "react";
import WelcomeSection from "../components/WelcomeSection";
import TopCategorySection from "../components/TopCategorySection";
import HomeGlobalSaleSection from "../components/HomeGlobalSaleSection";
import PopProductSection from "../components/PopProductSection";
import HomeBrands from "../components/HomeBrands";

const Home = () => {
  return (
    <>
      <WelcomeSection />
      <TopCategorySection />
      <HomeGlobalSaleSection />
      <PopProductSection />
      <HomeBrands />
    </>
  );
};

export default Home;
