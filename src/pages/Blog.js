import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  padding: 80px 65px;
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
        <div>
          <div>
            <img src="img/bg-img/blog1.jpg" alt="" />
            <div>
              <Link to="#">
                Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et
                malesuada
              </Link>
            </div>
            <div>
              <div>
                <Link to="#">
                  Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum
                  et malesuada
                </Link>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                enim nulla, mollis eu metus in, sagittis fringilla tortor.
                Phasellus purus dignissim convallis.
              </p>
              <Link to="#">
                Continue reading <i class="fa fa-angle-right" />
              </Link>
            </div>
          </div>
        </div>
      </SectionWrap>
    </>
  );
};

export default Blog;
