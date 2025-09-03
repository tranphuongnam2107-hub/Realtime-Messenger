import React, { useState } from 'react'
import "./ContactSearchStyle.css"
import { Link } from 'react-router';

interface ContactSearchProps {
    icon: string;
    iconHover: string;
    onClick?: () => void;
}

const ContactAction: React.FC<ContactSearchProps> = ({ icon, iconHover, onClick }) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <button className='ContactAction' 
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={onClick}>
            <img src={isHover ? iconHover : icon} alt="Icon" />
        </button>
    )
}

export default ContactAction