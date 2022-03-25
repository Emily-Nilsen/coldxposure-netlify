/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
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

const feelYounger = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    x: '100px',
  },
  visible: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: 'easeIn',
      type: 'spring',
      stiffness: 50,
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1.2,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0.2, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 70 },
  },
};

export default function Hero() {
  const longer = ['l', 'o', 'n', 'g', 'e', 'r'];
  return (
    <main className="bg-zinc-700 lg:relative">
      <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h2 className="text-4xl tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.6,
                    duration: 0.5,
                  },
                },
              }}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={feelYounger}
                className="block 2xl:inline"
              >
                Feel younger,{' '}
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 1.2,
                  },
                },
              }}
            >
              <span className="block text-cyan-500 2xl:inline">
                live{' '}
                <span>
                  <div className="inline-block">
                    <motion.ul
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className="inline-flex"
                    >
                      {longer.map((letter, i) => (
                        <motion.li variants={item} key={i}>
                          {letter}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </span>
              </span>
            </motion.div>
          </h2>

          <p className="mx-auto mt-3 max-w-md text-lg text-zinc-300 sm:text-xl md:mt-5 md:max-w-3xl">
            Discover how to harness ancient holistic methods to improve your
            mental and physical health. ColdXposure provides the latest
            information and techniques for you to feel younger and live longer.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link href="/pricing">
                <a className="flex w-full items-center justify-center rounded-full border border-transparent bg-cyan-500 px-8 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-cyan-400 md:py-4 md:px-10 md:text-lg">
                  {' '}
                  Get started{' '}
                </a>
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link href="/benefits">
                <a className="flex w-full items-center justify-center rounded-full border border-transparent bg-white px-8 py-3 text-base font-medium text-cyan-500 transition duration-300 ease-in-out hover:bg-white hover:text-cyan-600 md:py-4 md:px-10 md:text-lg">
                  {' '}
                  Learn more{' '}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <Image
          src="/static/iceball-v3.jpg"
          width={1920}
          height={1660}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Coldxposure logo on shard of ice"
          className="h-full w-full object-cover"
          priority
          quality={100}
        />
      </div>
    </main>
  );
}
