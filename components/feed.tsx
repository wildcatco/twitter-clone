import { SparklesIcon } from "@heroicons/react/24/outline";
import Input from "./input";
import Post from "./post";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Jihoo Kim",
      username: "wildcatco",
      userImg: "/images/dummy/profile.jpg",
      img: "/images/dummy/posts/1.png",
      text: "nice view!",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Jihoo Kim",
      username: "wildcatco",
      userImg: "/images/dummy/profile.jpg",
      img: "/images/dummy/posts/2.png",
      text: "beautiful flowers!",
      timestamp: "2 days ago",
    },
  ];

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex items-center py-2 px-3 sticky top-0 z-50 bg-white border-b border-r-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect ml-auto">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
