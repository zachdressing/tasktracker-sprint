"use client";
import {Dropdown, Navbar } from 'flowbite-react'

const NavComp = () => {
  return (
    <div>
      <Navbar fluid className='h-36 bg-navBack'>
        <Navbar.Brand>
          <img className='pl-12' src='/Logo.png' alt='maddie is cool!'/>
        </Navbar.Brand>
        <div className="flex md:order-2 mt-4">
          <Dropdown
            className='border border-black text-center'
            arrowIcon={false}
            inline
            label={
              <div className='w-16 h-16 rounded-full bg-blueish border border-black mx-auto'></div>
            }
          >
            <Dropdown.Item>PROFILE</Dropdown.Item>
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
