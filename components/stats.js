import Image from 'next/image';

const metrics = [
  {
    id: 1,
    stat: '8K+',
    emphasis: 'Companies',
    rest: 'use laoreet amet lacus nibh integer quis.',
  },
  {
    id: 2,
    stat: '25K+',
    emphasis: 'Countries around the globe',
    rest: 'lacus nibh integer quis.',
  },
  {
    id: 3,
    stat: '98%',
    emphasis: 'Customer satisfaction',
    rest: 'laoreet amet lacus nibh integer quis.',
  },
  {
    id: 4,
    stat: '12M+',
    emphasis: 'Issues resolved',
    rest: 'lacus nibh integer quis.',
  },
];

const Stats = () => {
  return (
    <div className="relative bg-zinc-800">
      <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <Image
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              width={1920}
              height={1280}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src="/static/stats.jpg"
              alt="Woman enjoying the fresh air"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-800 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
            Feel the difference
          </h3>
          <h2 className="mt-3 text-3xl font-extrabold text-white">
            Get noticable results that will help you live longer
          </h2>
          <p className="mt-5 text-lg text-zinc-300">
            Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing
            quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce
            orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet
            amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">
                  {item.stat}
                </span>
                <span className="mt-1 block text-base text-zinc-300">
                  <span className="font-medium text-white">
                    {item.emphasis}
                  </span>{' '}
                  {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
