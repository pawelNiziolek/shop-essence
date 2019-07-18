import React from "react";
import styled from "styled-components";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

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
  color: rgb(33, 37, 41);
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 30px;
  display: block;
  font-weight: 600;
`;

const DivSlider = styled.div`
  padding: 20px 10px;
`;

// const DivSliderRange = styled.div`
//   background-color: #0315ff;
//   position: absolute;
//   z-index: 1;
//   font-size: 0.7em;
//   display: block;
//   border: 0;
//   background-position: 0 0;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// `;

// const SpanRight = styled.span`
//   position: absolute;
//   z-index: 2;
//   background-color: #000000;
//   border: none;
//   top: -6px;
//   left: 0%;
//   width: 4px;
//   height: 15px;
//   margin: 0;
// `;

// const SpanLeft = styled(SpanRight)`
//   left: 100%;
// `;
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
            formatLabel={value => `${value} $`}
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
