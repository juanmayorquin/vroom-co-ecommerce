import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "proptypes";



const RutaPublica = (Props) => {
    const { layout: Layout, component: Component, ...rest } =props; 
  return (
    <Route
    {...rest}
    render={(matchProps) => <Layout>{<Component {...matchProps}/>}</Layout>}
    />
  )
}

RutaPublica.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.any.isRequired,
};

export default RutaPublica