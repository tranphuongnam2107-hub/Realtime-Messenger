import React from 'react'
import "./ContactList.css"

interface FilterContactProps {
    activeTab: "all" | "unread";
    onChangeTab: (tab: "all" | "unread") => void;
}


const FilterContact: React.FC<FilterContactProps> = ({ activeTab, onChangeTab }) => {
    return (
        <div className="relative flex border-b border-gray-200 mb-2">
            {["all", "unread"].map((tab) => (
                <button
                    key={tab}
                    onClick={() => onChangeTab(tab as "all" | "unread")}
                    className={`flex-1 text-center py-2 font-medium relative transition-colors duration-300 cursor-pointer
                        ${activeTab === tab ? "text-[#24BAA1]" : "text-gray-500"}`}
                >
                    {tab === "all" ? "All" : "Unread"}

                    {/* Thanh underline */}
                    <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-[#24BAA1] rounded transition-all duration-300 
                            ${activeTab === tab ? "w-full opacity-100" : "w-0 opacity-0"}`}
                    />
                </button>
            ))}
        </div>
    )
}

export default FilterContact