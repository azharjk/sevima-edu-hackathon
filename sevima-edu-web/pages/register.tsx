import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

import type { NextPage } from "next";

interface RegisterForm {
  username: string;
  password: string;
  confirmPassword: string;
}

interface TokenResponse {
  data: {
    auth_token: string;
  };
}

const Register: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<RegisterForm>();

  const onSubmit: SubmitHandler<RegisterForm> = async ({
    username,
    password,
    confirmPassword,
  }) => {
    if (password !== confirmPassword) {
      alert("Password is not match");
      return;
    }

    const res = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const { data } = (await res.json()) as TokenResponse;

    localStorage.setItem("auth_token", data.auth_token);

    router.push("/");
  };

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="mt-[5rem] h-min max-w-[27rem] w-full p-4 sm:border">
        <header className="flex justify-center">
          <span>
            <span className="font-semibold">Sevima Edu</span> - Register
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
          <div className="flex flex-col">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              {...register("confirmPassword", { required: true })}
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
