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

export const updateUserInfo = async(user: IUserData) => {
    const res = await fetch(baseUrl + '/User/UpdateUser', {
        method: 'PUT',
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

// GET BOARDS BY USER ID


// CREATE BOARD
export const createBoard = async (board: IBoardData) => {
    const res = await fetch(baseUrl + '/Board/CreateBoard', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(board)
    });

    if (!res.ok) {
        const message = 'An error has occurred: ' + res.status;
        throw new Error(message);
    }

    const data = await res.json();
    console.log(data); 
    return data; 
}


export const getBoardById = async (id: number) => {
    try {
        const res = await fetch(baseUrl + '/Board/GetBoardById/' + id);

        if (!res.ok) {
            throw new Error('Failed to fetch board data');
        }

        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching board data:', error);
        throw error; // Rethrow the error for handling in the calling function
    }
}

export const getBoardsByUserId = async (userId: number) => {
    try {
        const res = await fetch(baseUrl + '/Board/GetBoardsByUserID/' + userId);

        if (!res.ok) {
            throw new Error('Failed to fetch boards');
        }

        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching board data:', error);
        throw error; 
    }
}

export const getUserBoards = async (userId: number) => {
    try {
        const res = await fetch(baseUrl + '/Member/GetUsersBoard/' + userId);

        if (!res.ok) {
            throw new Error("Failed to fetch user's boards");
        }

        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching board data:', error);
        throw error; 
    }
}

export const getBoardMembers = async (boardId: number) => {
    try {
        const res = await fetch(baseUrl + '/Member/GetBoardMembers/' + boardId);

        if (!res.ok) {
            throw new Error("Failed to fetch members");
        }

        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching board data:', error);
        throw error; 
    }
}