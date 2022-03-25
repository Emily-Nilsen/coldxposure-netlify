const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

const FAQs = () => {
  return (
    <div className="bg-zinc-700">
      <div className="px-4 py-12 mx-auto divide-y max-w-7xl divide-cyan-200 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">
          Frequently asked questions
        </h2>
        <div className="mt-8">
          <dl className="divide-y divide-cyan-200">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
              >
                <dt className="text-base font-medium text-white md:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-2 md:col-span-7 md:mt-0">
                  <p className="text-base text-zinc-300">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
