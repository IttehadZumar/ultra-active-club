import { Accordion } from 'flowbite-react';
import React from 'react';

const Questionaccordion = () => {
    return (
        <div className='pb-16'>
            <div className='text-xl font-bold text-gray-700 my-5'>
                <div>
                    <h1>Answer Of Some Of Questions</h1>
                </div>
            </div>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>
                        How does react work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is the difference between props and state?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What does useEffect do?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Questionaccordion;