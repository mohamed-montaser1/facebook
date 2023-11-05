import NavBar from "@/layouts/Navbar";
import Head from "next/head";
import SideBar from "@/layouts/RightSideBar";
import PostsContainer from "@/components/Post/PostsContainer";
import CreateNewPost from "@/components/Post/CreateNewPost";
import FriendsSideBar from "@/layouts/LeftSideBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>
      <NavBar current="home" />
      <div className="pt-14">
        <SideBar />
        <div className="flex flex-col items-center main-content mx-auto max-[1099px]:w-full">
          <CreateNewPost />
          <PostsContainer />
        </div>
        <FriendsSideBar />
      </div>
    </>
  );
}
