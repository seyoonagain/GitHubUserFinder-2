import React from 'react';
import { Link } from 'react-router-dom';

export default function UserCard({ user }) {
    const { avatar_url, login } = user;
    return (
        <li className='h-32 relative border border-zinc-700 rounded-xl p-4 text-sm text-gray-300 flex items-center'>
            <div className='size-24 flex items-center justify-center'>
                <img
                    className='border border-zinc-800 rounded-full size-16 shrink-0'
                    src={avatar_url}
                    alt={login}
                />
            </div>
            <div className='flex flex-col gap-1'>
                <span className='font-bold'>{login}</span>
                <Link
                    to={`/search/${login}`}
                    className='w-24 text-center bg-zinc-800 border border-zinc-700 rounded-lg p-1 px-3 text-xs hover:brightness-110 active:brightness-125'
                >
                    View profile
                </Link>
            </div>
        </li>
    );
}
