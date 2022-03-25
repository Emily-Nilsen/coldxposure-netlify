import Image from 'next/image';

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  {
    name: 'Material',
    description:
      'Solid walnut base with rare earth magnets and polycarbonate add-ons.',
  },
  { name: 'Dimensions', description: '15" x 3.75" x .75"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  {
    name: 'Includes',
    description:
      'Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder',
  },
  {
    name: 'Considerations',
    description:
      'Made from natural materials. Grain and color vary with each item.',
  },
];

const Disclaimer = () => {
  return (
    <div className="bg-white pb-16 lg:pb-24">
      <div aria-hidden="true" className="relative">
        <Image
          src="/static/disclaimer.jpg"
          alt="Doctor holding a stethoscope"
          className="relative h-96 w-full object-cover object-center"
          width={1920}
          height={724}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h3>
            <span className="block text-center text-base font-semibold uppercase tracking-wide text-cyan-500">
              disclaimer
            </span>
            <h1 className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-zinc-700 sm:text-4xl">
              We are not doctors
            </h1>
          </h3>
          <p className="mt-8 text-xl leading-8 text-zinc-500">
            Here at ColdXposure, we do not claim to have created the methods we
            teach, nor have we made any of the amazing breakthroughs in science
            that we present to you.
          </p>
        </div>
        <div className="prose prose-lg prose-cyan mx-auto mt-6 text-zinc-500">
          <p>
            Furthermore, as much as these methods are natural and holistic,
            ColdXposure does not downplay the importance of modern-day medicine
            and where it has brought humanity to this day. We have, however,
            come across these methods during our pursuit and interest in
            improving our health and well-being. After putting these methods
            into practice and feeling the benefits, we would like to share our
            knowledge with as many people as possible.
          </p>

          <p>
            We strongly recommend and insist on seeing your doctor before
            embarking on any of the methods we present to you. We are not
            doctors nor scientists, and we will never claim to be. But we
            believe that prevention outweighs any cure. We want to give you the
            knowledge and tools to adjust your lifestyle and form habits that
            will be long lasting and beneficial to your health and longevity.
          </p>
          {/* <blockquote> */}
          <footer className="mt-4">
            <p className="text-base text-cyan-500">
              Michael Crawford and Simon Ritchie{' '}
              <span className="block font-semibold">
                Co-Founders of ColdXposure
              </span>
            </p>
          </footer>
          {/* </blockquote> */}
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
