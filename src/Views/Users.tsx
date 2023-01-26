import {FunctionComponent, useEffect, useState} from "react";
import axiosConfig from "../api/defaultApi";

interface UserI {
    username: string;
    roles:Array<string>;
    active:boolean;
}

const Users:FunctionComponent = ()=> {
    const [users, setUsers] = useState<UserI[]>([]);

    const getUsers  = async ():Promise<void>=> {
        const {data}:{data:Array<UserI>} = await axiosConfig.get("/users");
        setUsers(data);
    }

    useEffect(()=>{
        getUsers();
    },[])

    useEffect(()=>{
        console.log(users);
    },[users])
    
    return (
        <>
        <h1>Users</h1>
        </>
    )
}

export default Users;