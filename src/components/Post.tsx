import { nanoid } from "nanoid";
import Image from "next/image";
import {
  AiOutlineLike,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";

interface IController {
  icon: React.ReactNode;
  text: string;
}

export default function Post() {
  return (
    <div className="post util">
      <div className="post__header flex items-center gap-2">
        <Image
          src={"/test-account-pic.jpg"}
          alt="author account picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold cursor-pointer hover:underline">
            Mohamed Montaser
          </h3>
          <small className="cursor-pointer hover:underline w-fit">4 d</small>
        </div>
      </div>
      <div className="post__body mt-3">
        <p dir="auto" className="mb-3 max-[464px]:text-sm">
          السلام عليكم يشباب يارب تكونو بخير. انا عملت الموقع ده علشان هو كان
          تحدي علي موقع frontendmentor.io وكان مصنف انه advanced. فكرة الموقع
          انه انت بتعرض كل دول العالم من api طبعا بس انا معرضتش دوله واحده علشان
          هيا مش دوله. مميزات الموقع: 1- عرض كل دول العالم 2- امكانية البحث عن
          دوله معينه 3- امكانية اظهار الدول حسب القاره 4- اظهار تفاصيل اكثر عن
          الدوله عند الضغط علي ال card الخاصه بها 5- الموقع متجاوب مع جميع
          الشاشات (responsive design) التقنيات المستخدمه: 1- Next.js + Context
          API 2- Tailwind CSS 3- Typescript وده رابط الموقع:
          https://country-react-app-with-api-bnb5.vercel.app/ وده رابط الريبو:
          https://github.com/mohamed-montaser1/country_react_app_with_api/ بس
          كده يارب يعجبكم 🤍🔥
        </p>
        <div className="relative w-full h-[300px]">
          <Image
            src={"/testing-post-image.jpg"}
            alt="post image"
            fill
            className="object-cover"
          />
        </div>
        <div className="interact-info flex justify-between border-b border-b-cgray py-3">
          <div className="flex gap-2">
            <div className="reacts flex">
              <Image
                src={"/reacts/small/heart.svg"}
                width={18}
                height={18}
                alt="heart"
              />
              <Image
                src={"/reacts/small/like.svg"}
                width={18}
                height={18}
                alt="like"
                className="-ml-1"
              />
            </div>
            <p className="text-slate-600 cursor-pointer select-none hover:underline">
              5
            </p>
          </div>
          <p className="text-slate-600 cursor-pointer hover:underline select-none">
            4 comments
          </p>
        </div>
        <div className="controllers mt-2 flex">
          {Controllers.map((controller) => {
            return (
              <Controller
                icon={controller.icon}
                text={controller.text}
                key={nanoid()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Controllers: IController[] = [
  { icon: <AiOutlineLike />, text: "Like" },
  { icon: <AiOutlineComment />, text: "Comment" },
  { icon: <AiOutlineShareAlt />, text: "Share" },
];

function Controller({ icon, text }: IController) {
  return (
    <button className="flex items-center justify-center py-2 rounded-lg cursor-pointer gap-1 w-1/3 hover:bg-cgray transition ease-linear">
      {icon}
      <span className="text-[#65676B] font-semibold">{text}</span>
    </button>
  );
}
