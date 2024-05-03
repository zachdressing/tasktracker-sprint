export interface IDragg {
    categories: Icategory[];
}
export interface Icategory {
    title: string;
    color: string;
    tasks: ITask[];
}
export interface ITask {
    title:         string;
    desc:          string;
    priority:      number;
    color:         string;
    category:      number;
    id:            string;
    comments?:      TaskComment;
    assigneeColor: string;
    assigneeName:  string;
    createdDate:   number;
}

export interface TaskComment {
    comment: CommentComment[];
}

export interface CommentComment {
    mainComment:  string;
    replys?:       Reply[];
    date:         number;
    time:         number;
    commentColor: string;
}

export interface Reply {
    reply: string;
    date:  number;
    time:  number;
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