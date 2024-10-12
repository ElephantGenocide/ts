import React from "react";
import { Input, Typography } from "@material-tailwind/react";

export default function page() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center p-10 rounded-xl">
        <h1 className="text-3xl mb-8 text-foreground ">Login</h1>

        <div className="w-full max-w-sm min-w-[200px]">
          <input
            className="w-full bg-transparent placeholder:text-neutral-500 text-foreground text-sm border border-foreground rounded-md px-3 py-2 h-12 transition duration-300 ease focus:outline-none focus:border-neutral-500 hover:border-neutral-500  shadow-sm focus:shadow"
            placeholder="e-mail"
          />
        </div>

        <div className="w-full max-w-sm min-w-[200px]">
          <div className="relative">
            <input
              type="password"
              className="w-full pl-3 pr-3 py-2 h-12  bg-transparent placeholder:text-neutral-500 text-foreground text-sm border border-foreground rounded-md transition duration-300 ease focus:outline-none focus:border-neutral-500  hover:border-neutral-500  shadow-sm focus:shadow"
              placeholder="password"
            />
            <p className="flex items-start mt-2 text-xs text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-1.5"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              Use at least 8 characters, one uppercase, one lowercase and one
              number.
            </p>
          </div>
        </div>

        <button className="shadow-xl px-5 py-2 rounded-md bg-yellow-600">
          Login
        </button>
        <div className="flex flex-col items-center">
          <div>
            Forgot{" "}
            {
              <span className="text-yellow-400 font-bold cursor-pointer hover:text-yellow-600">
                <a>Password?</a>
              </span>
            }
          </div>
          <div>
            Dont have an account?{" "}
            {
              <span className="text-yellow-400 font-bold cursor-pointer hover:text-yellow-600">
                <a href="/register">Sign Up!</a>
              </span>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
