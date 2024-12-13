"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function TvSlider({ autoScroll }: { autoScroll: boolean }) {
    const videos = [
        {
            category: "Comedy",
            text: "• Will they make history...or take it?",
            image: "/apple/img/tvImages/flyMeToTheMoonApple.png",
            image2: "/apple/img/tvImages/flyMeToTheMoonApple2.png",
        },
        {
            category: "Comedy",
            text: "• Brakdown. Breakthrough.",
            image: "/apple/img/tvImages/shrinkingApple.png",
            image2: "/apple/img/tvImages/shrinkingApple2.png",
        },
        {
            category: "Sci-Fi",
            text: "• New season.",
            image: "/apple/img/tvImages/siloApple.png",
            image2: "/apple/img/tvImages/siloApple2.png",
        },
        {
            category: "Drama",
            text: "• Family. It's a killer.",
            image: "/apple/img/tvImages/badSistersApple.png",
            image2: "/apple/img/tvImages/badSistersApple2.png",
        },
        {
            category: "Thriller",
            text: "• Catch up now. New season premieres.",
            image: "/apple/img/tvImages/severanceApple.png",
            image2: "/apple/img/tvImages/severanceApple2.png",
        },
    ];

    const [slideWidth, setSlideWidth] = useState(1250)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mainDivWidth, setMainDivWidth] = useState(0);
    const [offsetX, setOffsetX] = useState(300);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
    
            let offset = 0;
    
            if (width > 1632) {
                offset = Math.max(0, ((2560 - width) * 370) / (2560 - 1888));
                setSlideWidth(1250);
                slideToIndex(3)
                slideToIndex(0)
            } 
            else if(width > 1280){
                offset = Math.max(0, ((2560 - width) * 370) / (2560 - 1888))-30;
                setSlideWidth(1250);
                slideToIndex(3)
                slideToIndex(0)
            }
            else if(width > 766){
                offset = ((1278 - width) * (640 - 380)) / (1278 - 770) + 380;
                setSlideWidth(689);
                slideToIndex(3)
                slideToIndex(0)
            }
            else{
                offset = ((766 - width) * (625 - 435)) / (766 - 375) + 435;
                setSlideWidth(285);
                slideToIndex(3)
                slideToIndex(0)
            }
    
            setMainDivWidth(width);
            setOffsetX(offset);
        };
    
        handleResize();
    
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const slideRight = () => {
        if (currentSlide + slideWidth >= 5*slideWidth) {
            setCurrentSlide(0)
            setCurrentIndex(0)
        }
        else {
            setCurrentSlide(currentSlide + slideWidth)
            setCurrentIndex(currentIndex + 1)
        }
    }

    const slideLeft = () => {
        if (currentSlide + slideWidth <= slideWidth) {
            setCurrentSlide(4*slideWidth)
            setCurrentIndex(4)
        }
        else {
            setCurrentSlide(currentSlide - slideWidth)
            setCurrentIndex(currentIndex - 1)
        }
    }

    const slideToIndex = (index: number) => {
        const newSlide = index * slideWidth;
        setCurrentSlide(newSlide);
        setCurrentIndex(index);
    };


    useEffect(() => {
        if (autoScroll) {
            const timer = setTimeout(() => {
                slideRight()
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [currentIndex, autoScroll]);

    return (
        <div className="w-full max-w-[2560px] relative flex flex-col gap-3 overflow-hidden">
            <div className='transition-all duration-1000 w-[2560px] flex gap-3 h-[495px] md:h-[368px] xl:h-[668px]'
                style={{ transform: `translateX(calc(-${currentSlide}px - ${offsetX}px))` }}
            >
                <div>
                    <div onClick={slideLeft} className='relative w-[668px] h-[495px] md:h-[368px] xl:h-[668px] opacity-50 z-20 cursor-pointer'>
                        <Image
                            src={mainDivWidth >= 768 ? videos[4].image : videos[4].image2}
                            fill
                            alt={videos[4].text}
                            className="object-cover"
                            style={{ width: '100%', height: '100%', position: 'absolute' }}
                        />
                    </div>
                </div>
                {videos.map((video, index: number) => (
                    <div
                    id='div-responsive-width'
                        key={index}
                        className={`transition-all duration-1000 relative w-[274px] md:w-[689px] xl:w-[1250px] flex flex-shrink-0 overflow-x-hidden items-between pb-7 md:pb-0 text-center md:text-start md:items-end
                        ${index === currentIndex + 1 || index === currentIndex - 1 ? "opacity-50 cursor-pointer" : ""}`}
                        onClick={() => {
                            if (index === currentIndex + 1) {
                                slideRight()
                            }
                            else if (index === currentIndex - 1) {
                                slideLeft()
                            }
                        }}
                    >
                        <div className='w-full px-5 xl:mb-0 xl:px-14 z-10 flex flex-col md:flex-row justify-between items-end pb-10 xl:items-center'>
                        <div className='flex items-center md:hidden mx-auto'>
                                <Image
                                    src={"/apple/img/whiteLogo.svg"}
                                    alt="logo"
                                    width={50}
                                    height={50} />

                                <span className='pl-2 text-white text-[32px] xl:text-[42px] font-semibold'>TV+</span>
                            </div>
                            <div className='block md:hidden drop-shadow-lg'>
                                <span className='text-white text-[18px] xl:text-[22px] font-semibold pl-4'>{video.category}</span><span className='pl-2 text-white text-[18px] xl:text-[22px]'>{video.text}</span> <br />
                                <Button className='mt-3 py-5 xl:py-6 px-5 xl:px-7 bg-[#f5f5f5] hover:bg-white text-[15px] xl:text-[18px] font-normal text-black rounded-[23px]'>
                                    Stream now
                                </Button>
                            </div>
                            
                            <div className='hidden md:block drop-shadow-lg'>
                                <Button className='py-5 xl:py-6 px-5 xl:px-7 bg-[#f5f5f5] hover:bg-white text-[15px] xl:text-[18px] font-normal text-black rounded-[23px]'>
                                    Stream now
                                </Button>
                                <span className='text-white text-[18px] xl:text-[22px] font-semibold pl-4'>{video.category}</span><span className='pl-2 text-white text-[18px] xl:text-[22px]'>{video.text}</span>
                            </div>

                            <div className='hidden md:flex xl:hidden items-center'>
                                <Image
                                    src={"/apple/img/whiteLogo.svg"}
                                    alt="logo"
                                    width={40}
                                    height={40} 
                                    className='absolute right-[85px]'
                                    />

                                <span className='pl-2 text-white text-[32px] xl:text-[42px] font-semibold'>TV+</span>
                            </div>

                            <div className='hidden xl:flex items-center'>
                                <Image
                                    src={"/apple/img/whiteLogo.svg"}
                                    alt="logo"
                                    width={50}
                                    height={50} 
                                    />

                                <span className='pl-2 text-white text-[32px] xl:text-[42px] font-semibold'>TV+</span>
                            </div>
                        </div>
                        <Image src={mainDivWidth >= 768 ? video.image : video.image2} fill alt={video.text} />
                    </div>
                ))}
                <div>
                    <div onClick={slideRight} className='relative w-[668px] h-[495px] md:h-[368px] xl:h-[668px] opacity-50 z-20 cursor-pointer'>
                        <Image src={mainDivWidth >= 768 ? videos[0].image : videos[0].image2} fill alt={videos[0].text} className="object-cover" />
                    </div>
                </div>

            </div>
            <div className="w-full flex justify-center gap-2 pt-1 pb-5">
                {videos.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full cursor-pointer ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
                        onClick={() => slideToIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};
