import type { Route } from "./+types/home";
import "../resources/styles/loginPageStyle.css"
import LoginInput from "../components/Input/LoginInput"
import { useState } from "react";
import { authenService } from "~/services/authenService";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toast } from "react-toastify";

const MySwal = withReactContent(Swal);

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New ChatApp" },
    { name: "description", content: "Welcome to ChatApp!" },
  ];
}

export default function Home() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await Swal.fire({
      title: "Logging in...",
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => Swal.showLoading(),
      timerProgressBar: true,
      timer: 1000, 
    });

    try {
      const data = await authenService.login(identifier, password);

      Swal.close();

      if (!data || !data.accessToken) {
        Swal.close();
        toast.error("Your identifier or password is incorrect.");
        return;
      }

      if (rememberMe) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      } else {
        sessionStorage.setItem("accessToken", data.accessToken);
        sessionStorage.setItem("refreshToken", data.refreshToken);
      }

      Swal.close();
      toast.success("Login successfully.");
      setTimeout(() => {
        window.location.href = "/homepage";
      }, 1000);

    } catch (error: any) {
      console.error("Login error:", error);
      Swal.close();
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return <>
    <div className="login-page flex items-center justify-center min-h-screen">
      <div className="login-wrapper bg-white rounded-2xl shadow-2xl flex flex-row overflow-hidden -translate-y-7">

        <div className="left-login w-[60%] !py-10 !px-8 bg-white">
          <h1 className="text-[#010101] text-2xl font-bold">Login To Your Account!</h1>

          <form method="post" className="!mt-6" onSubmit={handleSubmit}>
            <div onChange={(e) => {
              const target = e.target as HTMLInputElement;
              if (target.type === "text") setIdentifier(target.value);
              if (target.type === "password") setPassword(target.value);
            }}>
              <LoginInput label="Phone number or email" type="text" />
              <LoginInput label="Password" type="password" />
            </div>

            <div className="flex flex-row items-center justify-between text-sm !mt-6">

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
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
