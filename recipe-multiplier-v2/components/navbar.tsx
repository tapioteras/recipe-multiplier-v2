import { useLoginContext } from "../context/loginContext";

const Navbar = () => {
  const ctx = useLoginContext();
  return <div className="navbar--container">navbar here</div>;
};

export default Navbar;
