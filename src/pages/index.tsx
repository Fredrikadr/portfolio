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
      <main className='container'>
        <section id="about">
          <article className='about-me' >
            <div className='text-container'>
              <h1>Fredrik Andersen</h1>
              <p>I&apos;m a full stack JavaScript developer with a focus on using the PERN stack. Although I&apos;m new to the field, I have a strong desire to learn and apply new skills to real-world projects.</p>
              <br></br>
              <p>I&apos;m always expanding my knowledge and skills through online courses, coding challenges, and personal projects. I&apos;m highly motivated, collaborative, and always eager to work with others to find creative solutions to complex problems.</p>
              <br></br>
              <p>My ambition is to build a successful career in the tech industry, contributing to the development of innovative products and services that make a positive impact on society. I&apos;m excited about the opportunities that lie ahead and am determined to achieve my goals through hard work, dedication, and a passion for learning.</p>
            </div>
          </article>
        </section>
        <section id="projects">
          <article className='projects'>
            <h1>Projects</h1>
            <div className='project-card'>
              <h2>Coffee Catalog</h2>
              <figure>

                <Image quality="100" width={500}
                  height={300} alt="screenshot of coffee catalog project" src="/images/coffeecatalog.png"></Image>
                <figcaption>
                  <p>Full Stack Coffee Catalog created using Vite, Sass and TypeScript.</p>
                  <a target="blank" href="https://github.com/Fredrikadr/coffee-catalog"><span>Code</span></a>
                </figcaption>
              </figure>
            </div>
            <div className='project-card'>
              <h2>Chatbot</h2>
              <figure>

                <Image quality="100" width={500}
                  height={300} alt="screenshot of chatbot project" src="/images/chatbot.png"></Image>
                <figcaption>
                  <p>Created using vanilla JS and OpenAI API.</p>
                  <a target="blank" href="https://chatbot-hs5fvz9v0-fredrikadr.vercel.app/"><span>Live preview</span></a>
                  <br></br>
                  <a target="blank" href="https://github.com/Fredrikadr/chatbot"><span>Code</span></a>
                </figcaption>
              </figure>
            </div>
            <div className='project-card'>
                <h2>Quiz App</h2>
              <figure>

                <Image quality="100" width={500}
                  height={300} alt="screenshot of quiz app project" src="/images/quizapp.png"></Image>
                <figcaption>
                  <p>Uses the Open Trivia Database API to fetch questions based on user settings.</p>
                  <a target="blank" href="https://quiz-app-fvac.onrender.com/"><span>Live preview</span></a>
                  <br></br>
                  <a target="blank" href="https://github.com/Fredrikadr/quiz-app"><span>Code</span></a>
                </figcaption>
              </figure>
            </div>
            <div className='project-card'>
                <h2>Crazy Eights</h2>
              <figure>
                <Image quality="100" width={500}
                  height={300} alt="screenshot of quiz app project" src="/images/crazyeights.png"></Image>
                <figcaption>
                  <p>Card game where you play versus the computer. Uses Deck of cards API to keep track of the deck.</p>
                  <a target="blank" href="https://nextjs-crazy-eights.vercel.app/"><span>Live preview</span></a>
                  <br></br>
                  <a target="blank" href='https://github.com/Fredrikadr/nextjs-crazy-eights'><span>Code</span></a>
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