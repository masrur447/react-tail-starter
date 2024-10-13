import React from 'react'
import { Helmet } from 'react-helmet-async'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className='w-full h-screen flex items-center justify-center bg-gradient-to-tr from-pink-400 via-purple-700 to-rose-400'>
                <h1 className='text-3xl font-bold text-white'>React Tailwind Vite Starter Template</h1>
            </div>
        </>
    )
}

export default Home