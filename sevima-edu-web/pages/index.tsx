import type { NextPage } from "next";
import { useEffect, useState } from "react";

import ForumCard from "../components/ForumCard";
import MainLayout from "../components/MainLayout";

interface User {
  username: string;
}

interface Forum {
  id: number;
  title: string;
  author: User;
}

interface ForumResponse {
  data: Forum[];
}

// FIXME: Use server side nextjs authentication.
//        The implementation now preventing to
//        fetch server side props.

const Home: NextPage = () => {
  const [forums, setForums] = useState<Forum[]>([]);

  useEffect(() => {
    const fetchForums = async () => {
      const token = localStorage.getItem("auth_token");

      if (token === null) {
        // FIXME: Handle unauthorized case
        alert("Unauthorized");
        return;
      }

      const res = await fetch("http://localhost:8000/api/user/forums", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = (await res.json()) as ForumResponse;

      setForums(data);
    };

    fetchForums();
  }, []);

  return (
    <MainLayout>
      <div className="flex justify-center">
        <main className="p-4 w-full max-w-[70rem]">
          <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {forums.map(({ id, title, author }) => (
              <li key={id}>
                <ForumCard title={title} author={author.username} id={id} />
              </li>
            ))}
          </ul>
        </main>
      </div>
    </MainLayout>
  );
};

export default Home;
