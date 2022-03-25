import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';

const posts = [
  {
    title: 'Shock your body into recovery mode',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl: '/static/blogImage_01.jpg',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl: '/static/author_01.jpg',
    },
  },
  {
    title: 'How diet can reduce inflammation',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl: '/static/blogImage_02.jpg',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl: '/static/author_02.jpg',
    },
  },
  {
    title: 'Improve your natural healing rate',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl: '/static/blogImage_03.jpg',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl: '/static/author_03.jpg',
    },
  },
];

const BlogPage = () => {
  return (
    <Layout title="Blog | ColdXposure" description="" keywords="">
      <div className="relative px-4 pt-16 pb-20 bg-zinc-50 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-700 sm:text-4xl">
              From the blog
            </h2>
            <p className="max-w-2xl mx-auto mt-3 text-xl text-zinc-500 sm:mt-4">
              All the latest ColdXposure news, articles and videos, straight
              from the team.
            </p>
          </div>
          <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <Image
                    className="object-cover w-full h-48"
                    src={post.imageUrl}
                    alt=""
                    width={260}
                    height={160}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cyan-500">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-zinc-700">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-zinc-500 line-clamp-4">
                        {post.description}
                      </p>
                    </a>
                  </div>
                  <div className="flex items-center mt-6">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <div className="w-10 h-10">
                          <Image
                            className="rounded-full"
                            src={post.author.imageUrl}
                            alt={post.author}
                            width={10}
                            height={10}
                            layout="responsive"
                            objectFit="cover"
                            objectPosition="center"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-zinc-700">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-zinc-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
