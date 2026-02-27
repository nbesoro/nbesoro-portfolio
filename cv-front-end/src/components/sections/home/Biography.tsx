"use client";
import BaseButton from "@/components/ui/buttons/BaseButton";
import Typography from "@/components/ui/typographies/Typography";
import { UserType } from "@/utils/type";
import { motion } from "framer-motion"
import Link from "next/link";

type PropsType = {
    userInfo: UserType;
}

export default function Biography({ userInfo } : PropsType) {
    return (
        <div id="biographie" className="main-container py-[6rem] md:py-[10rem] mt-[8rem] sm:mt-0">
            <div className="relative">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: [50, -10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut", }}
                >
                    <Typography
                        label={'My biography'}
                        variant='heading'
                        weight={800}
                        color={'dark-400'}
                        as='span'
                        className="opacity-30"
                    />
                </motion.div>
                <div className="absolute bottom-[0.4rem] sm:bottom-10 left-10 sm:left-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, x: [50, -10, 0] }}
                        transition={{ duration: 1.5, ease: "easeInOut", }}
                    >
                        <Typography
                            label={`${userInfo?.first_name} ${userInfo?.last_name}`}
                            variant='h1'
                            weight={800}
                            color={'white'}
                            as='span'
                        />
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [50, -10, 0] }}
                transition={{ duration: 1.5, ease: "easeInOut", }}
                className="max-w-[100rem] text-left mt-[2rem] mb-[4rem]"
            >
                <Typography
                    label={userInfo?.bio}
                    variant='md'
                    weight={400}
                    color={'dark-400'}
                    as='span'
                />
            </motion.div>
            <Link href={'/contact'}>
                <button className="px-[4rem] py-[1rem] rounded-full border border-white text-white hover:text-dark-500 hover:bg-white hover:border-transparent transition-all duration-300 ease-out">
                    <span className="text-[16px] leading-[26px] font-[500]">{'Contact me'}</span>
                </button>
            </Link>
        </div>
    )
}