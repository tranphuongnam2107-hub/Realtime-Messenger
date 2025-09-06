import React from 'react'
import { X, ArrowLeft } from "lucide-react";

interface MemberListProps {
    onBack: () => void;
}

const MemberList: React.FC<MemberListProps> = ({ onBack }) => {
    const members = [
        { id: 1, name: "Nguyễn Văn A", avatar: "/avatars/a.png", role: "leader" },
        { id: 2, name: "Trần Thị B", avatar: "/avatars/b.png", role: "member" },
        { id: 3, name: "Lê Văn C", avatar: "/avatars/c.png", role: "member" },
    ];

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center p-4 border-b border-gray-200">
                <button onClick={onBack} className="mr-2 text-gray-500 hover:text-black">
                    <ArrowLeft size={20} className='cursor-pointer' />
                </button>
                <h2 className="text-lg font-semibold">Group Members</h2>
            </div>

            {/* Danh sách thành viên */}
            <div className="flex-1 overflow-y-auto">
                {members.map((member) => (
                    <div
                        key={member.id}
                        className="flex items-center p-4 hover:bg-gray-100 cursor-pointer"
                    >
                        {/* Avatar thành viên */}
                        <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-10 h-10 rounded-full mr-3 object-cover"
                        />

                        {/* Thông tin thành viên */}
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-800">
                                {member.name}
                            </span>

                            {/* Hiển thị "Nhóm trưởng" nếu role là leader */}
                            {member.role === "leader" && (
                                <span className="text-xs text-gray-500">
                                    Leader
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MemberList