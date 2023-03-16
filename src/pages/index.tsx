import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Parallax } from 'react-scroll-parallax'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Welcome from './components/Welcome'


const inter = Inter({ subsets: ['latin'] })


let projects = [
  {
    title: "Quiz App",
    description: "",
    imagePath: "",
    githubLink: "",
    livePreview: "",
    tech: [

    ],

  }
]


export default function Home() {
  return (
    <div>


      <Welcome />
      <Navigation />
      <main className='container'>
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
          <article className='projects'>
            <h1>Projects</h1>
            <div className='project-card'>
              <h2>Quiz App</h2>
              <figure>
                <Image quality="100" width={500}
                  height={500} alt="screenshot of quiz app project"  src="/images/quizapp.png"></Image>
                <figcaption>
                  <p>Uses the Open Trivia Database API to fetch questions based on user settings.</p>
                </figcaption>
              </figure>
          </div>
          </article>
        </section>
        <section id="contact">
          <article className='contact-info'>
            <h1>Contact me</h1>
            <div>
            <a href="mailto:fredrikadr@gmail.com" title="Send me an e-mail">
              <Image alt="email" width="50" height="50" src="/images/email.png"></Image>
              <span>Fredrikadr@gmail.com</span></a>
            </div>
            <div>
            <a title="Connect with me on linkedin" href='https://www.linkedin.com/in/fredrik-andersen/'>
              <Image alt="linkedin icon" width="50" height="50" src="/images/linkedin.png"></Image>
              <span>Connect with me on LinkedIn</span>
            </a>

            </div>
          </article>

        </section>

      </main>
    </div>


  );
}