import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from 'flowbite-react';
import { useState } from 'react';

const Userinfo = (props) => {
    const [breakTime, setbreakTime] = useState('0 seconds');
    if (localStorage.getItem("breakTime") === null) {
        localStorage.setItem("breakTime", breakTime);
    }
    const handleClick = (event) => {
        let allBtn = event.currentTarget.parentElement.children;
        for (const otherBtn of allBtn) {
            if (otherBtn.innerText !== event.currentTarget.innerText) {
                otherBtn.classList.remove('bg-blue-600', 'text-white');
                otherBtn.classList.add('bg-white');
            }
        }
        event.currentTarget.classList.add('bg-blue-600', 'text-white');
        event.currentTarget.classList.remove('bg-white');
        localStorage.setItem("breakTime", event.currentTarget.innerText.slice(0, -1) + ' seconds');
        setbreakTime(localStorage.getItem("breakTime"));
    };

    const secondBtns = document.getElementsByClassName('secBtn');
    for (const secondBtn of secondBtns) {
        if (parseInt(secondBtn.innerHTML.slice(0, -1)) === parseInt(localStorage.getItem("breakTime"))) {
            secondBtn.classList.remove('bg-white')
            secondBtn.classList.add('bg-blue-600', 'text-white')
        }
    }
    return (
        <div className='sticky top-8 m-8'>
            <div>
                <Avatar
                    img="profile-picture.png"
                    rounded={true}>
                    <div className="space-y-0.1 font-medium dark:text-white">
                        <div>
                            Nabil Newaz
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            <FontAwesomeIcon className='mr-1' icon={faLocationDot} />Dhaka, Bangladesh
                        </div>
                    </div>
                </Avatar>
            </div>
            <div className='mt-5'>
                <div className='flex justify-between bg-blue-100 px-6 py-2 rounded-md'>
                    <div>
                        <h3><span className='text-2xl font-bold text-black'>75</span><span className='text-gray-500 text-1xl'>kg</span></h3>
                        <p className='text-center text-gray-800'>Weight</p>
                    </div>
                    <div>
                        <h3><span className='text-2xl font-bold text-black'>6.5</span><span className='text-gray-500 text-1xl'>fit</span></h3>
                        <p className='text-center text-gray-800'>Height</p>
                    </div>
                    <div>
                        <h3><span className='text-2xl font-bold text-black'>25</span><span className='text-gray-500 text-1xl'>yrs</span></h3>
                        <p className='text-center text-gray-800'>Age</p>
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <h3 className='text-xl font-medium'>Add A Break</h3>
                <div id='secondsBtn' className='flex justify-between bg-blue-100 px-5 py-3 rounded-md mt-2'>
                    <button className={'h-10 w-10 bg-white rounded-full secBtn'} onClick={handleClick}>10s</button>
                    <button className={'h-10 w-10 bg-white rounded-full secBtn'} onClick={handleClick}>20s</button>
                    <button className={'h-10 w-10 bg-white rounded-full secBtn'} onClick={handleClick}>30s</button>
                    <button className={'h-10 w-10 bg-white rounded-full secBtn'} onClick={handleClick}>40s</button>
                    <button className={'h-10 w-10 bg-white rounded-full secBtn'} onClick={handleClick}>50s</button>
                </div>
            </div>
            <div className='mt-6'>
                <h3 className='text-xl font-medium'>Exercise Details</h3>
                <div className='flex justify-between bg-blue-100 px-5 py-3 rounded-md mt-3'>
                    <p><span className='font-bold'>Exercise time</span></p>
                    <p><span className='text-gray-500'><span>{props.exerciseTime}</span> seconds</span></p>
                </div>
                <div className='flex justify-between bg-blue-100 px-5 py-3 rounded-md mt-3'>
                    <p><span className='font-bold'>Break time</span></p>
                    <p><span className='text-gray-500'>{localStorage.getItem("breakTime")}</span></p>
                </div>
            </div>
            <button
                onClick={props.notify}
                type="button"
                className="mt-5 inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-4 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">
                Meditation Completed
            </button>
        </div>
    );
};

export default Userinfo;