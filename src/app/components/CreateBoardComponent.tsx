import { Modal, Button, CustomFlowbiteTheme } from 'flowbite-react'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';
import { IBoardData } from '../interfaces/interfaces';
import { useTaskContext } from '@/context/UseContext';
import { createBoard } from '../utils/DataService';

const CreateBoardComponent = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [boardItems, setBoardItems] = useState<IBoardData[]>([]);

    const context = useTaskContext();
    const router = useRouter();

    const [id, setId] = useState<number>(0);
    // const [userId, setUserId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    // const [inviteCode, setInviteCode] = useState<string>("");
    // const [isPublished, setIsPublished] = useState<boolean>(true);
    // const [isDeleted, setIsDeleted] = useState<boolean>(false);

    const handleBoardName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleCreateBoard = async() => {
        let userId = Number(localStorage.getItem("UserId"));
        // Example usage
        const randomCode = generateRandomCode();
        console.log(randomCode); // Output: "abc123"
        const newBoard: IBoardData = {
            id: id,
            userID: userId,
            name: name,
            inviteCode: randomCode,
            isPublished: true,
            isDeleted: false
        };
        setBoardItems(prevBoardItems => [...prevBoardItems, newBoard])

        try {
            let result = await createBoard(newBoard)
            
            if (result) {
                console.log("New Board Info:", result);
                context.setDisplayedBoard(newBoard)
                router.push('/TaskPage')
            }
        } catch (error) {
            alert("Creating Group Unsuccessful!")
        }
        router.push('/TaskPage')


    }

    const handleBoardPage = () => {
        // Example usage
        const randomCode = generateRandomCode();
        console.log(randomCode); // Output: "abc123"
    }

    const generateRandomCode = (): string => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';

        let code = '';

        // Generate first 3 alphabetical characters
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            code += alphabet[randomIndex];
        }

        // Generate last 3 numerical characters
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * numbers.length);
            code += numbers[randomIndex];
        }

        return code;
    };


    return (
        <div>
            <AddIcon sx={{ fontSize: 50 }} className="mt-[-7px] cursor-pointer" onClick={() => setOpenModal(true)} />
            <Modal show={openModal} size="4xl" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="grid grid-cols-2 justify-center items-center text-center">
                        <div className="col-span-1 font-hammersmith flex flex-col justify-center items-center gap-5 py-16 divider">
                            <h1 className="text-3xl">Enter Code</h1>
                            <input className="text-[#3177FF] text-2xl font-holtwood w-[300px] rounded-md text-center boardInput" placeholder='Board Code' type="text" />
                            <Button className="bg-[#0B7D61] text-lg px-4" onClick={handleBoardPage}>JOIN</Button>
                        </div>
                        <div className="col-span-1 font-hammersmith flex flex-col justify-center items-center gap-3 py-8 ">
                            <h1 className="text-3xl">Create New</h1>
                            <input className="text-[#3177FF] text-2xl font-holtwood w-[300px] rounded-md text-center boardInput" placeholder='Name Board' type="text" />
                            <Button className="bg-[#0B7D61] text-lg px-4" onClick={handleCreateBoard}>CREATE</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CreateBoardComponent
