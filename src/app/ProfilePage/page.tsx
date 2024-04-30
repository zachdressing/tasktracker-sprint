'use client'

import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Button, Modal, Tooltip } from "flowbite-react";

const ProfilePage = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="bg-[#F1FFFC] min-h-screen">
            <div className="px-10 grid grid-cols-5">
                <div className="col-span-2 flex flex-col items-center pt-20">
                    <div className="flex justify-center items-end">
                        <Tooltip content="Randomize Color" placement="bottom" className="px-5 py-2.5 rounded-md font-hammersmith">
                            <img src="/PaintBrush.png" alt="" className="w-[45px] h-[45px] cursor-pointer" />
                        </Tooltip>
                        <div className="profileColor"></div>
                        <Tooltip content="Profile Picture" placement="bottom" className="px-5 py-2.5 rounded-md">
                            <img src="/Pencil.png" alt="" className="w-[45px] h-[45px] cursor-pointer" />
                        </Tooltip>
                    </div>
                    <h1 className="font-hammersmith text-6xl pt-8">USERNAME</h1>
                    <p className="font-hammersmith text-3xl py-10">Joined 12/31/1937</p>
                </div>
                <div className="col-span-3 h-[650px] border-[1px] border-black mt-12 me-2 bg-white rounded-md">
                    <div className="flex justify-center items-center gap-2 py-10">
                        <h1 className="font-hammersmith text-[50px]">MY BOARDS</h1>
                        <AddIcon sx={{ fontSize: 50 }} className="mt-[-7px] cursor-pointer" onClick={() => setOpenModal(true)} />
                    </div>
                    <div className="mx-14">
                        <div className="bg-[#AEE6D9] grid grid-cols-2 items-center px-10 py-7 rounded-md">
                            <h1 className="col-span-1 flex justify-start font-hammersmith text-4xl">YOUR BOARD</h1>
                            <div className="col-span-1 flex justify-end">
                                <div className="member"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={openModal} size="4xl" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="grid grid-cols-2 justify-center items-center text-center">
                        <div className="col-span-1 font-hammersmith flex flex-col justify-center items-center gap-5 py-16 divider">
                            <h1 className="text-3xl">Enter Code</h1>
                            <input className="text-[#3177FF] text-2xl font-holtwood w-[300px] rounded-md text-center" type="text" />
                            <Button className="bg-[#0B7D61] text-lg px-4">JOIN</Button>
                        </div>
                        <div className="col-span-1 font-hammersmith flex flex-col justify-center items-center gap-3 py-8 ">
                            <h1 className="text-3xl">Create New</h1>
                            <input className="text-[#3177FF] text-2xl font-holtwood w-[300px] rounded-md text-center" type="text" />
                            <Button className="bg-[#0B7D61] text-lg px-4">CREATE</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ProfilePage;
