"use client";
import Tag from "@/components/ui/tag/Tag";
import Typography from "@/components/ui/typographies/Typography";
import { BsCheckLg } from "react-icons/bs";
import { motion } from "framer-motion"
import { ExperienceType } from "@/utils/type";

type PropsType = {
    experiences: ExperienceType[];
}

const formatDateIntl = (alpha: any) => {
    const date = new Date(alpha);
    let formattedDate = null
    if(alpha) {
      formattedDate = new Intl.DateTimeFormat('fr-FR', {
        year: 'numeric',
        month: 'long',
      }).format(date);
    }
    
    return formattedDate;
};

export default function Experience({experiences}: PropsType) {
    return (
        <div className="main-container py-[6rem] md:py-[10rem]">
            <div className="relative text-right">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: [50, -10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut", }}
                >
                    <Typography
                        label={'Experiences'}
                        variant='heading'
                        weight={800}
                        color={'dark-400'}
                        as='span'
                        className="opacity-30"
                    />
                </motion.div>
                <div className="absolute bottom-[0.2rem] sm:bottom-10 right-10 sm:right-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, x: [-50, 10, 0] }}
                        transition={{ duration: 1.5, ease: "easeInOut", }}
                    >
                        <Typography
                            label={'professionals'}
                            variant='h1'
                            weight={800}
                            color={'white'}
                            as='span'
                        />
                    </motion.div>
                </div>
            </div>
            <div className="mt-[4rem] space-y-[10rem]">
                {
                    experiences?.map((experience, idx) =>(
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, y: [100, 0] }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="flex items-start gap-[2rem] sm:gap-[4rem] relative before:absolute before:h-full before:w-[0.2rem] before:bg-dark-400/50 before:left-[2.4rem] sm:before:left-[3rem]"
                        >
                            <div className="h-[5rem] sm:h-[6rem] w-[5rem] sm:w-[6rem] rounded-full bg-white relative flex items-center justify-center shrink-0">
                                <BsCheckLg className="text-dark-500 text-[3rem]" />
                            </div>
                            <div className="flex flex-col items-start gap-4 capitalize">
                                <Tag 
                                    size={'lg'}
                                    label={`${experience?.start ? formatDateIntl(experience?.start) : "Aujourd'hui"} - ${experience?.end ? formatDateIntl(experience?.end) : "Aujourd'hui" }`}
                                />
                                <div className="mt-[2rem] space-y-4">
                                    <div className="max-w-[50rem]">
                                        <Typography
                                            label={`${experience?.job} - ${experience?.company}`}
                                            variant='md'
                                            weight={400}
                                            color={'white'}
                                            as='span'
                                        />
                                    </div>
                                    {
                                        experience?.works?.map((work, idx) =>(
                                            <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem] lg:gap-[20rem] !mt-[2rem] !mb-[4rem]">
                                                <div>
                                                    <div className="flex items-center gap-3">
                                                        <Typography
                                                            label={"Projet :"}
                                                            variant='md'
                                                            weight={400}
                                                            color={'dark-400'}
                                                            as='span'
                                                        />
                                                        <Typography
                                                            label={work?.title}
                                                            variant='md'
                                                            weight={400}
                                                            color={'white'}
                                                            as='span'
                                                        />
                                                    </div>
                                                    <ul className="space-y-8 !mt-[2rem]">
                                                        {
                                                            work?.task?.map((el, idx) =>(
                                                                <li key={idx} className="flex items-center gap-4">
                                                                    <div className="h-[1rem] w-[1rem] bg-dark-400 rounded-full shrink-0" />
                                                                    <Typography
                                                                        label={el}
                                                                        variant='base'
                                                                        weight={400}
                                                                        color={'white'}
                                                                        as='span'
                                                                    />
                                                                </li>
                                                            ))
                                                        }
                                                        
                                                    </ul>
                                                </div>
                                                <div>
                                                    <Typography
                                                        label={"Environnement technique"}
                                                        variant='md'
                                                        weight={400}
                                                        color={'dark-400'}
                                                        as='span'
                                                    />
                                                    <div className="flex items-center flex-wrap gap-8 mt-[2rem]">
                                                        {
                                                            work?.technologies?.map((tech, idx) =>(
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
                                        ))
                                    }
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}