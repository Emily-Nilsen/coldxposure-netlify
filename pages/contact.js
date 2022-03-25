import ContactInfo from '../components/contact-info';

const Contact = () => {
  return (
    <main>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-base font-semibold uppercase tracking-wide text-cyan-500">
              Find us
            </h3>
            <h2 className="mt-1 text-4xl font-extrabold text-zinc-700 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Get in touch
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-xl text-zinc-500">
              Please feel free to contact us at any time with any questions or
              for further information.
            </p>
          </div>
        </div>
      </div>
      <ContactInfo />
    </main>
  );
};

export default Contact;
