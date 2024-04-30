"use client";
import {Dropdown, Navbar } from 'flowbite-react'

const NavComp = () => {
  return (
    <div>
      <Navbar fluid className='h-28 bg-navBack'>
        <Navbar.Brand>
          <img src='/Logo.png' alt='maddie is cool!'/>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            className='border border-black text-center'
            arrowIcon={false}
            inline
            label={
              <div className='w-16 h-16 rounded-full bg-blueish border border-black'></div>
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
