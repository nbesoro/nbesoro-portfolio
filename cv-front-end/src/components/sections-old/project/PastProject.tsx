/* eslint-disable @next/next/no-img-element */
"use client"

import Typography from "@/components/ui/typographies/Typography"
import Link from "next/link"
import { BsGithub } from "react-icons/bs"
import { TfiWorld } from "react-icons/tfi"

export default function PastProject() {

    const projets =[
        {
            id: "ZEFGHJK",
            imagePath: "/assets/projects/projet.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget facilisis mi. Nunc non iaculis risus. Mauris tincidunt vehicula metus vel congue",
            github: true,
            linkGithub: "#",
            world: true,
            linkWorld: "#",
        },
        {
            id: "RTGBN",
            imagePath: "/assets/projects/projet.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget facilisis mi. Nunc non iaculis risus. Mauris tincidunt vehicula metus vel congue",
            github: false,
            linkGithub: "#",
            world: true,
            linkWorld: "#",
        },
        {
            id: "POKJHF",
            imagePath: "/assets/projects/projet.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget facilisis mi. Nunc non iaculis risus. Mauris tincidunt vehicula metus vel congue",
            github: true,
            linkGithub: "#",
            world: false,
            linkWorld: "#",
        },
        {
            id: "RFVBHJ",
            imagePath: "/assets/projects/projet.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget facilisis mi. Nunc non iaculis risus. Mauris tincidunt vehicula metus vel congue",
            github: false,
            linkGithub: "#",
            world: true,
            linkWorld: "#",
        },
        {
            id: "BVFGHJK",
            imagePath: "/assets/projects/projet.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget facilisis mi. Nunc non iaculis risus. Mauris tincidunt vehicula metus vel congue",
            github: true,
            linkGithub: "#",
            world: true,
            linkWorld: "#",
        },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem]">
            {projets.map((d, k) => (
                <Link  
                    key={k}  
                    href={`/project/details/${d.id}`} 
                    passHref 
                    legacyBehavior
                >
                    <div
                        className="p-10 rounded-[1.4rem] bg-dark-400/10 animted_inside cursor-pointer"
                    >
                        <div className="h-[30rem] w-full overflow-hidden mb-[2rem] relative">
                            <img src={d.imagePath} alt="image" />
                        </div>
                        <Typography
                            label={d.description}
                            variant='base'
                            weight={500}
                            color={'dark-400'}
                            as='span'
                        />
                        <div className="flex items-center gap-6 mt-[2rem]">
                            {d.github && (
                                <Link href={d.linkGithub}>
                                    <div className="px-6 py-4 rounded-full bg-dark-400/20 text-dark-400 hover:text-white transition-all duration-300 ease-linear">
                                        <BsGithub className="text-[2.2rem]" />
                                    </div>
                                </Link>
                            )}
                            {d.world && (
                                <Link href={d.linkWorld}>
                                    <div className="px-6 py-4 rounded-full bg-dark-400/20 text-dark-400 hover:text-white transition-all duration-300 ease-linear">
                                        <TfiWorld className="text-[2.2rem]" />
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}