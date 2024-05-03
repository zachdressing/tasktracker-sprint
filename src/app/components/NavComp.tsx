"use client";
import { useTaskContext } from '@/context/UseContext';
import { Dropdown, Navbar } from 'flowbite-react'
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import { getUserInfo } from '../utils/DataService';
import { IUserData } from '../interfaces/interfaces';


const NavComp = () => {
  const router = useRouter();
  const info = useTaskContext();
  const [user, setUser] = useState<IUserData | null>(null);
  const [profilePic, setProfilePic] = useState<string>("");

  useEffect(() => {
    const userId = Number(localStorage.getItem("UserId"));
    const fetchUserData = async () => {
      const userData = await getUserInfo(userId);
      if (userData) {
        setProfilePic(userData.color);
        setUser(userData);
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("UserId");
    router.push('/');
  }

  return (
    <div>
      <Navbar fluid className='h-44 bg-navBack'>
        <Navbar.Brand onClick={() => { router.push('/ProfilePage') }}>
          <img className='px-2 cursor-pointer' width={300} src='/Logo.png' alt='maddie is cool!' />
        </Navbar.Brand>
        <div className="flex md:order-2 mt-4 px-2 ">
          <Dropdown
            className='border border-black text-center'
            style={{ backgroundColor: user?.color || '#FFFFFF' }}
            arrowIcon={false}
            inline
            label={
              <div className='w-[88px] h-[88px] rounded-full border border-black' style={{ backgroundColor: user?.color || '#FFFFFF' }}>
                <img className='w-[90px] h-[90px] rounded-full' src={info.loggedInUser?.color || ""} alt="" />
              </div>
            }
          >
            <Dropdown.Item className=' flex justify-center text-center font-hammersmith text-xl' onClick={() => { router.push('/ProfilePage') }}>PROFILE</Dropdown.Item>
            <Dropdown.Item className='text-center text-[#0B7D61] font-hammersmith text-xl' onClick={() => { router.push('/TaskPage') }}>CREATE BOARD</Dropdown.Item>
            <Dropdown.Item className='flex justify-center text-center text-red-700 font-hammersmith text-xl' onClick={handleLogout}>LOG OUT<img className='ml-4' src='/Vector.png' alt='vector' /></Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>

        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavComp
