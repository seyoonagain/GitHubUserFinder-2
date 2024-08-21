import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Forks } from './icons/forks.svg';
import { ReactComponent as Stars } from './icons/stars.svg';
import { ReactComponent as Menu } from './icons/menu.svg';
import RepoDetail from './ui/RepoDetail';
import HomepageMenu from './ui/HomepageMenu';
import useOutsideClick from '../hooks/useOutsideClick';

export default function RepoResult({ repo }) {
    const {
        html_url,
        homepage,
        description,
        forks_count,
        language,
        name,
        stargazers_count,
    } = repo && repo;
    const [showHomepage, setShowHomepage] = useState(false);
    const ref = useOutsideClick(() => setShowHomepage(false));
    return (
        <li className='h-32 relative border border-zinc-700 rounded-xl p-4 text-sm text-gray-300'>
            <section className='flex justify-between relative'>
                <Link
                    to={html_url}
                    target='_blank'
                    className='text-violet-400 font-bold mb-2 pr-0 line-clamp-1'
                >
                    {name}
                </Link>
                {homepage && (
                    <div ref={ref}>
                        <Menu
                            className='fill-gray-400 hover:fill-gray-300 cursor-pointer z-0'
                            onClick={() => setShowHomepage(!showHomepage)}
                        />
                        {showHomepage && (
                            <HomepageMenu
                                homepage={homepage}
                                setShowHomepage={setShowHomepage}
                            />
                        )}
                    </div>
                )}
            </section>
            <p className='text-xs line-clamp-2'>{description}</p>
            <section className='absolute bottom-4 left-4 flex gap-4 text-xs cursor-default'>
                {language && (
                    <span className='text-orange-200 font-semibold'>
                        {language}
                    </span>
                )}
                {forks_count > 0 && (
                    <RepoDetail count={forks_count} icon={<Forks />} />
                )}
                {stargazers_count > 0 && (
                    <RepoDetail count={stargazers_count} icon={<Stars />} />
                )}
            </section>
        </li>
    );
}
