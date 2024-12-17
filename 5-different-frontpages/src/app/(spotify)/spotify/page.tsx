"use client"
import Image from "next/image"
import { hitList, ourEditors, popularAlbums, popularArtists, popularRadio } from "../lib/utils"
import { useEffect, useState } from "react";

export default function Home() {
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;

      if (width >= 1604) {
        setColumns(6);
      } else if (width >= 1380) {
        setColumns(5);
      } else if (width >= 1280) {
        setColumns(4);
      } else if (width >= 768) {
        setColumns(3);
      } else if (width >= 494) {
        setColumns(2);
      } else {
        setColumns(12)
      }
    };

    updateColumns();

    window.addEventListener("resize", updateColumns);

    return () => window.removeEventListener("resize", updateColumns);
  }, []);


  return (
    <div className="w-full my-2 ml-2 mr-2 mobile:mr-0 content-gradient rounded-[9px] px-3 overflow-y-auto">
      <div className="mt-4">
        <div className="w-full flex justify-between items-end">
          <span className="text-white text-[18px] mobile:text-[24px]">Popularni wykonawcy</span>
          <span className="pb-1 text-[14px] text-[#A3A8A8] hover:underline cursor-pointer">Pokaż wszystko</span>
        </div>

        <div className={`flex overflow-x-auto mobile:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-2`}>
          {popularArtists.slice(0, columns).map((album: Artists, index: number) => (
            <div className="relative hover:bg-[#1F1F1F] px-3 py-4 cursor-pointer rounded-[13px] group">
              <div className="w-[200px] mobile:w-full aspect-square relative mb-3 overflow-hidden rounded-full">
                <Image src={album.image} fill alt={album.name} />
              </div>

              <div className="hidden absolute bottom-[90px] right-5 w-10 hover:w-[42px] h-10 hover:h-[42px] group-hover:block">
                <Image src={"/spotify/icons/playButton.png"} fill alt="playButton" className="brightness-90 hover:brightness-100" />
              </div>

              <span className="text-[16px] font-sans font-semibold text-white truncate-multiline">{album.name}</span>
              <span className="text-[14px] font-sans font-semibold text-[#A3A8A8] truncate-multiline">{album.type}</span>
            </div>
          ))}
        </div>
      </div>


      <div className="mt-4">
        <div className="w-full flex justify-between items-end">
          <span className="text-white text-[18px] mobile:text-[24px]">Popularne albumy i single</span>
          <span className="pb-1 text-[14px] text-[#A3A8A8] hover:underline cursor-pointer">Pokaż wszystko</span>
        </div>

        <div className={`flex overflow-x-auto mobile:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-2`}>
          {popularAlbums.slice(0, columns).map((album: Albums, index: number) => (
            <div className="relative hover:bg-[#1F1F1F] px-3 py-4 cursor-pointer rounded-[13px] group">
              <div className="w-[200px] mobile:w-full aspect-square relative mb-3 overflow-hidden rounded-[13px]">
                <Image src={album.image} fill alt={album.name} />
              </div>

              <div className="hidden absolute bottom-[110px] right-5 w-10 hover:w-[42px] h-10 hover:h-[42px] group-hover:block">
                <Image src={"/spotify/icons/playButton.png"} fill alt="playButton" className="brightness-90 hover:brightness-100" />
              </div>

              <span className="text-[16px] font-sans font-semibold text-white truncate-multiline">{album.name}</span>
              <span className="text-[14px] font-sans font-semibold text-[#A3A8A8] truncate-multiline">{album.artist}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="w-full flex justify-between items-end">
          <span className="text-white text-[18px] mobile:text-[24px]">Popularne radio</span>
          <span className="pb-1 text-[14px] text-[#A3A8A8] hover:underline cursor-pointer">Pokaż wszystko</span>
        </div>

        <div className={`flex overflow-x-auto mobile:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-2`}>
          {popularRadio.slice(0, columns).map((album: Others, index: number) => (
            <div className="relative hover:bg-[#1F1F1F] px-3 py-4 cursor-pointer rounded-[13px] group">
              <div className="w-[200px] mobile:w-full aspect-square relative mb-3 overflow-hidden rounded-[13px]">
                <Image src={album.image} fill alt={album.text} />
              </div>

              <div className="hidden absolute bottom-[80px] right-5 w-10 hover:w-[42px] h-10 hover:h-[42px] group-hover:block">
                <Image src={"/spotify/icons/playButton.png"} fill alt="playButton" className="brightness-90 hover:brightness-100" />
              </div>

              <span className="text-[14px] font-sans font-semibold text-[#A3A8A8] truncate-multiline">{album.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <span className="text-white text-[18px] mobile:text-[24px]">Wybrane listy przebojów</span>

        <div className={`flex overflow-x-auto mobile:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-2`}>
          {hitList.slice(0, columns).map((album: Others, index: number) => (
            <div className="relative hover:bg-[#1F1F1F] px-3 py-4 cursor-pointer rounded-[13px] group">
              <div className="w-[200px] mobile:w-full aspect-square relative mb-3 overflow-hidden rounded-[13px]">
                <Image src={album.image} fill alt={album.text} />
              </div>

              <div className="hidden absolute bottom-[80px] right-5 w-10 hover:w-[42px] h-10 hover:h-[42px] group-hover:block">
                <Image src={"/spotify/icons/playButton.png"} fill alt="playButton" className="brightness-90 hover:brightness-100" />
              </div>

              <span className="text-[14px] font-sans font-semibold text-[#A3A8A8] truncate-multiline">{album.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="w-full flex justify-between items-end">
          <span className="text-white text-[18px] mobile:text-[24px]">Our Editors Presents</span>
          <span className="pb-1 text-[14px] text-[#A3A8A8] hover:underline cursor-pointer">Pokaż wszystko</span>
        </div>

        <div className={`flex overflow-x-auto mobile:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-2`}>
          {ourEditors.slice(0, columns).map((album: Others, index: number) => (
            <div className="relative hover:bg-[#1F1F1F] px-3 py-4 cursor-pointer rounded-[13px] group">
              <div className="w-[200px] mobile:w-full aspect-square relative mb-3 overflow-hidden rounded-[13px]">
                <Image src={album.image} fill alt={album.text} />
              </div>

              <div className="hidden absolute bottom-[80px] right-5 w-10 hover:w-[42px] h-10 hover:h-[42px] group-hover:block">
                <Image src={"/spotify/icons/playButton.png"} fill alt="playButton" className="brightness-90 hover:brightness-100" />
              </div>

              <span className="text-[14px] font-sans font-semibold text-[#A3A8A8] truncate-multiline">{album.text}</span>
            </div>
          ))}
        </div>
      </div>


      <div className="mt-14 mobile:mt-20 w-full grid grid-cols-1 mobile:grid-cols-2 2xl:grid-cols-5 justify-between gap-5 3xl:gap-3 3xl:px-8 pb-10">
        <div className='flex flex-col gap-1 text-[#B3B3B3] pl-7 3xl:pl-10'>
          <span className='text-white text-[17px]'>Firma</span>
          <span className='hover:underline hover:text-white cursor-pointer'>Informacje</span>
          <span className='hover:underline hover:text-white cursor-pointer'>Praca</span>
          <span className='hover:underline hover:text-white cursor-pointer'>For the Record</span>
        </div>

        <div className='flex flex-col gap-1 text-[#B3B3B3] pl-7 3xl:pl-10'>
          <span className='text-white text-[17px]'>Społeczności</span>
          <span className='hover:underline hover:text-white cursor-pointer'>Dla artystów</span>
          <span className='hover:underline hover:text-white cursor-pointer'>Deweloperzy</span>
          <span className='hover:underline hover:text-white cursor-pointer'>Reklama</span>
          <span className='hover:underline hover:text-white cursor-pointer'>Inwestorzy</span>
          <span className='hover:underline hover:text-white cursor-pointer'>Dostawcy</span>
        </div>

        <div className='flex flex-col gap-1 text-[#B3B3B3] pl-7 3xl:pl-10'>
          <span className='text-white text-[17px]'>Przydatne linki</span>
          <span className='hover:underline hover:text-white cursor-pointer'>Pomoc</span>
          <span className='hover:underline hover:text-white cursor-pointer'>Bezpłatna aplikacja mobilna</span>
        </div>

        <div className='flex flex-col gap-1 text-[#B3B3B3] pl-7 3xl:pl-10'>
          <span className='text-white text-[17px]'>Plany Spotify</span>
          <span className='hover:underline hover:text-white cursor-pointer'>Premium individual</span>
          <span className='hover:underline hover:text-white cursor-pointer'>Premium Duo</span>
          <span className='hover:underline hover:text-white cursor-pointer'>Premium Family</span>
          <span className='hover:underline hover:text-white cursor-pointer'>Premium Student</span>
          <span className='hover:underline hover:text-white cursor-pointer'>Premium Spotify Free</span>
        </div>

        <div className="flex 2xl:justify-end gap-3 pl-6 2xl:pl-0">
          <div className="flex justify-center items-center bg-transparent
                p-[10px] w-[40px] h-[40px] bg-[#292929] hover:bg-[#727272] rounded-full group select-none">
            <Image
              src={"/spotify/icons/instagram-icon.svg"}
              width={20}
              height={20}
              alt="library"
            />
          </div>

          <div className="flex justify-center items-center bg-transparent
                p-[10px] w-[40px] h-[40px] bg-[#292929] hover:bg-[#727272] rounded-full group select-none">
            <Image
              src={"/spotify/icons/facebook-icon.svg"}
              width={20}
              height={20}
              alt="library"
            />
          </div>

          <div className="flex justify-center items-center bg-transparent
                p-[10px] w-[40px] h-[40px] bg-[#292929] hover:bg-[#727272] rounded-full group select-none">
            <Image
              src={"/spotify/icons/twitter-icon.svg"}
              width={20}
              height={20}
              alt="library"
            />
          </div>
        </div>
      </div>

    </div>
  )
}
