import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import {
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

interface Props {
  post: {
    id: string;
    name: string;
    username: string;
    userImg: string;
    img: string;
    text: string;
    timestamp: string;
  };
}

// TODO: next Image 사용하기

const Post: React.FC<Props> = ({ post }) => {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* image */}
      <Image
        src={post.userImg}
        alt="user-image"
        width={44}
        height={44}
        className="h-11 w-11 rounded-full mr-4"
      />
      {/* right side */}
      <div className="w-full">
        {/* header */}
        <div className="flex items-center justify-between">
          {/* user info */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h4>
            <span className="text-sm sm:text-[15px]">@{post.username} - </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              {post.timestamp}
            </span>
          </div>
          {/* dot icon */}
          <EllipsisHorizontalIcon className="h-10 w-10 hoverEffect hover:text-sky-500 hover:bg-sky-100 p-2" />
        </div>
        {/* post text */}
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
          {post.text}
        </p>

        {/* post image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.img} alt="post-img" className="rounded-2xl mr-2" />

        {/* icons */}
        <div className="flex justify-between text-gray-500 p-2">
          <ChatBubbleOvalLeftEllipsisIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
          <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
};

export default Post;
