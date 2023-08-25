import AccountNavigation from "@/components/AccountNavigation";
import AccountSideBar from "@/components/AccountSideBar";
import Cover from "@/components/Cover";
import CreateNewPost from "@/components/CreateNewPost";
import NavBar from "@/components/NavBar";
import PersonalDetails from "@/components/PersonalDetails";
import PostsContainer from "@/components/PostsContainer";
import ProfilePicture from "@/components/ProfilePicture";
import Head from "next/head";

export default function PersonalAccount() {
  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>
      <NavBar />

      <Cover />

      <div className="bg-white pb-4 mb-5 shadow-sm max-w-full">
        <div className="relative z-10 w-[940px] max-w-full mx-auto pl-5 flex flex-col items-center gap-5 ">
          <div className="flex items-center gap-5 w-full max-[946px]:flex-col max-[946px]:gap-0">
            <ProfilePicture />
            <div className="flex flex-col justify-end flex-1 pt-4 max-[946px]:pt-0">
              <PersonalDetails />
            </div>
          </div>
          <AccountNavigation />
        </div>
      </div>
      <div className="w-[940px] max-w-full flex gap-3 mx-auto max-[1099px]:flex-col">
        <AccountSideBar />
        <div className="flex flex-col items-center mx-auto max-[1099px]:w-full">
          <CreateNewPost utilType="util-fluid" />
          <PostsContainer utilType="util-fluid" />
        </div>
      </div>
    </>
  );
}
