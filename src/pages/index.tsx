import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>
      <NavBar current="home" />
      {/* <SideBar /> */}
    </>
  );
}
