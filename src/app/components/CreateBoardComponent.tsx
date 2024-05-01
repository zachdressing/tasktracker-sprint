import { Modal, Button, CustomFlowbiteTheme } from 'flowbite-react'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';

const CreateBoardComponent = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const router = useRouter();
    
    const handleBoardPage = () => {
        router.push('/TaskPage')
    }

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
                            <Button className="bg-[#0B7D61] text-lg px-4" onClick={handleBoardPage}>CREATE</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CreateBoardComponent
