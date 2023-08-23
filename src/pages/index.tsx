import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import SideBar from "@/components/SideBar";
import PostsContainer from "@/components/PostsContainer";
import CreateNewPost from "@/components/CreateNewPost";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>
      <NavBar current="home" />
      <div className="pt-14">
        <SideBar />
        <div className="flex flex-col items-center main-content ml-auto max-[1099px]:mx-auto max-[1099px]:w-full">
          <CreateNewPost />
          <PostsContainer />
        </div>
        <div></div>
      </div>
    </>
  );
}
