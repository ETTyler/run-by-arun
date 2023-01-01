import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Title from '../components/home/title'
import Project from '../components/home/project'

export default function Home() {
  const jacket = {
    name: 'Ukiyo-e Style Jacket',
    images: ['/images/jacket/1.jpg','/images/jacket/1.jpg', '/images/jacket/1.jpg','/images/jacket/1.jpg', '/images/jacket/1.jpg','/images/jacket/1.jpg', '/images/jacket/1.jpg','/images/jacket/1.jpg', '/images/jacket/1.jpg','/images/jacket/1.jpg', '/images/jacket/1.jpg','/images/jacket/1.jpg', '/images/jacket/1.jpg','/images/jacket/1.jpg', '/images/jacket/1.jpg','/images/jacket/1.jpg', '/images/jacket/1.jpg','/images/jacket/1.jpg', '/images/jacket/1.jpg','/images/jacket/1.jpg', '/images/jacket/1.jpg','/images/jacket/1.jpg', '/images/jacket/1.jpg','/images/jacket/1.jpg', '/images/jacket/1.jpg','/images/jacket/1.jpg']
  }
  const jeans = {
    name: 'Ukiyo-e Style Jeans',
    images: ['/images/jacket/1.jpg','/images/jacket/1.jpg']
  }
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
      <Project project={jacket}/>
      <Project project={jeans}/>
      <Project project={jacket}/>
    </>
  )
}
