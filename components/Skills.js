import Image from 'next/image'
import React from 'react'
import react_icon from '/public/react-icon.gif'
import js_icon from '/public/js-icon.gif'
import styles from './../styles/Home.module.css'
import c_icon from '/public/c++-icon.png'
import bootstrap_icon from '/public/bootstrap-icon.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import python_icon from '/public/python-icon.gif'
import html_icon from '/public/html-icon.png'
import css_icon from '/public/css-icon.png'
import node_icon from '/public/node-icon.png'
import angular_icon from '/public/angular-icon.png'

const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className={styles.skill}>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto my-5">
  <h1  className='title-font sm:text-8xl text-3xl mb-4 font-medium text-center'  data-aos="zoom-in">S K I L L S</h1>
  <div className="flex mt-6 justify-center">
        <div className="sm:w-44 w-16 h-1 rounded-full  bg-indigo-500 inline-flex"></div>
      </div>
    <div className="flex flex-wrap m-4 mt-20 text-center  font-bold">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        <Image className="object-cover object-center rounded-full" alt="hero" src={react_icon} width={70} height={70}/>
        </h2>
        <p className="leading-relaxed">React JS</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        <Image className="object-cover object-center rounded-full" alt="hero" src={bootstrap_icon} width={70} height={70}/>
        </h2>
        <p className="leading-relaxed">Bootstrap</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        <Image alt="hero" src={c_icon} width={70} height={70}/>
        </h2>
        <p className="leading-relaxed">C++</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        <Image className="object-cover object-center rounded-full" alt="hero" src={js_icon} width={70} height={70}/>
        </h2>
        <p className="leading-relaxed">Javscript</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        <Image className="object-cover object-center rounded-full" alt="hero" src={angular_icon} width={70} height={70}/>
        </h2>
        <p className="leading-relaxed">Angular JS</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        <Image className="object-cover object-center rounded-full" alt="hero" src={html_icon} width={70} height={70}/>
        </h2>
        <p className="leading-relaxed">HTML</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        <Image className="object-cover object-center rounded-full" alt="hero" src={css_icon} width={70} height={70}/>
        </h2>
        <p className="leading-relaxed">CSS</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        <Image className="object-cover object-center rounded-full" alt="hero" src={node_icon} width={70} height={70}/>
        </h2>
        <p className="leading-relaxed">Node JS</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        <Image className="object-cover object-center rounded-full" alt="hero" src={python_icon} width={70} height={70}/>
        </h2>
        <p className="leading-relaxed">Python</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        <Image className="object-cover object-center rounded-full" alt="hero" src={react_icon} width={70} height={70}/>
        </h2>
        <p className="leading-relaxed">React JS</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        <Image className="object-cover object-center rounded-full" alt="hero" src={react_icon} width={70} height={70}/>
        </h2>
        <p className="leading-relaxed">React JS</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        <Image className="object-cover object-center rounded-full" alt="hero" src={react_icon} width={70} height={70}/>
        </h2>
        <p className="leading-relaxed">React JS</p>
      </div>
      
    </div>
  </div>
</section>
    </div>
  )
}

export default Skills