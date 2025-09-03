import React from 'react'
import { useMemo, useRef, useState } from "react";
import { X, Camera } from "lucide-react";

interface Friend {
    id: number;
    name: string;
    avatar: string;
}

const mockFriends: Friend[] = [
    { id: 1, name: "Nguyễn Văn A", avatar: "/avatar1.png" },
    { id: 2, name: "Trần Thị B", avatar: "/avatar2.png" },
    { id: 3, name: "Lê Văn C", avatar: "/avatar3.png" },
];

const CreateGroupPopup = ({ onClose }: { onClose: () => void }) => {
    const [groupName, setGroupName] = useState("");
    const [searchFriend, setSearchFriend] = useState("");
    const [selectedFriends, setSelectedFriends] = useState<Friend[]>([]);
    const [showImagePopup, setShowImagePopup] = useState(false);
    const [groupImage, setGroupImage] = useState<string | null>(null);

    const filteredFriends = mockFriends.filter((f) =>
        f.name.toLowerCase().includes(searchFriend.toLowerCase())
    );

    const toggleFriend = (friend: Friend) => {
        if (selectedFriends.find((f) => f.id === friend.id)) {
            setSelectedFriends(selectedFriends.filter((f) => f.id !== friend.id));
        } else {
            setSelectedFriends([...selectedFriends, friend]);
        }
    };

    const removeSelectedFriend = (friend: Friend) => {
        setSelectedFriends(selectedFriends.filter((f) => f.id !== friend.id));
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-[800px] rounded-xl shadow-lg p-4 relative flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-semibold">Create Group</h2>
                    <button onClick={onClose}>
                        <X className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer" />
                    </button>
                </div>

                <div className="mb-3 border-t border-[#EFF3F6]" />

                {/* Camera + Tên nhóm */}
                <div className="flex items-center gap-3 mb-3">
                    <button
                        onClick={() => setShowImagePopup(true)}
                        className="w-14 h-14 rounded-full border border-[#EFF3F6] flex items-center justify-center hover:bg-gray-100 cursor-pointer"
                    >
                        <Camera className="w-6 h-6 text-gray-600" />
                    </button>
                    <input
                        type="text"
                        placeholder="Enter group name"
                        className="flex-1 border-b border-b-[#EFF3F6] px-3 py-2 outline-none focus:ring focus:ring-blue-300"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                    />
                </div>

                {/* Tìm kiếm bạn bè */}
                <input
                    type="text"
                    placeholder="Search friend..."
                    className="border border-[#EFF3F6] rounded-lg px-3 py-2 outline-none mb-3"
                    value={searchFriend}
                    onChange={(e) => setSearchFriend(e.target.value)}
                />

                {/* Layout danh sách bạn bè + danh sách đã chọn */}
                <div className="flex flex-1 gap-3 overflow-hidden">
                    {/* Danh sách bạn bè */}
                    <div
                        className={`flex flex-col border border-[#EFF3F6] rounded-lg p-2 overflow-y-auto transition-all duration-300 
                        ${selectedFriends.length > 0 ? "w-[70%]" : "w-full"}`}
                        style={{ maxHeight: "300px" }}
                    >
                        <p className="text-sm text-gray-500 mb-2">Your friends</p>
                        {filteredFriends.map((friend) => {
                            const isSelected = selectedFriends.some((f) => f.id === friend.id);
                            return (
                                <div
                                    key={friend.id}
                                    onClick={() => toggleFriend(friend)}
                                    className={`flex items-center gap-2 p-2 border border-[#EFF3F6] rounded-lg cursor-pointer mb-2 
                                        ${isSelected ? "bg-[#E0F4F0] border-[#24BAA1]" : "hover:bg-gray-50"}`}
                                >
                                    <img
                                        src={friend.avatar}
                                        alt={friend.name}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span className="flex-1 text-sm">{friend.name}</span>
                                    {isSelected && (
                                        <span className="text-[#24BAA1] font-semibold">✓</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Danh sách đã chọn */}
                    {selectedFriends.length > 0 && (
                        <div
                            className="w-[30%] border border-[#EFF3F6] rounded-lg p-2 overflow-y-auto"
                            style={{ maxHeight: "300px" }}
                        >
                            <p className="text-sm text-gray-500 mb-2">Selected</p>
                            {selectedFriends.map((friend) => (
                                <div
                                    key={friend.id}
                                    className="flex items-center gap-2 p-2 border border-[#EFF3F6] rounded-lg mb-2"
                                >
                                    <img
                                        src={friend.avatar}
                                        alt={friend.name}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span className="flex-1 text-sm">{friend.name}</span>
                                    <button
                                        onClick={() => removeSelectedFriend(friend)}
                                        className="text-red-500 hover:text-red-700 cursor-pointer"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer nút action */}
                <div className="sticky bottom-0 left-0 bg-white border-t border-t-[#EFF3F6] pt-3 flex justify-end gap-3 mt-5">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => alert("Tạo nhóm thành công")}
                        className="px-4 py-2 rounded-lg bg-[#24BAA1] hover:bg-[#8dc4b9] text-white cursor-pointer"
                    >
                        Create Group
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateGroupPopup