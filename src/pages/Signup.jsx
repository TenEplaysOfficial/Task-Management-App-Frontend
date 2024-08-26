import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='h-[98vh] flex items-center justify-center'>
      <div className='p-6 w-2/6 rounded bg-gray-800'>
        <h2 className='text-2xl font-semibold text-white mb-4'>Sign Up</h2>
        <input
          type="text"
          placeholder='username'
          className='bg-gray-700 px-4 py-2 w-full rounded mb-4 text-white placeholder-gray-400'
        />
        <input
          type="email"
          placeholder='email'
          className='bg-gray-700 px-4 py-2 w-full rounded mb-4 text-white placeholder-gray-400'
        />
        <input
          type="password"
          placeholder='password'
          className='bg-gray-700 px-4 py-2 w-full rounded mb-4 text-white placeholder-gray-400'
        />
        <div className='w-full flex items-center justify-between'>
      <button className=' bg-blue-500 text-white font-semibold px-3 py-2 rounded hover:bg-blue-600 transition-all'>
        Sign Up
      </button>
      <Link to="/login" className='text-gray-400 hover:text-gray-200'>Already having an account? Login here</Link>
      </div>
      </div>
    </div>
  );
};

export default Signup;