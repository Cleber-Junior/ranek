import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Header'
import Produtos from './Produto/Produtos'
import Produto from './Produto/Produto'
import Contato from './Contato'
import Footer from './Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Produtos />}/>
        <Route path='produto/:id/*' element={<Produto />}/>
        <Route path='contato' element={<Contato />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
