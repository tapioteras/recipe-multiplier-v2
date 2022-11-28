import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import dynamic from "next/dynamic";
import { getAnalytics, isSupported } from "firebase/analytics";
import { useLoginContext } from "../context/loginContext";
import Link from "next/link";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const Home: NextPage = () => {
  const ctx = useLoginContext();
  return (
    <div>
      {!ctx.user && !ctx.loading && (
        <div>
          <Link href="/login">Login</Link>
        </div>
      )}
      {ctx.user && <h1>My Recipes</h1>}
    </div>
  );
};

export default Home;
