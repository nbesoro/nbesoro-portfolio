'use client'
import Navbar from '@/components/layouts/Navbar'
import Biography from '@/components/sections/home/Biography'
import Experience from '@/components/sections/home/Experience'
import Formation from '@/components/sections/home/Formation'
import Hero from '@/components/sections/home/Hero'
import Skills from '@/components/sections/home/Skills'
import Stack from '@/components/sections/home/Stack'
import { useEffect, useState } from 'react'
import connectedClient from '@/utils/axios'
import { ExperienceType, FormationType, TechnologieType, UserType, categoryType } from '@/utils/type'

export default function Home() {
  const [userInfo, setUserInfo] = useState<UserType | null>(null)
  const [experiences, setExperiences] = useState<ExperienceType[]>([])
  const [formations, setFormations] = useState<FormationType[]>([])
  const [skills, setSkills] = useState<categoryType>([])
  const [stacks, setStacks] = useState<TechnologieType[]>([])

   useEffect( () => {
    const fetchInfo = connectedClient.get('/info/');
    const fetchExperiences = connectedClient.get('/experiences/');
    const fetchFormations = connectedClient.get('/formations/');
    const fetchSkills = connectedClient.get('/categories/');
    const fetchStaks = connectedClient.get('/technologies/');

    Promise.all([
      fetchInfo,
      fetchExperiences,
      fetchFormations,
      fetchSkills,
      fetchStaks
    ]).then((responses: any) => {

      setUserInfo(responses[0].data[0])
      setExperiences(responses[1].data)
      setFormations(responses[2].data)
      setSkills(responses[3].data)
      setStacks(responses[4].data)

    }).catch((error: Error) =>{
      console.error(error)
    })
    
  }, [])
  
  return (
    <div>
      
      <Navbar />
      <Hero />
      {
        userInfo && <Biography userInfo={userInfo} />
      }
      <Stack stacks={stacks} />
      <Experience experiences={experiences} />
      <Skills skills={skills} />
      <Formation formations={formations} />
    </div>
  )
}
