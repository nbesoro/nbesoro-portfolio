"use client";
import Typography from "@/components/ui/typographies/Typography";
import { categoryType } from "@/utils/type";
import { motion } from "framer-motion"

type PropsType = {
  skills: categoryType;
}

export default function Skills({skills} : PropsType) {
    return (
        <div className="main-container py-[6rem] md:py-[10rem]">
            <div className="relative text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: [50, -10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut", }}
                >
                    <Typography
                        label={'Compétences'}
                        variant='heading'
                        weight={800}
                        color={'dark-400'}
                        as='span'
                        className="opacity-30"
                    />
                </motion.div>
                <div className="absolute top-[8rem] md:top-[12rem] left-1/2 -translate-x-1/2 max-w-[50rem] w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: [-50, 10, 0] }}
                        transition={{ duration: 1.5, ease: "easeInOut", }}
                    >
                        <Typography
                            label={'Compétences'}
                            variant='3xl'
                            weight={500}
                            color={'white'}
                            as='h1'
                        />
                    </motion.div>
                    <div className="mt-[1rem] md:mt-[2rem]">
                        <Typography
                            label={"Découvrez les compétences polyvalentes de Soro N'Be dans divers domaines, prêt à apporter une valeur ajoutée à vos projets et initiatives."}
                            variant='base'
                            weight={400}
                            color={'dark-400'}
                            as='span'
                        />
                    </div>
                </div>
            </div>
            <div className="mt-[14rem]">
                <div className="flex items-start sm:items-center justify-start sm:justify-center gap-x-[8rem] sm:gap-x-[10rem] gap-y-[6rem] sm:gap-y-[10rem] flex-wrap">
                    {skills.map((item, index) => (
                        <div 
                            key={index}
                            className="flex items-center gap-8 relative min-w-[20rem] flex-wrap"
                        >
                            <div className="absolute top-[-24px] left-0">
                              <span className="text-[2.5rem] font-[600] text-dark-400/30 whitespace-nowrap">{item?.name}</span>
                            </div>
                            {item.technologies.map((subItem, subIndex) => (
                            <Typography
                                key={subIndex}
                                label={subItem?.title}
                                variant="lg"
                                weight={400}
                                color="white"
                                as="span"
                                className="whitespace-nowrap"
                            />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}