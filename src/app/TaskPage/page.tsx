"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Button, Modal, Textarea } from "flowbite-react";
import Draggable from 'react-draggable';

const TaskPage = () => {

    const router = useRouter();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    var todoArr, progArr, compArr = [{}];
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='bg-backMain h-[calc(120vh-144px)]'>
            <div id='taskNav' className="flex items-center gap-4 p-12">
                <p className='text-4xl font-bold'>OUR BOARD</p>
                {/* Below div is mapping the current users on the board, will be using test data until backend is set up */}
                <div className="flex gap-4">
                    <div className='w-16 h-16 rounded-full bg-blueish border border-black mx-auto'></div>
                    <div className='w-16 h-16 rounded-full bg-purplish border border-black mx-auto'></div>
                    <div className='w-16 h-16 rounded-full bg-reddish border border-black mx-auto'></div>
                    <a className='text-4xl font-light'>+</a>
                </div>
            </div>
            <div id='tasks' className="flex flex-col gap-8 items-center mt-8">
                <div id='todo' className="w-[90%] h-72 bg-todo rounded-lg p-4">
                    <div className="row">
                        <div className="flex items-center mb-1">
                            <p className='text-2xl font-bold'>TO-DO</p>
                            <a className='text-3xl font-light mb-2'>+</a>
                        </div>
                    </div>

                    <div className="flex flex-row pl-8">
                        <Draggable>
                            <div className='h-fit w-fit bg-white rounded-lg p-4' onDoubleClick={() => setOpenModal(true)}>
                                <div className="mb-2">
                                    <h1 className='text-2xl font-bold'>Task Title</h1>
                                </div>
                                <div className="w-72 text-ellipsis text-md font-bold">
                                    <p>Task Description is the description of the task that is located within this object</p>
                                </div>
                                <div className="w-full flex justify-between items-center font-bold">
                                    <p id='' className='text-2xl'>Priority - 1</p>
                                    <div className='w-16 h-16 rounded-full bg-reddish border border-black'></div>
                                </div>
                            </div>
                        </Draggable>
                        <Modal className='font-bold' show={openModal} size="4xl" onClose={() => setOpenModal(false)} popup>
                            <Modal.Header className='p-8'>
                                <h1 className='text-4xl font-bold'>Task Title</h1>
                            </Modal.Header>
                            <Modal.Body className='p-8 pt-0 flex flex-wrap justify-between'>
                                <div className="col">
                                <div id='description' className="text-start">
                                    <h2 className='text-xl mb-4'>Description</h2>
                                    <div className='max-w-[520px] w-max h-36 bg-gray-100 rounded-md p-6 overflow-y-scroll'>
                                        <p className='max-w-80'>A short description of the task you are viewing.
                                            When login has been created by backend people, test login functionality using Postman.
                                            Endpoint is https://azure.nonsense/ujsbuaskbfjks</p>
                                    </div>
                                </div>
                                <div id='comment'>
                                    <h1 className='text-xl mt-6 mb-2'>Comments</h1>
                                    <Textarea className='max-w-[520px] w-full'>

                                    </Textarea>
                                </div>
                                <div id='reply'>
                                    <div className="flex items-center gap-2 my-4">
                                        <div className='w-10 h-10 rounded-full bg-reddish border border-black'></div>
                                        <p>Username</p>
                                        <p className='text-gray-300'>Date</p>
                                        <p className='text-gray-300'>Time</p>
                                    </div>
                                    <div className=""></div>
                                </div>
                                </div>
                                <div className="col w-48 h-52 bg-gray-100 rounded-md mt-11 ml-6">
asdasd
                                </div>
                                
                            </Modal.Body>
                        </Modal>
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
