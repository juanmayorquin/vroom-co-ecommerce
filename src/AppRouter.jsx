import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RutaPublica } from "./routers";
import { LayoutGeneral } from "./layouts/conLayout";
import SinLayout from "./layouts/sinLayout/SinLayout";
import { GeneralInicio, Pagina404, Login, Register, Perfil } from "./pages";


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
        path="/shop" 
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

      
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default AppRouter;