import Image from 'next/image';
import AboutUs from '../components/about-us';
import FAQs from '../components/faqs';

const About = () => {
  return (
    <main>
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <div className="relative h-56 w-full object-cover lg:absolute lg:h-full">
              <Image
                src="/static/about.jpg"
                alt="Ice in water"
                width={1920}
                height={1277}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
        <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
              <h3 className="font-semibold uppercase leading-6 tracking-wide text-cyan-500">
                Who are we?
              </h3>
              <h2 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-zinc-700 sm:text-4xl">
                About ColdXposure
              </h2>
              <p className="mt-8 text-lg text-zinc-500">
                For thousands of years, many different cultures worldwide have
                used cold exposure. From the ice baths in Finland to the
                snow-covered mountains of Tibet, and more recently, the chilly
                oceans in Tasmania, people have been using the cold
                therapeutically.
              </p>
              <div className="prose prose-indigo mt-5 text-zinc-500">
                <p>
                  With the correct preparation and duration, plunging into a
                  near-freezing body of water can have tremendous health
                  benefits, both physically and mentally. Recent research has
                  also revealed that regular ice baths, along with exercise and
                  a controlled diet, can slow down aging and potentially reverse
                  it.
                </p>
                <p>
                  The thought of entering the water at such cold temperatures
                  may seem daunting at first. Still, when done correctly, the
                  feeling is highly rejuvenating.
                </p>
                <p>
                  Mentally, you feel like nothing is impossible, and physically,
                  your skin feels smoother and softer. Not only that, but when
                  done regularly, the fat in your body converts to beige/brown
                  fat. Scientists believe that this fat metabolises faster and
                  burns off weight more rapidly.
                </p>

                <h3 className="text-zinc-700">What to expect</h3>
                <p>
                  When you enter a cold plunge for the first time, your body
                  initially responds with panic. The release of adrenaline from
                  the adrenal glands and brain causes the heart rate to
                  increase, followed by hyperventilation.
                </p>
                <p>
                  However, with the proper training and preparation, a person
                  can overcome this reaction and return to a regular breathing
                  rate. With the additional power of the breath, you can also
                  regulate the body temperature and stay in the water longer.
                  The more times you endure this, the more your body will adapt.
                </p>
                <p>
                  After just a few sessions, you can remain in the cold water
                  considerably longer. Furthermore, adjusting the water
                  temperature will allow your body to adapt more efficiently so
                  that you can receive the full benefits regardless of your
                  level of experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <FAQs /> */}
      {/* About Us */}
      <AboutUs />
    </main>
  );
};

export default About;
