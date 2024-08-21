import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className='relative flex justify-center'>
            <button
                onClick={() => navigate(-1)}
                className='rounded-full w-20 h-10 bg-violet-900 hover:bg-violet-800 active:bg-violet-700 font-bold text-sm absolute top-5 left-5'
            >
                Go Back
            </button>
            <div className='mt-32'>
                <h3 className='font-black text-3xl md:text-5xl mb-3'>Oops!</h3>
                <span className='text-lg font-semibold md:text-xl'>
                    Something has gone wrong.
                </span>
            </div>
        </div>
    );
}
