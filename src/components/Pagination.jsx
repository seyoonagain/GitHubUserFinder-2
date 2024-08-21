import React, { useMemo } from 'react';
import PageButton from './ui/PageButton';

const PAGES = [1, 2, 3, 4, 5];
const GROUP_SIZE = PAGES.length;
const BUTTON_STYLE = 'flex gap-1';
const PER_PAGE = 20;

export default function Pagination({ user, type, page, setPage }) {
    const { public_repos: repos, followers, following } = user && user;
    const countByType = type && { repos, followers, following };
    const totalPage = Math.ceil(countByType[type] / PER_PAGE);
    const pageGroup = useMemo(() => Math.ceil(page / GROUP_SIZE), [page]);
    const handlePage = (pageNumber) => setPage(pageNumber);
    return (
        <section className='flex justify-between my-5'>
            <ul className={`${BUTTON_STYLE} min-w-20 justify-start`}>
                <PageButton
                    key='to first page'
                    arrow='first'
                    currentPage={page}
                    pageNumber={1}
                    onClick={handlePage}
                />
                <PageButton
                    key='to previous page'
                    arrow='prev'
                    currentPage={page}
                    pageNumber={page > 1 ? page - 1 : page}
                    onClick={handlePage}
                />
            </ul>
            <ul className={BUTTON_STYLE}>
                {PAGES.map((pageNumber) => (
                    <PageButton
                        key={pageNumber}
                        currentPage={page}
                        pageNumber={pageNumber + (pageGroup - 1) * GROUP_SIZE}
                        totalPage={totalPage}
                        onClick={handlePage}
                    />
                ))}
            </ul>
            <ul className={`${BUTTON_STYLE} min-w-20 justify-end`}>
                <PageButton
                    key='to next page'
                    arrow='next'
                    currentPage={page}
                    pageNumber={page === totalPage ? totalPage : page + 1}
                    totalPage={totalPage}
                    onClick={handlePage}
                />
                <PageButton
                    key='to last page'
                    arrow='last'
                    currentPage={page}
                    pageNumber={totalPage}
                    totalPage={totalPage}
                    onClick={handlePage}
                />
            </ul>
        </section>
    );
}
