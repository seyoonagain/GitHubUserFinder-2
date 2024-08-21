import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Website } from '../icons/website.svg';

export default function HomepageMenu({ homepage }) {
    return (
        <div
            className='h-8 w-28 absolute top-5 -right-2 z-10 flex items-center justify-center
			text-sm tracking-tight rounded-xl text-zinc-300
			bg-zinc-800 hover:brightness-110 active:brightness-125 drop-shadow-dropMenu'
        >
            <Link to={homepage} target='_blank'>
                <div className='flex items-center'>
                    <Website className='fill-zinc-300 size-3 mr-1.5' /> Homepage
                </div>
            </Link>
        </div>
    );
}
