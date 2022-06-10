import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin, FaWhatsappSquare, FaGithub } from 'react-icons/fa';
import Head from 'next/head'
import { useState } from 'react';



const Contact = () => {
  const [open, setOpen] = useState('hidden')
  function closeBanner() {
    setOpen('hidden');
  }

  function openBanner() {
    setOpen('');
  }

  return (

    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Ritik has a portfolio go and chck it out." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div><div className={`${open} bg-indigo-600`}>
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg text-green-400 bg-green-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className=" md:text-lg sm">Submitted. Will contact you soon! </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button onClick={closeBanner} type="button" className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                <span className="sr-only">Dismiss</span>
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div></div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div data-aos="zoom-in-down" data-aos-duration="1000" className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-indigo-500 text-xl title-font font-bold ">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" data-ms-editor="true" />
                </div>
              </div>
              <div data-aos="zoom-in-down" data-aos-duration="1000" className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-indigo-500 text-xl title-font font-bold ">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div data-aos="zoom-in-up" data-aos-duration="1000" className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-indigo-500 text-xl title-font font-bold ">Message</label>
                  <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" spellCheck="false" data-ms-editor="true"></textarea>
                </div>
              </div>
              <div data-aos="zoom-in-up" data-aos-duration="1000" className="p-2 w-full">
                <button onClick={openBanner} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="hover:animate-ping m-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500 cursor-pointer">ritik11131@gmail.com</a>
                <p className="leading-normal my-5">Ranchi, Jharkhand 834005</p>
                <span className="inline-flex space-x-4">
                  <a href='/1' className="text-gray-500">
                    <FaFacebookSquare className='text-4xl text-blue-700 animate-bounce' />
                  </a>
                  <a className="text-gray-500">
                    <FaLinkedin className='text-4xl text-blue-500 animate-bounce' />
                  </a>
                  <a className="text-gray-500">
                    <FaGithub className='text-4xl animate-bounce' />
                  </a>
                  <a className="text-gray-500">
                    <FaWhatsappSquare className='text-4xl text-green-600 animate-bounce' />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section></div>
  )
}

export default Contact