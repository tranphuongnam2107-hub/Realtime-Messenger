import React, { useState, useEffect } from 'react'
import FilterContact from "./FilterContact";
import ContactItem from "./ContactItem";
import OptionContactItem from './OptionContactItem';

import "./ContactList.css"

interface ContactListProps {
    searchQuery: string;
}

interface Friend {
    id: number;
    name: string;
    avatar: string;
    lastMessage: string;
    unread: boolean;
    time: string
}

const mockFriends: Friend[] = [
    { id: 1, name: "Nguyễn Văn A", avatar: "/avatar1.png", lastMessage: "Hello!", unread: true, time: "10:24" },
    { id: 2, name: "Trần Thị B", avatar: "/avatar2.png", lastMessage: "Làm bài tập chưa?", unread: false, time: "09:05" },
    { id: 3, name: "Lê Văn C", avatar: "/avatar3.png", lastMessage: "Đi cà phê nhé", unread: true, time: "Hôm qua" }
];

const ContactList: React.FC<ContactListProps> = ({ searchQuery }) => {
    const [activeTab, setActiveTab] = useState<"all" | "unread">("all");
    const [friends, setFriends] = useState<Friend[]>(mockFriends);
    // State popup tập trung
    const [activePopup, setActivePopup] = useState<{
        id: number;
        position: { top: number; left: number };
    } | null>(null);

    // Filter friends theo tab và search query
    const filteredFriends = friends.filter((friend) => {
        const matchTab = activeTab === "all" || friend.unread;
        const matchSearch = friend.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchTab && matchSearch;
    });

    // Đóng popup khi click ngoài
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (activePopup) {
                setActivePopup(null);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [activePopup]);

    const handleOpenPopup = (id: number, position: { top: number; left: number }) => {
        setActivePopup({ id, position });
    };

    const handlePin = (id: number) => {
        console.log(`Pinned friend with id: ${id}`);
    };

    const handleDelete = (id: number) => {
        setFriends((prev) => prev.filter((f) => f.id !== id));
        console.log(`Deleted friend with id: ${id}`);
    };

    return (
        <div className="w-full h-full flex flex-col bg-white mt-5">
            {/* Filter Tabs */}
            <FilterContact activeTab={activeTab} onChangeTab={setActiveTab} />

            {/* Danh sách Friend */}
            <div className="flex-1 overflow-y-auto pr-1 custom-scroll pb-20">
                {filteredFriends.length > 0 ? (
                    filteredFriends.map((f) => (
                        <ContactItem
                        key={f.id}
                        id={f.id}
                        name={f.name}
                        avatar={f.avatar}
                        lastMessage={f.lastMessage}
                        unread={f.unread}
                        time={f.time}             // <-- truyền time
                        onOpenPopup={handleOpenPopup}
                    />
                    ))
                ) : (
                    <p className="text-gray-500 text-sm text-center mt-4">
                        No friends found
                    </p>
                )}
            </div>

            {/* Popup Option */}
            {activePopup && (
                <OptionContactItem
                    id={activePopup.id}
                    position={activePopup.position}
                    onClose={() => setActivePopup(null)}
                    onPin={handlePin}
                    onDelete={handleDelete}
                />
            )}
        </div>
    )
}

export default ContactList