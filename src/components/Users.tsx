import { useEffect, useRef, useState } from 'react';
import { reqRes } from '../API/reqRes';
import { User, UsersResponse } from '../interfaces/reqRes';

const Users = () => {

    const [users, setUsers] = useState<User[]>([]);
    const pageRef = useRef(1)

    useEffect(() => {
      // call Api
      loadUsers();
    }, [])

    const loadUsers = async () => {
        const resp = await reqRes.get<UsersResponse>("/users",{
            params: {
                page: pageRef.current //.current is the value of the reference
            }
        })
            //console.log(res.data.data);
            if(resp.data.data.length > 0){
                pageRef.current++;
            }else{
                alert("No more records");
            }
            
            if(pageRef.current > 2){
                pageRef.current = 1;
            }
            console.log(pageRef.current)
            setUsers(resp.data.data);
            
    }

    const renderUsers = ( {id, first_name, last_name,email,avatar}: User) => {
        return (
            <tr key={id.toString()}>
                <td>{id}</td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
                <td>
                    <img src={avatar}
                        alt={first_name}
                        style={{width: 35, borderRadius: 100}}
                    />
                </td>
            </tr>
        )
    }
    
  return (
    <>
      <h3>Users:</h3>
      <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Avatar</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user) => renderUsers(user))
            }
        </tbody>
        </table>

        <button className="btn btn-primary"
            onClick={loadUsers}
        >
            load more
        </button>
    </>
  )
}

export default Users
