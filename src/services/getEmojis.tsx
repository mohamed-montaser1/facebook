import axios from "axios";

export interface IEmojiObj {
  character: string;
  codePoint: string;
  group: string;
  slug: string;
  subGroup: string;
  unicodeName: string;
}

type setState = React.Dispatch<React.SetStateAction<IEmojiObj[]>>;

export default async function getEmojis(setState: setState) {
  const res = await axios.get(
    `${process.env.EMOJIS_API_URI!}?access_key=${process.env.EMOJIS_API_KEY}`
  );
  const data = await res.data;
  setState(data);
}
