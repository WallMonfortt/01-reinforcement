import useUsers from '../hooks/useUsers';
import { User } from '../interfaces/reqRes';

const Users = () => {
   
    const {users, nextPage, prevPage} = useUsers();

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
            onClick={prevPage}
        >
            prev
        </button>
        &nbsp;

        <button className="btn btn-primary"
            onClick={nextPage}
        >
            next
        </button>
    </>
  )
}

export default Users
