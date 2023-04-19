import Link from "next/link";

const Header = ({}) => {
  return (
    <header className="mb-10">
      <Link
        className="text-2xl font-bold tracking-widest text-primary-light dark:text-primary-dark hover:underline"
        href={"/"}
      >
        Home
      </Link>
    </header>
  );
};

export default Header;
