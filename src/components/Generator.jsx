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


const Generator = () => {
    // This is for the drop down menu
    //UseState is used so the function actually works inside react
    const [showModal, setShowModal] = useState(false);
    const [poison, setPoison] = useState('individual');
    const [muscles, setMuscles] = useState([]);
    const [goals, setGoals] = useState('strength_power');

    function toggleModal() {
        setShowModal(!showModal);
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
                        <button onClick={() => setPoison(type)}
                            className='bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600 py-3 rounded-lg'
                            key={typeIndex}>
                            <p className='capitalize'>{type.replace('_', " ")}</p>
                        </button>
                    )
                })}
            </div>


            {/* Section 2 */}
            <Header index={'02'} title={'Lock on targets'} description={'Select the muscles judged for annihilation'} />
            <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>
                <button onClick={toggleModal} className='relative flex p-3 items-center justify-center'>
                    <p>Select muscle groups</p>
                    <i className='fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down'></i>
                </button>
                {showModal && (
                    <div>modal</div>
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
                        <button
                            className='bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600 py-3 rounded-lg'
                            key={schemeIndex}>
                            <p className='capitalize'>{scheme.replace('_', " ")}</p>
                        </button>
                    )
                })}
            </div>

        </SectionWrapper>
    )
}

export default Generator