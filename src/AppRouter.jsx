import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RutaPublica } from "./routers";
import { LayoutGeneral } from "./layouts/conLayout";
import SinLayout from "./layouts/sinLayout/SinLayout";
import { GeneralInicio, Pagina404 } from "./pages";

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
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default AppRouter;