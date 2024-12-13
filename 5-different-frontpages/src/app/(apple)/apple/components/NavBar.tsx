"use client";
import { useState } from "react";
import { NavBarItems } from "../../lib/utils";
import Image from "next/image";

export default function NavBar() {
    const [hoverSection, setHoverSection] = useState<string | null>(null);

    const handleMouseEnter = (itemName: string) => {
        setHoverSection(itemName);
    };

    const handleMouseLeave = () => {
        setHoverSection(null);
    };

    const showNavBarSection = () => {
        const currentItem = NavBarItems.find((item) => item.name === hoverSection);

        if (!currentItem) return null;

        return (
            <div className="navbar-dropdown  p-4 pt-6 absolute top-[44px] left-0 right-0 bg-white flex justify-center pb-14" onMouseLeave={handleMouseLeave}>
                <div className="w-full max-w-[1024px]">
                    <div className="flex gap-20">
                        <div className="flex flex-col">
                            <span className="text-[12px] text-gray-400 ">{currentItem.firstTabTittle}</span>
                            <ul className="flex flex-col gap-1 mt-3 font-medium">
                                {currentItem.firstTabItems?.map((subItem) => (
                                    <li key={subItem.name} className="text-[24px]">
                                        <a href={subItem.path}>{subItem.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-[12px] text-gray-400">{currentItem.secondTabTittle}</span>
                            <ul className="flex flex-col gap-2 mt-3">
                                {currentItem.secondTabItems?.map((subItem) => (
                                    <li key={subItem.name} className="text-[12px]">
                                        <a href={subItem.path}>{subItem.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {currentItem.thirdTabItems && currentItem.thirdTabTittle && (
                            <div className="flex flex-col">
                                <span className="text-[12px] text-gray-400">{currentItem.thirdTabTittle}</span>
                                <ul className="flex flex-col gap-2 mt-3">
                                    {currentItem.thirdTabItems?.map((subItem) => (
                                        <li key={subItem.name} className="text-[12px]">
                                            <a href={subItem.path}>{subItem.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {currentItem.fourthTabItems && (
                        <div className="flex flex-col mt-4">
                            <ul>
                                {currentItem.fourthTabItems?.map((subItem) => (
                                    <li key={subItem.name} className="text-[12px]">
                                        <a href={subItem.path}>{subItem.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <nav className="bg-white bg-opacity-85 hover:bg-opacity-100 w-full font-medium hidden md:flex justify-center sticky top-0 z-20">
            <div className="w-full max-w-[1024px]">
                <div className="flex justify-between">
                    <ul className="flex w-full items-center justify-between text-[12px]">
                        <li className="relative w-full max-w-[44px] aspect-square max-h-[44px] cursor-pointer flex justify-center">
                            <Image src={"/apple/img/logo.svg"} fill alt="logo" className="object-contain" />
                        </li>

                        {NavBarItems.map((item, idx) => (
                            <li
                                key={idx}
                                onMouseEnter={() => handleMouseEnter(item.name)}
                                className={`${item.name === hoverSection ? "text-black" : "text-black opacity-75"} cursor-pointer px-2`}
                            >
                                {item.name}
                            </li>
                        ))}

                        <li className="relative cursor-pointer w-full max-w-[31px] h-full max-h-[44px] flex justify-center">
                            <Image src={"/apple/img/magnifyingGlass.svg"} fill alt="search" className="object-contain" />
                        </li>

                        <li className="relative cursor-pointer w-full max-w-[34px] h-full max-h-[44px] flex justify-center">
                            <Image src={"/apple/img/cart.svg"} fill alt="cart" className="object-contain" />
                        </li>
                    </ul>
                </div>
                {hoverSection && showNavBarSection()}
            </div>
        </nav>
    );
}
