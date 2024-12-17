import Image from "next/image"
import "../spotify.css"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function SideBar() {
    return (
        <>
            <div className='relative w-full max-w-[450px] hidden lg:flex flex-col my-2 bg-[#121212] text-white rounded-[9px]'>
                <div className="flex items-center justify-between px-6 mt-5">
                    <div className="flex items-center gap-3 group select-none">
                        <Image
                            src={"/spotify/icons/books.svg"}
                            width={25}
                            height={25}
                            alt="library"
                            className="block group-hover:hidden"
                        />
                        <Image
                            src={"/spotify/icons/booksFocus.svg"}
                            width={25}
                            height={25}
                            alt="library"
                            className="hidden group-hover:block"
                        />
                        <span className="text-[15px] text-[#B0B0B0] group-hover:text-white">Biblioteka</span>
                    </div>
                    <div className="flex justify-center items-center bg-transparent
                     p-[10px] hover:bg-[#1A1A1A] rounded-full group select-none">
                        <Image
                            src={"/spotify/icons/plus.svg"}
                            width={14}
                            height={14}
                            alt="library"
                            className="block group-hover:hidden"
                        />
                        <Image
                            src={"/spotify/icons/plusFocus.svg"}
                            width={14}
                            height={14}
                            alt="library"
                            className="hidden group-hover:block"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-7 mt-9 px-2 overflow-y-auto min-h-[150px]">
                    <div className="flex flex-col bg-[#1F1F1F] px-5 py-4 rounded-[9px]">
                        <span className="text-[15px]">
                            Utwórz swoją pierwszą playlistę
                        </span>
                        <span className="font-sans mt-1 text-[14px]">
                            To proste, pomożemy Ci
                        </span>
                        <div className="mt-5 pb-1">
                            <Button className='bg-white px-5 py-2 hover:bg-[#F3F3F3] text-[13px] hover:text-[14px] font-semibold text-black rounded-[32px]'>
                                Utwórz playlistę
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col bg-[#1F1F1F] px-5 py-4 rounded-[9px]">
                        <span className="text-[15px]">
                            Poszukajmy podcastów, które możesz <br /> obserwować
                        </span>
                        <span className="font-sans mt-1 text-[14px]">
                            Będziemy Cię informować o nowych odcinkach
                        </span>
                        <div className="mt-5 pb-1">
                            <Button className='bg-white px-5 py-2 hover:bg-[#F3F3F3] text-[13px] hover:text-[14px] font-semibold text-black rounded-[32px]'>
                                Przeglądaj podcasty
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="flex mt-auto flex-col pt-4 pb-10 px-6 mb-2">
                    <div className="flex gap-2 flex-wrap text-[12px] font-sans font-semibold text-[#B3B3B3]">
                        <span className="mr-[16px]">Kwestie prawne</span>
                        <span className="mr-[16px]">Centrum ochrony prywatności i bezpieczeństwa</span>
                        <span className="mr-[16px]">Polityka prywatności</span>
                        <span className="mr-[16px]">Ustawienia plików cookie</span>
                        <span className="mr-[16px]">O reklamach</span>
                        <span className="mr-[16px]">Dostępność</span>
                    </div>
                    <span className="mt-2 mb-8 text-white text-[12px] font-sans font-semibold">Pliki cookie</span>
                    <div className="w-[100px] py-1 border-[1px] border-[#B3B3B3] hover:border-white flex items-center rounded-full justify-center cursor-pointer">
                        <Image src={"/spotify/icons/global.svg"} width={18} height={18} alt="global" />
                        <span className="px-1 text-[14px] select-none">Polski</span>
                    </div>
                </div>


            </div>
            <div className="hidden mobile:flex lg:hidden">
                <Sheet>
                    <SheetTrigger className="group">
                        <Image
                            src={"/spotify/icons/arrowRight.svg"}
                            width={50}
                            height={50}
                            alt="arrow-right"
                            className="block group-hover:hidden"
                        />
                        <Image
                            src={"/spotify/icons/arrowRightFocus.svg"}
                            width={50}
                            height={50}
                            alt="arrow-right"
                            className="hidden group-hover:block"
                        />
                    </SheetTrigger>
                    <SheetContent side={"left"} className="px-0 py-0 border-none bg-black bg-opacity-[50%]">
                        <div className='relative w-full h-full flex flex-col my-2 bg-[#121212] text-white rounded-[9px] pb-[44px]'>
                            <div className="flex items-center justify-between px-6 mt-5">
                                <div className="flex items-center gap-3 group select-none">
                                    <Image
                                        src={"/spotify/icons/books.svg"}
                                        width={25}
                                        height={25}
                                        alt="library"
                                        className="block group-hover:hidden"
                                    />
                                    <Image
                                        src={"/spotify/icons/booksFocus.svg"}
                                        width={25}
                                        height={25}
                                        alt="library"
                                        className="hidden group-hover:block"
                                    />
                                    <span className="text-[15px] text-[#B0B0B0] group-hover:text-white">Biblioteka</span>
                                </div>
                                <div className="flex justify-center items-center bg-transparent
                                    p-[10px] hover:bg-[#1A1A1A] rounded-full group select-none">
                                    <Image
                                        src={"/spotify/icons/plus.svg"}
                                        width={14}
                                        height={14}
                                        alt="library"
                                        className="block group-hover:hidden"
                                    />
                                    <Image
                                        src={"/spotify/icons/plusFocus.svg"}
                                        width={14}
                                        height={14}
                                        alt="library"
                                        className="hidden group-hover:block"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-7 mt-9 px-2 overflow-y-auto min-h-[150px]">
                                <div className="flex flex-col bg-[#1F1F1F] px-5 py-4 rounded-[9px]">
                                    <span className="text-[15px]">
                                        Utwórz swoją pierwszą playlistę
                                    </span>
                                    <span className="font-sans mt-1 text-[14px]">
                                        To proste, pomożemy Ci
                                    </span>
                                    <div className="mt-5 pb-1">
                                        <Button className='bg-white px-5 py-2 hover:bg-[#F3F3F3] text-[13px] hover:text-[14px] font-semibold text-black rounded-[32px]'>
                                            Utwórz playlistę
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex flex-col bg-[#1F1F1F] px-5 py-4 rounded-[9px]">
                                    <span className="text-[15px]">
                                        Poszukajmy podcastów, które możesz <br /> obserwować
                                    </span>
                                    <span className="font-sans mt-1 text-[14px]">
                                        Będziemy Cię informować o nowych odcinkach
                                    </span>
                                    <div className="mt-5 pb-1">
                                        <Button className='bg-white px-5 py-2 hover:bg-[#F3F3F3] text-[13px] hover:text-[14px] font-semibold text-black rounded-[32px]'>
                                            Przeglądaj podcasty
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col mt-8 px-6">
                                <div className="flex gap-2 flex-wrap text-[12px] font-sans font-semibold text-[#B3B3B3]">
                                    <span className="mr-[16px]">Kwestie prawne</span>
                                    <span className="mr-[16px]">Centrum ochrony prywatności i bezpieczeństwa</span>
                                    <span className="mr-[16px]">Polityka prywatności</span>
                                    <span className="mr-[16px]">Ustawienia plików cookie</span>
                                    <span className="mr-[16px]">O reklamach</span>
                                    <span className="mr-[16px]">Dostępność</span>
                                </div>
                                <span className="mt-2 text-white text-[12px] font-sans font-semibold">Pliki cookie</span>
                                <div className="mt-8 w-[100px] py-1 border-[1px] border-[#B3B3B3] hover:border-white flex items-center rounded-full justify-center cursor-pointer">
                                    <Image src={"/spotify/icons/global.svg"} width={18} height={18} alt="global" />
                                    <span className="px-1 text-[14px] select-none">Polski</span>
                                </div>
                            </div>


                        </div>

                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}
