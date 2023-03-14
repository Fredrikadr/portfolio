import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Parallax } from 'react-scroll-parallax'
import Header from './components/Header'
import Navigation from './components/Navigation'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>


      <Navigation />
      <div className='container'>
        <div className='welcome'></div>
        <section className='section' id="about"></section>
        <section className='section' id="projects"></section>
        <section className='section' id="contact"></section>

      </div>
    </div>


  );
}