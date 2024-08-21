import React from 'react';
import ConvertNumber from '../util/ConvertNumber';

export default function RepoDetail({ count, icon }) {
    return (
        <li className='flex items-center fill-gray-400 cursor-default'>
            <div className='mr-1'>{icon}</div>
            <span>
                <ConvertNumber number={count} />
            </span>
        </li>
    );
}
