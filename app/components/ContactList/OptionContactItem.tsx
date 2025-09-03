import React from 'react'
import { Pin, Trash2 } from "lucide-react";

interface OptionContactItemProps {
    id: number;
    position: { top: number; left: number }; // Vị trí popup
    onClose: () => void;
    onPin: (id: number) => void;
    onDelete: (id: number) => void;
}

const OptionContactItem: React.FC<OptionContactItemProps> = ({ id, position, onClose, onPin, onDelete }) => {
    return (
        <div
            style={{
                position: "fixed",
                top: position.top,
                left: position.left,
                zIndex: 1000,
            }}
            className="w-42 bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden"
        >
            <button
                onClick={() => {
                    onPin(id);
                    onClose(); // Đóng popup
                }}
                className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100 text-sm"
            >
                <Pin className="w-4 h-4 text-gray-600" />
                Pin chat
            </button>
            <button
                onClick={() => {
                    onDelete(id);
                    onClose(); // Đóng popup
                }}
                className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100 text-sm text-red-600"
            >
                <Trash2 className="w-4 h-4" />
                Delete chat
            </button>
        </div>
    )
}

export default OptionContactItem