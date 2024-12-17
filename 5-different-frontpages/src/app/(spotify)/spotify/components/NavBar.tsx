import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

export default function NavBar() {
    return (
        <nav className='bg-black w-full h-[70px] flex justify-between'>
            <div className='flex w-full max-w-[70px] justify-center items-center pl-7 mr-[4vw] lg:mr-[6vw] xl:mr-[10vw]'>
                <Image src={"/spotify/icons/spotify-icon.svg"} width={32} height={32} alt='spotify-icon' />
            </div>

            <div className='hidden md:flex w-full max-w-[600px] items-center group'>
                <Link href={"/spotify/"}>
                    <div className='bg-[#1F1F1F] w-full max-w-[49px] p-3 rounded-full mr-3 group cursor-pointer'>
                        <Image src={"/spotify/icons/house.svg"} width={25} height={25} alt='house-icon' className='block group-hover:hidden' />
                        <Image src={"/spotify/icons/houseFocus.svg"} width={25} height={25} alt='house-icon' className='hidden group-hover:block' />
                    </div>
                </Link>
                <div className='hidden md:flex w-full max-w-[500px] relative justify-between items-center 
                    bg-[#1F1F1F] group-focus-within:outline group-focus-within:outline-2 group-focus-within:outline-[#FFFFFF] 
                    group-focus-within:bg-[#2A2A2A] group-hover:outline group-hover:outline-2 
                    group-hover:outline-[#FFFFFF] group-hover:bg-[#2A2A2A] 
                    py-2 px-4 rounded-[23px] group'>
                    <Image
                        src={"/spotify/icons/magnifyingGlass.svg"}
                        width={25}
                        height={25}
                        alt='magnifyingGlass-icon'
                        className='absolute group-focus-within:hidden group-hover:hidden'
                    />
                    <Image
                        src={"/spotify/icons/magnifyingGlassFocus.svg"}
                        width={25}
                        height={25}
                        alt='magnifyingGlass-icon'
                        className='absolute hidden group-focus-within:block group-hover:block'
                    />

                    <div className='w-full pl-10 pr-2 border-r-[1px] border-[#B0B0B0] group-focus-within:border-[#FFFFFF] group-hover:border-[#FFFFFF]'>
                        <input type='text' className='w-full h-[30px] bg-[#1F1F1F] group-hover:bg-[#2A2A2A] focus:bg-[#2A2A2A] focus:outline-none text-white' />
                    </div>

                    <div className='pl-2'>
                        <Image
                            src={"/spotify/icons/bag.svg"}
                            width={25}
                            height={25}
                            alt='bag-icon'
                            className='group-focus-within:hidden group-hover:hidden'
                        />
                        <Image
                            src={"/spotify/icons/bagFocus.svg"}
                            width={25}
                            height={25}
                            alt='bag-icon'
                            className="hidden group-focus-within:block group-hover:block"
                        />
                    </div>
                </div>
            </div>

            <div className='hidden md:flex items-center ml-6'>
                <Button className='bg-black w-[120px] h-[40px] mr-4 hover:bg-black text-[15px] hover:text-[16px] font-semibold text-[#B0B0B0] hover:text-white'>
                    Zarejestruj się
                </Button>
                <div className='w-[160px] h-[50px] flex justify-center items-center'>
                    <Button className='bg-white px-9 py-6 hover:bg-[#F3F3F3] text-[15px] hover:text-[16px] font-semibold text-black rounded-[32px]'>
                        Zaloguj się
                    </Button>
                </div>
            </div>

            <div className='flex md:hidden pr-8'>
                <Sheet>
                    <SheetTrigger><HamburgerMenuIcon height={40} width={40} color='white' /></SheetTrigger>
                    <SheetContent className="max-w-[700px] w-[80%] border-none bg-black bg-opacity-[50%]">
                        <SheetClose asChild>
                            <div className="flex justify-center">
                                <Link href={"/spotify/"}>
                                    <SheetClose>
                                        <Image src={"/spotify/icons/spotify-icon.svg"} alt="logo" width={50} height={50} />
                                    </SheetClose>
                                </Link>
                            </div>
                        </SheetClose>

                        <div className="w-full text-white text-[26px] mt-10">
                            <div className='flex w-full max-w-[600px] items-center group'>
                                <Link href={"/spotify/"}>
                                    <SheetClose>
                                        <div className='bg-[#1F1F1F] flex justify-center items-center w-full max-w-[49px] p-3 rounded-full mr-3 group cursor-pointer'>
                                            <Image src={"/spotify/icons/house.svg"} width={19} height={19} alt='house-icon' className='block group-hover:hidden' />
                                            <Image src={"/spotify/icons/houseFocus.svg"} width={19} height={19} alt='house-icon' className='hidden group-hover:block' />
                                        </div>
                                    </SheetClose>
                                </Link>
                                <div className='flex w-full max-w-[500px] relative justify-between items-center 
                                    bg-[#1F1F1F] group-focus-within:outline group-focus-within:outline-2 group-focus-within:outline-[#FFFFFF] 
                                    group-hover:outline group-hover:outline-2 group-hover:outline-[#FFFFFF] 
                                    py-2 px-4 rounded-[23px] group'>
                                    <Image
                                        src={"/spotify/icons/magnifyingGlass.svg"}
                                        width={19}
                                        height={19}
                                        alt='magnifyingGlass-icon'
                                        className='absolute group-focus-within:hidden group-hover:hidden'
                                    />
                                    <Image
                                        src={"/spotify/icons/magnifyingGlassFocus.svg"}
                                        width={19}
                                        height={19}
                                        alt='magnifyingGlass-icon'
                                        className='absolute hidden group-focus-within:block group-hover:block'
                                    />

                                    <div className='w-full pl-7 pr-2 flex items-center'>
                                        <input type='text' className='w-full h-[30px] bg-[#1F1F1F] focus:outline-none text-white text-[14px]' />
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 items-center mt-8'>
                            <Button className='bg-transparent w-[120px] h-[40px] hover:bg-transparent text-[15px] hover:text-[16px] font-semibold text-[#B0B0B0] hover:text-white'>
                                Zarejestruj się
                            </Button>
                            <div className='w-[160px] h-[50px] flex justify-center items-center'>
                                <Button className='bg-white px-9 py-6 hover:bg-[#F3F3F3] text-[15px] hover:text-[16px] font-semibold text-black rounded-[32px]'>
                                    Zaloguj się
                                </Button>
                            </div>
                        </div>

                        <SheetClose className='w-full h-screen'></SheetClose>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}
