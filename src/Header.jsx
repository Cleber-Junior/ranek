import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavBar } from './css/StyleHeader'
import './css/StyledNav.css'

const Header = () => {
  return (
    <NavBar>
      <NavLink className="link" to="/" end> Produtos </NavLink>
      <NavLink className="link" to="contato"> Contato </NavLink>
    </NavBar>
  )
}

export default Header
