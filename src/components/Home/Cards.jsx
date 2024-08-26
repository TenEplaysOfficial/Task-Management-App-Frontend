import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { IoAddCircleSharp } from 'react-icons/io5';

const Cards = ({ home, setIsInputVisible }) => {
    const data = [
        {
            title: "The coder1",
            desc: "I'm the best coder in the world. I will have the best knowledge of coding for my bright future for a better life.",
            status: "Incomplete",
        },
        {
            title: "The coder2",
            desc: "I'm the best coder in the world. I will have the best knowledge of coding for my bright future for a better life.",
            status: "Complete",
        },
        {
            title: "The coder3",
            desc: "I'm the best coder in the world. I will have the best knowledge of coding for my bright future for a better life.",
            status: "Incomplete",
        },
        {
            title: "The coder4",
            desc: "I'm the best coder in the world. I will have the best knowledge of coding for my bright future for a better life.",
            status: "Incomplete",
        },
    ];

    return (
        <div className='grid grid-cols-3 gap-4 p-4'>
            {data.map((items, i) => (
                <div key={i} className='flex flex-col justify-between bg-gray-800 rounded p-4'>
                    <div>
                        <h3 className='text-xl font-semibold'>{items.title}</h3>
                        <p className='text-gray-300 my-2'>{items.desc}</p>
                    </div>
                    <div className='mt-4 w-full flex items-center'>
                        <button
                            className={`${
                                items.status === "Incomplete" ? "bg-red-400" : "bg-green-700"
                            } p-2 rounded w-3/6`}
                        >
                            {items.status}
                        </button>
                        <div className='text-white p-2 w-3/6 text-2xl font-semibold flex justify-around'>
                            <button><CiHeart /></button>
                            <button><FaEdit /></button>
                            <button><MdDelete /></button>
                        </div>
                    </div>
                </div>
            ))}
            {home === "true" && (
                <div 
                    className='flex flex-col justify-center items-center bg-gray-800 rounded p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300'
                    onClick={() => setIsInputVisible(true)}
                >
                    <IoAddCircleSharp className='text-5xl' />
                    <h2 className='text-2xl mt-4'>Add Task</h2>
                </div>
            )}
        </div>
    );
};

export default Cards;
