import Image from 'next/image';
import BenefitsText from '../components/benefits-text';

const Benefits = () => {
  return (
    <main>
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative px-4 mx-auto max-w-7xl sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-extrabold tracking-tight font text-zinc-700 sm:text-6xl">
                The benefits are countless
              </h1>
              <p className="mt-4 text-xl text-zinc-500">
                If the idea of tapping into your natural healing abilities and
                feeling young again appeals to you, then read on.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="relative h-64 overflow-hidden rounded-lg w-44 sm:opacity-0 lg:opacity-100">
                          <Image
                            src="/static/benefits_01.jpg"
                            alt="Girl running up stairs"
                            width={640}
                            height={426}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="relative object-cover object-center w-full h-full"
                          />
                        </div>
                        <div className="relative h-64 overflow-hidden rounded-lg w-44">
                          <Image
                            src="/static/benefits_08.jpg"
                            alt="Sleeping soundly"
                            width={640}
                            height={426}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="relative object-cover object-center w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="relative h-64 overflow-hidden rounded-lg w-44">
                          <Image
                            src="/static/benefits_03.jpg"
                            alt="Egg and avocado salad"
                            width={640}
                            height={426}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="relative object-cover object-center w-full h-full"
                          />
                        </div>
                        <div className="relative h-64 overflow-hidden rounded-lg w-44">
                          <Image
                            src="/static/benefits_02.jpg"
                            alt="Woman running at daybreak"
                            width={640}
                            height={426}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="relative object-cover object-center w-full h-full"
                          />
                        </div>
                        <div className="relative h-64 overflow-hidden rounded-lg w-44">
                          <Image
                            src="/static/benefits_06.jpg"
                            alt="Man sitting in sauna"
                            width={640}
                            height={426}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="relative object-cover object-center w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="relative h-64 overflow-hidden rounded-lg w-44">
                          <Image
                            src="/static/benefits_07.jpg"
                            alt="Woman breathing calmly"
                            width={640}
                            height={426}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="relative object-cover object-center w-full h-full"
                          />
                        </div>
                        <div className="relative h-64 overflow-hidden rounded-lg w-44">
                          <Image
                            src="/static/benefits_04.jpg"
                            alt="Fried fish and fresh tomato salad"
                            width={640}
                            height={426}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="relative object-cover object-center w-full h-full"
                          />
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
      <div className="md:py-8">
        <BenefitsText />
      </div>
    </main>
  );
};

export default Benefits;
