import React from 'react'
import { X, ArrowLeft } from "lucide-react";

interface GroupListProps {
    onBack: () => void;
}

const GroupList: React.FC<GroupListProps> = ({ onBack }) => {
    const groups = [
        { id: 1, name: "Family Group", avatar: "./avatar1" },
        { id: 2, name: "Work Team", avatar: "./avatar1" },
        { id: 3, name: "Gaming Buddies", avatar: "./avatar1" },
    ];

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center p-4 border-b border-gray-200">
                <button onClick={onBack} className="mr-2 text-gray-500 hover:text-black">
                    <ArrowLeft size={20} className='cursor-pointer' />
                </button>
                <h2 className="text-lg font-semibold">Mutual Groups</h2>
            </div>

            {/* Danh sách nhóm */}
            <div className="flex-1 overflow-y-auto">
                {groups.map((group) => (
                    <div
                        key={group.id}
                        className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer transition"
                        onClick={() => console.log("Open group chat:", group.name)}
                    >
                        {/* Avatar nhóm */}
                        <img
                            src={group.avatar || "/default-group-avatar.png"}
                            alt={group.name}
                            className="w-10 h-10 rounded-full object-cover"
                        />

                        {/* Tên nhóm */}
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-800">{group.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GroupList