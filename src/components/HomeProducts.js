import React from "react";
import ImgProd1 from "../img/product-img/product-1.jpg";
import ImgProd2 from "../img/product-img/product-2.jpg";
import ImgProd3 from "../img/product-img/product-3.jpg";
import ImgProd4 from "../img/product-img/product-4.jpg";
import HomeSingleProducts from "./HomeSingleProduct";

const products = [
  {
    id: 1,
    path: "/single",
    img: ImgProd1,
    img2: ImgProd4,
    classProd: "far fa-heart",
    divInf: "New",
    price: "$80.00",
    title: "Knot Front Mini Dress",
    width: "23%"
  },
  {
    id: 2,
    path: "/single",
    img: ImgProd2,
    img2: ImgProd3,
    classProd: "far fa-heart",
    divInf: "-50%",
    price: "$50.00",
    title: "Knot Front Mini Dress",
    width: "23%"
  },
  {
    id: 3,
    path: "/single",
    img: ImgProd3,
    img2: ImgProd1,
    classProd: "far fa-heart",
    divInf: "New",
    price: "$90.00",
    title: "Knot Front Mini Dress",
    width: "23%"
  },
  {
    id: 4,
    path: "/single",
    img: ImgProd4,
    img2: ImgProd2,
    classProd: "far fa-heart",
    divInf: "-30%",
    price: "$80.00",
    title: "Knot Front Mini Dress",
    width: "23%"
  }
];

const HomeProducts = () => {
  const singleProduct = products.map(product => {
    const { id, img, img2, classProd, divInf, price, title, width } = product;
    return (
      <HomeSingleProducts
        key={id}
        img={img}
        img2={img2}
        classProd={classProd}
        divInf={divInf}
        price={price}
        title={title}
        width={width}
      />
    );
  });
  return singleProduct;
};

export default HomeProducts;
