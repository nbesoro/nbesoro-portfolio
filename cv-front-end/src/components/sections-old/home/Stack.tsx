"use client";
import { TechnologieType } from "@/utils/type";
import Image from "next/image";

type PropsType = {
    stacks: TechnologieType[]
}

export default function Stack({stacks}: PropsType) {
    
    const logos = [
        {
            imagepath: "python.svg",
            alt: "logo python"
        },
        {
            imagepath: "php.svg",
            alt: "logo php"
        },
        {
            imagepath: "django.svg",
            alt: "logo django"
        },
        {
            imagepath: "gitlab.svg",
            alt: "logo gitlab"
        },
        {
            imagepath: "docker.svg",
            alt: "logo docker"
        },
        {
            imagepath: "aws.svg",
            alt: "logo aws"
        },
        {
            imagepath: "postgresql.svg",
            alt: "logo postgresql"
        },
        {
            imagepath: "vue.svg",
            alt: "logo vue"
        },
        {
            imagepath: "mongodb.svg",
            alt: "logo mongodb"
        },
        {
            imagepath: "linux.svg",
            alt: "logo linux"
        },
        {
            imagepath: "postman.svg",
            alt: "logo postman"
        },
        {
            imagepath: "microsoft.svg",
            alt: "logo microsoft"
        },
        {
            imagepath: "visual-studio-code.svg",
            alt: "logo vscode"
        },
    ]

    return (
        <div className="main-container py-[6rem] md:py-[10rem]">
            <div className="flex flex-wrap items-center justify-center gap-[5rem] max-w-[100rem] mx-auto">
                {stacks.map((d, k) => (
                    <div key={k} className="relative h-[4rem] md:h-[6rem] w-[8rem] md:w-[10rem] grayscale hover:grayscale-0 hover:scale-110 transition duration-300 ease-linear">
                        <Image
                            src={d?.logo}
                            fill
                            alt={d?.title}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}