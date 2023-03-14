import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Parallax } from 'react-scroll-parallax'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Welcome from './components/Welcome'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>


      <Welcome />
      <Navigation />
      <div className='container'>
        <section id="about">
          <article className='article' ></article>
        </section>
        <section id="projects">
          <article className='article' id="projects"></article>
        </section>
        <section id="contact">
          <article className='article' id="contact"></article>

        </section>

      </div>
    </div>


  );
}