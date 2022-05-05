import React from 'react'

import Head from 'next/head'

const Education = () => {
  return (
    <div>
    <Head>
        <title>Education</title>
        <meta name="description" content="Ritik has a portfolio go and chck it out." />
        <link rel="icon" href="/favicon.ico" />
      </Head><section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div data-aos="fade-up" className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-indigo-500 text-3xl title-font font-bold mb-2">Kalinga Institute Of Industrial Technology</h2>
            <p className="leading-relaxed text-gray-500 body-font font-semibold">Btech [3rd year] with Information Technology at KIIT, Bhubaneswar. Scored 9.31 CGPA currently. </p>
          </div>
        </div>
        <div data-aos="fade-down" className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-indigo-500 text-3xl title-font font-bold mb-2">Oxford Public School</h2>
            <p className="leading-relaxed text-gray-500 body-font font-semibold">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
        </div>
      </div>
    </section></div>
  )
}

export default Education