import Author from "@/interfaces/author";
import Image from "next/image";
import DateFormatter from "./date-formatter";
import ImageDarkener from "./image-darkener";
import Link from "next/link";
import AuthorInfo from "./author-info";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  darken: boolean;
};

const MainPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  darken,
}: Props) => (
  <>
    <ImageDarkener
      darken={darken}
      href={`/posts/${encodeURIComponent(slug)}`}
      src={coverImage}
    />
    <div className="flex flex-col gap-4 text-lg mt-8">
      <h3 className="text-3xl">
        <Link href={`/posts/${encodeURIComponent(slug)}`}>{title}</Link>
      </h3>
      <p>{excerpt}</p>
      <DateFormatter dateString={date}></DateFormatter>
      <AuthorInfo author={author} />
    </div>
  </>
);

export default MainPost;
