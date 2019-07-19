import React from "react";
import styled from "styled-components";
import InputRange from "react-input-range";
import "../otherStyle/inputRange.css";

const DivWrap = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 50px;
`;

const H1 = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  text-transform: capitalize;
  margin-bottom: 30px;
`;

const Pprice = styled.p`
  color: black;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 30px;
  display: block;
  font-weight: 600;
`;

const DivSlider = styled.div`
  padding: 10px 10px 0px;
`;

const DivRange = styled.div`
  color: rgb(33, 37, 41);
  font-size: 12px;
  font-weight: 600;
  margin-top: 15px;
  text-transform: uppercase;
`;

class ShopFilter extends React.Component {
  state = {
    value: { min: 49, max: 360 }
  };
  render() {
    return (
      <DivWrap>
        <H1>Filter by</H1>
        <Pprice>Price</Pprice>
        <DivSlider>
          <InputRange
            formatLabel={value => `${""}`}
            value={this.state.value}
            maxValue={360}
            minValue={49}
            onChange={value => this.setState({ value })}
          />
        </DivSlider>
        <DivRange>
          Range: ${this.state.value.min}.00 - ${this.state.value.max}.00
        </DivRange>
      </DivWrap>
    );
  }
}

export default ShopFilter;
