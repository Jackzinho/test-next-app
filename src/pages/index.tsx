import Layout from "@/components/layout";
import MainPost from "@/components/main-post";
import PostPreview from "@/components/post-preview";
import Post from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

type Props = {
  posts: Post[];
};

const Index = ({ posts }: Props) => {
  const mainPost = posts.slice(0, 1)[0];

  const otherPosts = posts.slice(1, 5);

  const morePosts = posts.slice(5).length > 0;

  return (
    <Layout>
      <section className="flex flex-col items-center my-12 md:mb-10">
        <h1 className="text-4xl w-fit text-on-background-light dark:text-on-background-dark">
          Matheus&apos; Blog
        </h1>
        <h4 className="text-lg text-center font-medium w-fit rounded-xl p-3 mt-4 text-on-secondary-container-light dark:text-on-secondary-container-dark bg-secondary-container-light/30 dark:bg-secondary-container-dark/30">
          A statically generated blog made with Next.js and Tailwind CSS
        </h4>
      </section>

      <section className="mb-8">
        <MainPost key={mainPost.slug} {...mainPost} />
      </section>

      <div className="relative">
        <hr className="h-0 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 border-outline-light/20 dark:border-primary-container-dark/20 w-screen" />
      </div>

      <section className="mt-20 mb-8">
        <h2 className="mx-auto w-fit mb-12 text-4xl font-medium tracking-wide">
          Other Posts
        </h2>

        <div className="flex flex-col gap-16 lg:grid grid-flow-col grid-cols-2 grid-rows-2 lg:gap-8">
          {otherPosts.map((post) => {
            return (
              <div key={post.slug} className="lg:basis-1/2">
                <PostPreview {...post} />
              </div>
            );
          })}
        </div>
      </section>

      {morePosts && (
        <>
          <div className="relative">
            <hr className="h-0 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 border-outline-light/20 dark:border-primary-container-dark/20 w-screen" />
          </div>
          <section className="mt-32">
            <h2 className="mx-auto w-fit mb-12 text-4xl font-medium tracking-wide">
              Want to see{" "}
              <Link
                className="underline text-primary-light hover:text-on-background-light dark:text-primary-dark dark:hover:text-on-background-dark"
                href={`/posts`}
              >
                MORE
              </Link>
              ?
            </h2>
          </section>
        </>
      )}
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "darken",
  ]);

  return {
    props: { posts },
  };
};
