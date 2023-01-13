import { useEffect, useState, useRef } from 'react';
import { reqRes } from '../API/reqRes';
import { User, UsersResponse } from '../interfaces/reqRes';



const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])
    const pageRef = useRef(1)

    const loadUsers = async () => {
        const resp = await reqRes.get<UsersResponse>("/users",{
            params: {
                page: pageRef.current //.current is the value of the reference
            }
        })
            console.log(pageRef.current)
            setUsers(resp.data.data);
            
    }
    
    useEffect(() => {
        loadUsers()
    }, [])

    const nextPage = () => {
        if (pageRef.current < 2){
            alert("No more records");
            pageRef.current = 1;
        }
        pageRef.current++;
        loadUsers();
    }

    const prevPage = () => {
        if(pageRef.current > 1){
            pageRef.current--;
            loadUsers();
        }
    }
    
    return {users, nextPage, prevPage}
}

export default useUsers
