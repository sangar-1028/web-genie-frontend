import { motion } from "framer-motion";

export const pageVariant = {
    visible: {
        opacity: 1,
        transition: {
            // duration: 1,
            when: "beforeChildren",
            // staggerChildren: 0.3,
        }
    },
    hidden: {
        opacity: 0
    },
    remove: {
        opacity: 0,
        transition: {
            when: "afterChildren"
        }
    }
}

export default function PageTransition({ children }) {
    return (
        <motion.div variants={pageVariant} initial="hidden" animate="visible" exit="remove" transition={{duration: 0.6, ease: "circInOut"}}>
            { children }
        </motion.div>
    )
}