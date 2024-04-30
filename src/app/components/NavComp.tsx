"use client";
import {Dropdown, Navbar } from 'flowbite-react'
import { useRouter } from "next/navigation";


const NavComp = () => {
  const router = useRouter();

  return (
    <div>
      <Navbar fluid className='h-44 bg-navBack'>
        <Navbar.Brand>
          <img className='px-2' width={300} src='/Logo.png' alt='maddie is cool!'/>
        </Navbar.Brand>
        <div className="flex md:order-2 mt-4 px-2">
          <Dropdown
            className='border border-black text-center'
            arrowIcon={false}
            inline
            label={
              <div className='w-[88px] h-[88px] rounded-full bg-blueish border border-black'></div>
            }
          >
            <Dropdown.Item onClick={() => router.push('/TaskPage')}>PROFILE</Dropdown.Item>
            <Dropdown.Item>CREATE BOARD</Dropdown.Item>
            <Dropdown.Item>LOG OUT<img className='ml-4' src='/Vector.png' alt='vector'/></Dropdown.Item>
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
