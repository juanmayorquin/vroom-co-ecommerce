import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RutaPublica } from "./routers";
import { LayoutGeneral } from "./layouts/conLayout";
import SinLayout from "./layouts/sinLayout/SinLayout";
import {
  GeneralInicio,
  Pagina404,
  Login,
  Register,
  Perfil,
  Colecciones,
  Talla,
  Preguntas,
  About,
  AddProducts,
  Checkout,
  Success,
} from "./pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RutaPublica>
            <LayoutGeneral>
              <GeneralInicio />
            </LayoutGeneral>
          </RutaPublica>
        }
      />
      <Route
        path="/404"
        element={
          <RutaPublica>
            <SinLayout>
              <Pagina404 />
            </SinLayout>
          </RutaPublica>
        }
      />
      <Route
        path="/login"
        element={
          <RutaPublica>
            <LayoutGeneral>
              <Login />
            </LayoutGeneral>
          </RutaPublica>
        }
      />
      <Route
        path="/register"
        element={
          <RutaPublica>
            <LayoutGeneral>
              <Register />
            </LayoutGeneral>
          </RutaPublica>
        }
      />

      <Route
        path="/perfil"
        element={
          <RutaPublica>
            <LayoutGeneral>
              <Perfil />
            </LayoutGeneral>
          </RutaPublica>
        }
      />

      <Route
        path="/colecciones"
        element={
          <RutaPublica>
            <LayoutGeneral>
              <Colecciones />
            </LayoutGeneral>
          </RutaPublica>
        }
      />

      <Route
        path="/talla"
        element={
          <RutaPublica>
            <LayoutGeneral>
              <Talla />
            </LayoutGeneral>
          </RutaPublica>
        }
      />
      <Route
        path="/preguntas"
        element={
          <RutaPublica>
            <LayoutGeneral>
              <Preguntas />
            </LayoutGeneral>
          </RutaPublica>
        }
      />
      <Route
        path="/add-products"
        element={
          <RutaPublica>
            <LayoutGeneral>
              <AddProducts />
            </LayoutGeneral>
          </RutaPublica>
        }
      />

      <Route
        path="/about"
        element={
          <RutaPublica>
            <LayoutGeneral>
              <About />
            </LayoutGeneral>
          </RutaPublica>
        }
      />

      <Route
        path="/checkout"
        element={
          <RutaPublica>
            <LayoutGeneral>
              <Checkout />
            </LayoutGeneral>
          </RutaPublica>
        }
      />
      <Route
        path="/success"
        element={
          <RutaPublica>
            <LayoutGeneral>
              <Success />
            </LayoutGeneral>
          </RutaPublica>
        }
      />

      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default AppRouter;
