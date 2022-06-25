import type { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="mt-[5rem] h-min max-w-[27rem] w-full p-4 sm:border">
        <header className="flex justify-center">
          <span>
            <span className="font-semibold">Sevima Edu</span> - Login
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
          <button className="w-full px-4 py-2 bg-primary hover:bg-primary-darker text-white">Login</button>
        </form>
        <div className="flex flex-col items-center gap-3 mt-4">
          <span className="uppercase font-semibold">Or</span>
          <span>
            Do not have an account? <a className="text-primary hover:text-primary-darker hover:underline" href="">here.</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
