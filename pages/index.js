import Head from 'next/head'
import Image from 'next/image'
import pic from '/public/pro_pic.jpg'
import Typewriter from 'typewriter-effect';
import Skills from '../components/Skills';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import UseAnimations from "react-useanimations";
import download from 'react-useanimations/lib/download'
import styles from '/styles/Home.module.css';


export default function Home() {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  function ScrollToBottom() {
    const ele = document.getElementById('skills');
    ele.scrollIntoView();
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Ritik has a portfolio go and chck it out." />
      </Head>
      <section className="text-gray-900 body-font">
        <div className="container mx-auto flex px-5 sm:py-24 py-8 md:flex-row flex-col items-center">
          <div data-aos="fade-up" data-aos-duration="3000" className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mx-40 md:mt-10 mb-16 md:mb-0 items-center text-center">
            <h2 className='sm:text-3xl text-2xl mb-4 font-medium text-slate-500'>Hi! I AM</h2>
            <div className={styles.name_font}><h1 className="title-font sm:text-7xl text-4xl mb-4 font-medium text-green-600 hover:animate-pulse">R I T I K
            </h1></div>
            <div className={styles.type_font}>
            <span className="mb-8 leading-relaxed text-slate-500 title-font sm:text-xl text-md font-bold">
              
                <Typewriter
                  options={{
                    strings: ['Front-end Developer!', 'Programmer!', 'Gamer!'],
                    autoStart: true,
                    loop: true,
                  }}
                />
             
            </span>
            </div>
            <div className="flex justify-center mt-5">
              <button className="inline-flex text-white bg-cyan-400 border-0 py-2 px-4 focus:outline-none hover:bg-cyan-600 rounded text-lg"><span className='px-2'>CV</span><UseAnimations
                animation={download}
                size={30}
                style={{ padding: 100 }}
              /></button>
            </div>
            <button className='mx-6' onClick={ScrollToBottom}>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce text-indigo-500 mt-14 h-10 w-10 hover:animate-ping" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                </svg>
              </a>
            </button>
          </div>
          <div data-aos="fade-down" data-aos-duration="3000" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image priority className="object-cover object-center rounded-full" alt="hero" src={pic} width={350} height={350} />
          </div>
        </div>
      </section>
      <div id='skills'>
        <Skills />
      </div>

    </div>
  )
}
