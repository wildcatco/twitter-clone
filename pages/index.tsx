import Head from "next/head";
import Sidebar from "../components/sidebar";
import Feed from "../components/feed";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen max-w-7xl mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  );
}
