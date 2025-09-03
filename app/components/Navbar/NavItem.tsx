import React, { useState } from 'react'
import { Link } from 'react-router'
import "./MenuNavbar.css"

interface NavItemProps {
    defaultIcon: string;
    hoverIcon: string;
    alt: string;
    to: string;
}

const NavItem = ({ defaultIcon, hoverIcon, alt, to }: NavItemProps) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <Link
            to={to}
            className="nav-item"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <img src={isHover ? hoverIcon : defaultIcon} alt={alt} />
            <span className="tooltip">{alt}</span>
        </Link>
    )
}

export default NavItem