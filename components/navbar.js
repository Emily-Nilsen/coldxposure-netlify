import Router, { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Search from './search';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './logo';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

const benefits = [
  {
    name: 'What are the benefits?',
    description:
      'Learn how to tap into your natural healing abilities and feel young again.',
    href: '/benefits',
    icon: InformationCircleIcon,
  },
  {
    name: 'Benefit 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'Benefit 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Benefit 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Benefit 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '#',
    icon: RefreshIcon,
  },
];
const callsToAction = [
  {
    name: 'Watch Demo',
    href: 'https://www.youtube.com/watch?v=VF1ECEpfP24',
    icon: PlayIcon,
  },
  { name: 'Contact Us', href: '/contact', icon: PhoneIcon },
];
const resources = [
  {
    name: 'Contact',
    description: 'Get in touch and get all of your questions answered.',
    href: '/contact',
    icon: PhoneIcon,
  },
  {
    name: 'Nutrition Guide',
    description:
      'Read practical recommendations for eating a healthy balanced diet.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Disclaimer',
    description: 'We are not doctors.',
    href: '/disclaimer',
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: 'Shock your body into recovery mode', href: '#' },
  {
    id: 2,
    name: 'How diet can reduce inflammation',
    href: '#',
  },
  { id: 3, name: 'Improve your natural healing rate', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-zinc-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="sr-only">ColdXposure</span>
            <Logo />
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-zinc-700' : 'text-zinc-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2'
                    )}
                  >
                    <span>Benefits</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-zinc-600' : 'text-zinc-400',
                        'ml-2 h-5 w-5 group-hover:text-zinc-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {benefits.map((item) => (
                            <Link key={item.name} href={item.href} passHref>
                              <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-zinc-50">
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-cyan-500"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-zinc-700">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-zinc-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className="space-y-6 bg-zinc-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <Link key={item.name} href={item.href} passHref>
                              <div className="flow-root cursor-pointer">
                                <a className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-zinc-700 hover:bg-zinc-100">
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-zinc-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link href="/pricing" passHref>
              <a className="text-base font-medium text-zinc-500 hover:text-zinc-700">
                Pricing
              </a>
            </Link>
            <Link href="/about" passHref>
              <a className="text-base font-medium text-zinc-500 hover:text-zinc-700">
                About
              </a>
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-zinc-700' : 'text-zinc-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2'
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-zinc-600' : 'text-zinc-400',
                        'ml-2 h-5 w-5 group-hover:text-zinc-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link key={item.name} href={item.href} passHref>
                              <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-zinc-50">
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-cyan-500"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-zinc-700">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-zinc-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className="bg-zinc-50 px-5 py-5 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
                              Recent Posts
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <Link key={post.id} href={post.href} passHref>
                                  <li className="truncate text-base">
                                    <a className="font-medium text-zinc-700 hover:text-zinc-700">
                                      {post.name}
                                    </a>
                                  </li>
                                </Link>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <Link href="/blog" passHref>
                              <a className="font-medium text-cyan-600 hover:text-cyan-500">
                                {' '}
                                View all posts{' '}
                                <span aria-hidden="true">&rarr;</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          {/* Search box */}
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Search />
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-zinc-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Logo />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {benefits.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                      <a className="-m-3 flex items-center rounded-md p-3 hover:bg-zinc-50">
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-cyan-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-zinc-700">
                          {item.name}
                        </span>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/pricing" passHref>
                  <a className="text-base font-medium text-zinc-700 hover:text-zinc-600">
                    Pricing
                  </a>
                </Link>
                <Link href="/about" passHref>
                  <a className="text-base font-medium text-zinc-700 hover:text-zinc-600">
                    About
                  </a>
                </Link>
                {resources.map((item) => (
                  <Link key={item.name} href={item.href} passHref>
                    <a className="text-base font-medium text-zinc-700 hover:text-zinc-600">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div>
                <Search />
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
