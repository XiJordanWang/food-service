"use client";

import { useState } from "react";
import { login } from "@/service/user";
import { Eye, EyeOff, AlertCircle } from "lucide-react"; // Eye logo for show/hide password

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleLoginAction(formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    setErrorMsg(null);
    setIsPending(true);

    console.log("Attempting login with:", { username, password });

    try {
      const result = await login(username, password);
      console.log("success:", result);
      // 跳转逻辑...
    } catch (error:
      | { status: number; timestamp: string; message: string }
      | any) {
      setErrorMsg(error.message);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center bg-[#1E1E2E]"
      style={{
        backgroundImage: `url('/images/BG Asset.png')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundBlendMode: "multiply",
      }}
    >
      <header className="flex flex-col items-center text-[#FFFFFF] text-center pt-24 pb-12">
        <h1 className="text-[30px] font-bold">Login In</h1>
        <div className="text-[16px] opacity-85">
          Please sign in to your existing account
        </div>
      </header>

      <main className="flex-1 w-full bg-white rounded-t-[40px] shadow-2xl">
        <div className="w-full max-w-md mx-auto px-8 py-10 space-y-6">
          {errorMsg && (
            <div className="flex items-center gap-2 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm">
              <AlertCircle size={18} />
              <span>{errorMsg}</span>
            </div>
          )}

          <form className="space-y-6" action={handleLoginAction}>
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="block text-sm font-bold text-[#32343E] tracking-widest
                placeholder:text-[#CCCCCC]"
              >
                USERNAME
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="user"
                required
                className="block w-full h-14 rounded-xl border border-gray-200 bg-[#F0F5FA] px-4 py-3 
                placeholder:text-[#A0A5BA] placeholder:text-lg
                text-[#32343E]"
              ></input>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-bold text-[#32343E] tracking-widest"
              >
                PASSWORD
              </label>
              <div className="relative flex items-center">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  required
                  className="block w-full h-14 rounded-xl border border-gray-200 bg-[#F0F5FA] px-4 py-3 
                placeholder:text-[#A0A5BA] placeholder:text-lg
                text-[#32343E]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A0A5BA]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2 rounded-4xl border-[#E3EBF2]"
                />
                <label htmlFor="remember" className="text-sm text-[#7E8A97]">
                  Remember me
                </label>
                <a
                  href="#"
                  className="float-right text-sm text-[#FF7622] opacity-80 hover:opacity-100"
                >
                  Forgot password
                </a>
                <button
                  type="submit"
                  className="w-full h-14 rounded-xl bg-[#FF7622] text-white font-bold text-lg tracking-widest hover:bg-[#FF7622]/90 transition-colors duration-300 mt-6"
                >
                  LOG IN
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
