"use client";

import Image from "next/image";

export default function Onboarding() {
  return (
    <div className="min-h-screen bg-white flex justify-center font-sans">
      <main className="w-full max-w-[430px] flex flex-col items-center px-[33px] relative">
        <div className="mt-[114px]">
          <Image
            src="/images/Rectangle 4177.png"
            alt="Food Service Onboarding"
            width="240"
            height="292"
          />
        </div>
        <h1>All your favorites</h1>
        <div>
          Get all your loved foods in one once place, you just place the orer we
          do the rest
        </div>
        <button className="bg-[#FF7622] text-[#FFFFFF] max-w-[327px] h-[62px] rounded-md">
          NEXT
        </button>
      </main>
    </div>
  );
}
