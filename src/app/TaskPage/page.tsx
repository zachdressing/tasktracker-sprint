"use client";
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const TaskPage = () => {

    const router = useRouter();

    const getMedia = async () => {
        const promise = await fetch("@/utils/fakedata.json");
        console.log(promise);
        const data = await promise.json();
        return data;
    };

    const [fakedata, setFakeData] = useState<any>();

    useEffect(() => {
        setFakeData(getMedia);
        console.log(fakedata)
    }, []);

    return (
        <div className='bg-backMain w-screen h-[calc(100vh-144px)] px-14 py-8'>
            <div id='taskNav' className="flex items-center gap-4">
                <p className='text-3xl font-bold'>OUR BOARD</p>
                {/* Below div is mapping the current users on the board, will be using test data until backend is set up */}
                <div className="flex gap-4">
                    <div className='w-12 h-12 rounded-full bg-blueish border border-black mx-auto'></div>
                    <div className='w-12 h-12 rounded-full bg-purplish border border-black mx-auto'></div>
                    <div className='w-12 h-12 rounded-full bg-reddish border border-black mx-auto'></div>
                    <a className='text-4xl font-light'>+</a>
                </div>
            </div>
            <div id='tasks' className="flex flex-col gap-8 items-center mt-8">
                <div id='todo' className="w-[90%] h-48 bg-todo rounded-lg p-4">
                    <div className="flex items-center">
                        <p className='text-2xl font-bold'>TO-DO</p>
                        <a className='text-3xl font-light'>+</a>
                    </div>

                </div>
                <div id='inprog' className="w-[90%] h-48 bg-inprog rounded-lg p-4">
                <div className="flex items-center">
                        <p className='text-2xl font-bold'>IN PROGRESS</p>
                    </div>
                </div>
                <div id='completed' className="w-[90%] h-48 bg-completed rounded-lg p-4">
                <div className="flex items-center">
                        <p className='text-2xl font-bold'>COMPLETED</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskPage
