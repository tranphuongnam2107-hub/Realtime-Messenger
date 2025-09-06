import React, { useState } from 'react'
import "./Information.css"

import GroupList from './GroupList'
import MemberList from './MemberList'
import DefaultInfoView from './DefaultInfoView'

type ViewMode = "default" | "groups" | "members";

interface InformationProps {
    isGroup: boolean;
    view: ViewMode;
    onViewGroups: () => void;
    onViewMembers: () => void;
    onBack: () => void;
}

const Information: React.FC<InformationProps> = ({ isGroup, view, onViewGroups, onViewMembers, onBack }) => {
    return (
        <div className="information flex flex-col h-full w-full bg-white border-l border-gray-200">
            {view === "default" && (
                <DefaultInfoView
                    isGroup={isGroup}
                    onViewGroups={onViewGroups}   // khi bấm vào nút nhóm
                    onViewMembers={onViewMembers} // khi bấm vào nút thành viên
                />
            )}

            {view === "groups" && <GroupList onBack={onBack} />}
            {view === "members" && <MemberList onBack={onBack} />}
        </div>
    )
}

export default Information