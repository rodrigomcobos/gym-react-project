import React from 'react'

const Button = (props) => {
    const { text, func } = props;
    return (
        <button onClick={func} className='px-8 mx-auto py-4 rounded-lg border-[2px] bg-stone-950 border-red-400 duration-200 hover:border-red-600'>
            <p>{text}</p>
        </button>
    )
}

export default Button