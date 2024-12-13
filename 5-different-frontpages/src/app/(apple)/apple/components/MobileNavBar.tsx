"use client"
import Image from "next/image"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { NavBarItems } from "../../lib/utils"
import { useEffect, useState } from "react";

export default function MobileNavBar() {

    const [chosenSection, setChosenSection] = useState(null)

    const changeSection = (prop: any) => {
        setChosenSection(prop);
    }

    const showNavBarSection = (chosenSection: any) => {
        const currentItem = NavBarItems.find((item) => item.name === chosenSection);

        if (!currentItem) return null;

        return (
            <div className="navbar-dropdown p-4 pt-6 absolute top-[44px] left-0 right-0 bg-white pb-[100px]">
                <div className="w-full max-w-[1024px]">
                    <div className="flex flex-col items-start text-start gap-14 pl-6">
                        <div className="flex flex-col">
                            <ul className="flex flex-col gap-7 text-[28px] text-[#333336] hover:text-black font-semibold">
                                {currentItem.firstTabItems?.map((subItem) => (
                                    <li key={subItem.name} className="text-[24px]">
                                        <a href={subItem.path}>{subItem.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-[17px] text-gray-400 mb-3">{currentItem.secondTabTittle}</span>
                            <ul className="flex flex-col gap-4 mt-3">
                                {currentItem.secondTabItems?.map((subItem) => (
                                    <li key={subItem.name} className="text-[17px] text-[#333336] hover:text-black font-semibold">
                                        <a href={subItem.path}>{subItem.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {currentItem.thirdTabItems && currentItem.thirdTabTittle && (
                            <div className="flex flex-col">
                                <span className="text-[17px] text-gray-400 mb-3">{currentItem.thirdTabTittle}</span>
                                <ul className="flex flex-col gap-2 mt-3">
                                    {currentItem.thirdTabItems?.map((subItem) => (
                                        <li key={subItem.name} className="text-[17px] text-[#333336] hover:text-black font-semibold">
                                            <a href={subItem.path}>{subItem.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };



    return (
        <nav className="bg-white bg-opacity-85 hover:bg-opacity-100 w-full font-medium flex md:hidden justify-between sticky top-0 z-20 h-[48px]">
            <div className="relative h-[48px] aspect-square">
                <Image src={"/apple/img/logo.svg"} fill alt="logo" className="object-contain" />
            </div>
            <div className="flex items-center">
                <div className="relative h-[48px] aspect-square">
                    <Image src={"/apple/img/magnifyingGlass.svg"} fill alt="search" className="object-contain" />
                </div>
                <div className="relative h-[48px] aspect-square">
                    <Image src={"/apple/img/cart.svg"} fill alt="cart" className="object-contain" />
                </div>
                <Sheet key={"top"}>
                    <SheetTrigger>
                        <div className="relative h-[19px] aspect-square mb-[10px] ml-3 mr-5" onClick={() => changeSection(null)}>
                            <Image src={"/apple/img/menu.svg"} fill alt="menu" />
                        </div>
                    </SheetTrigger>
                    <SheetContent side={"top"} className="h-screen overflow-y-auto">
                        <SheetHeader>
                            <SheetTitle></SheetTitle>
                            <SheetDescription asChild>
                                <div>
                                    {chosenSection && (
                                        <div key={"arrow"} className="absolute top-3 left-3 cursor-pointer" onClick={() => changeSection(null)}>
                                            <Image src={"/apple/img/arrowLeft.svg"} width={20} height={20} alt="arrowLeft" />
                                        </div>
                                    )}

                                    {chosenSection ? showNavBarSection(chosenSection) : (
                                        <div key={"content"} className="w-full navbar-dropdown">
                                            <ul className="w-full flex flex-col gap-7 text-start pl-4 mt-7 pb-7">
                                                {NavBarItems.map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="text-[28px] text-[#333336] hover:text-black font-semibold
                                                    flex justify-between group"
                                                        onClick={() => changeSection(item.name)}
                                                    >
                                                        <span>{item.name}</span>
                                                        <div className="hidden group-hover:block">
                                                            <Image src={"/apple/img/arrowRight.svg"} height={20} width={20} alt="arrowRight" />
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}
