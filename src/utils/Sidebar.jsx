import React, { useState } from 'react';
import ListItem from './ListItem';

// Icons
import { MdSpaceDashboard, MdSubscriptions, MdOutlineRssFeed, MdLiveTv } from "react-icons/md";
import { FaHandHoldingHeart, FaHome, FaMoneyBill } from "react-icons/fa";
import { FaMessage, FaCircleDollarToSlot, FaDollarSign, FaVault } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { BsCardChecklist } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { LuMessagesSquare } from "react-icons/lu";

const Sidebar = ({ isCollapsed, isSidebarOpen, setIsSidebarOpen, setCurrentPage }) => {
    const [active, setActive] = useState({ name: 'dashboard', id: 1 });

    const items = [
        // { id: 1, name: 'dashboard', icon: <MdSpaceDashboard />, route: '' },
        { id: 1, name: 'dashboard', icon: <FaHome />, route: '' },
        { id: 2, name: 'profile', icon: <CgProfile />, route: 'coming-soon' },
        { id: 13, name: 'settings', icon: <IoIosSettings />, route: 'coming-soon' },
    ];

    return (
        <div className="relative">
            {/* Hamburger Button for Mobile */}
            {isSidebarOpen &&
                <button
                    className="lg:hidden p-4 absolute top-0 left-0 z-50"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <HiMenu className="text-[#ff347b] dark:text-white text-2xl" />
                </button>
            }

            {/* Sidebar */}
            <div
                className={`fixed inset-0 z-40 lg:static lg:block transition-all duration-300 transform ${isCollapsed ? 'lg:w-20' : 'lg:w-80'} lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="h-screen overflow-auto bg-white dark:bg-gray-900 rounded-r-2xl shadow-dark transition-all duration-300">
                    <div className='pt-20'>
                        {items.map((item, index) => (
                            <ListItem
                                key={index}
                                icon={item.icon}
                                name={item.name}
                                isActive={active.id === item.id}
                                setIsActive={setActive}
                                item={item}
                                isCollapsed={isCollapsed}
                                setCurrentPage={setCurrentPage}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 z-30 bg-black opacity-50 lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
                onClick={() => setIsSidebarOpen(false)}
            />
        </div>
    );
}

export default Sidebar;