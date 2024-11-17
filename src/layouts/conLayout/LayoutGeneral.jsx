import React from "react";
import Navbar from "../../components/Navbar";

const LayoutGeneral = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar/>
      <section>
        <div>{children}</div>
      </section>
    </>
  );
};

export default LayoutGeneral;
