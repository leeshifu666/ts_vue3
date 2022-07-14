export interface ListInt {
    id: number,
    nickName: string,
    role: RoleInt[],
    userName:string
}
interface RoleInt {
    role: number,
    roleName: string
}
interface SelectDataInt{
    role:number,
    nickName:string
}
interface RoleListInt {
    authority: number[]
    roleId: number
    roleName: string
}
interface ActiveInt {
    id: number,
    nickName: string,
    role: number[],
    userName:string
}
export class initData {
    selectData:SelectDataInt = {
        nickName:"",
        role:0
    }
    list:ListInt[]=[]//用于接收用户信息的列表
    roleList:RoleListInt[]=[]//用于接收角色信息的列表
    isShow=false
    active:ActiveInt = {
        id: 0,
        nickName: "",
        role: [],
        userName:""
    }
}