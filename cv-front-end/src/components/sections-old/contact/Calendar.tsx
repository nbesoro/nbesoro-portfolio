"use client"

import Typography from "@/components/ui/typographies/Typography"
import Link from "next/link"
import { BsFillEnvelopeFill, BsFillPhoneFill, BsLinkedin } from "react-icons/bs"

export default function Calendar() {
    return (
        <div className="main-container py-[6rem]">
            <div className="flex flex-wrap items-center gap-[2rem] justify-center mb-[10rem]">
                <Link href={'https://www.linkedin.com/in/nbe-soro/'} target="_blank">
                    <div className="inline-flex items-center gap-6 bg-dark-400/20 rounded-full px-[22px] py-[8px]">
                        <BsLinkedin className="text-white text-[1.6rem] transition-all duration-300 ease-linear" />
                        <Typography
                            label={"LinkedIn"}
                            variant='base'
                            weight={400}
                            color={'white'}
                            as='span'
                        />
                    </div>
                </Link>
                <div className="inline-flex items-center gap-6 bg-dark-400/20 rounded-full px-[22px] py-[8px]">
                    <BsFillEnvelopeFill className="text-white text-[1.6rem] transition-all duration-300 ease-linear" />
                    <Typography
                        label={"bonjour@nbesoro.com"}
                        variant='base'
                        weight={400}
                        color={'white'}
                        as='span'
                    />
                </div>
                <div className="inline-flex items-center gap-6 bg-dark-400/20 rounded-full px-[22px] py-[8px]">
                    <BsFillPhoneFill className="text-white text-[1.6rem] transition-all duration-300 ease-linear" />
                    <Typography
                        label={"+225 07 482 781 74"}
                        variant='base'
                        weight={400}
                        color={'white'}
                        as='span'
                    />
                </div>
            </div>
            <div className="text-center mb-[4rem]">
                <Typography
                    label={"MAKE AN APPOINTMENT ONLINE WITH SORO N'BE"}
                    variant='xl'
                    weight={600}
                    color={'white'}
                    as='span'
                />
            </div>
            <div className="h-[80rem] bg-dark-400/10 rounded-[1.4rem] overflow-hidden">
                <iframe src="https://calendly.com/nbesoro/30min" className="h-full w-full" />
            </div>
        </div>
    )
}