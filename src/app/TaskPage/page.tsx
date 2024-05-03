"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import TaskBoxComp from '../components/TaskBoxComp';
import { DragDropContext, Draggable, DropResult, Droppable } from '@hello-pangea/dnd';
import { ITask, Icategory } from '../interfaces/interfaces';
import fakedata from "@/assets/fakedata.json";
import { Button, Label, Modal, Popover, TextInput, Textarea } from 'flowbite-react';


const TaskPage = () => {
    const date = new Date;
    const [data, setData] = useState(fakedata);
    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openCat, setOpenCat] = useState(false);
    const [cat, setCat] = useState("To-Do");
    const [openPri, setOpenPri] = useState(false);
    const [pri, setPri] = useState("Priority - 1");
    const [addTask, setAddTask] = useState<ITask>({
        title: 'New Task',
        desc: 'Task Description',
        priority: 0,
        color: 'todo',
        category: 0,
        id: `${100000 - (Math.random() * 10000)}`,
        assigneeColor: 'purplish',
        assigneeName: 'Username',
        createdDate: date.getTime()
    })


    // const apiCall = async () => {
    //     var prom = await fetch('fakedata.json');
    //     var data = await prom.json();
    //     console.log(data);
    //     setData(data);
    // }

    // useEffect(() => {
    //     apiCall();
    //     console.log(data)
    // }, [data])


    const handleDragEnd = ({ destination, source }: DropResult) => {
        //Object copy of item
        const copy = { ...data.categories[parseInt(source.droppableId)].tasks[source.index] };

        setData(prev => {
            //grab previous data
            prev = { ...prev };
            //remove grabbed item
            destination?.droppableId != null ? prev.categories[parseInt(source.droppableId)].tasks.splice(source.index, 1) : console.log('not droppable');
            //add item to new array
            destination ? prev.categories[parseInt(destination.droppableId)].tasks.splice(destination.index, 0, copy) : null;
            //return the data
            return prev;
        })
    }

    const handleNewTask = (TaskData: ITask) => {
        //append new object
        // setData(prev => {
            // return {
                // ...prev,
                // categories: [{
                        // title: "To-Do",
                        // color: "todo",
                        // addable: 'true',
                        // tasks: [{
                            // title: "Task Title",
                            // desc: "this is a description",
                            // priority: 2,
                            // color: "reddish",
                            // category: 0,
                            // id: "1",
                            // comments: {
                                // comment: [{
                                    // mainComment: '',
                                    // replys: [{
                                        // reply: '',
                                        // date: date.toLocaleTimeString(),
                                        // time: date.toLocaleTimeString(),
                                // }][],
                                // date: date.toLocaleTimeString(),
                                // time: date.toLocaleTimeString(),
                                // commentColor: 'reddish',
                            // }][],
                        // },
                            // assigneeColor: "blueish",
                            // assigneeName: "Username",
                            // createdDate: 1714635786291
                        // }],
                // ...prev.categories[0].tasks
                            // }]
                // }
        // })
     }

const handleNewCategory = (data: Icategory) => {
    //create object based on data

    //append new object to Tasks

}

return (
    <div className='bg-backMain h-[calc(fit+144px)] mb-12'>
        <div id='taskNav' className="flex items-center gap-4 p-12 pb-8">
            <p className='text-4xl font-bold'>OUR BOARD</p>
            {/* Below div is mapping the current users on the board, will be using test data until backend is set up */}
            <div className="flex gap-4">
                <div className='w-16 h-16 rounded-full bg-blueish border border-black mx-auto'></div>
                <div className='w-16 h-16 rounded-full bg-purplish border border-black mx-auto'></div>
                <div className='w-16 h-16 rounded-full bg-reddish border border-black mx-auto'></div>
                <Popover content={<div className='flex flex-col gap-y-4 p-6 px-24 text-center font-bold'><p className=''>Invite Code</p><p className='text-3xl text-blue-500'>XYZ123</p></div>} placement="right">
                    <a className='text-4xl font-light flex items-center cursor-pointer'>+</a>
                </Popover>
            </div>
        </div>
        <DragDropContext onDragEnd={handleDragEnd}>
            <div id='tasks' className="flex flex-col gap-8 items-center mt-8">
                {
                    data.categories.map((el, key) => {
                        return (
                            <div id={data.categories.indexOf(el).toString()} key={key} className={`w-[90%] h-80 bg-${el.color} rounded-lg p-6 pr-8 flex flex-col`}>
                                <div className="flex w-full items-center mb-1">
                                    <p className='text-2xl font-bold cursor-default'>{el.title}</p>
                                    {el.addable === "true" ?
                                        <div>
                                            <span className='text-3xl font-light mb-2 cursor-pointer' onClick={() => setOpenModal(true)}>+</span>
                                            <Modal show={openModal} size="4xl" onClose={() => setOpenModal(false)} popup>
                                                <Modal.Header className='p-8'>
                                                    <TextInput id="title" type="text" sizing="lg" placeholder='Task Title' className='w-full' required />
                                                </Modal.Header>
                                                <Modal.Body className='p-8 pt-0 flex flex-wrap justify-between'>
                                                    <h2 className='text-xl font-bold'>Description</h2>
                                                    <div id='row1' className='w-full h-full flex justify-between'>
                                                        <div className="col w-2/3 flex flex-col justify-between">
                                                            <div id='description' className="h-full">
                                                                <Textarea className='h-[225px]' placeholder='Task Description...' required />
                                                            </div>
                                                            <div className='flex gap-x-4 w-full justify-end'>
                                                                <Button color={'gray'}>Cancel</Button>
                                                                <Button onClick={() => handleNewTask(addTask)} color={'success'}>Create</Button>
                                                            </div>
                                                        </div>
                                                        <div className="col w-[30%]">
                                                            <div className='bg-gray-100 rounded-md min-h-[325px] p-6 flex flex-col justify-between'>
                                                                <div id='assignrow1' className='flex justify-between items-center'>
                                                                    <p className='font-bold'>Assignee:<br /><span className='text-gray-400'>{'Username'}</span></p>
                                                                    <div className={`w-10 h-10 rounded-full bg-${'reddish'} border border-black`}></div>
                                                                </div>
                                                                <div id='assignrow2'>
                                                                    <p className='font-bold'>{date.toLocaleDateString()}</p>
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
                                                                    <Button.Group className={`flex flex-col absolute ${openCat ? "visible z-50 w-48" : "hidden"}`}>
                                                                        <Button color="gray" className='rounded-t-lg rounded-b-none border-black' onClick={() => { setCat("To-Do"), setOpenCat(false) }}>
                                                                            <p className='text-green-500 font-bold'>To-Do</p>
                                                                        </Button>
                                                                        <Button color="gray" className='border border-black' onClick={() => { setCat("In Progress"), setOpenCat(false) }}>
                                                                            <p className='text-green-500 font-bold'>In Progress</p>
                                                                        </Button>
                                                                        <Button color="gray" className='rounded-t-none rounded-b-lg border border-black' onClick={() => { setCat("Completed"), setOpenCat(false) }}>
                                                                            <p className='text-green-500 font-bold'>Completed</p>
                                                                        </Button>
                                                                    </Button.Group>

                                                                    <Button color='gray' className={`border border-black flex w-full justify-between ${openPri ? "invisible" : "visible"}`} onClick={() => setOpenPri(true)}>
                                                                        <p className='text-green-500 font-bold'>{pri}</p>
                                                                        <p>{openCat ? '⏶' : '⏷'}</p>
                                                                    </Button>
                                                                    <Button.Group className={`flex flex-col absolute top-[21.5rem] ${openPri ? "visible  z-50 w-48" : "hidden"}`}>
                                                                        <Button color="gray" className='rounded-t-lg rounded-b-none border-black' onClick={() => { setPri("Priority - 5"), setOpenPri(false) }}>
                                                                            <p className='text-green-500 font-bold'>Priority - 5</p>
                                                                        </Button>
                                                                        <Button color="gray" className='border border-black' onClick={() => { setPri("Priority - 4"), setOpenPri(false) }}>
                                                                            <p className='text-green-500 font-bold'>Priority - 4</p>
                                                                        </Button>
                                                                        <Button color="gray" className='border border-black' onClick={() => { setPri("Priority - 3"), setOpenPri(false) }}>
                                                                            <p className='text-green-500 font-bold'>Priority - 3</p>
                                                                        </Button>
                                                                        <Button color="gray" className='border border-black' onClick={() => { setPri("Priority - 2"), setOpenPri(false) }}>
                                                                            <p className='text-green-500 font-bold'>Priority - 2</p>
                                                                        </Button>
                                                                        <Button color="gray" className='rounded-b-lg rounded-t-none border-black' onClick={() => { setPri("Priority - 1"), setOpenPri(false) }}>
                                                                            <p className='text-green-500 font-bold'>Priority - 1</p>
                                                                        </Button>
                                                                    </Button.Group>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                            </Modal>
                                        </div> : null}
                                </div>
                                <Droppable droppableId={`${key}`} direction='horizontal'>
                                    {(provided) => {
                                        return (
                                            <div ref={provided.innerRef} {...provided.droppableProps} id={`${(el.title)}+Tasks`} className="tasks flex h-full w-full gap-x-8 overflow-x-scroll">
                                                {
                                                    el.tasks.map((el: ITask, index: number) => {
                                                        return (
                                                            <Draggable key={el.id} index={index} draggableId={el.id}>
                                                                {(provided) => {
                                                                    return (
                                                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                            {
                                                                                <TaskBoxComp title={el.title} desc={el.desc} priority={el.priority} color={el.color} category={el.category} id={el.id} assigneeColor={el.assigneeColor} assigneeName={el.assigneeName} createdDate={el.createdDate} />
                                                                            }
                                                                        </div>
                                                                    )
                                                                }}
                                                            </Draggable>
                                                        )
                                                    })
                                                }
                                                {provided.placeholder}
                                            </div>
                                        )
                                    }}
                                </Droppable>
                            </div>
                        )
                    })
                }
                <div className='w-[90%] h-fit bg-todo rounded-lg p-6 pr-8'>
                    <div className='flex'>
                        <h1 className='text-2xl font-bold'>Add Category <span className='font-light text-3xl cursor-pointer' onClick={() => { setOpenModal2(true) }}>+</span></h1>
                    </div>
                </div>
            </div>
            <Modal show={openModal2} size="lg" onClose={() => setOpenModal2(false)} popup>
                <Modal.Header />
                <Modal.Body className='flex flex-col justify-between'>
                    <div className="mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="small" value="Category Title" />
                        </div>
                        <TextInput id="small" type="text" sizing="sm" placeholder='Category Title...' />
                    </div>
                    <div className="flex justify-end gap-4">
                        <Button color="gray" onClick={() => setOpenModal2(false)}>
                            Cancel
                        </Button>
                        <Button color="success" onClick={() => { setOpenModal2(false) }}>
                            {"Create"}
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </DragDropContext >

    </div >
)
}

export default TaskPage
