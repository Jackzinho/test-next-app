import Author from "@/interfaces/author";
import Image from "next/image";

type Props = {
  author: Author;
};

const AuthorInfo = ({ author: { name, picture } }: Props) => {
  return (
    <div className="flex gap-4 items-center">
      <Image
        src={picture}
        alt="alt"
        className="w-10 h-10 rounded-full"
        width={1300}
        height={630}
      />
      <p className="text-xl tracking-wide font-thin">{name}</p>
    </div>
  );
};

export default AuthorInfo;
