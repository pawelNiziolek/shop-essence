import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: 1;
  height: 85px;
  border-left: 1px solid #ebebeb;
`;

const ButtonSearch = styled.button`
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  left: 30px;
  background-color: transparent;
  border: none;
  color: #787878;
  font-size: 14px;
`;

const InputSearch = styled.input`
  border: none;
  width: 200px;
  height: 85px;
  padding: 0 15px 0 60px;
  color: #787878;
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  transition-duration: 500ms;
  outline: none;
  :focus {
    width: 350px;
  }
`;

const SearchButon = () => {
  return (
    <>
      <Form action="#">
        <ButtonSearch type="submit">
          <i className="fas fa-search" />
        </ButtonSearch>
        <InputSearch
          type="search"
          name="search"
          id="headerSearch"
          placeholder="Type for
          search"
        />
      </Form>
    </>
  );
};

export default SearchButon;
