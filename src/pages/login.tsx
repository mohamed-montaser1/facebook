import SignUpModal from "@/components/SignUpModal";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  let [showSignUpModal, setShowSignUpModal] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Facebook - log in or sign up</title>
      </Head>
      <div className="page h-screen w-full flex justify-center items-center">
        <div className="container flex justify-center">
          <div className="info w-1/2 h-full mt-6 hidden lg:block">
            <Image src={"/logo.svg"} alt="logo" width={301} height={106} />
            <h3 className="pl-8 text-3xl">
              Facebook helps you connect and share with the people in your life.
            </h3>
          </div>
          <div className="form lg:w-1/2 h-full flex flex-col items-center">
            <div className="card w-[396px]">
              <input
                type="text"
                className="input"
                placeholder="Email address or phone number"
              />
              <input type="password" className="input" placeholder="Password" />
              <button className="w-full h-[48px] btn-primary text-white text-xl font-semibold mt-3 bg-blue-500 rounded-md hover:bg-blue-600 transition ease-linear">
                Log in
              </button>
              <Link
                href={"#"}
                className="text-blue-500 block text-center mt-3 hover:underline"
              >
                Forgotten password?
              </Link>
              <hr className="mt-5" />
              <button
                className="min-w-1/2 max-w-fit px-5 h-[48px] btn-primary text-white text-xl font-semibold mt-3 bg-green-500 rounded-md mx-auto block hover:bg-green-600 transition ease-linear"
                onClick={() => setShowSignUpModal(true)}
              >
                Create New Account
              </button>
            </div>
            <p className="mt-4">
              Created By{" "}
              <Link
                href={"https://www.github.com/mohamed-montaser1"}
                target="_blank"
                className="text-blue-500 font-semibold underline"
              >
                Mohamed Montaser
              </Link>
              🖤
            </p>
          </div>
        </div>
      </div>
      {showSignUpModal && (
        <SignUpModal setShowSignUpModal={setShowSignUpModal} />
      )}
    </>
  );
}
