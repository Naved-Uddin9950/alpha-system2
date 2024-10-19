// NotificationModal.js
import React from 'react';

const NotificationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 right-0 w-80 md:w-96 bg-white dark:bg-gray-800 text-black dark:text-white h-screen max-h-screen z-20 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center border-b p-4 bg-gray-100 dark:bg-gray-900">
                <h2 className="text-lg font-semibold">Notifications</h2>
                <button onClick={onClose} className="text-xl font-semibold">&times;</button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4">
                {/* Dummy notifications */}
                {Array.from({ length: 20 }).map((_, index) => (
                    <div key={index} className="border-b py-2">
                        <div className="text-base font-medium">{`Notification ${index + 1}`}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{`Time ${index + 1}`}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationModal;