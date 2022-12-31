import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import mypic from '../public/IMG_1779.PNG'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Neskvern</title>
        <meta name="description" content="Neskvern portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Website under construction</h1>
        <p>Min inspirasjon:</p>
        <Image
          alt="cark"
          src={mypic}
          height={350}
          width={1500}
        />
      </main>
    </>
  )
}
