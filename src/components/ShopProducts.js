import React from "react";
import styled from "styled-components";
import HomeSingleProducts from "./HomeSingleProduct";
import ImgProd1 from "../img/product-img/product-1.jpg";
import ImgProd2 from "../img/product-img/product-2.jpg";
import ImgProd3 from "../img/product-img/product-3.jpg";
import ImgProd4 from "../img/product-img/product-4.jpg";

const SectionProducts = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const shopProducts = [
  {
    id: 1,
    path: "/single",
    img: ImgProd1,
    img2: ImgProd4,
    classProd: "far fa-heart",
    divInf: "New",
    price: "$80.00",
    title: "Knot Front Mini Dress",
    width: "30%"
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
    width: "30%"
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
    width: "30%"
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
    width: "30%"
  },
  {
    id: 5,
    path: "/single",
    img: ImgProd1,
    img2: ImgProd4,
    classProd: "far fa-heart",
    divInf: "New",
    price: "$80.00",
    title: "Knot Front Mini Dress",
    width: "30%"
  },
  {
    id: 6,
    path: "/single",
    img: ImgProd2,
    img2: ImgProd3,
    classProd: "far fa-heart",
    divInf: "-50%",
    price: "$50.00",
    title: "Knot Front Mini Dress",
    width: "30%"
  },
  {
    id: 7,
    path: "/single",
    img: ImgProd3,
    img2: ImgProd1,
    classProd: "far fa-heart",
    divInf: "New",
    price: "$90.00",
    title: "Knot Front Mini Dress",
    width: "30%"
  },
  {
    id: 8,
    path: "/single",
    img: ImgProd4,
    img2: ImgProd2,
    classProd: "far fa-heart",
    divInf: "-30%",
    price: "$80.00",
    title: "Knot Front Mini Dress",
    width: "30%"
  },
  {
    id: 9,
    path: "/single",
    img: ImgProd1,
    img2: ImgProd4,
    classProd: "far fa-heart",
    divInf: "New",
    price: "$80.00",
    title: "Knot Front Mini Dress",
    width: "30%"
  }
];

const ShopProducts = () => {
  const singleShopProduct = shopProducts.map(product => {
    const {
      id,
      path,
      img,
      img2,
      classProd,
      divInf,
      price,
      title,
      width
    } = product;
    return (
      <HomeSingleProducts
        key={id}
        path={path}
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
  return <SectionProducts>{singleShopProduct}</SectionProducts>;
};
export default ShopProducts;
