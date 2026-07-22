import "../styles/Loader.css";

import { motion, AnimatePresence } from "framer-motion";

function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
        >
          <motion.div
            className="loader-content"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <motion.h1
              animate={{
                scale: [1, 1.08, 1],
                textShadow: [
                  "0 0 0px rgba(212,175,55,0)",
                  "0 0 35px rgba(212,175,55,.9)",
                  "0 0 0px rgba(212,175,55,0)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              R<span>A</span>
            </motion.h1>

            <p>Frontend Developer</p>

            <div className="loader-bar">
              <motion.div
                className="loader-progress"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
