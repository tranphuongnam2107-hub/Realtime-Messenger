import React from 'react'
import { Link } from 'react-router'
import "./MenuNavbar.css"
import Chaticon from '../../resources/icon/chat-icon.svg'
import ChaticonHover from '../../resources/icon/chat-icon-hover.svg'
import Contacticon from '../../resources/icon/danhba.svg'
import ContacticonHover from '../../resources/icon/danhba-hover.svg'

import NavItem from './NavItem'

const MenuNavbar = () => {
    return (
        <div className="MenuNavbar flex flex-col gap-4 h-[50%]">
            <NavItem
                defaultIcon={Chaticon}
                hoverIcon={ChaticonHover}
                alt="Chat Page"
                to="/chat"
            />

            <NavItem
                defaultIcon={Contacticon}
                hoverIcon={ContacticonHover}
                alt="Contact Page"
                to="/contact"
            />
        </div>
    )
}

export default MenuNavbar