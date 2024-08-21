import React from 'react';

export default function NoUserFound() {
    return (
        <div className='w-full flex flex-col items-center mt-10'>
            <div>
                <h3 className='font-black text-3xl md:text-5xl mb-3'>Oops!</h3>
                <span className='text-lg font-semibold md:text-xl'>
                    Your search did not match any users.
                </span>
            </div>
        </div>
    );
}
