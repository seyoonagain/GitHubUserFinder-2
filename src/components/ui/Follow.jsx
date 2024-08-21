import React from 'react';
import ConvertNumber from '../util/ConvertNumber';

export default function Follow({ count, text }) {
    return (
        <div className='hover:text-violet-500 text-gray-100 cursor-pointer'>
            <span>
                <ConvertNumber number={count} />
                {'\xa0'}
            </span>
            <span className='font-normal opacity-70'>{text}</span>
        </div>
    );
}
