import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dayjs from 'dayjs'
import 'dayjs/locale/ja';
dayjs.locale('ja')

function Home({ formattedNow, diffDays, livedDays }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>伊勢1年カウントダウン</title>
        <link rel="icon" href="/ibuki.png" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-4xl mb-12 text-gray-500">{formattedNow}</h1>
        <p className="text-3xl">
          🎉伊勢移住生活1年記念🎉
        </p>
        <p className="mt-4 text-2xl">
          <span className="text-red-400 font-bold">2022年3月23日</span>まで
        </p>

        <div className={styles.grid}>
          <p className="text-4xl">あと<span className="text-9xl text-blue-700 font-bold">{diffDays}</span>日</p>
        </div>

        <div className={styles.grid}>
          <p>伊勢に来てから<span className="text-2xl">{livedDays}日</span>が経ちました。</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/kaibuki0315"
          target="_blank"
        >
          Powered by{' '}
          <img src="/ibuki.png" alt="Ibuki Icon" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  const dayjs = require('dayjs') // v1.9.7
  dayjs.extend(require('dayjs/plugin/timezone'))
  dayjs.extend(require('dayjs/plugin/utc'))
  dayjs.tz.setDefault('Asia/Tokyo')

  const now = dayjs.tz()
  const formattedNow = now.format('YYYY年MM月DD日')

  const startDay = dayjs('2021-03-23')
  const goalDay = dayjs('2022-03-23')

  const livedDays = now.diff(startDay, 'day')
  const diffDays = goalDay.diff(now, 'day')

  return {
    formattedNow: formattedNow, 
    diffDays: diffDays, 
    livedDays: livedDays
  }
}

export default Home
