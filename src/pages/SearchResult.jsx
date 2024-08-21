import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGithub from '../hooks/useGithub';
import RepoResult from '../components/RepoResult';
import UserCard from '../components/UserCard';
import UserInfo from '../components/UserInfo';
import Menu from '../components/ui/Menu';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import NoUserFound from '../components/NoUserFound';
import Pagination from '../components/Pagination';

export default function SearchResult() {
    const { username } = useParams();
    const [page, setPage] = useState(1);
    const [type, setType] = useState('repos');
    const [offset, setOffset] = useState({});
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } =
        offset && offset;
    const {
        userData: { data: user, error: userError },
        fetchedData: { data, isLoading: dataLoading, error: dataError },
    } = useGithub(type, username ? username : 'seyoonagain', page);
    const handleType = (selectedType) => {
        if (selectedType === type) {
            return;
        }
        setPage(1);
        setType(selectedType);
    };
    useEffect(() => {
        setType('repos');
        setPage(1);
    }, [username]);
    return (
        <article className='flex flex-col md:flex-row w-full pt-5 xl:px-20'>
            {userError || user === 404 ? (
                <NoUserFound />
            ) : (
                user && (
                    <>
                        <section className='w-full md:w-1/3 md:max-w-80 md:min-w-72 xl:w-full pb-5'>
                            {user && <UserInfo user={user} setType={setType} />}
                        </section>
                        <section className='w-full md:pl-5'>
                            <nav className='w-full flex mb-5 relative border-b border-zinc-700 md:pl-2'>
                                <div
                                    style={{
                                        left: `${offsetLeft - 5}px`,
                                        top: `${
                                            offsetTop + offsetHeight + 7
                                        }px`,
                                        width: `${offsetWidth + 10}px`,
                                    }}
                                    className='absolute h-0.5 bg-orange-500 transition-all duration-500'
                                />
                                <Menu
                                    text='repos'
                                    onClick={handleType}
                                    type={type}
                                    setOffset={setOffset}
                                />
                                <Menu
                                    text='followers'
                                    onClick={handleType}
                                    type={type}
                                    setOffset={setOffset}
                                />
                                <Menu
                                    text='following'
                                    onClick={handleType}
                                    type={type}
                                    setOffset={setOffset}
                                />
                            </nav>
                            {dataLoading && <LoadingSpinner />}
                            {dataError && <NoUserFound />}
                            {!dataError && (
                                <>
                                    {data && data.length === 0 && (
                                        <div className='pt-5 flex flex-col items-center'>
                                            <div>
                                                <h3 className='font-black text-2xl md:text-4xl mb-2'>
                                                    Oops!
                                                </h3>
                                                <div className='text-lg font-medium md:text-xl'>
                                                    <span className='text-violet-400 font-bold'>
                                                        {username
                                                            ? username
                                                            : 'seyoonagain'}
                                                    </span>
                                                    {'\xa0'}
                                                    {type === 'following'
                                                        ? "isn't following anybody."
                                                        : `doesn't have any 
                                        ${
                                            type === 'repos'
                                                ? 'public repositories'
                                                : type
                                        } 
                                        yet.`}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {type === 'repos' && data && (
                                        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                            {data.map((repo) => (
                                                <RepoResult
                                                    key={repo.id}
                                                    repo={repo}
                                                />
                                            ))}
                                        </ul>
                                    )}

                                    {(type === 'followers' ||
                                        type === 'following') &&
                                        data && (
                                            <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                                {data.map((user) => (
                                                    <UserCard
                                                        key={user.id}
                                                        user={user}
                                                    />
                                                ))}
                                            </ul>
                                        )}
                                </>
                            )}
                            {user &&
                                !dataLoading &&
                                user[type === 'repos' ? 'public_repos' : type] >
                                    20 && (
                                    <Pagination
                                        user={user}
                                        type={type}
                                        page={page}
                                        setPage={setPage}
                                    />
                                )}
                        </section>
                    </>
                )
            )}
        </article>
    );
}
