import Image from 'next/image';

export default function Home() {
    return (<div className="min-h-screen bg-[#FFFFFF] p-8">
        <header><Image src="/icons/menu.png" className='bg-[#ECF0F4] rounded-full' alt="menu" width={45} height={45}></Image></header>
        <main>
            <h1 className="text-[#1E1D1D]">Hey Xi, Good Afternoon!</h1>
            <input type="text" placeholder="Search dishes..." className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-md" />
        </main>
    </div>)
}