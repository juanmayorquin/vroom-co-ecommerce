import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './AppRouter'

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
