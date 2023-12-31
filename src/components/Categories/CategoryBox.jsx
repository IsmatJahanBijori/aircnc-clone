import React from 'react'

export const CategoryBox = ({ label, icon: Icon, description }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-2 border-b-2 hover:text-black border-transparent text-neutral-500 p-3'>
            <Icon size={26} />
            <p className='text-sm font-medium'>{label}</p>
        </div>
    )
}
