import { Card } from 'flowbite-react';
import React from 'react';

const Meditationsteps = (props) => {
    const { title, body, img, forAge, time } = props.step;
    return (
        <div>
            <div>
                <Card imgSrc={img}>
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
                        {body.slice(0, 165)}...<span className='font-bold'>Read More</span>
                    </p>
                    <div>
                        <p>For Age : <span className='font-bold'>{forAge}</span></p>
                        <p>Time required : <span className='font-bold'>{time}s</span></p>
                    </div>
                    <button
                        type="button" onClick={() => props.handelExerciseTime(props.step)}
                        className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">
                        Add to list
                    </button>
                </Card>
            </div>
        </div>
    );
};

export default Meditationsteps;