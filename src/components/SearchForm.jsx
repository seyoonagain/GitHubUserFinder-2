import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Search } from './icons/search.svg';
import { ReactComponent as Close } from './icons/close.svg';
import useOutsideClick from '../hooks/useOutsideClick';

export default function SearchForm() {
    const inputRef = useRef(null);
    const [showInput, setShowInput] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${username}`);
    };
    const handleOpenInput = () => {
        setShowInput(true);
        inputRef.current && inputRef.current.focus();
    };
    const handleCloseInput = () => {
        setUsername('');
        setShowInput(false);
    };
    if (!showInput) {
        document.addEventListener('keyup', (e) => {
            if (e.key === '/') {
                handleOpenInput();
            }
        });
    }
    const ref = useOutsideClick(handleCloseInput);
    return (
        <section className='relative w-full flex justify-center md:justify-end'>
            {!showInput && (
                <span
                    className='z-10 absolute w-1/3 min-w-72 h-10 border border-zinc-500 text-zinc-400 text-sm rounded-md flex items-center p-1 cursor-pointer'
                    onClick={handleOpenInput}
                >
                    <Search className='fill-zinc-500 mx-2' /> Type{'\xa0'}
                    <kbd className='border border-zinc-400 rounded flex justify-center items-center h-5 px-px'>
                        /
                    </kbd>
                    {'\xa0'} to search
                </span>
            )}
            <form
                className={`${
                    showInput ? 'block' : 'absolute opacity-0 z-0'
                } w-2/3 min-w-72 border-2 border-violet-700 rounded-md relative`}
                onSubmit={handleSubmit}
                ref={ref}
            >
                <input
                    ref={inputRef}
                    className='w-full h-10 text-sm placeholder:text-sm bg-transparent outline-none rounded-none p-1 pl-9 text-zinc-100 placeholder-zinc-500'
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div className='absolute left-0 top-0 size-10 flex items-center justify-center fill-zinc-500'>
                    <Search />
                </div>
                <div
                    className='cursor-pointer absolute right-1 top-0 size-10 flex items-center justify-center fill-zinc-500'
                    onClick={handleCloseInput}
                >
                    <Close />
                </div>
            </form>
        </section>
    );
}
