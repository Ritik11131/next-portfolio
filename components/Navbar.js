import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import { BsSunFill, BsSun } from 'react-icons/bs';
import styles from '/styles/Home.module.css'
import { AiFillHome } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { HiAcademicCap } from 'react-icons/hi';
import LoadingBar from 'react-top-loading-bar';



const Navbar = () => {

  const [progress, setProgress] = useState(0)

  const [nav, setNav] = useState('');
  const [navtext, setnavText] = useState('text-gray-600');
  const [icon, setIcon] = useState("sunfill");

  const changeIcon = (state) => {
    if (state === "sunfill") {
      return "sun";
    }
    return "sunfill";
  };

  function Darkmode() {
    if (nav === '') {
      setIcon((old) => changeIcon(old))
      setNav('bg-black-900')
      setnavText('text-white')
      document.body.style.backgroundColor = "black";
    }
    else {
      setNav('')
      setIcon((old) => changeIcon(old))
      setnavText('text-gray-600')
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <div className={styles.body}>
        <header className={`${navtext} body-font ${nav}`}>
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> 
            <div className={styles.nav_font}><h1 className="ml-3 text-6xl text-purple-700 animate-pulse cursor-pointer border-b-4">RG</h1></div>
              
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold">
              <Link href='/'><a className="sm:mr-14 mr-7 hover:text-gray-500 text-3xl"><button onClick={() => setProgress(100)}><AiFillHome className='hover:animate-ping' /></button></a></Link>
              <Link href='/about'><a className="sm:mr-14 mr-7 hover:text-gray-500 text-4xl"><button onClick={() => setProgress(100)}><SiAboutdotme className='hover:animate-ping'/></button></a></Link>
              <Link href='/myWork'><a className="sm:mr-14 mr-7 hover:text-gray-500 text-3xl"><button onClick={() => setProgress(100)}><MdWork className='hover:animate-ping'/></button></a></Link>
              <Link href='/education'><a className="sm:mr-14 mr-7 hover:text-gray-500 text-3xl"><button onClick={() => setProgress(100)}><HiAcademicCap className='hover:animate-ping'/></button></a></Link>
              <Link href='/contact'><a className="sm:mr-14 mr-7 hover:text-gray-500 text-2xl"><button onClick={() => setProgress(100)}><BsFillTelephoneFill className='hover:animate-ping'/></button></a></Link>
            </nav>
            <button onClick={Darkmode} className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">{icon === "sunfill" ? <BsSunFill className="text-slate-900 text-3xl hover:animate-spin" /> : <BsSun className="text-3xl  hover:animate-spin" />}
            </button>
          </div>
        </header>
      </div>
      <div>
        <LoadingBar
          color='#F51720'
          height='3px'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      </div>
    </>
  )
}

export default Navbar;