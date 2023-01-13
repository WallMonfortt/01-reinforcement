import { useEffect } from 'react';
import { reqRes } from '../API/reqRes';

const Users = () => {

    useEffect(() => {
      // call Api
      reqRes.get("/users").then((res) => {
        console.log(res.data);
      }
        ).catch((err) => {
            console.log(err);
            }
        );
    }, [])
    
  return (
    <>
      <h3>Users:</h3>
      <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
        </table>
    </>
  )
}

export default Users
