import Image from "next/image";
import { useRef, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { PiSmileyLight } from "react-icons/pi";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

interface Props {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IEmoji {
  id: string;
  keywords: string[];
  name: string;
  native: string;
  shortcodes: string;
  unified: string;
}

export default function CreateNewPostPopup({ setShowPopup }: Props) {
  const [showEmojis, setShowEmojis] = useState<boolean>(false);
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [validInput, setValidInput] = useState<boolean>(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handlePostContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.value.length >= 85 && e.target.value.length < 290) {
      e.target.classList.replace("text-2xl", "text-lg");
    } else if (e.target.value.length >= 290) {
      e.target.classList.replace("text-lg", "text-sm");
    } else {
      e.target.classList.contains("text-sm")
        ? e.target.classList.replace("text-sm", "text-2xl")
        : e.target.classList.replace("text-lg", "text-2xl");
    }
    setTextAreaValue(e.target.value);
    if (e.target.value.trim().length < 1) {
      // handle empty textarea
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  };

  const handleAddEmoji = (e: IEmoji) => {
    const emoji = e.native;
    const position = textAreaRef.current!.selectionStart;
    let newTextAreaValueArray = textAreaValue.split("");
    newTextAreaValueArray.splice(position, 0, emoji);
    setTextAreaValue(newTextAreaValueArray.join(""));
  };

  return (
    <div className="layer fixed">
      <div className="w-[500px] max-w-[96%] h-[428px] rounded-lg bg-white shadow-xl">
        <div className="create-post__header border-b border-b-cgray min-h-[50px] flex items-center justify-center relative">
          <h2 className="text-center text-xl font-semibold">Create post</h2>
          <button
            className="bg-[#e4e6eb] w-9 h-9 rounded-full text-lg absolute right-3 flex items-center justify-center"
            onClick={() => setShowPopup(false)}
          >
            <LiaTimesSolid />
          </button>
        </div>
        <div className="user-info p-4 flex items-center gap-2 mb-3">
          <Image
            src={"/test-account-pic.jpg"}
            alt="user account image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h3 className="font-semibold">Mohamed Montaser</h3>
          </div>
        </div>
        <textarea
          className="px-3 w-full resize-none border-none outline-none text-2xl placeholder:text-[#65676B] max-h-[136px] h-[80px] mb-5 max-[370px]:text-lg"
          onChange={handlePostContentChange}
          placeholder="What's on your mind, Mohamed?"
          value={textAreaValue}
          ref={textAreaRef}
        ></textarea>
        <div className="w-full flex justify-end items-center mt-2 px-3 relative">
          <span
            className="text-3xl cursor-pointer text-[#c8cace]"
            onClick={() => setShowEmojis((prev) => !prev)}
          >
            <PiSmileyLight />
          </span>
          <div className="absolute right-14">
            {showEmojis && (
              <Picker
                data={data}
                onEmojiSelect={handleAddEmoji}
                autoFocus
                theme={"light"}
                previewPosition={"none"}
              />
            )}
          </div>
        </div>
        <div className="utils-to-add border border-cgray rounded-lg mx-3 my-4 h-[58px] flex justify-between items-center px-3 shadow-sm">
          <h4 className="font-semibold max-[342px]:text-sm">
            Add to your post
          </h4>
          <ul className="flex gap-2 items-center">
            <li className="p-2 cursor-pointer rounded-full hover:bg-[#f2f2f2] transition ease-linear">
              <Image src={"/image.png"} alt="Image" width={24} height={24} />{" "}
            </li>
            <li className="p-2 cursor-pointer rounded-full hover:bg-[#f2f2f2] transition ease-linear">
              <Image
                src={"/tag-friend.png"}
                alt="Image"
                width={24}
                height={24}
              />{" "}
            </li>
            <li className="p-2 cursor-pointer rounded-full hover:bg-[#f2f2f2] transition ease-linear">
              <Image src={"/feelings.png"} alt="Image" width={24} height={24} />{" "}
            </li>
          </ul>
        </div>
        <div className="mx-3">
          <button
            className="w-full bg-[#1b74e4] hover:bg-[#075fca] transition ease-linear h-9 rounded-md text-[#f2f2f2] font-semibold border-none outline-none disabled:bg-[#e4e6eb] disabled:text-[#bdc1c5] disabled:cursor-not-allowed"
            disabled={!validInput}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
