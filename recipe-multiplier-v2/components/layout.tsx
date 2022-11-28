import Navbar from "./navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="layout--container">{children}</div>
  </>
);

export default Layout;
