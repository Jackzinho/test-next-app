import ErrorPage from "next/error";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import type PostType from "../../interfaces/post";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import ImageDarkener from "@/components/image-darkener";
import AuthorInfo from "@/components/author-info";
import DateFormatter from "@/components/date-formatter";
import PostContent from "@/components/post-content";
import Link from "next/link";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <section className="mb-10">
        <Link className="text-2xl font-bold tracking-widest text-primary-light dark:text-primary-dark hover:underline" href={"/"}>Home</Link>
      </section>
      <section>
        <div className="flex justify-between items-center mb-6">
          <AuthorInfo author={post.author} />
          <p className="text-sm">
            <DateFormatter dateString={post.date} />
          </p>
        </div>
        <ImageDarkener darken={post.darken} src={post.coverImage} />
        <div className="mt-6">
          <h1 className="text-3xl font-medium">{post.title}</h1>
        </div>
        <PostContent content={post.content} />
      </section>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "coverImage",
    "darken",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
