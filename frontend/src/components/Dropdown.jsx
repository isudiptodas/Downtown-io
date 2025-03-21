import React from 'react'
import { category } from '../nearbyPlaces.js';

function Dropdown({onSelect}) {

    const handleSelect = (value) => {
        onSelect(value);
    }

    return (
        <>
            <details className="dropdown w-full text-center rounded-lg bg-white group hover:bg-gray-200 duration-200 ease-in-out">
                <summary className="btn w-full border-none m-1 bg-white text-black group-hover:bg-transparent">Select a category : </summary>
                <ul className="menu w-full dropdown-content text-black rounded-box z-[1] bg-white p-2 flex gap-5 shadow">
                    {category.map((category) => {
                        return <li key={category.id} className='hover:bg-gray-200 py-2 rounded-lg duration-200 capitalize cursor-pointer ease-in-out' onClick={() => handleSelect(category.name)}>{category.name}</li>
                    })}
                </ul>
            </details>
        </>
    )
}

export default Dropdown
