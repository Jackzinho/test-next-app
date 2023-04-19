import Header from "@/components/header";
import Layout from "@/components/layout";
import PostPreview from "@/components/post-preview";
import Post from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";

type Props = {
  posts: Post[];
};

const Posts = ({ posts }: Props) => {
  return (
    <Layout>
      <Header />
      <section className="mt-12">
        <h2 className="mx-auto w-fit mb-12 text-4xl font-medium tracking-wide">
          All Posts
        </h2>

        <div className="flex flex-col gap-16">
          {posts.map((post) => {
            return <PostPreview key={post.slug} {...post} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Posts;

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
