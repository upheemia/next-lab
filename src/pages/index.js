import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Lab 1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Дерябина А. О. 19ВВП-1</h1>
        </div>

        <div className={styles.linkContainer}>
          <Link href="/search/search">Найти животных</Link>
        </div>

        <div className={styles.center}>
          <AwesomeSlider>
            <div data-src={'https://images6.fanpop.com/image/photos/40400000/Sweet-Cat-cats-40483408-498-300.jpg'} />
            <div data-src={'https://static.onecms.io/wp-content/uploads/sites/47/2022/09/06/kitten-rescued-from-dumpster-956069948-2000.jpg'} />
            <div data-src={'https://i.ytimg.com/vi/kuVnPFzC2So/hqdefault.jpg'} />
          </AwesomeSlider>
        </div>
      </main>
    </>
  )
}
