import React from 'react';

const ACTIVE_EVENT = 'active:translate-x-px active:translate-y-px';
const ARROW_EVENT = `${ACTIVE_EVENT} hover:bg-zinc-800`;

export default function PageButton({
    arrow,
    currentPage,
    pageNumber,
    onClick,
    totalPage,
}) {
    return (
        <button
            className={`border border-zinc-800 min-w-7 h-7 
				text-xs tracking-tight font-page text-center 
				${
                    currentPage === pageNumber && !arrow
                        ? `font-bold bg-violet-900 hover:bg-violet-800 ${ACTIVE_EVENT}`
                        : !arrow
                        ? `hover:bg-violet-950 active:bg-violet-900 ${ACTIVE_EVENT}`
                        : ''
                } 
				${pageNumber > totalPage && 'hidden'}
				${
                    currentPage === 1 && (arrow === 'first' || arrow === 'prev')
                        ? 'text-gray-600'
                        : (arrow === 'first' || arrow === 'prev') && ARROW_EVENT
                } 
				${
                    currentPage === totalPage &&
                    (arrow === 'next' || arrow === 'last')
                        ? 'text-gray-600'
                        : (arrow === 'next' || arrow === 'last') && ARROW_EVENT
                } 
				${arrow && 'bg-zinc-900 font-bold text-gray-300'}
			`}
            onClick={() => {
                if (
                    (currentPage === 1 &&
                        (arrow === 'first' || arrow === 'prev')) ||
                    (currentPage === totalPage &&
                        (arrow === 'next' || arrow === 'last'))
                ) {
                    return;
                }
                onClick(pageNumber);
            }}
        >
            {arrow === 'first' && '<<'}
            {arrow === 'prev' && '<'}
            {arrow === 'next' && '>'}
            {arrow === 'last' && '>>'}
            {!arrow && pageNumber}
        </button>
    );
}
