/* eslint-disable @next/next/no-img-element */
"use client"

import Typography from "@/components/ui/typographies/Typography"
import { projectType } from "@/utils/type"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BsGithub } from "react-icons/bs"
import { TfiWorld } from "react-icons/tfi"

type PropsType = {
    projects: projectType;
}
export default function CurrentProject({projects} : PropsType) {
    const router = useRouter()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem]">
            {projects.map((d) => (
                <div
                    key={d?.slug}
                    onClick={() => router.push(`/project/details/${d?.slug}`)}
                    className="p-10 rounded-[1.4rem] bg-dark-400/10 animted_inside cursor-pointer"
                >
                    <div className="h-[30rem] w-full overflow-hidden mb-[2rem] relative">
                        <Image src={d?.image} alt={d?.title} fill sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" className="object-cover" />
                    </div>
                    <Typography
                        label={d?.description}
                        variant='base'
                        weight={500}
                        color={'dark-400'}
                        as='span'
                        className="--limit-text-3"
                    />
                    <div className="flex items-center gap-6 mt-[2rem]">
                        {d?.github && (
                            <Link href={d?.github} target="_blank" onClick={(e) => e.stopPropagation()}>
                                <div className="px-6 py-4 rounded-full bg-dark-400/20 text-dark-400 hover:text-white transition-all duration-300 ease-linear">
                                    <BsGithub className="text-[2.2rem]" />
                                </div>
                            </Link>
                        )}
                        {d?.website && (
                            <Link href={d?.website} target="_blank" onClick={(e) => e.stopPropagation()}>
                                <div className="px-6 py-4 rounded-full bg-dark-400/20 text-dark-400 hover:text-white transition-all duration-300 ease-linear">
                                    <TfiWorld className="text-[2.2rem]" />
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}