import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <Link
            to='/'
            className='font-logo text-3xl sm:text-4xl tracking-tighter pb-5 md:pb-0'
        >
            <span className='text-violet-500 font-bold'>GitHub </span>
            <br className='hidden md:inline' />
            User <br className='hidden md:inline' />
            Finder
        </Link>
    );
}
