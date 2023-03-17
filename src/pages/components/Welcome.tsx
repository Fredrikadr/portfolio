import { handleLinkClick } from "@/utils/utils";
import { motion } from "framer-motion";

export default function Welcome() {
  const messages = ["Fredrik Andersen", "Full Stack Developer"];
  return (
    <div className="flex-container">

      <div className='welcome'>
        <motion.div className="text-container" animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
          {messages.map((message, index) => (
            <motion.h1
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.7, duration: 0.5 }}
            >
              {message}
            </motion.h1>
          ))}
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 500}}
          animate={{ opacity: 1, y: 0}}
          transition={{ delay: 1, duration: 0.7 }}
          onClick={() => handleLinkClick("about")}>Let&apos;s go!</motion.button>
      </div>

    </div>
  );
}