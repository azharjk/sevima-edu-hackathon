import { useRouter } from "next/router";

import type { NextPage } from "next";

import SubjectItem from "../../components/SubjectItem";
import MainLayout from "../../components/MainLayout";

const ForumDetail: NextPage = () => {
  const router = useRouter();
  const { fid } = router.query;

  return (
    <MainLayout>
      <div className="flex justify-center">
        <div className="w-full max-w-[30rem]">
          <header className="flex flex-col p-4">
            <span className="text-xl font-semibold">Title - {fid}</span>
            <span>Author Name Biasanya</span>
          </header>
          <section className="p-4">
            <ul className="flex flex-col gap-3">
              {Array.apply(null, Array(7)).map((x, idx) => (
                <li key={idx} className="border p-2">
                  <SubjectItem
                    title="tutor subject dek"
                    date="Sunday, 2 Apr 2019"
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default ForumDetail;
