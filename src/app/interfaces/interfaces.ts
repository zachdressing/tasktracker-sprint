interface IdefaultPosition {
    defaultPosition:{
        x: number
        y: number
    } 
}

interface iTaskStuff{
    title:string,
    desc:string,
    priority:number,
    color:string
    id:number
    index:number
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