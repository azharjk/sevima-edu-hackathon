import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

import type { NextPage } from "next";

import { TokenResponse } from "../interfaces/token";

interface LoginForm {
  username: string;
  password: string;
}

const Login: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = async ({ username, password }) => {
    const res = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const { data } = (await res.json()) as TokenResponse;

    console.log(data);

    localStorage.setItem("auth_token", data.auth_token);

    router.push("/");
  };

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="mt-[5rem] h-min max-w-[27rem] w-full p-4 sm:border">
        <header className="flex justify-center">
          <span>
            <span className="font-semibold">Sevima Edu</span> - Login
          </span>
        </header>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 flex flex-col gap-3"
        >
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              {...register("username", { required: true })}
              type="text"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full px-4 py-2 bg-primary hover:bg-primary-darker text-white">
            Login
          </button>
        </form>
        <div className="flex flex-col items-center gap-3 mt-4">
          <span className="uppercase font-semibold">Or</span>
          <span>
            Do not have an account?{" "}
            <Link href="/register">
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

export default Login;
