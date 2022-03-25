import Image from 'next/image';
import Link from 'next/link';

const BenefitsText = () => {
  return (
    <div className="overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 xl:py-36">
      <div className="mx-auto max-w-max lg:max-w-7xl">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="max-w-prose text-base lg:max-w-none">
            <h3 className="font-semibold uppercase leading-6 tracking-wide text-cyan-500">
              What
            </h3>
            <h4 className="mt-2 text-3xl leading-8 tracking-tight text-zinc-700 sm:text-4xl">
              ColdXposure can do for you
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
              <div className="prose prose-lg prose-cyan text-zinc-500 lg:max-w-none">
                <p>
                  People have been using ancient practices to improve health and
                  stave off disease for thousands of years.
                </p>
                <p>
                  However, society now opts for more modern alternatives,
                  including modern medicine and technology, to make our lives
                  easier, but with often dire consequences to our overall
                  health.
                </p>
                <h3 className="text-zinc-600">Our Aim</h3>
                <p>
                  At ColdXposure, we aim to educate society on ancient holistic
                  methods and be a channel for modern-day science, explaining
                  why these methods have profound healing and health benefits.
                </p>
                <p>
                  Whether using ice baths in Finland, regularly fasting during
                  Ramadan, or highlighting the importance of connecting with
                  nature, ColdXposure aims to provide you with the{' '}
                  <Link href="/blog">
                    <a>latest</a>
                  </Link>{' '}
                  knowledge and practices.
                </p>
              </div>
              <div className="prose prose-lg prose-cyan mt-6 text-zinc-500 lg:mt-0">
                <h3 className="text-zinc-600">What we offer</h3>
                <p>
                  We want to <strong className="text-zinc-700">improve</strong>{' '}
                  your health and well-being and increase your life’s longevity
                  so that you can have a quality life for years into the future.
                </p>
                <p>
                  At ColdXposure, rather than staking claims to any particular
                  practices, we provide a{' '}
                  <Link href="/blog">
                    <a>central</a>
                  </Link>{' '}
                  location for you to learn as you choose.
                </p>
                <blockquote className="text-zinc-700">
                  <p>What doesn’t kill you makes you stronger.</p>
                </blockquote>
                <p>
                  Indeed, what doesn’t kill you can profoundly benefit your
                  health and mental well-being. This process is called{' '}
                  <strong className="text-zinc-700">hormesis</strong>, and at
                  ColdXposure, we will introduce many forms of it to you.
                </p>
              </div>
            </div>
            <div className="mt-8 inline-flex rounded-full shadow">
              <Link href="/contact">
                <a className="flex items-center justify-center rounded-full border border-transparent bg-cyan-500 px-5 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-cyan-600">
                  Contact us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsText;
