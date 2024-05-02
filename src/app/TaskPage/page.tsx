"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import TaskBoxComp from '../components/TaskBoxComp';
import { DragDropContext, Draggable, DropResult, Droppable } from '@hello-pangea/dnd';
import { IDragg, ITask, Icategory } from '../interfaces/interfaces';
import fakedata from "@/assets/fakedata.json";


const TaskPage = () => {

    const [data, setData] = useState(fakedata);
    const [isClient, setIsClient] = useState<boolean>(false)


    // const apiCall = async () => {
    //     var prom = await fetch('fakedata.json');
    //     var data = await prom.json();
    //     console.log(data);
    //     setData(data);
    // }

    // useEffect(() => {
    //     apiCall();
    //     setIsClient(true)
    //     console.log(data)
    // }, [data])


    const handleDragEnd = ({ destination, source }: DropResult) => {
        console.log('yeah');
        //Object copy of item
        const copy = { ...data.categories[parseInt(source.droppableId)].tasks[source.index] };

        setData(prev => {
            console.log('yeah');
            //grab previous data
            prev = { ...prev };
            //remove grabbed item
            prev.categories[parseInt(source.droppableId)].tasks.splice(source.index, 1);
            //add item to new array
            destination? prev.categories[parseInt(destination.droppableId)].tasks.splice(destination.index, 0, copy) : null
            //return the data
           return prev;
        })
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
            <DragDropContext onDragEnd={handleDragEnd}>
                <div id='tasks' className="flex flex-col gap-8 items-center mt-8">
                    {
                        data.categories.map((el, key) => {
                            return (
                                <div id={data.categories.indexOf(el).toString()} key={key} className={`w-[90%] h-80 bg-${el.color} rounded-lg p-6 pr-8 flex flex-col`}>
                                    <div className="flex w-full items-center mb-1">
                                        <p className='text-2xl font-bold cursor-default'>{el.title}</p>
                                        {el.addable === "true" ? <p className='text-3xl font-light mb-2 cursor-pointer'>+</p> : ''}
                                    </div>
                                    <Droppable droppableId={`${key}`} direction='horizontal'>
                                        {(provided) => {
                                            return (
                                                <div ref={provided.innerRef} {...provided.droppableProps} id='todoTasks' className="tasks flex h-full w-full gap-x-8 overflow-x-scroll">
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
                </div>
            </DragDropContext >
        </div >
    )
}

export default TaskPage
