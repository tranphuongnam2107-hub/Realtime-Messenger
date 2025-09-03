import React, { useState } from 'react'
import "../resources/styles/homepage.css"
import Logo from '~/components/Logo/logo';
import Avatar from '~/components/Logo/avatar'
import Navbar from '~/components/Navbar/MenuNavbar'
import ContactSearch from "~/components/Contact/ContactSearch"
import ContactAction from "~/components/Contact/ContactAction"
import FriendPopup from '~/components/Contact/FriendPopup';
import CreateGroupPopup from "~/components/Contact/CreateGroupPopup"

import AddUserIcon from "../resources/icon/add-user-icon.svg"
import AddUserIconHover from "../resources/icon/add-user-icon-hover.svg"
import AddGroupIcon from "../resources/icon/add-group-icon.svg"
import AddGroupIconHover from "../resources/icon/add-group-icon-hover.svg"

export default function Homepage() {
    const [popupAction, setPopupAction] = useState<"user" | "group" | null>(null);

    return (
        <div className="Homepage flex flex-row h-screen">

            <div className="sidebar p-5 flex flex-col justify-between">
                <Logo />
                <Navbar />
                <Avatar />
            </div>

            <div className="contact flex flex-col !p-5 w-[25%] h-[100%] border-l-3 border-[#EFF3F6] rounded-tl-lg rounded-bl-lg">
                <div className='contact-header w-full flex flex-row'>
                    <ContactSearch />
                    <div className="contact-action w-[30%] flex flex-row items-center gap-2 mx-1">
                        {/* TẠO NÚT HIỂN THỊ POPUP  */}
                        <ContactAction icon={AddUserIcon} iconHover={AddUserIconHover} onClick={() => setPopupAction("user")} />
                        <ContactAction icon={AddGroupIcon} iconHover={AddGroupIconHover} onClick={() => setPopupAction("group")} />

                        {/* THÊM POPUP CHO 2 ACTION  */}
                        {popupAction === "user" && <FriendPopup onClose={() => setPopupAction(null)} />}

                        {/* Popup Create Group */}
                        {popupAction === "group" && (
                            <CreateGroupPopup onClose={() => setPopupAction(null)} />
                        )}
                    </div>
                </div>

                <div className='contact-body'>
                    <div className='contact-filter'></div>
                    <div className="contact-list"></div>
                </div>
            </div>

            <div className="main-chat"></div>

            <div className="information"></div>
        </div>
    );
}