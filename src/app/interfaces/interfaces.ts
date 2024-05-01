interface IdefaultPosition {
    defaultPosition:{
        x: number
        y: number
    } 
}

interface Itask{
    name: string
    description: string
    comments:Icomment[]
    assignData:Iassignee 
}

interface Icomment{
    username: string
    date: number
    time: number
    replys:Icomment[]
}

interface Iassignee{
    username: string
    date: number
    location: string
    priority: number
}