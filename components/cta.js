import Link from 'next/link';

const CTA = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-zinc-700 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-cyan-500">
            Start your free trial today.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-full shadow">
            <Link href="/pricing">
              <a className="inline-flex items-center justify-center rounded-full border border-transparent bg-cyan-500 px-5 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-cyan-600">
                Get started
              </a>
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-full shadow">
            <Link href="/benefits">
              <a className="ease-in-out; inline-flex items-center justify-center rounded-full border border-transparent bg-zinc-50 px-5 py-3 text-base font-medium text-cyan-500 transition duration-300 hover:bg-cyan-50 hover:text-cyan-600">
                Learn more
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
