import React from 'react'
import "./ContactSearchStyle.css"
import SearchIcon from "../../resources/icon/search-icon.svg"

const ContactSearch = () => {
  return (
    <div className='ContactSearch'>
        <div className='search-icon-wrapper p-1.5'>
            <img src={SearchIcon} alt="Search" />
        </div>
        <input type="text" placeholder='Search'/>
    </div>
  )
}

export default ContactSearch