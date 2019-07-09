import React from "react";
import WelcomeSection from "../components/WelcomeSection";
import TopCategorySection from "../components/TopCategorySection";
import GlobalSaleSection from "../components/GlobalSaleSection";
import PopProductSection from "../components/PopProductSection";

const Home = () => {
  return (
    <>
      <WelcomeSection />
      <TopCategorySection />
      <GlobalSaleSection />
      <PopProductSection />
    </>
  );
};

export default Home;
