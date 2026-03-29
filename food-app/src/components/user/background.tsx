interface HeaderProps {
    title: string;
    information: string;
}

export function Header({ title, information }: HeaderProps) {
    return (<header className="flex flex-col items-center text-[#FFFFFF] text-center pt-24 pb-12">
        <h1 className="text-[30px] font-bold">{title}</h1>
        <div className="text-[16px] opacity-85">
            {information}
        </div>
    </header>)
}

export function Background({ children }: { children: React.ReactNode }) {
    return (<div
        className="min-h-screen w-full flex flex-col items-center bg-[#1E1E2E]"
        style={{
            backgroundImage: `url('/images/BG Asset.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundBlendMode: "multiply",
        }}
    >
        {children}
    </div>)
}

export function WhiteBlock({ children }: { children: React.ReactNode }) {
    return (<main className="flex-1 w-full bg-white rounded-t-[40px] shadow-2xl space-y-6">
        {children}
    </main>)
}