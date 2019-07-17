import React from "react";
import styled from "styled-components";
import BlogSingleArticle from "../components/BlogSingleArticle";
import ImgHeader from "../img/bg-img/breadcumb2.jpg";

const HeaderBlog = styled.header`
  position: relative;
  background-image: url(${ImgHeader});
  background-size: cover;
  width: 100%;
  height: 390px;
`;

const DivCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const H1Blog = styled.h1`
  font-size: 72px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 1px;
  color: #0315ff;
`;

const SectionWrap = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 80px 100px;
`;

const Blog = () => {
  return (
    <>
      <HeaderBlog>
        <DivCover>
          <H1Blog>fashion blog</H1Blog>
        </DivCover>
      </HeaderBlog>
      <SectionWrap>
        <BlogSingleArticle />
      </SectionWrap>
    </>
  );
};

export default Blog;
