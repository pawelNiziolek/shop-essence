import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";
import SingleProduct from "../pages/SingleProduct";
import Checkout from "../pages/Checkout";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/shop" component={Shop} />
        <Route path="/single" component={SingleProduct} />
        <Route path="/checkout" component={Checkout} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
