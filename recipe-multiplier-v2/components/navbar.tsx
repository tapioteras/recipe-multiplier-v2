import { User } from "firebase/auth";
import { useLoginContext } from "../context/loginContext";
import Image from "next/image";
import { userAgent } from "next/server";
import Link from "next/link";

const ProfileSection = ({ user, logout }: { user: User }) => (
  <div className="navbar--profile-section">
    <Image
      className="navbar--profile-section--picture"
      src={user?.photoURL}
      width={50}
      height={50}
      alt="profile image"
    />
    <button onClick={logout}>Logout</button>
  </div>
);

const Navbar = () => {
  const ctx = useLoginContext();
  return (
    <div className="navbar--container">
      {ctx.isLoggedIn && <ProfileSection user={ctx.user} logout={ctx.logout} />}
      {!ctx.isLoggedIn && <Link href="/login">Login</Link>}
    </div>
  );
};

export default Navbar;
