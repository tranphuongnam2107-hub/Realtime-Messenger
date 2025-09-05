import React, { useState } from 'react'
import ChatHeader from "./ChatHeader";
import ChatBody from './ChatBody';
import ChatInput from './ChatInput';

import Avatar from '../../resources/image/avatar-sample.jpg';

const MainChat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello!", sender: "Nam", time: "10:30", isMine: false },
        { id: 2, text: "Hi Nam! kjskdjasjdkajsdkjaskdjaskdj sldsldkl osidoais lskdlaskd sdiosdi skdlskd sdlksldk sldjskd sdklskd  sldklskd sdklskd sldksldk sdksldk", sender: "Me", time: "10:31", isMine: true },
    ]);

    const [replyTo, setReplyTo] = useState<null | { sender: string; text: string }>(null);
    const [typingUser, setTypingUser] = useState<string | null>("Nam");

    const handleSend = (text: string) => {
        const newMessage = {
            id: Date.now(),
            text,
            sender: "Me",
            time: new Date().toLocaleTimeString(),
            isMine: true,
        };
        setMessages([...messages, newMessage]);
        // setReplyTo(null);
    };

    return (
        <div className="flex flex-col h-full w-full">
            <ChatHeader avatar={Avatar} name="Phuong Nam" isGroup={true} />
            <ChatBody messages={messages} onReply={(id) => {
                const msg = messages.find(m => m.id === id);
                if (msg) setReplyTo({ sender: msg.sender, text: msg.text });
            }} typingUser={typingUser} />
            
            {/* Typing indicator */}
            {typingUser && (
                <div className="text-sm text-gray-500 italic m-2">
                    {typingUser} đang soạn tin nhắn...
                </div>
            )}

            <ChatInput onSend={handleSend} replyTo={replyTo} onCancelReply={() => setReplyTo(null)} />
        </div>
    )
}

export default MainChat