import Link from 'next/link';
import { motion } from 'framer-motion';

//To animate the leaf logo
const svgVariants = {
  initial: { rotate: -180 },
  animate: { rotate: 0, transition: { delay: 1, duration: 1 } },
};
const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { delay: 1, duration: 2, ease: 'easeInOut' },
  },
};

const Logo = () => {
  return (
    <div className="relative z-10 flex h-5/6 w-5/6 cursor-pointer items-center sm:h-full sm:w-full">
      <Link href="/" exact="true" passHref>
        <div className="flex items-center justify-center">
          <motion.svg
            variants={svgVariants}
            initial="initial"
            animate="animate"
            width="30"
            height="40"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 61.32 80.13"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <motion.path
                  className="cls-1"
                  d="M4.6,71.78Q17,37.06,30.06,30.25,12.24,52.74,10.24,80.13,65.76,73.86,60.94,0-16.76,23.37,4.6,71.78Z"
                  fill="#06b6d4"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
              </g>
            </g>
          </motion.svg>
          <p className="pl-2 text-xl font-normal text-zinc-700 lg:text-2xl">
            ColdXposure
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
