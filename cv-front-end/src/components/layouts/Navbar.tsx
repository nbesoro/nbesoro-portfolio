"use client";
import Link from "next/link";
import Typography from "../ui/typographies/Typography";
import { motion } from "framer-motion"
import { usePathname } from 'next/navigation'
import Image from "next/image";

export default function Navbar() {
    const pathname = usePathname()
    const isProjectPage = /^\/project(\/details\/[^/]+)?/.test(pathname);

    return (
        <div className="main-container py-[3rem] relative z-[100]">
            <div className="flex items-center justify-between relative z-[100]">
                <Link href={'/'}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, x: [-20, 10, 0] }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                    >
                        <div className="h-[6rem] w-[18rem] relative hidden md:block">
                            <Image src="/assets/logos/logo_1.svg" fill className="object-contain" alt="logo" priority />
                        </div>
                        <div className="h-[4rem] w-[4rem] relative block md:hidden">
                            <Image src="/assets/logos/logo_2.svg" fill className="object-contain" alt="logo" />
                        </div>
                    </motion.div>
                </Link>
                
                <ul className="flex items-center gap-[2rem] md:gap-[4rem] relative z-[100]">
                    <motion.li 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, x: [-20, 10, 0] }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                    >
                        <Link href={'/'}>
                            <div className="relative">
                                <Typography
                                    label='Home'
                                    variant='md'
                                    weight={500}
                                    color={pathname === "/" ? 'white' : 'dark-400'}
                                    as='span'
                                    className="hover:text-white transition-all duration-300 ease-linear"
                                />
                                {pathname === "/" ? (
                                    <div className="absolute rounded-full h-[1rem] w-[1rem] bg-white -translate-x-1/2 left-1/2 wobble" />
                                ): ''}
                            </div>
                        </Link>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, x: [-20, 10, 0] }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                    >
                        <Link href={'/project'}>
                            <div className="relative">
                                <Typography
                                    label='Projects'
                                    variant='md'
                                    weight={500}
                                    color={isProjectPage ? 'white' : 'dark-400'}
                                    as='span'
                                    className="hover:text-white transition-all duration-300 ease-linear"
                                />
                                {isProjectPage  ? (
                                    <div className="absolute rounded-full h-[1rem] w-[1rem] bg-white -translate-x-1/2 left-1/2 wobble" />
                                ) : ''}
                            </div>
                        </Link>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, x: [-20, 10, 0] }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
                    >
                        <Link href={'/contact'}>
                            <div className="relative">
                                <Typography
                                    label='Contact'
                                    variant='md'
                                    weight={500}
                                    color={pathname === "/contact" ? 'white' : 'dark-400'}
                                    as='span'
                                    className="hover:text-white transition-all duration-300 ease-linear"
                                />
                                {pathname === "/contact"  ? (
                                    <div className="absolute rounded-full h-[1rem] w-[1rem] bg-white -translate-x-1/2 left-1/2 wobble" />
                                ) : ''}
                            </div>
                        </Link>
                    </motion.li>
                </ul>
            </div>
            <div className="absolute top-0 left-0 h-[12rem] w-full bg-dark-500/80 z-[60] hidden sm:block"></div>
        </div>
    );
};