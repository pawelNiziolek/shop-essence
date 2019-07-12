import React from "react";
import ImgProd1 from "../img/product-img/product-1.jpg";
import ImgProd2 from "../img/product-img/product-2.jpg";
import ImgProd3 from "../img/product-img/product-3.jpg";
import ImgProd4 from "../img/product-img/product-4.jpg";
import HomeSingleProducts from "./HomeSingleProduct";

const products = [
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
  }
];

const HomeProducts = () => {
  const singleProduct = products.map(product => {
    const { id, img, img2, classProd, divInf, price, title } = product;
    return (
      // <DivSingleProduct key={id}>
      //   <DivImageOne>
      //     <Img src={img} alt="" />
      //     <DivInfo inf={divInf}>{divInf}</DivInfo>
      //   </DivImageOne>
      //   <DivImageTwo>
      //     <Img src={img2} alt="" />
      //     <LinkHeart to="#">
      //       <IconHeart className={classProd} />
      //     </LinkHeart>
      //     <DivInfo inf={divInf}>{divInf}</DivInfo>
      //     <LinkCart to="#">Add to Cart</LinkCart>
      //   </DivImageTwo>
      //   <DivDescription>
      //     <SpanShop>topshop</SpanShop>
      //     <Link to="#">
      //       <SpanProduct>Knot Front Mini Dress</SpanProduct>
      //     </Link>
      //     <ParagraphPrice>$80.00</ParagraphPrice>
      //   </DivDescription>
      // </DivSingleProduct>
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
  return singleProduct;
};

export default HomeProducts;
