import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Helmet>
                <title>Error</title>
            </Helmet>
            <div className='w-[400px] mx-auto mt-40 p-8 border-[1px]'>
                <div className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[200px] h-[200px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                </div>
                <h1 className='text-6xl font-bold text-center'>Error</h1>
                <p className="text-center text-3xl my-8">Something went wrong...</p>
                <div className="card-actions justify-center">
                    <button className="btn text-xl"><Link to="/">Back to Home</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Error;