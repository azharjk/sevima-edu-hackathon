import Link from "next/link";

import type { NextPage } from "next";

const Register: NextPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="mt-[5rem] h-min max-w-[27rem] w-full p-4 sm:border">
        <header className="flex justify-center">
          <span>
            <span className="font-semibold">Sevima Edu</span> - Register
          </span>
        </header>
        <form action="" className="mt-4 flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Repeat your password"
            />
          </div>
          <button className="w-full px-4 py-2 bg-primary hover:bg-primary-darker text-white">
            Register
          </button>
        </form>
        <div className="flex flex-col items-center gap-3 mt-4">
          <span className="uppercase font-semibold">Or</span>
          <span>
            Already have an account?{" "}
            <Link href="/login">
              <a
                className="text-primary hover:text-primary-darker hover:underline"
                href=""
              >
                here.
              </a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
