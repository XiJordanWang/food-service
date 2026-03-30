"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/service/user";
import Link from "next/link";
import { Background, WhiteBlock, Header } from "@/components/user/background";
import {
  Input,
  PasswordInput,
  Button,
  ErrorMessage,
} from "@/components/user/form";

export default function Login() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  async function handleLoginAction(formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    setErrorMsg(null);
    setIsPending(true);

    try {
      setIsPending(true);
      const result = await login(username, password);
      console.log(result);
      setIsPending(false);
      router.push("/home");
    } catch (error:
      | { status: number; timestamp: string; message: string }
      | any) {
      setIsPending(false);
      setErrorMsg(error.message);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <Background>
      <Header
        title="Login In"
        information="Please sign in to your existing account"
      />

      <WhiteBlock>
        {errorMsg && <ErrorMessage message={errorMsg} />}

        <form action={handleLoginAction}>
          <Input
            id="username"
            label="Username"
            name="username"
            type="text"
            placeholder="user"
          />
          <PasswordInput id="password" label="Password" name="password" />

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
          <Button text={isPending ? "LOGGING IN..." : "LOG IN"} />
        </form>

        <div className="text-center text-sm text-[#7E8A97] mb-10">
          Dont't have an account?{" "}
          <Link
            href="/user/register"
            className="text-[#FF7622] opacity-80 hover:opacity-100"
          >
            Sign Up
          </Link>
        </div>
      </WhiteBlock>
    </Background>
  );
}
