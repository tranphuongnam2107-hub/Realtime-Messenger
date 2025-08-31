import type { Route } from "./+types/home";
import "../resources/styles/loginPageStyle.css"
import LoginInput from "../components/Input/LoginInput"
// import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
    <div className="login-page flex items-center justify-center min-h-screen">
      <div className="login-wrapper bg-white rounded-2xl shadow-2xl flex flex-row overflow-hidden -translate-y-7">

        <div className="left-login w-[60%] !py-10 !px-8 bg-white">
          <h1 className="text-[#010101] text-2xl font-bold">Login To Your Account!</h1>

          <form method="post" className="!mt-6">
            <LoginInput label="Phone number" type="tel" />
            <LoginInput label="Password" type="password" />

            <div className="flex flex-row items-center justify-between text-sm !mt-6">

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#24BAA1] accent-[#24BAA1]"
                />
                <span className="text-gray-700">Remember me</span>
              </label>

              <a
                href="#"
                className="text-[#24BAA1] font-medium hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="!mt-6 w-full bg-[#24BAA1] text-white !py-2 rounded-lg font-semibold hover:bg-teal-700 transition cursor-pointer"
            >
              Login
            </button>

            {/* Register link */}
            <p className="text-center text-sm text-gray-600 !mt-6">
              Don’t have an account?{" "}
              <a href="/register" className="text-[#24BAA1] font-medium hover:underline">
                Register
              </a>
            </p>

          </form>
        </div>

        <div className="right-login bg-[#24BAA1] w-[40%]">

        </div>

      </div>
    </div>
  </>
}
