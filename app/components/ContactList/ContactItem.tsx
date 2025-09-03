import React, { useState, useRef, useEffect } from 'react'
import { MoreVertical, Pin, Trash2 } from "lucide-react";
import { createPortal } from "react-dom";

interface FriendItemProps {
    id: number;
    name: string;
    avatar: string;
    lastMessage: string;
    time: string;
    unread?: boolean;
    onOpenPopup: (id: number, position: { top: number; left: number }) => void;
}

const ContactItem: React.FC<FriendItemProps> = ({ id, name, avatar, lastMessage, time, unread, onOpenPopup }) => {
    const btnRef = useRef<HTMLButtonElement>(null);

    const handleOpenPopup = () => {
        const rect = btnRef.current?.getBoundingClientRect();
        if (!rect) return;
        const GAP = 8;
        onOpenPopup(id, {
            top: rect.bottom + GAP,
            left: rect.left,
        });
    };

    return (
        <div className="relative">
            <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 group">
                {/* Avatar */}
                <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />

                {/* Info + time */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                        <p className="font-medium text-sm truncate">{name}</p>
                        <span className="text-[11px] text-gray-400 flex-shrink-0">{time}</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">{lastMessage}</p>
                </div>

                {/* More */}
                <button
                    ref={btnRef}
                    onClick={handleOpenPopup}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1"
                    aria-label="More"
                >
                    <MoreVertical className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
                </button>
            </div>
         
        </div>
    )
}

export default ContactItem