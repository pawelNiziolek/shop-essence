import React from "react";
import styled from "styled-components";
import HomeSingleProducts from "./HomeProducts";
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
    img: ImgProd1,
    img2: ImgProd4,
    classProd: "far fa-heart",
    divInf: "New",
    price: "$80.00",
    title: "Knot Front Mini Dress"
  },
  {
    id: 2,
    img: ImgProd2,
    img2: ImgProd3,
    classProd: "far fa-heart",
    divInf: "-50%",
    price: "$50.00",
    title: "Knot Front Mini Dress"
  },
  {
    id: 3,
    img: ImgProd3,
    img2: ImgProd1,
    classProd: "far fa-heart",
    divInf: "New",
    price: "$90.00",
    title: "Knot Front Mini Dress"
  },
  {
    id: 4,
    img: ImgProd4,
    img2: ImgProd2,
    classProd: "far fa-heart",
    divInf: "-30%",
    price: "$80.00",
    title: "Knot Front Mini Dress"
  },
  {
    id: 5,
    img: ImgProd1,
    img2: ImgProd4,
    classProd: "far fa-heart",
    divInf: "New",
    price: "$80.00",
    title: "Knot Front Mini Dress"
  },
  {
    id: 6,
    img: ImgProd2,
    img2: ImgProd3,
    classProd: "far fa-heart",
    divInf: "-50%",
    price: "$50.00",
    title: "Knot Front Mini Dress"
  },
  {
    id: 7,
    img: ImgProd3,
    img2: ImgProd1,
    classProd: "far fa-heart",
    divInf: "New",
    price: "$90.00",
    title: "Knot Front Mini Dress"
  },
  {
    id: 8,
    img: ImgProd4,
    img2: ImgProd2,
    classProd: "far fa-heart",
    divInf: "-30%",
    price: "$80.00",
    title: "Knot Front Mini Dress"
  },
  {
    id: 9,
    img: ImgProd4,
    img2: ImgProd2,
    classProd: "far fa-heart",
    divInf: "-30%",
    price: "$80.00",
    title: "Knot Front Mini Dress"
  }
];

const ShopProducts = () => {
  const singleShopProduct = shopProducts.map(product => {
    const { id, img, img2, classProd, divInf, price, title } = product;
    return (
      <HomeSingleProducts
        key={id}
        img={img}
        img2={img2}
        classProd={classProd}
        divInf={divInf}
        price={price}
        title={title}
      />
    );
  });
  return <SectionProducts>{singleShopProduct}</SectionProducts>;
};
export default ShopProducts;
