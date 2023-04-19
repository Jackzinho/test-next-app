import Link from "next/link";
import Image from "next/image";

type Props = {
  darken: boolean;
  href?: string | null;
  src: string;
};

const ImageDarkener = ({ darken, href, src }: Props) => {
  return (
    <div className="relative">
      {href ? (
        <Link href={href}>
          <div
            className={`absolute w-full h-full ${
              darken ? "dark:bg-background-dark/40" : ""
            }`}
          ></div>
          <Image
            src={src}
            alt="alt"
            className="w-full"
            width={1300}
            height={630}
          />
        </Link>
      ) : (
        <>
          <div
            className={`absolute w-full h-full ${
              darken ? "dark:bg-background-dark/40" : ""
            }`}
          ></div>
          <Image
            src={src}
            alt="alt"
            className="w-full"
            width={1300}
            height={630}
          />
        </>
      )}
    </div>
  );
};

export default ImageDarkener;
