import React from 'react';
import Logo from './Logo';
import SearchForm from './SearchForm';

export default function Header() {
    return (
        <section className='sticky top-0 flex flex-col md:flex-row md:justify-between items-center h-36 md:h-40 p-5 border-b border-zinc-500 bg-zinc-950 z-50'>
            <Logo />
            <SearchForm />
        </section>
    );
}
