import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Title from '../components/home/title'
import Project from '../components/home/project'

export default function Home() {
  const projects = [
    {
      name: 'AVIAN',
      images: ['/images/avian/1.jpg','/images/avian/2.jpg','/images/avian/3.jpg','/images/avian/4.jpg','/images/avian/5.jpg','/images/avian/6.jpg','/images/avian/7.jpg','/images/avian/8.jpg','/images/avian/9.jpg','/images/avian/10.jpg','/images/avian/11.jpg','/images/avian/12.jpg','/images/avian/13.jpg','/images/avian/14.jpg']
    },
    {
      name: 'UKIYO-E / ANIME',
      images: ['/images/ukiyo/1.jpg','/images/ukiyo/2.jpg', '/images/ukiyo/3.jpg','/images/ukiyo/4.jpg','/images/ukiyo/5.jpg','/images/ukiyo/6.jpg','/images/ukiyo/7.jpg','/images/ukiyo/8.jpg','/images/ukiyo/9.jpg','/images/ukiyo/10.jpg',]
    },
    {
      name: 'BATTLE SCARRED',
      images: ['/images/battle/1.jpg','/images/battle/2.jpg','/images/battle/3.jpg','/images/battle/4.jpg']
    },
    {
      name: 'TOTES',
      images: ['/images/totes/1.jpg','/images/totes/2.jpg','/images/totes/3.jpg','/images/totes/4.jpg','/images/totes/5.jpg','/images/totes/6.jpg','/images/totes/7.jpg']
    },
    {
      name: 'ORIGARMS',
      images: ['/images/origarms/1.jpg','/images/origarms/2.jpg']
    },
    {
      name: 'ONE OFF TEES',
      images: ['/images/tees/1.jpg','/images/tees/2.jpg','/images/tees/3.jpg','/images/tees/4.jpg','/images/tees/5.jpg']
    },
    {
      name: 'EARLY PIECES',
      images: ['/images/old/1.jpg','/images/old/2.jpg','/images/old/3.jpg','/images/old/4.jpg']
    }
  ]
  return (
    <>
      <Head>
        <title>RunByArun</title>
        <meta name="description" content="RunByArun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Title />
      {projects.map((project, index) => (
        <Project project={project} key={index} />
      ))}
    </>
  )
}
