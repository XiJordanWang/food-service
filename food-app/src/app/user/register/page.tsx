"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/service/user";
import { Background, Header, WhiteBlock } from "@/components/user/background";
import { Button, Input, PasswordInput, ErrorMessage } from "@/components/user/form";



export default function Register() {
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    const handleRegister = async (formData: FormData): Promise<void> => {
        console.log("Form data received:", Object.fromEntries(formData.entries()));

        const firstName = formData.get("first-name") as string;
        const lastName = formData.get("last-name") as string;
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirm-password") as string;

        setErrorMsg(null);
        setIsPending(true);

        if (password !== confirmPassword) {
            setErrorMsg("Passwords do not match");
            setIsPending(false);
            return;
        }

        try {
            setIsPending(true);
            const result = await register({ firstName, lastName, username, password });
            console.log("success:", result);
            setIsPending(false);
            router.push("/user/login");
        } catch (error:
            | { status: number; timestamp: string; message: string }
            | any) {
            setIsPending(false);
            setErrorMsg(error instanceof Error ? error.message : "Registration failed");
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } finally {
            setIsPending(false);
        }
    }

    return (<Background>
        <Header title="Sign Up" information="Create a new account to start your food journey" />
        <WhiteBlock>
            {errorMsg && <ErrorMessage message={errorMsg} />}
            <form action={handleRegister} className="w-full max-w-md mx-auto px-8 py-10 space-y-6">
                <Input id="first-name" label="First Name" name="first-name" type="text" placeholder="John" />
                <Input id="last-name" label="Last Name" name="last-name" type="text" placeholder="Doe" />
                <Input id="username" label="Username" name="username" type="text" placeholder="user" />
                <PasswordInput id="password" label="Password" name="password" />
                <PasswordInput id="confirm-password" label="Re-Type Password" name="confirm-password" />
                <Button text={isPending ? "LOADING..." : "SIGN UP"} />
            </form>
        </WhiteBlock>
    </Background>)
}