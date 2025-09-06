import React, { useState } from 'react'
import { Send, Smile, Image as ImageIcon } from "lucide-react";
import "./MainChat.css"

interface ChatInputProps {
    onSend: (message: string) => void;
    replyTo?: {
        sender: string;
        text: string;
    } | null;
    onCancelReply: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, replyTo, onCancelReply }) => {
    const [text, setText] = useState("");

    const handleSend = () => {
        if (!text.trim()) return;
        onSend(text);
        setText("");
    };

    // Khi nhấn Enter
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // Chặn xuống dòng
            handleSend();     // Gửi tin nhắn
        }
        // Nếu Shift + Enter → không chặn, cho phép xuống dòng
    };

    return (
        <div className="border border-gray-200 p-3 bg-white">
            {/* Reply Section */}
            {replyTo && (
                <div className="mb-2 p-2 bg-gray-100 rounded-lg flex justify-between items-center">
                    <div>
                        <p className="text-sm font-medium text-gray-700">
                            Reply {replyTo.sender}
                        </p>
                        <p className="text-xs text-gray-500 truncate">{replyTo.text}</p>
                    </div>
                    <button onClick={onCancelReply} className="text-gray-400 hover:text-gray-600">
                        ✖
                    </button>
                </div>
            )}

            {/* Toolbar */}
            <div className="flex gap-3 mb-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <ImageIcon className="w-5 h-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Smile className="w-5 h-5 text-gray-500" />
                </button>
            </div>

            {/* Input + Send */}
            <div className="flex items-center gap-2 border border-gray-200 px-2 py-2 rounded-lg shadow-sm">
                <textarea
                    placeholder="Enter message..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 px-3 py-2 text-sm resize-none h-10 max-h-40 overflow-y-auto outline-none scrollbar-hide"
                />
                <button
                    onClick={handleSend}
                    className="p-3 bg-[#24BAA1] text-white rounded-full hover:bg-[#1ca88f] cursor-pointer"
                >
                    <Send className="w-3 h-3" />
                </button>
            </div>
        </div>
    )
}

export default ChatInput