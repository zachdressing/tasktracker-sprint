interface IUserData {
    id: number
    username: string
    datedJoined: string
    color: string
    hash: string
    salt: string
}

interface IBoardData {
    id: number
    userId: number
    name: string
    inviteCode: string
    isPublished: boolean
    isDeleted: boolean
}

interface ITaskData {
    id: number
    boardId: number
    userId: number
    dateCreated: string
    title: string
    description: string
    status: number
    priority: number
}