import React from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

const BtnUp = () => {
  return (
    <ScrollUpButton
      EasingType="easeInOutQuart"
      AnimationDuration={800}
      style={{
        backgroundColor: "#ff084e",
        padding: "0 12px",
        fill: "white",
        boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.3)",
        height: "40px",
        width: "40px",
        lineHeight: "45px",
        marginRight: "30px",
        bottom: "60px",
        outline: "none"
      }}
    />
  );
};

export default BtnUp;
