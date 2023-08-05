import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:py-16">{children}</div>
  );
};

export default Container;
