"use client"

import Tag from "@/components/ui/tag/Tag"
import Typography from "@/components/ui/typographies/Typography"
import Image from "next/image"
import Link from "next/link"
import { BsArrowLeft, BsGithub } from "react-icons/bs"
import { motion } from "framer-motion"
import { TfiWorld } from "react-icons/tfi"
import { useState, useEffect } from "react"
import { singularProjectType } from "@/utils/type"
import connectedClient from "@/utils/axios"

type PropsType = {
    slug: string;
}

export default function DetailProject({ slug }: PropsType) {
    const [project, setProject] = useState<singularProjectType | null>(null);

    useEffect(() => {
        if (!slug) return;

        connectedClient.get(`/projects/${slug}/`)
            .then((res: any) => {
                setProject(res.data);
            })
            .catch((err: Error) => {
                console.error(err);
            });
    }, [slug]);

    return (
        <div className="main-container py-[6rem]">
            <Link href="/project">
                <div className="inline-flex items-center gap-4 mb-6 text-dark-400 group">
                    <BsArrowLeft className="text-[2.2rem]" />
                    <Typography
                        label='retour'
                        variant='md'
                        weight={500}
                        color={'dark-400'}
                        as='span'
                        className="group-hover:pl-2 group-hover:text-white transition-all duration-300 ease-linear"
                    />
                </div>
            </Link>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [20, 0] }}
            transition={{ duration: 1.5, ease: "easeInOut", }}
            className="rounded-[1.4rem] h-[40rem] bg-dark-400/10 relative overflow-hidden">
                {project?.banner && (
                    <Image
                        src={project.banner}
                        alt="banner"
                        fill
                        className="object-cover"
                    />
                )}
                <div className="absolute bottom-10 left-10 flex items-center gap-5">
                    {
                        project?.github && <Link href={project.github} target="_blank">
                            <div className="px-6 py-4 rounded-full bg-dark-400/20 text-dark-400 hover:text-white transition-all duration-300 ease-linear">
                                <BsGithub className="text-[2.2rem]" />
                            </div>
                        </Link>
                    }
                    {
                        project?.website && <Link href={project.website} target="_blank">
                            <div className="px-6 py-4 rounded-full bg-dark-400/20 text-dark-400 hover:text-white transition-all duration-300 ease-linear">
                                <TfiWorld className="text-[2.2rem]" />
                            </div>
                        </Link>
                    }

                </div>
            </motion.div>
            <div className="mt-[4rem] flex lg:flex-row flex-col gap-y-[4rem] lg:gap-y-0 items-start justify-between">
                <div className="flex flex-col items-start space-y-4 lg:space-y-6 flex-1 shrink-0">
                    <Typography
                        label='Project name'
                        variant='xl'
                        weight={400}
                        color={'dark-400'}
                        as='span'
                    />
                    <Typography
                        label={project?.title}
                        variant='3xl'
                        weight={600}
                        color={'white'}
                        as='span'
                    />
                </div>
                <div className="flex-1">
                    <Typography
                        label='Technologies'
                        variant='xl'
                        weight={500}
                        color={'white'}
                        as='span'
                    />
                    <div className="flex flex-wrap items-center gap-4 mt-[2rem]">
                        {
                            project?.technologies?.map((tech, idx) => (
                                <Tag
                                    key={idx}
                                    size={'lg'}
                                    label={tech?.title}
                                />
                            ))
                        }

                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center gap-[4rem] mt-[10rem] md:mt-[20rem]">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [-50, 10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut", }}
                    className="w-full lg:w-1/2"
                >
                    <Typography
                        label={project?.description}
                        variant='xl'
                        weight={500}
                        color={'dark-400'}
                        as='span'
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [50, -10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut", }}
                    className="w-full lg:w-1/2"
                >
                    <div className="rounded-[1.4rem] h-[40rem] lg:h-[50rem] bg-dark-400/10 flex items-center justify-center relative overflow-hidden">
                        {!project?.feature_video && project?.feature_img ? (
                            <div className="relative h-[35rem] lg:h-[45rem] w-[35rem] lg:w-[45rem]">
                                <Image
                                    src={project.feature_img}
                                    alt="feature"
                                    className="object-cover"
                                    fill
                                />
                            </div>
                        ) : project?.feature_video ? (
                            <iframe
                                src={project.feature_video}
                                title="video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="h-full w-full"
                            />
                        ) : null}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
