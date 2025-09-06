import React from 'react'
import { MoreVertical } from "lucide-react";
import MessageOptions from './MessageOptions';

interface MessageItemProps {
    message: {
        id: number;
        text: string;
        sender: string;
        time: string;
        isMine: boolean;
        replyTo?: {
            sender: string;
            text: string;
        } | null;
    };
    onReply: (messageId: number) => void;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, onReply }) => {
    return (
        <div className={`flex flex-col mb-4 ${message.isMine ? "items-end" : "items-start"} relative`}>
            {/* Tên + Thời gian */}
            <span className="text-xs text-gray-500 mb-1">
                {message.sender} • {message.time}
            </span>

            {/* Nội dung + Option */}
            <div className="flex items-center gap-2">
                {!message.isMine && (
                    <MessageOptions
                        isMine={message.isMine}
                        position="left" // popup canh về bên trái
                        onReply={() => onReply(message.id)}
                        onDelete={() => console.log("Delete", message.id)}
                    />
                )}

                <div
                    className={`inline-block max-w-full px-4 py-2 rounded-2xl text-sm relative break-words whitespace-pre-wrap
            ${message.isMine ? "bg-[#24BAA1] text-white" : "bg-gray-100 text-gray-800"}`}
                >
                    {/* Nếu đây là message dạng reply */}
                    {message.replyTo && (
                        <div className="mb-2 p-2 rounded-lg bg-black/10 text-xs text-gray-700">
                            <span className="font-semibold">{message.replyTo.sender}:</span>{" "}
                            {message.replyTo.text.length > 50
                                ? message.replyTo.text.slice(0, 50) + "..."
                                : message.replyTo.text}
                        </div>
                    )}

                    {/* Nội dung chính */}
                    {message.text}
                </div>
                
                {message.isMine && (
                    <MessageOptions
                        isMine={message.isMine}
                        position="right" // popup canh về bên phải
                        onReply={() => onReply(message.id)}
                        onDelete={() => console.log("Delete", message.id)}
                    />
                )}
            </div>
        </div>
    )
}

export default MessageItem