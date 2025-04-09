import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ onClose, title, children }) => {

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50  z-50 backdrop-blur-[8px]"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm min-w-[800px] max-h-[90vh] max-w-md m-auto overflow-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-normal dark:text-gray-200">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-red-500 hover:text-red-700"
                    >
                        <FaTimes />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;