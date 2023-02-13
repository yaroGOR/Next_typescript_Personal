import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Button from '../components/Button/Button'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import DarkSection from '../components/darkSection/DarkSection'
import Skill from '../components/Skills/Skill'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header sectionName={'somena'}/>
        <Hero/>
        <DarkSection>
          <About/>
        </DarkSection>
        <Skill/>

        
      </main>
    </>
  )
}
