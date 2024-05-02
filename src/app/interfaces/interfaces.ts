export interface IdefaultPosition {
    defaultPosition:{
        x: number
        y: number
    } 
}

export interface Itask{
    name: string
    description: string
    comments:Icomment[]
    assignData:Iassignee 
}

export interface Icomment{
    username: string
    date: number
    time: number
    replys:Icomment[]
}

export interface Iassignee{
    username: string
    date: number
    location: string
    priority: number
}

export interface IUserData {
    id: number;
    username: string;
    password: string;
    color: string;
    dateJoined: string | null;
}
export interface ILoginUser {
    username: string,
    password: string
}

export interface IToken {
    token: string,
    userId: number
}

export interface IBoardData {
    id: number
    userID: number
    name: string
    inviteCode: string
    isPublished: boolean
    isDeleted: boolean
}

export interface ITaskData {
    id: number
    boardId: number
    userId: number
    dateCreated: string
    title: string
    description: string
    status: number
    priority: number
}