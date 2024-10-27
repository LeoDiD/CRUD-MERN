import React, { useEffect } from 'react'
import "./user.css"
import axios from "axios"

const user = () => {
        const [user, setUsers ] = useState ([])
        useEffect(()=>{
                const fetchData = async()=>{
                        try {
                         
                        const response = await axios.get("http://localhost:8000/api/user");
                        setUsers(response.data)      

                        } catch (error) {
                          console.log("Error while fetching data")      
                        }
                };
                fetchData();
         }, {});

  return (

    <div className='userTable'>
        <button type='button' class="btn btn-primary">
                Add user
        </button>
        <table className='table table-bordered'>
            <thead>
                    <tr>
                            <th scope='col'>S. no.</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Address</th>
                            <th scope='col'>Actions</th>
                    </tr>
            </thead>
            <tbody>
                {user.map((user, index)=>{
                        return(
                                <tr>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>Update | Delete</td>
                        </tr>
                        )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default user