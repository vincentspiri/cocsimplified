import { motion } from "framer-motion"

export default function Card({ image }) {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="w-40 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl 
                grid place-items-center p-2 animate-card-enter"
        >
            <img src={image} />
        </motion.div>
    )
}