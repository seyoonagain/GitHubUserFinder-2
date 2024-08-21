import React, { useEffect, useRef } from 'react';

export default function Menu({ text, onClick, type, setOffset }) {
    const ref = useRef();
    useEffect(() => {
        if (type === text && ref.current) {
            const { offsetLeft, offsetTop, offsetWidth, offsetHeight } =
                ref.current;
            setOffset({ offsetLeft, offsetTop, offsetWidth, offsetHeight });
        }
    }, [type, setOffset, text]);
    return (
        <button
            onClick={() => onClick(text)}
            className={`w-full md:w-28 h-9 ${
                type === text ? 'font-bold ' : 'text-zinc-400'
            }`}
        >
            <span
                ref={ref}
                className='hover:text-zinc-100 text-center transition-all duration-100'
            >
                {text === 'repos' ? 'repositories' : text}
            </span>
        </button>
    );
}
