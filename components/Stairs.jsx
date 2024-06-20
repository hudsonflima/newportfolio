import { motion } from 'framer-motion'

const stairAnimation = {
    initial: {
        top: '0%'
    },
    animate: {
        top: '100%'
    },
    exit: {
        top: ['100%', '0%']
    }
}

const reverseIndex = (index) => {
    const totalSteps = 1
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
            {Array(1).fill().map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1,
                        }}
                        className="h-full w-full bg-zinc-800 relative"
                    />
                );
            })}
        </>
    )
}

export default Stairs
