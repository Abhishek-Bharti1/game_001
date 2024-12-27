import { useRef, useState } from "react";
import { motion } from "framer-motion";

// eslint-disable-next-line no-unused-vars, react/prop-types
const Button = ({ handleShowGame }) => {
  return (
    <div className="grid min-h-[200px] place-content-center">
      <EncryptButton handleShowGame={handleShowGame} />
    </div>
  );
};

const TARGET_TEXT = "StarT GamE";
const CYCLES_PER_LETTER = 4;
const SHUFFLE_TIME = 50;

const CHARS = "👌😁👋😍😒😊😂🤣😒😉😎😘";
// eslint-disable-next-line no-unused-vars, react/prop-types
const EncryptButton = ({ handleShowGame }) => {
  const intervalRef = useRef(null);

  const [text, setText] = useState(TARGET_TEXT);
  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);

      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onClick={() => {
        scramble();
        if (SHUFFLE_TIME === 50) {
          setTimeout(() => {
            handleShowGame();
          }, 2500);
        }
      }}
      className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-[#333333] px-4 py-2 font-medium uppercase text-neutral-300 transition-colors hover:text-red-500"
    >
      <div className="relative z-10 flex items-center gap-2">
        <span className="font-butterfly-kids">{text}</span>
        😁
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default Button;
