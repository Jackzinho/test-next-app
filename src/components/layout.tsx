import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <main className="container mx-auto p-4 md:p-12">{children}</main>
    <Footer />
  </>
);

export default Layout;
