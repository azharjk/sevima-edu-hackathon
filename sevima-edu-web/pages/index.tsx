import type { NextPage } from "next";

import ForumCard from "../components/ForumCard";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center">
      <main className="p-4 w-full max-w-[70rem]">
        <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {Array.apply(null, Array(7)).map((x, idx) => (
            <li key={idx}>
              <ForumCard title="IPA TEST DOAng" author="Dr Hill" id={idx} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
