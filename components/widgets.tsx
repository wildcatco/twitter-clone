/* eslint-disable @next/next/no-img-element */
// TODO: use next image
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Article } from "../types/article";
import News from "./news";
import { User } from "../types/user";

interface Props {
  articles: Article[];
  randomUsers: User[];
}

const Widgets: React.FC<Props> = ({ articles, randomUsers }) => {
  const [articleNum, setArticleNum] = useState(3);
  const [userNum, setUserNum] = useState(3);

  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      {/* Search bar */}
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
        <div className="flex items-center p-3 rounded-full bg-red-300 relative">
          <MagnifyingGlassIcon className="h-5 z-50 text-gray-500" />
          <input
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>

      {/* Articles */}
      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">What&apos;s happening?</h4>
        {articles.slice(0, articleNum).map((article) => (
          <News key={article.url} article={article} />
        ))}
        <button
          onClick={() => setArticleNum(articleNum + 3)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
        >
          Show more
        </button>
      </div>

      {/* Who to follow */}
      <div className="sticky top-16 text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">Who to follow?</h4>
        {randomUsers.slice(0, userNum).map((user) => (
          <div
            key={user.login.uuid}
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
          >
            <img
              className="rounded-full"
              src={user.picture.thumbnail}
              alt="user-image"
            />
            <div className="ml-4 leading-5">
              <h4 className="font-bold hover:underline text-[14px] truncate">
                {user.login.username}
              </h4>
              <h5 className="text-[13px] text-gray-500 truncate">
                {user.name.first + " " + user.name.last}
              </h5>
            </div>
            <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
              Follow
            </button>
          </div>
        ))}
        <button
          onClick={() => setUserNum(userNum + 3)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default Widgets;
