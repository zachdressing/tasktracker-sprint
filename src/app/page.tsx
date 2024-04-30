'use client'

import Image from "next/image";
import { useState } from "react";
import { Button, Checkbox, CustomFlowbiteTheme, Label, TextInput } from "flowbite-react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { grey } from '@mui/material/colors';

export default function Home() {
  const [isNewAccount, setIsNewAccount] = useState<boolean>(true);
  const [visibility, setVisibility] = useState<boolean>(false);
  const [seeConfirmation, setSeeConfirmation] = useState<boolean>(false);

  const [id, setId] = useState<number>(0);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [color, setColor] = useState<string | null>(null);

  const handleLogin = () => {
    setIsNewAccount(!isNewAccount);
  }


  // handle signing up functionality
  const handleSignUp = () => {
    let userData = {
      id: id,
      username: username,
      password: password,
      color: color
    }

    let loginData = {
      username: username,
      password: password
    }

    // CREATING ACCOUNT 
    if(isNewAccount){
      try {
        
      } catch (error) {
        
      }
    }else{
      // ELSE, LOGGING IN 
    }
  }

  // handle passwords' visibilities
  const handlePassVisibility = () => {
    setVisibility(!visibility);
  }

  const handleSeeConfirmation = () => {
    setSeeConfirmation(!seeConfirmation);
  }

  // custom flowbite classes
  const customInput: CustomFlowbiteTheme['textInput'] = {
    "field": {
      "input": {
        "base": "block w-full overflow-hidden !rounded-r-0 border disabled:cursor-not-allowed disabled:opacity-50",
        "colors": {
          "custom": "border-0 !rounded-md bg-white text-black focus:border-0 focus:ring-0"
        },
      },
    }
  }

  return (
    <div className="bg-[#F1FFFC] min-h-screen flex justify-center items-center">
      <div className="bg-[#3EBE9F] rounded-md w-[500px] py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black font-holtwood text-3xl text-center my-2.5">{isNewAccount ? 'CREATE ACCOUNT' : 'LOGIN'}</h1>
          <form className="flex w-[370px] flex-col gap-4 py-6" >
            <div>
              <div className="block">
                <Label htmlFor="username" value="Username" className="font-hammersmith text-black text-xl rounded" />
              </div>
              <TextInput theme={customInput} color="custom" id="username" type="text" className="w-full !border-0" required />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="password1" value="Password" className="font-hammersmith text-black text-xl" />
              </div>
              {/* <TextInput theme={customInput} color="custom" id="password1" type="password" required /> */}
              <div className="grid grid-cols-6 bg-white rounded-lg focus-within:border-[#0B7D61] focus-within:ring-[#0B7D61]">
                <TextInput theme={customInput} color="custom" className="col-span-5 input !focus-within:border-x-0" id="password1" type={visibility ? 'text' : 'password'}  required />
                <div className="col-span-1 flex justify-end items-center bg-white rounded-r-md pe-4 cursor-pointer">
                  {visibility ? <VisibilityOutlinedIcon onClick={handlePassVisibility} sx={{color: grey[900], fontSize: 30}}/> :
                    <VisibilityOffOutlinedIcon onClick={handlePassVisibility} sx={{color: grey[900], fontSize: 30}}/>}
                </div>
              </div>
            </div>
            {isNewAccount ?
              <div>
                <div className="block">
                  <Label htmlFor="password2" value="Confirm Password" className="font-hammersmith text-black text-xl" />
                </div>
                {/* <TextInput theme={customInput} color="custom" id="password2" type="password" required /> */}
                <div className="grid grid-cols-6 bg-white rounded-lg focus-within:border-[#0B7D61] focus-within:ring-[#0B7D61]">
                <TextInput theme={customInput} color="custom" className="col-span-5 input !focus-within:border-x-0" id="password2" type={seeConfirmation ? 'text' : 'password'}  required />
                <div className="col-span-1 flex justify-end items-center bg-white rounded-r-md pe-4 cursor-pointer">
                  {seeConfirmation ? <VisibilityOutlinedIcon onClick={handleSeeConfirmation} sx={{color: grey[900], fontSize: 30}}/> :
                    <VisibilityOffOutlinedIcon onClick={handleSeeConfirmation} sx={{color: grey[900], fontSize: 30}}/>}
                </div>
              </div>
              </div> :
              null
            }
            <div className="flex justify-center mt-3">
              <Button className="bg-[#0B7D61]" type="submit"><p className="font-hammersmith !border-0 text-2xl rounded-md px-3 justify-center ">CREATE</p></Button>
            </div>
            <p className="font-hammersmith text-center text-black">
              {isNewAccount ? 'Already have an Account? ' : "Don't have an account? "}
              <span className="underline cursor-pointer" onClick={handleLogin}>{isNewAccount ? 'Login' : 'Create one now!'}</span></p>
          </form>
        </div>
      </div>
    </div>
  );
}
