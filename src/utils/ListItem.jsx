import React from 'react';
import { MdSpaceDashboard } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ListItem = ({ item, isActive, setIsActive, icon = <MdSpaceDashboard />, name = 'Item', isCollapsed, setCurrentPage }) => {
    const navigate = useNavigate();

    return (
        <button
            className={`flex items-center justify-start w-full p-4 font-thin uppercase transition-colors duration-200 ${isActive
                ? 'text-[#ff347b] border-pink-700 bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 from-gray-100 via-gray-200 to-gray-300 border-r-4 dark:shadow-dark'
                : 'text-gray-500 hover:text-[#ff347b]'
                }`}
            onClick={() => {
                setIsActive(item);
                navigate(item.route);
                setCurrentPage(item.name)
            }}
        >
            <span className="text-left">
                {icon}
            </span>

            {/* Conditionally render name based on the sidebar state */}
            {!isCollapsed && (
                <span className="mx-4 text-sm font-normal">
                    {name}
                </span>
            )}
            <span className="lg:hidden mx-4 text-sm font-normal">
                {name}
            </span>
        </button>
    );
}

export default ListItem;