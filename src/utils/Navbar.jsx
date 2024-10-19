import React, { useEffect, useState } from 'react';
import { IoVideocam, IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { FaCoins, FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import NotificationModal from './NotificationModal';

const Navbar = ({ isCollapsed, setIsCollapsed, isSidebarOpen, setIsSidebarOpen, currentPage }) => {
    const [rtl, setRtl] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [isProfileOpen, setIsProfileOpen] = useState(true);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const html = document.querySelector('html');
        rtl ? html.dir = 'rtl' : html.dir = 'ltr';
    }, [rtl]);

    useEffect(() => {
        const html = document.querySelector('html');
        darkMode ? html.classList.add('dark') : html.classList.remove('dark');
    }, [darkMode]);

    return (
        <div className='w-full h-20 fixed top-0 left-0 bg-gray-100 dark:bg-gray-900 text-black dark:text-white dark:shadow-dark shadow-md z-10 flex flex-row justify-between items-center px-4 md:px-12 py-4'>
            <div className='text-lg md:text-2xl flex items-center gap-2 md:gap-6'>
                {/* logo */}
                <h3 class="text-md sm:text-2xl md:text-3xl font-bold tracking-wide text-gray-800 bg-primary uppercase shadow-sm">Alpha System</h3>

                {/* sidebar toggle */}
                {isCollapsed && setIsSidebarOpen ? (
                    <FaArrowRightLong
                        onClick={() => setIsCollapsed(prev => !prev)}
                        className='cursor-pointer text-xl md:text-2xl'
                    />
                ) : (
                    <RiMenu3Line
                        onClick={() => {
                            setIsCollapsed(prev => !prev);
                            if (window.innerWidth <= 1080) {
                                setIsSidebarOpen(!isSidebarOpen);
                            }
                        }}
                        className='cursor-pointer text-xl md:text-2xl'
                    />
                )}
                <span className='hidden md:block'>{currentPage.toUpperCase()}</span>
            </div>

            {/* Right section with icons and modal */}
            <div className='flex items-center gap-2 md:gap-4 text-xl'>

                {/* video button */}
                <IoVideocam className="text-lg md:text-2xl" />

                {/* RTL and LTR button */}
                <RiMenu3Line onClick={() => setRtl(prev => !prev)} className='cursor-pointer text-lg md:text-2xl' />

                {/* Theme mode button (dark mode / light mode) */}
                {darkMode ?
                    <IoSunnySharp className="text-lg md:text-2xl cursor-pointer" onClick={() => setDarkMode(prev => !prev)} /> :
                    <IoMoonSharp className="text-lg md:text-2xl cursor-pointer" onClick={() => setDarkMode(prev => !prev)} />
                }

                <button type="button" className="relative text-white text-lg md:text-xl" onClick={() => setIsNotificationOpen(true)}>
                    <span className="absolute w-4 h-4 text-xs bg-red-500 rounded-full right-0 md:-right-1 -top-1">2</span>
                    <span className="absolute -right-2 -top-2 animate-ping inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <FaBell className='text-black dark:text-white' />
                </button>

                <div className='hidden sm:flex items-center gap-2 cursor-pointer' onClick={() => navigate('wallet')}>
                    <FaCoins className="text-lg md:text-xl" />
                    <span className='text-sm md:text-lg'>200</span>
                </div>
            </div>

            {/* Notification Modal */}
            <NotificationModal isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} />
        </div>
    );
};

export default Navbar;