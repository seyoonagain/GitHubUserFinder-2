import React from 'react';

export default function ConvertNumber({ number }) {
    return (
        <>
            {number > 1000000
                ? `${Math.round(number / 100000) / 10}M`
                : number > 1000
                ? `${Math.round(number / 100) / 10}K`
                : number}
        </>
    );
}
