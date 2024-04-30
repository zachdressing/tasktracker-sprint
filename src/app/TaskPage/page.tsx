"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const TaskPage = () => {

    const router = useRouter();
    const handlePageChange = (route: string) => {
      router.push(route);
    };

    const getMedia = async () => {
        const promise = await fetch("../../utils/fakedata.json");
        console.log(promise);
        const data = await promise.json();
        return data;
    };

    const [fakedata, setFakeData] = useState<any>();

    useEffect(() => {
        setFakeData(getMedia)
        console.log(fakedata)
    }, []);

    return (
        <div>
            <div id='taskNav' className="">
                <p>OUR BOARD</p>
                {/* Below div is mapping the current users on the board, will be using test data until backend is set up */}
                <div>{ }</div>
            </div>
        </div>
    )
}

export default TaskPage
