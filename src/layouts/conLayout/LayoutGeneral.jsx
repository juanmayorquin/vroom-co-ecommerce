import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const LayoutGeneral = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar/>
      <section>
        <div>{children}</div>
      </section>
      <Footer/>
    </>
  );
};

export default LayoutGeneral;
