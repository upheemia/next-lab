import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

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
          <h1>Дерябина А. О., Ильин С.Р., Горбунов Д.*. 19ВВП1</h1>
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
