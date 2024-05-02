import { IBoardData, ILoginUser, IToken, IUserData } from "../interfaces/interfaces"

const baseUrl = 'https://kma-tasktracker-sprint.azurewebsites.net'


// ---------------- CREATE USER/ LOGIN ---------------------
export const createUser = async (newUser: IUserData) => {
    const res = await fetch(baseUrl + '/User/AddUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })

    // console.log('Response:', res)
    if(!res.ok){
        const message = 'an error occured: ' + res.status;
        throw new Error(message);
    }
    const data = await res.json()
    return data;
}

export const loginUser = async(user: ILoginUser) => {
    const res = await fetch(baseUrl + '/User/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)   
    })

    if(!res.ok){
        const message = 'an error has occured! ' + res.status;
        throw new Error(message);
    }

    const data: IToken = await res.json();
    console.log(data);
    return data;
}

export const checkToken = () => {
    let result = false;
    let isData = localStorage.getItem("Token")

    if(isData != null){
        result = true;
    }

    return result;
}

// GET USER INFO BY USERID
export const getUserInfo = async(id: number) => {
    const res = await fetch(baseUrl + '/User/GetUserById/' + id)
    const data = await res.json();
    console.log(data)
    return data;
}

// GET BOARDS BY USER ID


// CREATE BOARD
export const createBoard = async (board: IBoardData) => {
    const res = await fetch(baseUrl + '/Board/CreateBoard', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(board)
    });

    if(!res.ok){
        const message = 'An error has occured: ' + res.status;
        throw new Error(message);
    }

    const data = await res.json();
    return data;
}