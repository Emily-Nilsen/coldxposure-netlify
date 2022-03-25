import Image from 'next/image';
import Link from 'next/link';

const people = [
  {
    name: 'Michael Crawford',
    role: 'Co-Founder / CEO',
    imageUrl: '/static/crawford.jpg',
    bio: 'Crawf comes from a background in the Australian Navy before he moved on to a personal fitness career incorporating activation (using pressure to alleviate injuries and poor posture). Crawf is also a stand-up comedian.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Simon Ritchie',
    role: 'Co-Founder / CEO',
    imageUrl: '/static/simon.jpg',
    bio: 'Simmo comes from a Customer Service background. He later became a tradesman/technician before moving into computer network design and administration, in addition to having a keen interest in science.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
];

const AboutUs = () => {
  return (
    <main>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8 lg:pt-36">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-700 sm:text-4xl">
                About Us
              </h2>
              <p className="text-xl text-zinc-500">
                Michael Crawford (Crawf) and Simon Ritchie (Simmo) are the
                founders of ColdXposure. Yes, in Australia, we are lazy and
                shorten our names to nicknames. While playing footy (AFL) in
                Tropical North Queensland, we met and discovered we had similar
                health and fitness interests.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-zinc-200 lg:gap-x-8 lg:space-y-0"
              >
                {people.map((person) => (
                  <li key={person.name} className="sm:py-8">
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <Image
                          className="rounded-lg object-cover shadow-lg"
                          src={person.imageUrl}
                          alt={person.name}
                          width={1200}
                          height={1600}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="top"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="space-y-1 text-lg font-medium leading-6">
                            <h3 className="text-zinc-700">{person.name}</h3>
                            <p className="text-cyan-500">{person.role}</p>
                          </div>
                          <div className="text-lg">
                            <p className="text-zinc-500">{person.bio}</p>
                          </div>
                          <ul role="list" className="flex space-x-5">
                            <li>
                              <a
                                href={person.twitterUrl}
                                className="text-zinc-400 hover:text-zinc-500"
                              >
                                <span className="sr-only">Twitter</span>
                                <svg
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a
                                href={person.linkedinUrl}
                                className="text-zinc-400 hover:text-zinc-500"
                              >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white px-4 pt-16 pb-16 sm:px-6 lg:px-8 lg:pt-10 xl:pb-36">
        <div className="mx-auto max-w-max lg:max-w-7xl">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="max-w-prose text-base lg:max-w-none">
              <h4 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-zinc-700 sm:text-4xl">
                Our story
              </h4>
            </div>
          </div>
          <div className="relative">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-cyan-100"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
              />
            </svg>
            <svg
              className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-cyan-100"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
              />
            </svg>
            <div className="relative md:bg-white md:p-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="prose prose-lg prose-cyan text-gray-500 lg:max-w-none">
                  <p>
                    Crawf first introduced Simmo to Wim Hof (The Iceman).
                    Instantly, Simmo noticed improvements in his health and,
                    more importantly, his mental well-being. This method, in
                    turn, opened his mind to the powers and benefits of holistic
                    practices.
                  </p>
                  <p>
                    The <a href="#">Joe Rogan Experience</a> then introduced
                    Simmo to a range of exciting interviews by{' '}
                    <a href="#">Dr Rhonda Patrick</a>,{' '}
                    <a href="#">Dr Andrew Huberman</a>,{' '}
                    <a href="#">Dr David Sinclair</a>,{' '}
                    <a href="#">James Nestor</a>, <a href="#">Paul Stamets</a>,
                    and <a href="#">Wim Hof</a>. Later, Simmo learned methods
                    from <a href="#">Dr Satchin Panda</a>,{' '}
                    <a href="#">Dr James DiNicolantonio</a>,{' '}
                    <a href="#">Dr Sten Ekberg</a>, and others.
                  </p>
                  <p>
                    From the beginning, Crawf had avocated the benefits of these
                    methods. Simmo then began to spend his spare time listening
                    to podcasts and audiobooks. He also spent hours watching
                    educational videos to gain a wealth of practical knowledge.
                  </p>
                </div>
                <div className="prose prose-lg prose-cyan mt-6 text-gray-500 lg:mt-0">
                  <p>
                    Still, it was not until Simmo applied these methods to his
                    everyday life that he noticed changes in his health and
                    mental well-being. What’s more, he wondered why these
                    techniques were not common knowledge.
                  </p>
                  <p>
                    Simmo and Crawf realised that Cairns offered no place to
                    practice a combination of cold and heat exposure or openly
                    discuss these ancient methods. So, they teamed up to create
                    ColdXposure to guide and educate people on the benefits they
                    had experienced.
                  </p>
                </div>
              </div>
              <div className="mt-8 inline-flex rounded-full shadow">
                <Link href="/contact">
                  <a className="flex items-center justify-center rounded-full border border-transparent bg-cyan-500 px-5 py-3 text-base font-medium text-white hover:bg-cyan-600">
                    Contact us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
