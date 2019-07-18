import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImgBlog1 from "../img/bg-img/blog1.jpg";
import ImgBlog2 from "../img/bg-img/blog2.jpg";
import ImgBlog3 from "../img/bg-img/blog3.jpg";
import ImgBlog4 from "../img/bg-img/blog4.jpg";
import ImgBlog5 from "../img/bg-img/blog5.jpg";
import ImgBlog6 from "../img/bg-img/blog6.jpg";

const DivFirst = styled.div`
  transition-duration: 500ms;
  background-color: #ffffff;
  padding: 20px 40px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 85%;
  height: auto;
  z-index: 10;
`;

const ImgBlog = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  height: auto;
  width: 100%;
  transform: scale(1);
  transition: 0.5s ease-in-out;
`;

const LinkFirst = styled(Link)`
  display: block;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  color: black;
`;

const DivSecond = styled(DivFirst)`
  visibility: hidden;
  opacity: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  z-index: 11;
  transition: 0.5s ease-in-out;
`;

const LinkSec = styled(Link)`
  display: block;
  color: black;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 600;
  line-height: 1.5;
  transition: 0.15s;
  :hover {
    color: #0056b3;
    cursor: pointer;
  }
`;

const PSec = styled.p`
  display: block;
  color: #787878;
  font-size: 14px;
  line-height: 2;
  font-weight: 400;
  margin-bottom: 16px;
`;

const LinkThird = styled(Link)`
  display: block;
  margin-top: 30px;
  font-size: 12px;
  font-weight: 600;
  color: #0315ff;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
`;

const ArticleBlog = styled.article`
  position: relative;
  width: 540px;
  height: 290px;
  margin: 0 10px 50px;
  overflow: hidden;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  :hover > ${DivSecond} {
    visibility: visible;
    opacity: 1;
  }
  :hover > ${ImgBlog} {
    transform: scale(1.1);
  }
`;

const BlogInfo = [
  {
    id: 1,
    img: ImgBlog1,
    textOne:
      "Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et alesuada",
    textTwo:
      "Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada",
    textThree:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis."
  },
  {
    id: 2,
    img: ImgBlog2,
    textOne:
      "Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et alesuada",
    textTwo:
      "Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada",
    textThree:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis."
  },
  {
    id: 3,
    img: ImgBlog3,
    textOne:
      "Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et alesuada",
    textTwo:
      "Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada",
    textThree:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis."
  },
  {
    id: 4,
    img: ImgBlog4,
    textOne:
      "Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et alesuada",
    textTwo:
      "Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada",
    textThree:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis."
  },
  {
    id: 5,
    img: ImgBlog5,
    textOne:
      "Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et alesuada",
    textTwo:
      "Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada",
    textThree:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis."
  },
  {
    id: 6,
    img: ImgBlog6,
    textOne:
      "Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et alesuada",
    textTwo:
      "Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada",
    textThree:
      "  Lorem ium dolor sit at, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis."
  }
];
const BlogSigleArticle = () => {
  const blog = BlogInfo.map(el => {
    const { id, img, textOne, textTwo, textThree } = el;
    return (
      <ArticleBlog key={id}>
        <ImgBlog src={img} />
        <DivFirst>
          <LinkFirst to="#">{textOne}</LinkFirst>
        </DivFirst>
        <DivSecond>
          <LinkSec to="#">{textTwo}</LinkSec>
          <PSec>{textThree}</PSec>
          <LinkThird to="#">
            Continue reading <i className="fa fa-angle-right" />
          </LinkThird>
        </DivSecond>
      </ArticleBlog>
    );
  });

  return blog;
};

export default BlogSigleArticle;
