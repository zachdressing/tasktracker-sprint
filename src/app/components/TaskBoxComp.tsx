import { Button, Modal, Select, TextInput, Textarea } from 'flowbite-react'
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
                    <h2 className='text-xl font-bold mb-2'>Description</h2>
                    <div id='row1' className='w-full h-full flex justify-between'>
                        <div className="col w-2/3 flex flex-col justify-between">
                            <div id='description' className="h-full">
                                <div className='bg-gray-100 h-[40%] w-full p-6 rounded overflow-y-scroll'>
                                    {props.desc}
                                </div>
                            <div id='commentBox' className='1/3 mt-6 mb-2'>
                                <h1 className='text-xl font-bold'>Comment</h1>
                                <TextInput className='h-full'/>
                            </div>
                            </div>
                        </div>
                        <div className="col w-[30%]">
                            <div className='bg-gray-100 rounded-md min-h-[325px] p-6 flex flex-col justify-between'>
                                <div id='assignrow1' className='flex justify-between items-center'>
                                    <p className='font-bold'>Assignee:<br /><span className='text-gray-400'>{'Username'}</span></p>
                                    <div className={`w-10 h-10 rounded-full bg-${'reddish'} border border-black`}></div>
                                </div>
                                <div id='assignrow2'>
                                    <p className='font-bold'>{props.createdDate}</p>
                                </div>
                                <div id='assignrow3' className='flex flex-col justify-between gap-y-4'>
                                    <Button color='gray' className={`border border-black flex justify-start ${openCat ? "invisible" : "visible"}`} onClick={() => setOpenCat(true)}>
                                        <div className="">
                                            <p className='text-green-500 font-bold'>{cat}</p>
                                        </div>
                                        <div className="">
                                            <p>{openCat ? '⏶' : '⏷'}</p>
                                        </div>
                                    </Button>
                                    <Button.Group className={`flex flex-col text-start absolute ${openCat ? "visible z-50 w-48" : "hidden"}`}>
                                        <Button color="gray" className='rounded-t-lg rounded-b-none border-black flex justify-start' onClick={() => { setCat("To-Do"), setOpenCat(false) }}>
                                            <p className='text-green-500 font-bold'>To-Do</p>
                                        </Button>
                                        <Button color="gray" className='border border-black flex justify-start' onClick={() => { setCat("In Progress"), setOpenCat(false) }}>
                                            <p className='text-green-500 font-bold'>In Progress</p>
                                        </Button>
                                        <Button color="gray" className='rounded-t-none rounded-b-lg border border-black flex justify-start' onClick={() => { setCat("Completed"), setOpenCat(false) }}>
                                            <p className='text-green-500 font-bold'>Completed</p>
                                        </Button>
                                    </Button.Group>

                                    <Button color='gray' className={`border border-black flex w-full justify-between`}>
                                        <p className='text-green-500 font-bold'>{"Priority - " + props.priority}</p>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default TaskBoxComp
