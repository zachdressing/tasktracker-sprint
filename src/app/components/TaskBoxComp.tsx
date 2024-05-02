import { Modal, Textarea } from 'flowbite-react'
import React, { useState } from 'react'
import { DragDropContext, Draggable } from 'react-beautiful-dnd';

const TaskBoxComp = (props: iTaskStuff) => {
    const [openModal, setOpenModal] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    return (
        <Draggable key={props.id} draggableId={props.id.toString()} index={props.index}>
            <div id='main' className='h-48 w-fit bg-white rounded-lg p-4 flex flex-col justify-between' onDoubleClick={() => setOpenModal(true)} onMouseDownCapture={(e) => { setMousePos({ x: e.screenX, y: e.screenY }) }} onMouseUpCapture={(e) => { if (e.screenX != mousePos.x || e.screenY != mousePos.y) { } else { setOpenModal(true) } }}>
                <div className="mb-2">
                    <h1 id='taskTitle' className='text-2xl font-bold'>{props.title}</h1>
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
                    <div className="col">
                        <div id='description' className="text-start">
                            <h2 className='text-xl mb-4'>Description</h2>
                            <div className='max-w-[520px] w-max h-36 bg-gray-100 rounded-md p-6 overflow-y-scroll'>
                                <p className='max-w-80'>{props.desc}</p>
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
        </Draggable>
    )
}

export default TaskBoxComp
