import { Button, Modal, Select, Textarea } from 'flowbite-react'
import React, { useState } from 'react'
import { ITask } from '../interfaces/interfaces';
import { useTaskContext } from '@/context/UseContext';

const TaskBoxComp = (props: ITask) => {
    const [openModal, setOpenModal] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [openCat, setOpenCat] = useState(false);
    const [cat, setCat] = useState("To-Do")


    return (
        <div>
            <div id='main' className='h-48 w-fit bg-white rounded-lg p-4 flex flex-col justify-between' onDoubleClick={() => setOpenModal(true)} onMouseDownCapture={(e) => { setMousePos({ x: e.screenX, y: e.screenY }) }} onMouseUpCapture={(e) => { if (e.screenX != mousePos.x || e.screenY != mousePos.y) { } else { setOpenModal(true) } }}>
                <div className="mb-2">
                    <h1 id='taskTitle' className='text-2xl font-bold'>{props.title + props.id}</h1>
                </div>
                <div className="w-72 text-ellipsis text-md font-bold">
                    <p id='taskDesc'>{props.desc}</p>
                </div>
                <div className="w-full flex justify-between items-center font-bold">
                    <p id='Priority' className='text-2xl'>Priority - {props.priority}</p>
                    <div id='assignColor' className={`w-16 h-16 rounded-full bg-${props.color} border border-black`}></div>
                </div>
            </div>
            <Modal className='font-bold' show={openModal} size="4xl" onClose={() => setOpenModal(false)} popup>
                <Modal.Header className='p-8'>
                    <h1 className='text-4xl font-bold'>{props.title}</h1>
                </Modal.Header>
                <Modal.Body className='p-8 pt-0 flex flex-wrap justify-between'>
                    <h2 className='text-xl mb-4'>Description</h2>
                    <div id='row1' className='w-full h-full flex justify-between items-center'>
                        <div className="col w-2/3">
                            <div id='description' className="text-start">
                                <div className='h-36 bg-gray-100 rounded-md p-6 overflow-y-scroll'>
                                    <p className=''>{props.desc}</p>
                                </div>
                            </div>
                            <div id='commentBox'>
                                <h1 className='text-xl mt-6 mb-2'>Comments</h1>
                                <Textarea className='w-full'>

                                </Textarea>
                            </div>
                        </div>
                        <div className="col w-[30%]">
                            <div className='bg-gray-100 rounded-md h-full min-h-[325px] p-6 flex flex-col justify-between'>
                                <div id='assignrow1' className='flex justify-between'>
                                    <p>Assignee:<br /><span className='text-gray-300'>{props.assigneeName}</span></p>
                                    <div className={`w-10 h-10 rounded-full bg-${props.assigneeColor} border border-black`}></div>
                                </div>
                                <div id='assignrow2'>
                                    <p>{props.createdDate}</p>
                                </div>
                                <div id='assignrow3' className='h-full flex flex-col justify-between'>
                                    <Button color='gray' className={`border border-black flex w-full justify-between ${openCat ? "hidden" : "visible"}`} onClick={() => setOpenCat(true)}>
                                        <p className='text-green-500'>{cat}</p>
                                        <p>{openCat ? '⏶' : '⏷'}</p>
                                    </Button>
                                    <Button.Group className={`flex flex-col ${openCat ? "visible" : "hidden"}`}>
                                        <Button color="gray" className='rounded-t-lg rounded-b-none border-black' onClick={() => { setCat("To-Do"), setOpenCat(false) }}>
                                            <p className='text-green-500'>To-Do</p>
                                        </Button>
                                        <Button color="gray" className='border border-black' onClick={() => { setCat("In Progress"), setOpenCat(false) }}>
                                            <p className='text-green-500'>In Progress</p>
                                        </Button>
                                        <Button color="gray" className='rounded-t-none rounded-b-lg border border-black' onClick={() => { setCat("Completed"), setOpenCat(false) }}>
                                            <p className='text-green-500'>Completed</p>
                                        </Button>
                                    </Button.Group>

                                    <Button color='gray' className={`border border-black flex w-full justify-between`}>
                                        <p className=''>{"Priority - " + props.priority}</p>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {props.comments ?
                        <div id='row2'>
                            <div id='Comments'>
                                <div className="flex items-center gap-2 my-4">
                                    <div className={`w-10 h-10 rounded-full bg-${props.comments.comment[0].commentColor} border border-black`}></div>
                                    <p>Username</p>
                                    <p className='text-gray-300'>Date</p>
                                    <p className='text-gray-300'>Time</p>
                                </div>
                                <div className=""></div>
                            </div>
                        </div> : null}


                </Modal.Body>
            </Modal>
        </div>
    )
}

export default TaskBoxComp
