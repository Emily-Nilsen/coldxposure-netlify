import Image from 'next/image';

const features = [
  {
    name: 'Ice Bath Sessions',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: '/static/cold.svg',
  },
  {
    name: 'Hot Sauna Sessions',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: '/static/heat.svg',
  },
  {
    name: 'Breathwork Practices',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: '/static/breath.svg',
  },
  {
    name: 'Fasting Practices',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: '/static/fast.svg',
  },
  {
    name: 'Nutritional Info',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: '/static/info.svg',
  },
  {
    name: 'Sleep Practices',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: '/static/sleep.svg',
  },
];

const Features = () => {
  return (
    <div className="relative bg-white pt-16 pb-8 sm:pb-12 sm:pt-24 lg:pb-16 lg:pt-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-base font-semibold uppercase tracking-wider text-cyan-500">
          We provide
        </h3>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-700 sm:text-4xl">
          Everything you need to look and feel younger
        </h2>
        <p className="mx-auto mt-5 max-w-prose text-xl text-zinc-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-white px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-full bg-cyan-400 p-3 shadow-lg">
                        <Image
                          src={feature.icon}
                          alt={feature.name}
                          width={28}
                          height={28}
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold tracking-tight text-zinc-700">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-zinc-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
