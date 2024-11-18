import React from "react";
import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

const RutaPublica = ({ children }) => {
  return (
    <Routes>
      <Route path="/" element={children} />
    </Routes>
  );
};

RutaPublica.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
};

export default RutaPublica;
