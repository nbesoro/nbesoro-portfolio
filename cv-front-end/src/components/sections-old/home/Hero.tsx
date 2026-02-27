"use client";
import Image from "next/image";
import { BsArrowDown } from 'react-icons/bs'
import { motion } from "framer-motion"
import Link from "next/link";

export default function Hero() {
    return (
        <div className="h-[calc(100vh-180px)] sm:h-[calc(100vh-100px)] relative">
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-[13rem] sm:top-[16rem] md:top-[20rem] left-1/2 flex flex-col items-start -space-y-[2rem] md:-space-y-[4rem] lg:-space-y-[8rem] z-50">
                <motion.span 
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: [200, -20, 0] }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="text-[1.4rem] md:text-[1.8rem] lg:text-[2rem] text-white font-[400] block uppercase pl-3 md:pl-6"
                >{"Back-end developer"}</motion.span>
                <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.05, ease: "easeInOut", delay: 0.2 }}
                    className="text-[8rem] sm:text-[16rem] md:text-[20rem] lg:text-[25rem] text-white font-[700] uppercase"
                >{"Python"}</motion.span>
            </div>
            <div className="absolute top-0 left-0 h-[calc(100vh-100px)] sm:h-screen w-full bg-dark-500/80 z-[60]"></div>
            <div className="absolute bottom-[-5rem] sm:bottom-[-10rem] -translate-x-1/2 left-1/2 z-50">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: [20, -10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
                    className="h-[50rem] sm:h-[60rem] lg:h-[82rem] w-[40rem] sm:w-[50rem] lg:w-[72rem] relative"
                >
                    <Image
                        src={'/assets/nbesoro/soro.png'}
                        fill
                        sizes="(max-width: 640px) 40rem, (max-width: 1024px) 50rem, 72rem"
                        alt="portrait"
                        className="object-contain"
                    />
                    
                </motion.div>
            </div>
            <div className="absolute bottom-[-4rem] sm:bottom-14 left-[45%] md:left-1/2 -translate-x-1/2 animate_bounce z-[60]">
                <Link href="#biographie">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: [-20, 20, 0] }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
                        className="border border-dark-400 hover:border-transparent hover:bg-white hover:text-dark-500 h-[8rem] w-[5rem] rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-300 ease-out"
                    >
                        <BsArrowDown className="text-[22px]" />
                    </motion.div>
                </Link>
            </div>
        </div>
    );
}