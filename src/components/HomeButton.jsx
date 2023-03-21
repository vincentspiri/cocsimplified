import { motion } from "framer-motion";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function HomeButton() {
    return(
        <div className='absolute top-6 left-0'>
                <Link to='/'>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-16 h-16 text-5xl bg-gradient-to-br from-yellow-300 to-yellow-500 text-gray-800 rounded-lg p-2 ml-6 animate-card-enter'
                    >
                        <AiOutlineHome />
                    </motion.div>
                </Link>
            </div>
    )
}