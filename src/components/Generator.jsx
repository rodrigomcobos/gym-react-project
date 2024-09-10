import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/exerciseData'
import Button from './Button'



//This is a nested Header component
function Header(props) {
    //creating props for index, title and description
    const { index, title, description } = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}


const Generator = (props) => {
    const { setWorkout, poison, setPoison, setMuscles, muscles, goal, setGoal, updateWorkout } = props
    // This is for the drop down menu
    //UseState is used so the function actually works inside react
    const [showModal, setShowModal] = useState(false);

    function toggleModal() {
        setShowModal(!showModal);
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }

        if (poison !== "individual") {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            setShowModal(false)
        }
    }

    return (
        <SectionWrapper header={'Generate your Workout'} title={['It\'s', 'Workout', 'time']}>


            {/* Section 1 */}
            <Header index={'01'} title={'Pick your poison'} description={'Select the workout you wish to endure'} />
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {/* This is grabbing data from the exerciseData file, accessing the object.key from WORKOUT */}
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        // This will create buttons for each type
                        // when mapping, need to add the key index to the parent component
                        <button onClick={() => {
                            setMuscles([])
                            setPoison(type)
                        }} className={'bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' + (type === poison ? ' border-red-600' : ' border-blue-400')} key={typeIndex}>
                            <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>


            {/* Section 2 */}
            <Header index={'02'} title={'Lock on targets'} description={'Select the muscles judged for annihilation'} />
            <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>
                <button onClick={toggleModal} className='relative flex p-3 items-center justify-center'>
                    <p className='capitalize'>{muscles.length === 0 ? 'Select muscle groups' : muscles.join(' + ')}</p>
                    <i className='fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down'></i>
                </button>
                {showModal && (
                    <div className='flex flex-col px-3 pb-3'>
                        {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup)
                                }} key={muscleGroupIndex}
                                    className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}>
                                    <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>

            {/* Section 3 */}
            <Header index={'03'} title={'Become Jacked'} description={'Select your ultimate objective'} />
            <div className='grid grid-cols-3 gap-4'>
                {/* This is grabbing data from the exerciseData file, accessing the object.key from WORKOUT */}
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        // This will create buttons for each type
                        // when mapping, need to add the key index to the parent component
                        <button onClick={() => setGoal(scheme)}
                            className={'bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' + (scheme === goal ? ' border-red-600' : ' border-blue-400')}
                            key={schemeIndex}>
                            <p className='capitalize'>{scheme.replace('_', " ")}</p>
                        </button>
                    )
                })}
            </div>

            <Button func={updateWorkout} text={'Formulate'} />

        </SectionWrapper>
    )
}

export default Generator