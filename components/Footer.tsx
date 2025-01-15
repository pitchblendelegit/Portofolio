import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '../data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[-45vw]'>
                Ready to Take <span className='text-purple'>Your</span> Digital Presence to The Next Level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
                Reach Out to Me Today and Let&apos;s Discuss how I can Help You Achieve your Goals
            </p>
            <a href = "mailto:halfian639@gmail.com">
                <MagicButton
                    title='lets get in touch'
                    icon={<FaLocationArrow/>}
                    position='right'
                />
            </a>
        </div>
        <div className='flex my-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Hafizh</p>
            <div className=' flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <a 
                        key={profile.id} 
                        href={profile.link || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='w-10 h-10 cursor-pointer flex justify-center backdrop-filter backdrop-blur-lg saturate-75 bg-black-200 rounded-lg border border-black-200'>
                        <img src={profile.img} alt={profile.id.toString()} width={20} height={20}/>
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer