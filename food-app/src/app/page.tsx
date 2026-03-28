"use client";

import Image from "next/image";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onbording");
    }, 1000); // 1 second delay

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [router]);

  return (
    <div className="min-h-screen bg-white">
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <Image
          src="/images/Logo.svg"
          alt="Food Service Logo"
          width="122"
          height="59"
        />
      </main>
    </div>
  );
}
