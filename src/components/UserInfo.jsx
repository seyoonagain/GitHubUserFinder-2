import React from 'react';
import { ReactComponent as Email } from './icons/email.svg';
import { ReactComponent as Location } from './icons/location.svg';
import { ReactComponent as Blog } from './icons/website.svg';
import { ReactComponent as Followers } from './icons/followers.svg';
import { ReactComponent as Company } from './icons/company.svg';
import UserDetail from './ui/UserDetail';
import Follow from './ui/Follow';
import { Link } from 'react-router-dom';

export default function UserInfo({
    user: {
        avatar_url,
        bio,
        blog,
        company,
        email,
        followers,
        following,
        html_url,
        location,
        login,
        name,
    },
    setType,
}) {
    return (
        <article className='flex flex-col'>
            <section className='flex md:flex-col items-center md:items-start'>
                <div className='size-36 md:size-full items-center justify-center md:pb-3'>
                    <img
                        className='w-full rounded-full border border-zinc-800'
                        src={avatar_url}
                        alt={name}
                    />
                </div>
                <div className='ml-3 md:ml-5 tracking-tight'>
                    <h2 className='text-2xl md:text-3xl font-bold leading-8'>
                        {name}
                    </h2>
                    <h3 className='text-xl text-zinc-500'>{login}</h3>
                </div>
            </section>
            <Link to={html_url} target='_blank' className='w-full md:px-5'>
                <button className='w-full text-sm bg-zinc-800 mt-5 border border-zinc-700 rounded-lg h-8 hover:brightness-110 active:brightness-125 active:translate-x-px active:translate-y-px'>
                    Find out more on GitHub
                </button>
            </Link>
            <div className='md:pl-5'>
                <p className='my-5'>{bio}</p>
                <ul>
                    {(followers > 0 || following > 0) && (
                        <li className='flex items-center text-sm mb-7 '>
                            <div className='fill-gray-400 mr-1.5'>
                                <Followers />
                            </div>
                            <div className='font-bold text-gray-100 flex items-center'>
                                <div onClick={() => setType('followers')}>
                                    <Follow
                                        count={followers}
                                        text='followers'
                                    />
                                </div>
                                {'\xa0·\xa0'}
                                <div onClick={() => setType('following')}>
                                    <Follow
                                        count={following}
                                        text='following'
                                    />
                                </div>
                            </div>
                        </li>
                    )}
                    {company && (
                        <UserDetail text={company} icon={<Company />} />
                    )}
                    {location && (
                        <UserDetail text={location} icon={<Location />} />
                    )}
                    {email && <UserDetail text={email} icon={<Email />} />}
                    {blog && (
                        <UserDetail text={blog} icon={<Blog />} link={true} />
                    )}
                </ul>
            </div>
        </article>
    );
}
