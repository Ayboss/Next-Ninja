import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../comps/header';
import Footer from '../comps/Footer';

export default function Home() {
  return ( <>
  <Head>
    <title>Ninja | Home</title>
  </Head>
  <div>
    <h1 className={styles.title}>Homepage</h1>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
    <Link href="/ninjas/">
      <a className={styles.btn}>See Ninja Listing</a>
    </Link>
  </div></>
    )
}
