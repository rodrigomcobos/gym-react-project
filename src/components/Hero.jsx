import React from 'react'
import Button from './Button'

const Hero = () => {

    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <p>IT'S TIME TO GET</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>your muscles <span className='text-red-400'>shredded</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>Unleash your full potential with our <span className='text-red-400 font-medium'>Workout Generator!</span> Whether you’re aiming to build <span className='text-red-400 font-medium'>strength, burn fat, or boost endurance</span>, our powerful tool creates personalized routines that drive results. Transform your <span className='text-red-400 font-medium'>fitness journey </span>with expert-backed exercises designed to challenge and motivate you to conquer every goal.</p>

            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Let's get started"}></Button>
        </div>
    )
}

export default Hero