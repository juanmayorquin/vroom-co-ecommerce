import React from "react";
import Hero from "../../../components/Hero";
import Article from "../../../components/Article";

const Inicio = () => {
  return (
    <>
      <Hero />
      <Article img={"/products/BMW-M1000RR-Negro-_Mockup.webp"} name="Camiseta BMW M1000RR" price={65000}/>
    </>
  );
};

export default Inicio;
