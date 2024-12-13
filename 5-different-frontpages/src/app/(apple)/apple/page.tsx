"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TvSlider from "./components/TvSlider";
import { useState } from "react";
import AppleFeatures from "./components/AppleFeatures";

export default function Home() {
  const [autoScroll, setAutoScroll] = useState(false)

  const handleAutoScroll = () => {
    autoScroll ? setAutoScroll(false) : setAutoScroll(true);
  }

  return (
    <div>
      <div className="ai-banner min-h-[560px] flex flex-col items-center text-white text-center pt-[390px] pb-10 banners:pt-[40px] banners:pb-[450px]">
        <span className="text-[32px] banners:text-[54px] mb-[-8px] font-semibold mt-3 tracking-tight">iPhone 16 Pro</span>
        <span className="text-[23px] banners:text-[28px] mt-2 banners:mt-0 tracking-tight">Hello, Apple Inteligence.</span>
        <div className="flex mt-4 gap-3 banners:gap-5">
          <Button className="bg-[#0071E3] hover:bg-[#0077ED] banners:py-6 banners:px-6 text-[16px] tracking-wide rounded-[29px]">Learn more</Button>
          <Button className="bg-transparent hover:bg-[#0071E3] banners:py-6 banners:px-6 text-[16px] tracking-wide text-blue-500 hover:text-white border-blue-500 border-solid border-[1px] rounded-[29px]">Buy</Button>
        </div>
      </div>

      <hr className="h-[10px]" />

      <div className="ai-banner-2 min-h-[560px] flex flex-col items-center text-white text-center pt-[40px] pb-[450px]">
        <span className="text-[32px] banners:text-[54px] mb-[-8px] font-semibold mt-3 tracking-tight">iPhone 16</span>
        <span className="text-[23px] banners:text-[28px] tracking-tight">Hello, Apple Inteligence.</span>
        <div className="flex mt-4 gap-3 banners:gap-5">
          <Button className="bg-[#f5f5f5] hover:bg-white banners:py-6 banners:px-6 text-[18px] text-[#37438f] rounded-[29px]">Learn more</Button>
          <Button className="bg-transparent hover:bg-white banners:py-6 banners:px-6 text-[18px] text-white hover:text-[#37438f] border-white border-solid border-[1px] rounded-[29px]">Buy</Button>
        </div>
      </div>

      <hr className="h-[10px]" />

      <div className="bg-[#F5F5F7] flex flex-col items-center pb-12">
        <div className="relative w-full max-w-[330px] aspect-square mb-[-15px]">
          <Image src={"/apple/img/appleGift.png"} fill alt="appleGift" className="object-contain" />
        </div>
        <span className="text-4xl font-semibold text-[#1D1D1F]">Gift magic.</span>
        <span className="text-[17px] mt-2">Make their holiday wish come true.</span>
        <Button className="mt-2 bg-[#0071E3] hover:bg-[#0077ED] py-2 px-4 tracking-wide rounded-[29px]">Shop gifts</Button>
      </div>

      <hr className="h-[10px]" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="ipadAir-section flex flex-col items-center h-[500px] xl:h-[687px]">
          <div className="flex gap-1 items-center justify-center mb-[-4px] mt-8 md:mt-12">
            <span className="text-[38px] md:text-[45px] text-[#1D1D1F] font-semibold">iPad</span>
            <span className="ipadAir-text text-[38px] md:text-[45px]">air</span>
          </div>
          <span className="text-[18px] md:text-[20px]">Two sizes. Faster chip. Does it all.</span>
          <div className="flex gap-3 mt-2 xl:mt-4">
            <Button className="bg-[#0071E3] hover:bg-[#0077ED] py-4 px-4 text-[12px] tracking-wide rounded-[29px]">Learn more</Button>
            <Button className="bg-transparent hover:bg-[#0071E3] py-4 px-4 text-[12px] tracking-wide text-blue-500 hover:text-white border-blue-500 border-solid border-[1px] rounded-[29px]">Buy</Button>
          </div>
          <div className="relative h-[300px] md:h-[400px] aspect-square">
            <Image src={"/apple/img/ipadAir.png"} fill alt="ipadAir" />
          </div>
          <span className="rainbow-gradient text-[22px] pb-10">Hello, Apple Inteligence</span>
        </div>

        <div className="airPods2-section flex flex-col text-white text-center items-center justify-end h-[500px] xl:h-[687px]">
          <span className="text-[31px] sm:text-[43px] xl:text-[43px] font-semibold">AirPods Pro 2</span>
          <span className="text-[19px] sm:text-[23px] xl:text-[23px]">Now with a Hearing Aid feature.</span>
          <div className="flex gap-3 mt-4 mb-14">
            <Button className="bg-[#0071E3] hover:bg-[#0077ED] py-4 px-4 text-[14px] tracking-wide rounded-[29px]">Learn more</Button>
            <Button className="bg-transparent hover:bg-[#0071E3] py-4 px-4 text-[14px] tracking-wide text-blue-500 hover:text-white border-blue-500 border-solid border-[1px] rounded-[29px]">Buy</Button>
          </div>
        </div>

        <div className="flex bg-[#F5F5F7] flex-col items-center justify-end h-[420px] xl:h-[500px]">
          <div className="relative flex items-center">
            <Image
              src={"/apple/img/logo.svg"}
              alt="logo"
              width={30}
              height={30}
              className="absolute" />
            <span className="pl-9 text-[32px] font-bold">WATCH</span>
          </div>
          <span className="mt-1 font-semibold">SERIES 10</span>
          <span className="text-[19px] md:text-[22px] text-gray-700">Thinstant classic.</span>
          <div className="flex gap-3 mt-3 mb-16">
            <Button className="bg-[#0071E3] hover:bg-[#0077ED] py-4 px-4 text-[14px] tracking-wide rounded-[29px]">Learn more</Button>
            <Button className="bg-transparent hover:bg-[#0071E3] py-4 px-4 text-[14px] tracking-wide text-blue-500 hover:text-white border-blue-500 border-solid border-[1px] rounded-[29px]">Buy</Button>
          </div>
          <div className="relative w-[400px] xl:w-[550px] aspect-[2648/1000]">
            <Image src={"/apple/img/appleWatch.png"} fill alt="appleWatch" className="object-contain" />
          </div>
        </div>


        <div className="flex bg-[#F5F5F7] flex-col items-center h-[420px] xl:h-[500px]">
          <div className="flex flex-col items-center">
            <span className="mt-8 text-[32px] lg:text-[41px] font-semibold">MacBook Air</span>
            <span className="mt-[-2px] text-[20px] lg:text-[22px] text-gray-700">Lean. Mean. M3 machine.</span>
            <div className="flex gap-3 mt-3 mb-4">
              <Button className="bg-[#0071E3] hover:bg-[#0077ED] py-4 px-4 text-[14px] tracking-wide rounded-[29px]">Learn more</Button>
              <Button className="bg-transparent hover:bg-[#0071E3] py-4 px-4 text-[14px] tracking-wide text-blue-500 hover:text-white border-blue-500 border-solid border-[1px] rounded-[29px]">Buy</Button>
            </div>
          </div>
          <div className="relative w-[200px] xl:w-[280px] aspect-[563/621]">
            <Image src={"/apple/img/macbookAir.png"} fill alt="macbookAir" className="object-contain" />
          </div>
        </div>

        <div className="appleTradeIn-section flex bg-[#F5F5F7] flex-col items-center text-center h-[420px] xl:h-[500px]">
          <div className="relative pt-8 mt-8 flex items-center">
            <Image
              src={"/apple/img/logo.svg"}
              alt="logo"
              width={30}
              height={30}
              className="absolute" />
            <span className="pl-9 text-[32px] font-bold">Trade In</span>
          </div>
          <span className="text-[19px] md:text-[22px] mt-1 sm:mt-0 text-gray-700 leading-tight">Get $180-$650 in credit when you <br /> trade in Iphone 12 or higher.</span>
          <div className="flex gap-3 mt-3 mb-4">
            <Button className="bg-[#0071E3] hover:bg-[#0077ED] py-4 px-4 text-[14px] tracking-wide rounded-[29px]">Get your estimate</Button>
          </div>

        </div>


        <div className="flex bg-[#F5F5F7] flex-col items-center text-center h-[420px] xl:h-[500px]">
          <div className="relative pt-8 mt-8 flex items-center">
            <Image
              src={"/apple/img/logo.svg"}
              alt="logo"
              width={30}
              height={30}
              className="absolute" />
            <span className="pl-9 text-[32px] font-bold">Card</span>
          </div>
          <span className="text-[19px] md:text-[22px] text-gray-700 leading-tight">Get up to 3% Daily Cash back <br /> with every purchase.</span>
          <div className="flex gap-3 mt-3">
            <Button className="bg-[#0071E3] hover:bg-[#0077ED] py-4 px-4 text-[14px] tracking-wide rounded-[29px]">Learn more</Button>
            <Button className="bg-transparent hover:bg-[#0071E3] py-4 px-4 text-[14px] tracking-wide text-blue-500 hover:text-white border-blue-500 border-solid border-[1px] rounded-[29px]">Buy</Button>
          </div>
          <div className="relative w-[200px] xl:w-[280px] aspect-[563/621]">
            <Image src={"/apple/img/appleCard.png"} fill alt="macbookAir" className="object-contain" />
          </div>
        </div>
      </div>

      <hr className="h-[10px]" />

      <TvSlider autoScroll={autoScroll} />

      <AppleFeatures autoScroll={autoScroll} />

      <div className="w-full flex justify-end pr-10 mt-4 mb-4">
        <Button onClick={handleAutoScroll} className="bg-gray-300 hover:bg-gray-500 rounded-full py-6">
          {autoScroll ? (
            <>
              <Image src={"/apple/img/pauseButton.svg"} width={15} height={15} alt="play" />
            </>
          ) : (
            <>
              <Image src={"/apple/img/playButton.svg"} width={15} height={15} alt="play" />
            </>
          )}
        </Button>
      </div>

    </div>
  );
}
