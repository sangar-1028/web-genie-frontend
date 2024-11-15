import { motion } from "framer-motion"

export default function Loader() {
    return (
        <motion.div className="fixed inset-0 bg-[rgba(13,0,17,1)] z-10 flex justify-center items-center">
            <h1 className="text-white text-3xl tracking-[0.5em] font-playfair font-italic uppercase">Webgenie</h1>
        </motion.div>
    )
}