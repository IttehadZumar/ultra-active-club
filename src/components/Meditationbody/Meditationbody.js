import React, { useEffect, useState } from 'react';
import Headertext from '../Headertext/Headertext';
import Meditationsteps from '../Meditationsteps/Meditationsteps';
import Questionaccordion from '../Questionaccordion/Questionaccordion';
import Userinfo from '../Userinfo/Userinfo';

const Meditationbody = (props) => {
    const [steps, setSteps] = useState([])
    const [exerciseTime, setExerciseTime] = useState(0)
    useEffect(() => {
        fetch('stepsData/stepsData.json')
            .then(res => res.json())
            .then(data => setSteps(data))
    }, [])

    const handelExerciseTime = (step) => {
        setExerciseTime(exerciseTime + parseInt(step.time))
    }

    return (
        <div>
            <div className="lg:grid lg:grid-cols-5">
                <div className='lg:col-span-4 Meditationbody pt-1'>
                    <div className='lg:mx-32 mx-6'>
                        <Headertext></Headertext>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 grid-cols-1 h-ful mb-16'>
                            {
                                steps.map(step => <Meditationsteps
                                    key={step.id}
                                    step={step}
                                    handelExerciseTime={handelExerciseTime}
                                ></Meditationsteps>)
                            }
                        </div>
                        <Questionaccordion></Questionaccordion>
                    </div>
                </div>
                <div>
                    <Userinfo exerciseTime={exerciseTime} notify={props.notify}></Userinfo>
                </div>
            </div>
        </div>
    );
};

export default Meditationbody;