import { Emoji } from "@emoji-mart/data";
import { nanoid } from "nanoid";

interface Props {
  emojisName: string[];
  emojis: { [key: string]: Emoji };
  handleAddEmoji: (e: Emoji) => void;
}

export default function EmojiPicker({
  emojisName,
  emojis,
  handleAddEmoji,
}: Props) {
  console.log(emojis);
  return (
    <div className="w-[324px] h-[264px] max-w-[95%] bg-white shadow-lg rounded-md overflow-auto select-none">
      <ul
        className="grid"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(40px, 1fr))" }}
      >
        {emojisName.map((emojiName) => {
          return (
            <li
              key={nanoid()}
              className="cursor-pointer hover:bg-cgray p-2 rounded-full text-xl flex justify-center items-center"
              onClick={() => handleAddEmoji(emojis[emojiName])}
            >
              {emojis[emojiName].skins[0].native}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
