import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Routes from './AppRouter'

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
