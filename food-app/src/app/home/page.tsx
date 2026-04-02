import Image from 'next/image';

const categories = [
    { name: 'Pizza', icon: '/icons/pizza.png' },
    { name: 'Burger', icon: '/icons/burger.png' },
    { name: 'Sushi', icon: '/icons/sushi.png' },
    { name: 'Dessert', icon: '/icons/dessert.png' },
    { name: 'Drinks', icon: '/icons/drinks.png' },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-[#FFFFFF] p-8">
            <header className='flex items-center justify-between mt-6 mb-10'>
                <button className='flex bg-[#ECF0F4] rounded-full w-10 h-10 items-center justify-center shadow-lg shadow-gray-300/50'>
                    <Image src="/icons/menu.png" alt="menu" width={20} height={20} />
                </button>
                <div className='flex flex-col ml-4 flex-1'>
                    <span className='text-[#FF7622] text-[12px]'>DELIVER TO</span>
                    <span className='text-[#676767] text-[14px]'>Xi & Shiyu's Home</span>
                </div>
                <button className='flex bg-[#181C2E] rounded-full w-10 h-10 items-center justify-center shadow-lg shadow-[#181C2E]/40'>
                    <Image src="/icons/cart.png" alt="cart" width={20} height={20} />
                </button>
            </header>
            <main className='flex flex-col gap-4'>
                <h1 className="text-[#1E1D1D] text-[16px]">Hey Xi, <strong className='font-bold'>Good Afternoon!</strong></h1>
                <div className='relative w-full'>
                    <div className='absolute inset-y-0 left-4 flex items-center pointer-events-none'>
                        <Image src="/icons/search.png" alt="search" width={14} height={14} />
                    </div>
                    <input type="text" placeholder="Search dishes..." className="bg-[#F6F6F6] placeholder:text-[#676767] placeholder:text-[14px] pl-10 pr-4 py-4 w-full outline-none" />
                </div>
                <div>
                    <div className='flex items-center justify-between'>
                        <div className='text-[#32343E] text-[18px] text-bold'>All Categories</div>
                        <div className='text-[#333333] text-[16px]'>See All <Image src="/icons/vector.png" className='ml-2 inline' alt="vector" width={5} height={10} /></div>
                    </div>
                    <div className='grid grid-cols-2 gap-4 p-2'>
                        {categories.map((category) => (
                            <div key={category.name} className='flex flex-col items-center bg-[#FFFFFF] border border-gray-100 rounded-2xl shadow-sm'>
                                <div className='border rounded-2xl w-full border-[#98A8B8] aspect-4/3 flex items-center justify-center'>
                                    <div className="text-xs text-gray-400">Photo</div>
                                </div>
                                <div className='text-[#676767] text-[18px] text-bold font-medium m-3'>{category.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}