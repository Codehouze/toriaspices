import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Header sx={{ marginBottom: 50 }} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
