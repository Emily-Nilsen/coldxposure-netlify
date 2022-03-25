import Link from 'next/link';
import Layout from '../components/layout';

const PageNotFound = () => {
  return (
    <Layout
      title="Page Not Found | ColdXposure"
      description="Page Not Found"
      keywords=""
    >
      <main
        className="min-h-screen bg-cover bg-top sm:bg-top"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75")',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="text-sm font-semibold uppercase tracking-wide text-black text-opacity-50">
            404 error
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Uh oh! I think you’re lost.
          </h2>
          <p className="mt-2 text-lg font-medium text-black text-opacity-50">
            It looks like the page you’re looking for doesn’t exist.
          </p>
          <div className="mt-6">
            <Link href="/">
              <a className="inline-flex items-center rounded-md border border-transparent bg-white bg-opacity-75 px-4 py-2 text-sm font-medium text-zinc-600 transition duration-300 ease-in-out sm:bg-opacity-25 sm:hover:bg-opacity-50">
                Go back home
              </a>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default PageNotFound;
