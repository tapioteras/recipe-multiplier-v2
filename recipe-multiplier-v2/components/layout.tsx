import Navbar from "./navbar";

const Layout = ({ children }) => (
  <div className="layout--container">
    <Navbar />
    layout here
    {children}
  </div>
);

export default Layout;
