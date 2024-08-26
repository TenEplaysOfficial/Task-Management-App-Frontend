import React, { useState } from 'react';
import Cards from '../components/Home/Cards';
import { IoAddCircleSharp } from 'react-icons/io5';
import InputData from '../components/Home/InputData';

const AllTasks = () => {
    const [isInputVisible, setIsInputVisible] = useState(false);

    const toggleInputVisibility = () => {
        setIsInputVisible(!isInputVisible);
    };

    return (
        <>
            <div>
                <div className='w-full flex justify-end px-4 py-2'>
                    <button onClick={toggleInputVisibility}>
                        <IoAddCircleSharp className='text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300' />
                    </button>
                </div>
                <Cards home={"true"} setIsInputVisible={setIsInputVisible} />
            </div>
            {isInputVisible && <InputData closeInput={toggleInputVisibility} />}
        </>
    );
};

export default AllTasks;
