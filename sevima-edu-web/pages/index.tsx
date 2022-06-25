import type { NextPage } from "next";

import Header from "../components/Header";
import ForumCard from "../components/ForumCard";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="p-4">
        <ul className="grid gap-3">
          {Array.apply(null, Array(7)).map((x, idx) => (
            <li key={idx}>
              <ForumCard title="IPA TEST DOAng" author="Dr Hill" />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
