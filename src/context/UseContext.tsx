'use client'

import {IBoardData, IUserData} from "../app/interfaces/interfaces"
import { SetStateAction, createContext, useContext, useState } from "react"

type UseContextType = {
    loggedInUser: IUserData | null;
    setLoggedInUser: React.Dispatch<React.SetStateAction<IUserData | null>>;
    displayedBoard: IBoardData | null;
    setDisplayedBoard: React.Dispatch<React.SetStateAction<IBoardData | null>>;
}

export const UseContext = createContext<UseContextType>({} as UseContextType);

export const AppWrapper = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const [loggedInUser, setLoggedInUser] = useState<IUserData | null>(null);
    const [displayedBoard, setDisplayedBoard] = useState<IBoardData | null>(null)

    return (
        <UseContext.Provider value={{loggedInUser, setLoggedInUser, displayedBoard, setDisplayedBoard}} >
            {children}
        </UseContext.Provider>
    )
}

export const useTaskContext = () => {
    return useContext(UseContext);
}
