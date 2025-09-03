import React from 'react'
import "./ContactSearchStyle.css"
import SearchIcon from "../../resources/icon/search-icon.svg"

interface ContactSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const ContactSearch: React.FC<ContactSearchProps> = ({ value, onChange }) => {
  return (
    <div className='ContactSearch'>
        <div className='search-icon-wrapper p-1.5'>
            <img src={SearchIcon} alt="Search" />
        </div>
        <input type="text" 
          placeholder='Search'
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
    </div>
  )
}

export default ContactSearch