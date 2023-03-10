import { GetServerSideProps } from "next";
import Head from "next/head";
import Feed from "../components/feed";
import Sidebar from "../components/sidebar";
import Widgets from "../components/widgets";
import { Article } from "../types/article";
import { User } from "../types/user";

interface Props {
  articles: Article[];
  randomUsers: User[];
}

const Home: React.FC<Props> = ({ articles, randomUsers }) => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets articles={articles} randomUsers={randomUsers} />

        {/* Modal */}
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
  ).then((res) => res.json());

  // Who to follow section
  const randomUsersResults = await fetch(
    "https://randomuser.me/api/?results=50&inc=name,login,picture"
  ).then((res) => res.json());

  return {
    props: {
      articles: newsResults.articles,
      randomUsers: randomUsersResults.results,
    },
  };
};
