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
          <article className='about-me' >
            <img alt="picture of me"></img>
            <div className='text-container'>
            <h1>Fredrik Andersen</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic magni ex vel iste tenetur magnam temporibus deserunt est cupiditate minima? Repudiandae, fugit accusantium. Optio excepturi iste perferendis recusandae id hic!</p>
              <br></br>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut repudiandae, adipisci iusto aliquid sequi, inventore ad quasi asperiores cupiditate nemo nihil tempora minima, animi eligendi dolorem est laboriosam recusandae iure?</p>
            </div>
          </article>
        </section>
        <section id="projects">
          <article className='article' id="projects"></article>
        </section>
        <section id="contact">
          <article className='contact-info' id="contact">
            <a title="Connect with me on linkedin" href='https://www.linkedin.com/in/fredrik-andersen/'>
            <Image alt="linkedin icon" width="200" height="200" src="/images/linkedin.png"></Image>
            </a>
            <a href="mailto:fredrikadr@gmail.com" title="Send me an e-mail">
              <Image alt="email" width="200" height="200" src="/images/email.png"></Image>
            </a>
          </article>

        </section>

      </div>
    </div>


  );
}