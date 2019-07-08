import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const InputSearch = styled.input`
  border: none;
  width: 200px;
  height: 85px;
  padding: 0 15px 0 60px;
  color: #787878;
  font-size: 14px;
  font-weight: 500;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  outline: none;
`;

const SearchButon = () => {
  return (
    <>
      <Form action="#">
        <button type="submit">find</button>
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
