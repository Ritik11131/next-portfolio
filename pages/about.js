import React from 'react'
import styles from '/styles/Home.module.css';
import Head from 'next/head'

const About = () => {
  return (
    <div>
    <Head>
        <title>About</title>
        <meta name="description" content="Ritik has a portfolio go and chck it out." />
        <link rel="icon" href="/favicon.ico" />
      </Head><section className="text-gray-500 body-font font-semibold">
    <div className="container px-5 py-5 mx-auto flex flex-col">
      <div className="lg:w-4/6 mx-auto">
        <div className="flex flex-col sm:flex-row mt-20">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div data-aos="zoom-in" className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div data-aos="fade-up"
            data-aos-duration="3000"   className="flex flex-col items-center text-center justify-center">
            <div className={styles.about_name}>
              <h2 className="title-font mt-4 text-green-500 text-3xl">Ritik Gupta</h2></div>
              <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              <p className="text-base">A 22 year boy pursuing B.Tech in IT branch at Kalinga Institute of Industrial technology, Bhubaneswar. Quick Learner and a passionate guy. </p>
            </div>
          </div>
          <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p  data-aos="flip-right" data-aos-duration="1500"  className="leading-relaxed text-lg mb-4">
              I am a Front-end web Developer and a intermediate C/C++ programmer who loves to code and solve problems. Loves to play Games. Loves to explore and learn new technologies with time. I am a guy with big dreams and hard work, will definetely fulfill my dreams. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default About