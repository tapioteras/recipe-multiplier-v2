import type { NextPage } from "next";
import { useLoginContext } from "../context/loginContext";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const ctx = useLoginContext();
  const router = useRouter();
  useEffect(() => {
    if (!ctx.loading) {
      if (ctx.user) {
        router.push("/recipes");
      } else {
        router.push("/login");
      }
    }
  }, [ctx, router]);
  return null;
};

export default Home;
