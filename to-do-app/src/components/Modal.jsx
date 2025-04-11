// components/Modal.jsx
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
};
const modal = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.25 } },
};

const Modal = ({ onClose, title, children }) => (
    <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
    >
        <motion.div
            className="bg-surface p-6 rounded-lg shadow-lg max-w-md w-full"
            variants={modal}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">{title}</h2>
                <button onClick={onClose} className="text-red-500 hover:text-red-700">
                    <FaTimes />
                </button>
            </div>
            {children}
        </motion.div>
    </motion.div>
);

export default Modal;
