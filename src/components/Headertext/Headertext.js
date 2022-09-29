import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLungs } from '@fortawesome/free-solid-svg-icons';

const Headertext = () => {
    return (
        <div>
            <div className='text-3xl font-bold uppercase text-blue-600/100 mb-5 mt-10'>
                <h1 className='flex items-center'><FontAwesomeIcon className='mr-2 lg:text-3xl md:text-3xl text-6xl' icon={faLungs} /><span>Active Meditation</span></h1>
            </div>
            <div className='text-xl font-bold text-gray-700 my-5'>
                <div>
                    <h1>Select Today’s Steps</h1>
                </div>
            </div>
        </div>

    );
};

export default Headertext;