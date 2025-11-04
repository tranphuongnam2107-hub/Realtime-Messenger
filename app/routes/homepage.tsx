import React, { useState } from 'react'
import { useAuthGuard } from "~/hooks/useAuthGuard";
import "../resources/styles/homepage.css"
import Logo from '~/components/Logo/logo';
import Avatar from '~/components/Logo/avatar'
import Navbar from '~/components/Navbar/MenuNavbar'
import ContactSearch from "~/components/Contact/ContactSearch"
import ContactAction from "~/components/Contact/ContactAction"
import FriendPopup from '~/components/Contact/FriendPopup';
import CreateGroupPopup from "~/components/Contact/CreateGroupPopup"
import ContactList from "~/components/ContactList/ContactList"
import MainChat from "~/components/MainChat/MainChat"
import Information from '~/components/Information/Information';

import AddUserIcon from "../resources/icon/add-user-icon.svg"
import AddUserIconHover from "../resources/icon/add-user-icon-hover.svg"
import AddGroupIcon from "../resources/icon/add-group-icon.svg"
import AddGroupIconHover from "../resources/icon/add-group-icon-hover.svg"

export default function Homepage() {
    const [popupAction, setPopupAction] = useState<"user" | "group" | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    // State điều khiển Information
    const [infoView, setInfoView] = useState<"default" | "members" | "groups">("default");

    useAuthGuard(true); 
    
    return (
        <div className="Homepage flex flex-row h-screen">

            <div className="sidebar p-5 flex flex-col justify-between">
                <Logo />
                <Navbar />
                <Avatar />
            </div>

            <div className="contact flex flex-col !py-5 !px-3 w-[20%] h-[100%] border-l-3 border-[#EFF3F6] rounded-tl-lg rounded-bl-lg">
                <div className='contact-header w-full flex flex-row'>
                    <ContactSearch value={searchQuery} onChange={setSearchQuery} />

                    <div className="contact-action w-[30%] flex flex-row items-center justify-end gap-2 mx-1">
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

                <div className='contact-body flex-1 overflow-hidden'>
                    <ContactList searchQuery={searchQuery} />
                </div>
            </div>

            <div className="main-chat w-[50%] bg-[#EDF0F6]">
                <MainChat onShowMembers={() => setInfoView("members")} />
            </div>

            <div className="information flex-1">
                <Information isGroup={true} 
                    view={infoView} 
                    onBack={() => setInfoView("default")} 
                    onViewGroups={() => setInfoView("groups")}
                    onViewMembers={() => setInfoView("members")} />
            </div>
        </div>
    );
}