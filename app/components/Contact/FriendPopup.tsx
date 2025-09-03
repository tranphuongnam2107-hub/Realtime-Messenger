import React from 'react'
import { useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import "./ContactSearchStyle.css"
import Avatar from "../../resources/image/avatar-sample.jpg"

type FriendPopupProps = {
    onClose: () => void;
};


const FriendPopup: React.FC<FriendPopupProps> = ({ onClose }) => {
    const [step, setStep] = useState<"search" | "profile">("search");
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = () => {
        if (searchValue.trim() === "") {
            alert("❌ Không tìm thấy số điện thoại!");
        } else {
            setStep("profile"); // demo khi có kết quả
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white w-[400px] rounded-lg shadow-lg overflow-hidden">
                {/* HEADER */}
                <div className="flex items-center justify-between px-3 py-4 border-b border-b-[#EFF3F6]">
                    {step === "profile" ? (
                        <button onClick={() => setStep("search")} className="p-1">
                            <ArrowLeft size={20} className='cursor-pointer' />
                        </button>
                    ) : (
                        <h2 className="font-semibold text-lg">Add Friend</h2>
                    )}
                    {step === "profile" && (
                        <h2 className="font-semibold text-lg">User Information</h2>
                    )}
                    <button onClick={onClose}>
                        <X size={20} className='cursor-pointer' />
                    </button>

                </div>

                {/* BODY */}
                <div className="p-4">
                    {step === "search" && (
                        <>
                            {/* Ô nhập số điện thoại */}
                            <input
                                type="text"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder="Enter phone number"
                                className="w-full border border-[#EFF3F6] rounded px-3 py-2 mb-4 outline-none focus:ring focus:ring-blue-300"
                            />

                            {/* Lịch sử tìm kiếm */}
                            <div className="space-y-2">
                                <p className="text-sm text-gray-500">Recent search</p>

                                <button
                                    onClick={() => setStep("profile")}
                                    className="flex items-center gap-2 w-full text-left hover:bg-gray-100 p-2 rounded-lg transition"
                                >
                                    <img
                                        src={Avatar}
                                        alt="avatar"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <p className="font-medium">Nguyễn Văn A</p>
                                        <p className="text-xs text-gray-500">(+84) 0909123456</p>
                                    </div>
                                </button>
                            </div>
                        </>
                    )}

                    {step === "profile" && (
                        <>
                            {/* Avatar + Name */}
                            <div className="flex flex-col items-center mb-4">
                                <img
                                    src={Avatar}
                                    alt="avatar"
                                    className="w-20 h-20 rounded-full"
                                />
                                <p className="mt-2 font-semibold text-lg">Phuong Nam</p>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-2 mb-4">
                                <button className="flex-1 py-2 rounded bg-gray-100 cursor-pointer">
                                    Add Friend
                                </button>
                                <button className="flex-1 py-2 border rounded bg-blue-500 text-white cursor-pointer">
                                    Chat
                                </button>
                            </div>

                            <hr className="my-5 border-t border-[#EFF3F6]" />

                            {/* Info */}
                            <div className="space-y-2 text-sm">
                                <p>
                                    <span className="font-medium">Bio: </span> 🙆‍♀️
                                </p>
                                <p>
                                    <span className="font-medium">Gender: </span> Male
                                </p>
                                <p>
                                    <span className="font-medium">Birthday: </span> 21/07
                                </p>
                            </div>

                            <hr className="my-5 border-t border-[#EFF3F6]" />

                            {/* Actions */}
                            <div className="space-y-2 text-sm">
                                <button className="w-full text-left py-2 px-2 hover:bg-gray-100 rounded cursor-pointer">
                                    Remove Friend
                                </button>
                                <button className="w-full text-left py-2 px-2 hover:bg-gray-100 rounded cursor-pointer">
                                    Mutual Groups
                                </button>
                                <button className="w-full text-left py-2 px-2 hover:bg-gray-100 rounded text-red-500 cursor-pointer">
                                    Block
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* FOOTER (chỉ search mới có) */}
                {step === "search" && (
                    <div className="flex justify-end gap-2 px-4 py-3 border-t border-t-[#EFF3F6]">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 rounded bg-gray-200 text-gray-700 cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSearch}
                            className="px-4 py-2 rounded bg-[#24BAA1] text-white cursor-pointer"
                        >
                            Search
                        </button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default FriendPopup