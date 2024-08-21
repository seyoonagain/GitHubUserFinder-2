import React from 'react';
import { Link } from 'react-router-dom';

export default function UserDetail({ text, icon, link }) {
    return (
        <li className='flex items-center text-sm mb-2 font-medium cursor-default'>
            <div className='fill-gray-400 mr-1.5'>{icon}</div>
            <span className={`${link && 'hover:text-violet-500'}`}>
                {link ? (
                    <Link to={text} target='_blank'>
                        {text}
                    </Link>
                ) : (
                    <>{text}</>
                )}
            </span>
        </li>
    );
}
