import { Button } from '@nextui-org/button'
import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <section className='relative w-full h-full' id='Home'>
        <div className="hidden md:block relative w-full md:h-[640px] lg:h-[850px] xl:h-[1200px] ">
          <Image
            src={"/Hero.svg"}
            fill
            alt="image"
            className="object-cover object-center"
          />
          </div>
          <div>
          <div className="relative w-full h-[425px] block md:hidden ">
          <Image
            src={"/HeroMobile.svg"}
            fill
            alt="image"
            className="object-contain"
          />
          </div>
          <div className='absolute hidden h-full space-y-4 2xl:space-y-5 w-52 2xl:w-64 md:block lg:top-64 lg:left-40 xl:top-96 xl:left-56 2xl:top-[22rem] 2xl:left-[26rem]'>
            <h1 className='font-Prata text-primary text-[50px] 2xl:[60px] tracking-wider leading-snug'>Care &Beyond</h1>
            <p className='w-full text-xl 2xl:text-2xl font-Plus_Jakarta_Sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <Button color='secondary' size='lg' radius='sm' variant='shadow' className='text-xl text-white 2xl:text-2xl'>Know More</Button>
          </div>
          <div className='absolute block w-40 h-full space-y-2 md:hidden top-20 left-7'>
            <h1 className='w-1/2 text-xl leading-relaxed tracking-wider font-Prata text-primary'>Care &Beyond</h1>
            <p className='text-sm font-Plus_Jakarta_Sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <Button color='secondary' radius='sm' size='sm' variant='shadow' className='text-sm text-white'>Know More</Button>
          </div>
        </div>
    </section>
  )
}

