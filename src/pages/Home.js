import React from "react";
import WelcomeSection from "../components/WelcomeSection";
import TopCategorySection from "../components/TopCategorySection";
import GlobalSaleSection from "../components/GlobalSaleSection";
import PopProductSection from "../components/PopProductSection";
import Brands from "../components/Brands";

const Home = () => {
  return (
    <>
      <WelcomeSection />
      <TopCategorySection />
      <GlobalSaleSection />
      <PopProductSection />
      <Brands />
    </>
  );
};

export default Home;
