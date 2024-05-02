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
    comments:      TaskComment[];
    assigneeColor: string;
    assigneeName:  string;
    createdDate:   number;
}

export interface TaskComment {
    comment: CommentComment[];
}

export interface CommentComment {
    mainComment:  string;
    replys:       Reply[];
    date:         number;
    time:         number;
    commentColor: string;
}

export interface Reply {
    reply: string;
    date:  number;
    time:  number;
}