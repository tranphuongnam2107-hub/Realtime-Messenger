import React from 'react'

import DefaultAvatar from "../../resources/image/avatar-sample.jpg"

interface DefaultInfoViewProps {
    isGroup: boolean; // true = chat nhóm, false = cá nhân
    onViewGroups: () => void;
    onViewMembers: () => void;
}

const DefaultInfoView: React.FC<DefaultInfoViewProps> = ({ isGroup, onViewGroups, onViewMembers }) => {
    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Information</h2>
            </div>

            {/* Avatar + Name */}
            <div className="flex flex-col items-center p-4 border-b border-gray-200">
                <img
                    src={DefaultAvatar}
                    alt="Avatar"
                    className="w-20 h-20 rounded-full mb-2 border border-[#C1C3D1]"
                />
                <h3 className="font-bold text-xl">Phuong Nam</h3>
            </div>

            {/* Nhóm chung hoặc thành viên nhóm */}
            <div className="border-b border-gray-200">
                {isGroup ? (
                    <button
                        onClick={onViewMembers}
                        className="w-full text-left text-sm text-[#24BAA1] hover:bg-[#E0F4F0] p-5"
                    >
                        View members
                    </button>   
                ) : (
                    <button
                        onClick={onViewGroups}
                        className="w-full text-left text-sm text-[#24BAA1] hover:bg-[#E0F4F0] p-5"
                    >
                        View mutuals groups
                    </button>
                )}
            </div>

            {/* Ảnh, file, link */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-4 border-b border-gray-200">
                    <h4 className="font-bold text-lg mb-2">Images</h4>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="w-full h-20 bg-gray-100 rounded"></div>
                        <div className="w-full h-20 bg-gray-100 rounded"></div>
                        <div className="w-full h-20 bg-gray-100 rounded"></div>
                    </div>
                </div>

                <div className="p-4 border-b border-gray-200">
                    <h4 className="font-bold text-lg mb-2">Files</h4>
                    <div className="text-sm text-gray-600">No files</div>
                </div>

                <div className="p-4 border-b border-gray-200">
                    <h4 className="font-bold text-lg mb-2">Links</h4>
                    <div className="text-sm text-gray-600">No links</div>
                </div>
            </div>

            {/* Action cuối */}
            <div className="p-4 border-t border-gray-200 space-y-2">
                {isGroup ? (
                    <>
                        <button className="w-full py-2 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200 font-bold">
                            Leave group
                        </button>
                        <button className="w-full py-2 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                            Delete chat history
                        </button>
                    </>
                ) : (
                    <>
                        <button className="w-full py-2 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200 font-bold">
                            Delete friend
                        </button>
                        <button className="w-full py-2 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                            Delete chat history
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default DefaultInfoView