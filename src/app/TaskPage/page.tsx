"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import TaskBoxComp from '../components/TaskBoxComp';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const TaskPage = () => {

    const router = useRouter();
    var todoArr = [{}];
    var progArr = [{}];
    var compArr = [{}];

    const promise = fetch('@/fakedata.json');

    const [task, setTask] = useState(data);

    function handleOnDragEnd(result: any) {
        if (!result.destination) return;
        const newTasks = Array.from(task);
        const [draggedItem] = newTasks.splice(result.source.index, 1);
        newTasks.splice(result.destination.index, 0, draggedItem);
        setTask(newTasks);
    }

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
                <DragDropContext onDragEnd={handleOnDragEnd}>
                <div id='tasks' className="flex flex-col gap-8 items-center mt-8">
                    <div id='todo' className="w-[90%] h-80 bg-todo rounded-lg p-6 pr-8 flex flex-col">
                        <div className="flex w-full items-center mb-1">
                            <p className='text-2xl font-bold cursor-default'>TO-DO</p>
                            <p className='text-3xl font-light mb-2 cursor-pointer'>+</p>
                        </div>
                        <div id='tasks1' className="flex h-full w-full gap-x-8 overflow-x-scroll">
                            <Droppable droppableId="todos">
                                {(provided) => (
                                    <ul ref={provided.innerRef} {...provided.droppableProps}>
                                        {task.map(({ id }, index:number) =>
                                            <Draggable key={id} draggableId={id.toString()} index={index}>
                                                {(provided) => (
                                                    <li ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                                                        <TaskBoxComp title='Task Title' desc='asdj asdjasjd jasjdjas djajs djasdj' priority={2} color='reddish' index={1} id={1} />
                                                    </li>
                                                )}
                                            </Draggable>
                                        )}
                                        {provided.placeholder}
                                    </ul>
                                )}
                            </Droppable>
                            <TaskBoxComp title='Task Title' desc='asdj asdjasjd jasjdjas djajs djasdj' priority={2} color='reddish' index={1} id={1} />
                            <TaskBoxComp title='Task Title2' desc='asdjas djasjdjasj djasdjaj sdjasdj' priority={2} color='reddish' index={2} id={2} />
                            <TaskBoxComp title='Task Title3' desc='asdjasdj asjdjasjd jasdjajsd jasdj' priority={2} color='reddish' index={3} id={3} />
                            <TaskBoxComp title='Task Title4' desc='asdjasdj asjdjasjdja sdjaj sdjasdj' priority={2} color='blueish' index={4} id={4} />
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
            </DragDropContext>
        </div>
    )
}

export default TaskPage
