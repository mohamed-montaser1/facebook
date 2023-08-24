import AccountNavigation from "@/components/AccountNavigation";
import Cover from "@/components/Cover";
import NavBar from "@/components/NavBar";
import PersonalDetails from "@/components/PersonalDetails";
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

      <div className="bg-white pb-4 mb-5 shadow-sm">
        <div className="relative z-10 w-[940px] mx-auto pl-5 flex flex-col items-center gap-5 ">
          <div className="flex items-center gap-5 w-full">
            <ProfilePicture />
            <div className="flex flex-col justify-end flex-1 pt-4">
              <PersonalDetails />
            </div>
          </div>
          <AccountNavigation />
        </div>
      </div>
    </>
  );
}
