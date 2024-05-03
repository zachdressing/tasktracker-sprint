'use client'

import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Button, Modal, Tooltip } from "flowbite-react";
import { useRouter } from "next/navigation";
import CreateBoardComponent from "../components/CreateBoardComponent";
import { useTaskContext } from "@/context/UseContext";
import { getBoardById, getBoardMembers, getBoardsByUserId, getUserBoards, getUserInfo, updateUserInfo } from "../utils/DataService";
import { IBoardData, IUserData } from "../interfaces/interfaces";
// import Users from "../utils/logindata.json"

const ProfilePage = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [profilePic, setProfilePic] = useState<string | null>(null);
    const router = useRouter();
    const info = useTaskContext();
    const [boards, setBoards] = useState<IBoardData[]>([]);
    const [userBoards, setUserBoards] = useState<IBoardData[]>([]);


    // get user's information
    useEffect(() => {
        const fetchData = async () => {
            let userId = Number(localStorage.getItem("UserId"));

            // Fetch user info and set color
            const user = await getUserInfo(userId);
            if (user) {
                info.setLoggedInUser(user);
                setRandomColor(user.color || "#57CDFF");
            }

            // Fetch boards by userId
            const boardsData = await getBoardsByUserId(userId);
            setBoards(boardsData || []);

            // Fetch user's boards
            const userBoardsData = await getUserBoards(userId);
            setUserBoards(userBoardsData || []);
        };


        fetchData();
    }, []);


    // trying to rerender once color/image is selected
    useEffect(() => {
        const userId = Number(localStorage.getItem("UserId"));
        const fetchUserData = async () => {
            const userData = await getUserInfo(userId);
            if (userData) {
                setProfilePic(userData.color);
            }
        };
        fetchUserData();
    }, [profilePic]);


    const formatDate = () => {
        const date = new Date(info.loggedInUser?.dateJoined ?? ''); // Provide an empty string as default
        const formattedDate = date.toLocaleDateString('en-US', {
            month: '2-digit', // MM
            day: '2-digit',   // DD
            year: 'numeric'   // YYYY
        });
        return formattedDate;
    };


    const handlePicChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = async () => {
                const imageData = reader.result as string;

                try {
                    const userId = Number(localStorage.getItem("UserId"));
                    const userData = await getUserInfo(userId);
                    setProfilePic(imageData);

                    if (userData) {
                        const updatedUserData: IUserData = {
                            ...userData,
                            color: imageData, // Store the image data in the color property
                        };

                        const result = await updateUserInfo(updatedUserData);
                        console.log("User information updated successfully:", result);
                        window.location.reload();
                    }
                } catch (error) {
                    console.error("Error updating user information:", error);
                }
            };

            reader.readAsDataURL(file);
        }
    };


    // // GET BOARD BY LEADER ID OR GET USER'S BOARD 
    // const handleBoardClick = () => {
    //     try {
    //         // const boardDisplayedInfo = await (board.id)
    //         // info.setDisplayedBoard(boardDisplayedInfo)
    //         router.push('/TaskPage')
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }
    const [randomColor, setRandomColor] = useState("#57CDFF");

    const handlePaintBrushClick = async () => {
        const newColor = getRandomColor();
        setRandomColor(newColor);

        try {
            const userId = Number(localStorage.getItem("UserId"));
            const userData = await getUserInfo(userId);

            if (userData) {
                const updatedUserData: IUserData = {
                    ...userData,
                    color: newColor, // Store the new color in the color property
                };

                const result = await updateUserInfo(updatedUserData);
                console.log("User information updated successfully:", result);
            }
        } catch (error) {
            console.error("Error updating user information:", error);
        }
    };

    const colors = ["bg-[#AEE6D9]", "bg-[#6FDFC4]", "bg-[#3EBE9F]", "bg-[#AEE6D9]"];
    const handleTaskPage = async (boardId: number) => {
        // const boardData: IBoardData = { id: boardId, /* Add other properties as needed */ };
        const getBoard = await getBoardById(boardId);
        info.setDisplayedBoard(getBoard);
        router.push('/TaskPage');
    };

    return (
        <div className="bg-[#F1FFFC] min-h-screen">
            <div className="px-10 grid grid-cols-5">
                <div className="lg:col-span-2 col-span-5 flex flex-col items-center pt-20">
                    <div className="flex justify-center items-end">
                        <Tooltip content="Randomize Color" placement="bottom" className="px-5 py-2 rounded-md font-hammersmith text-lg">
                            <img src="/PaintBrush.png" alt="" className="w-[45px] h-[45px] cursor-pointer" onClick={handlePaintBrushClick} />
                        </Tooltip>
                        <div className="profileColor" style={{ backgroundColor: randomColor }}>
                            <img className="profileColor" src={info.loggedInUser?.color || "/"} alt="" />
                        </div>
                        <Tooltip content="Profile Picture" placement="bottom" className="px-5 py-2 rounded-md font-hammersmith text-lg">
                            <label htmlFor="fileInput">
                                <img
                                    src="/Pencil.png"
                                    alt=""
                                    className="w-[45px] h-[45px] cursor-pointer"
                                />
                            </label>
                            <input
                                id="fileInput"
                                type="file"
                                accept=".png, .jpeg, .jpg"
                                style={{ display: "none" }}
                                onChange={handlePicChange}
                            />
                        </Tooltip>
                    </div>
                    <h1 className="font-hammersmith text-6xl pt-8">{info.loggedInUser?.username.toLocaleUpperCase()}</h1>
                    <p className="font-hammersmith text-3xl py-10">{`Joined ${formatDate()}`}</p>
                </div>
                <div className="lg:col-span-3 col-span-5 h-[650px] border-[1px] border-black mt-12 me-2 mb-10 bg-white rounded-md overflow-y-auto no-scrollbar">
                    <div className="flex justify-center items-center gap-2 pt-10">
                        <h1 className="font-hammersmith text-[50px]">MY BOARDS</h1>
                        {/* <AddIcon sx={{ fontSize: 50 }} className="mt-[-7px] cursor-pointer" onClick={() => setOpenModal(true)} /> */}
                        <CreateBoardComponent />
                    </div>
                    <div className="mx-14">
                        {boards.map((board, idx) => (
                            <div
                                key={idx}
                                className={`${colors[idx % 3]} grid grid-cols-2 items-center px-10 py-7 my-12 rounded-md cursor-pointer`}
                                onClick={() => handleTaskPage(board.id)} // Pass a callback function
                            >
                                <h1 className="col-span-1 flex justify-start font-hammersmith text-4xl">{board.name}</h1>
                                <div className="col-span-1 flex justify-end">
                                    <div className="member" style={{ backgroundColor: info.loggedInUser?.color }}>
                                        <img className="member" src={info.loggedInUser?.color || "/"} alt="" />
                                    </div>
                                </div>
                            </div>
                        ))}

                        {userBoards.map((userBoard, idx) => (
                            <div
                                key={idx}
                                className={`${colors[idx % 3]} grid grid-cols-2 items-center px-10 py-7 my-12 rounded-md cursor-pointer`}
                                onClick={() => handleTaskPage(userBoard.id)} // Pass a callback function
                            >
                                <h1 className="col-span-1 flex justify-start font-hammersmith text-4xl">{userBoard.name}</h1>
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
