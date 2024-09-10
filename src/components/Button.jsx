import React from 'react'

const Button = (props) => {
    const { text, func } = props;
    return (
        <button onClick={func} className='px-8 mx-auto py-4 rounded-lg border-[2px] bg-slate-950 border-blue-400 duration-200 hover:border-blue-600'>
            <p>{text}</p>
        </button>
    )
}

export default Button