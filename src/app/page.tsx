"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
  FaLock
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 bg-gray-400">
      <div className="flex w-2/3 max-w-4xl bg-white rounded-2xl shadow-2xl">
        <div className="w-3/5 p-5">
          <div className="text-left font-semibold">
            <span className="text-[#4fb177] mr-1">Sotatek</span>
            JSC
          </div>

          <div className="py-10 flex flex-col items-center gap-2">
            <div className="text-3xl font-bold text-[#4fb177] mb-2">
              Sign in to your account
            </div>

            <div className="border-2 w-10 border-[#4fb177] inline-block mb-2"></div>

            <div className="flex justify-center">
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaGoogle className="text-sm" />
              </a>
            </div>

            <p className="text-gray-400">or use your email account</p>

            <div className="flex items-center flex-col">
              <div className="bg-gray-100 p-2 flex items-center mb-3">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="bg-gray-100 flex-1"
                />
              </div>

              <div className="bg-gray-100 p-2 flex items-center">
                <FaLock className="text-gray-400 m-2" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  className="bg-gray-100 flex-1"
                />
              </div>
            </div>

            <div className="flex w-64 justify-between my-5">
              <label className="flex items-center text-xs">
                <input type="checkbox" name="remember" className="mr-1" />
                Remember me
              </label>
              <Link href="#" className="text-xs">Forgot Password</Link>
            </div>

            <button className="bg-[#4fb177] border-2 rounded-full px-12 py-2 text-white  inline-block font-semibold hover:bg-white hover:text-[#4fb177]">
              Sign In
            </button>
          </div>
        </div>

        <div className="w-2/5 bg-[#4fb177] rounded-tr-2xl rounded-br-2xl text-white py-36 px-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-2">
            Fill up personal information and start journey with us.
          </p>

          <Link
            href="/sign-up"
            className="border-2 inline-block font-semibold rounded-full px-12 py-2 hover:bg-white hover:text-[#4fb177]"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
