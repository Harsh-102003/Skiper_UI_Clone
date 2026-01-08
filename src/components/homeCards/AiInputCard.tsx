import React from 'react'
import BadgeButton from '../ui/badge-button'
import AiInput from '../ui/ai-input'

const AiInputCard = () => {
    return (
        <div className='w-[57%] p-2 bg-white mx-auto rounded-3xl shadow my-8'>
            <div className='h-full p-6 bg-[#f4f4f4] shadow mx-auto rounded-3xl'>
                <BadgeButton>Latest Component</BadgeButton>
                <h1 className='text-2xl font-bold mt-4'>AI Input</h1>
                <p className='text-gray-600 mt-2'>Seamless AI Chat Input box</p>
                <AiInput/>
            </div>
        </div>
    )
}

export default AiInputCard
