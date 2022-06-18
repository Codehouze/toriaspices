import Header from "./Header";
import Footer from "./Footer";
// import Container from "@mui/material/container";
const Layout = ({ children }) => {
  return (
    <>
      
        <Header sx={{ marginBottom: 50 }} />
        {/* <Container maxWidth="xl"> */}
        {children}
        <Footer />
      {/* </Container> */}
    </>
  );
};

export default Layout;
