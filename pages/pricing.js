import { CheckIcon, XIcon } from '@heroicons/react/solid';

const hobbyFeatures = [
  'Pariatur quod similique',
  'Sapiente libero doloribus',
  'Vel ipsa esse repudiandae',
];
const scaleFeatures = [
  'Pariatur quod similique',
  'Sapiente libero doloribus',
  'Vel ipsa esse repudiandae',
];
const growthFeatures = [
  'Quia rem est sed impedit magnam',
  'Dolorem vero ratione voluptates',
  'Qui sed ab doloribus voluptatem dolore',
  'Laborum commodi molestiae id et fugiat',
  'Nam ut ipsa nesciunt culpa modi dolor',
];

const Pricing = () => {
  return (
    <div className="bg-zinc-700">
      <div className="px-4 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h3 className="text-lg font-semibold uppercase leading-6 tracking-wider text-zinc-300">
            Pricing
          </h3>
          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            <span className="block">The right price for you, </span>

            <span className="block text-cyan-500">whoever you are</span>
          </h1>
          <p className="mx-auto mt-3 max-w-4xl text-xl text-zinc-300 sm:mt-5 sm:text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            numquam eligendi quos odit doloribus molestiae voluptatum.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-zinc-700 lg:h-2/3" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mx-0 lg:max-w-none">
                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
                  <div className="flex flex-1 flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-zinc-700"
                          id="tier-hobby"
                        >
                          Tier 1
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-zinc-700">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              $
                            </span>
                            <span className="font-extrabold">79</span>
                          </span>
                          <span className="text-xl font-medium text-zinc-500">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between border-t-2 border-zinc-100 bg-zinc-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {hobbyFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 flex-shrink-0 text-lime-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-zinc-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-full shadow-md">
                          <a
                            href="#"
                            className="block w-full rounded-full border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-cyan-500 transition duration-300 ease-in-out hover:bg-cyan-50"
                            aria-describedby="tier-hobby"
                          >
                            Start your trial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-lg lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-cyan-500"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 translate-y-px transform">
                    <div className="flex -translate-y-1/2 transform justify-center">
                      <span className="inline-flex rounded-full bg-cyan-500 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-white">
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div className="rounded-t-lg bg-white px-6 pt-12 pb-10">
                    <div>
                      <h3
                        className="text-center text-3xl font-semibold text-zinc-700 sm:-mx-6"
                        id="tier-growth"
                      >
                        Tier 2
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="flex items-start px-3 text-6xl tracking-tight text-zinc-700 sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium">
                            $
                          </span>
                          <span className="font-extrabold">149</span>
                        </span>
                        <span className="text-2xl font-medium text-zinc-500">
                          /month
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-b-lg border-t-2 border-zinc-100 bg-zinc-50 px-6 pt-10 pb-8 sm:px-10 sm:py-10">
                    <ul role="list" className="space-y-4">
                      {growthFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-6 w-6 flex-shrink-0 text-lime-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base font-medium text-zinc-500">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-full shadow-md">
                        <a
                          href="#"
                          className="block w-full rounded-full border border-transparent bg-cyan-500 px-6 py-4 text-center text-xl font-medium leading-6 text-white transition duration-300 ease-in-out hover:bg-cyan-600"
                          aria-describedby="tier-growth"
                        >
                          Start your trial
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-md lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:m-0 lg:max-w-none">
                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg">
                  <div className="flex flex-1 flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-zinc-700"
                          id="tier-scale"
                        >
                          Tier 3
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-zinc-700">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              $
                            </span>
                            <span className="font-extrabold">349</span>
                          </span>
                          <span className="text-xl font-medium text-zinc-500">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between border-t-2 border-zinc-100 bg-zinc-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {scaleFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 flex-shrink-0 text-lime-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-zinc-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-full shadow-md">
                          <a
                            href="#"
                            className="block w-full rounded-full border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-cyan-500 transition duration-300 ease-in-out hover:bg-cyan-50"
                            aria-describedby="tier-scale"
                          >
                            Start your trial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
