import React from "react";

const PadContainer = (props: any) => {
  return <div className="mx-auto container px-10">{props.children}</div>;
};

export default PadContainer;
