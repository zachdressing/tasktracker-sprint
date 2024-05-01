'use client'

import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Button, Modal, Tooltip } from "flowbite-react";
import { useRouter } from "next/navigation";
import CreateBoardComponent from "../components/CreateBoardComponent";
// import Users from "../utils/logindata.json"

const ProfilePage = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [profilePic, setProfilePic] = useState<string | null>(null);
    const router = useRouter();

    const handlePicChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const imageData = reader.result as string;
                // set the image to a hook for now
                setProfilePic(imageData); 
                console.log("New profile picture data:", imageData);
            };
            // Read file as base64-encoded string
            reader.readAsDataURL(file);
        }
    };

    // Function that handles the User Image/Color
    const updateUserImage = () => {

    }

    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }
    const [randomColor, setRandomColor] = useState("#57CDFF");

    const handlePaintBrushClick = () => {
        const newColor = getRandomColor();
        setRandomColor(newColor)
    }

    const colors = ["bg-[#AEE6D9]", "bg-[#6FDFC4]", "bg-[#3EBE9F]", "bg-[#AEE6D9]"];
    const handleTaskPage = () => {
        router.push('/TaskPage')
    }

    return (
        <div className="bg-[#F1FFFC] min-h-screen">
            <div className="px-10 grid grid-cols-5">
                <div className="lg:col-span-2 col-span-5 flex flex-col items-center pt-20">
                    <div className="flex justify-center items-end">
                        <Tooltip content="Randomize Color" placement="bottom" className="px-5 py-2 rounded-md font-hammersmith text-lg">
                            <img src="/PaintBrush.png" alt="" className="w-[45px] h-[45px] cursor-pointer" onClick={handlePaintBrushClick} />
                        </Tooltip>
                        <div className="profileColor" style={{ backgroundColor: randomColor }}></div>
                        <Tooltip content="Profile Picture" placement="bottom" className="px-5 py-2 rounded-md font-hammersmith text-lg">
                            <img src="/Pencil.png" alt="" className="w-[45px] h-[45px] cursor-pointer" />
                        </Tooltip>
                    </div>
                    <h1 className="font-hammersmith text-6xl pt-8">USERNAME</h1>
                    <p className="font-hammersmith text-3xl py-10">Joined 12/31/1937</p>
                </div>
                <div className="lg:col-span-3 col-span-5 h-[650px] border-[1px] border-black mt-12 me-2 mb-10 bg-white rounded-md overflow-y-auto no-scrollbar">
                    <div className="flex justify-center items-center gap-2 pt-10">
                        <h1 className="font-hammersmith text-[50px]">MY BOARDS</h1>
                        {/* <AddIcon sx={{ fontSize: 50 }} className="mt-[-7px] cursor-pointer" onClick={() => setOpenModal(true)} /> */}
                        <CreateBoardComponent/>
                    </div>
                    <div className="mx-14">
                        {colors.map((color, index) => (
                            <div key={index} className={`${colors[index % 3]} grid grid-cols-2 items-center px-10 py-7 my-12 rounded-md cursor-pointer`} onClick={handleTaskPage}>
                                <h1 className="col-span-1 flex justify-start font-hammersmith text-4xl">YOUR BOARD</h1>
                                <div className="col-span-1 flex justify-end">
                                    <div className="member"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <Modal show={openModal} size="4xl" onClose={() => setOpenModal(false)} popup>
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
            </Modal> */}
        </div>
    );
};

export default ProfilePage;
