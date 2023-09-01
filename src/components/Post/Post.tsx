import { nanoid } from "nanoid";
import Image from "next/image";
import { ButtonHTMLAttributes, Fragment, useState } from "react";

interface IController {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

interface Props {
  utilType?: string;
}

export default function Post({ utilType }: Props) {
  const [showReacts, setShowReacts] = useState<boolean>(false);
  const [isHoverOverReacts, setIsHoverOverReacts] = useState<boolean>(false);

  const handleShowReacts = () => {
    setTimeout(() => {
      setShowReacts(true);
    }, 200);
  };
  const handleHideReacts = () => {
    if (isHoverOverReacts) {
      return;
    }
    setTimeout(() => {
      setShowReacts(false);
    }, 500);
  };

  return (
    <div
      className={`post ${
        utilType === "util-fluid"
          ? "util-fluid max-[1099px]:w-[80%] max-[464px]:w-[95%]"
          : "util max-w-[90%]"
      } w-[500px]`}
    >
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
        <div className="controllers mt-2 flex relative">
          {Controllers.map((controller) => {
            return (
              <Fragment key={nanoid()}>
                {controller.text === "Like" && (
                  <div
                    className={`reacts absolute bg-white shadow-md w-[329px] h-[49px] rounded-full -top-10 justify-between items-center px-1 ${
                      showReacts ? "flex" : "hidden"
                    }`}
                    onMouseEnter={() => setIsHoverOverReacts(true)}
                    onMouseLeave={() => setIsHoverOverReacts(false)}
                  >
                    {gifs.map((gif) => (
                      <Image
                        src={gif}
                        alt={controller.text}
                        width={47}
                        height={47}
                        className="cursor-pointer hover:scale-125 transition ease-in-out"
                      />
                    ))}
                  </div>
                )}
                <Controller
                  icon={controller.icon}
                  text={controller.text}
                  key={nanoid()}
                  className={
                    controller.text === "Like" ? "post-like-button" : ""
                  }
                  onMouseEnter={handleShowReacts}
                  onMouseLeave={handleHideReacts}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const gifs = [
  "/reacts/gifs-post/like.gif",
  "/reacts/gifs-post/love.gif",
  "/reacts/gifs-post/haha.gif",
  "/reacts/gifs-post/wow.gif",
  "/reacts/gifs-post/sad.gif",
  "/reacts/gifs-post/angry.gif",
];

const Controllers: IController[] = [
  {
    icon: (
      <i
        style={{
          backgroundPosition: "-122px -126px",
          backgroundImage: "url(/like-share-comment.png)",
          WebkitFilter:
            "invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%)",
        }}
        className="w-[18px] h-[18px] inline-block"
      ></i>
    ),
    text: "Like",
  },
  {
    icon: (
      <i
        style={{
          backgroundPosition: "-84px -126px",
          backgroundImage: "url(/like-share-comment.png)",
          WebkitFilter:
            "invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%)",
        }}
        className="w-[18px] h-[18px] inline-block"
      ></i>
    ),
    text: "Comment",
  },
  {
    icon: (
      <i
        style={{
          backgroundPosition: "-141px -126px",
          backgroundImage: "url(/like-share-comment.png)",
          WebkitFilter:
            "invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%)",
        }}
        className="w-[18px] h-[18px] inline-block"
      ></i>
    ),
    text: "Share",
  },
];

function Controller({
  icon,
  text,
  className,
  ...props
}: IController & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`flex items-center justify-center py-2 rounded-lg cursor-pointer gap-1 w-1/3 hover:bg-cgray transition ease-linear ${className}`}
      {...props}
    >
      <span className="max-[460px]:text-xl flex items-center justify-center">
        {icon}
      </span>
      <span className="text-[#65676B] font-semibold max-[460px]:hidden">
        {text}
      </span>
    </button>
  );
}
