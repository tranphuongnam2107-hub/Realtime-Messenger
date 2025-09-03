import React from 'react'
import "./logo.css"
import logoImage from "../../resources/image/Creative Chatting App Logo.png"
import { Link } from 'react-router'

const logo = () => {
  return (
    <Link to="/homepage" className="logo">
        <img src={logoImage} alt="Logo" />
    </Link>
  )
}

export default logo