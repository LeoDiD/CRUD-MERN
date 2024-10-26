import React from 'react'
import "./user.css"

const user = () => {
  return (
    <div className='userTable'>
        <button type='button' class="btn btn-primary">
                Primary
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
            <body>
                    <tr>
                            <td>1</td>
                            <td>Johaina</td>
                            <td>joga.phinmaed.com</td>
                            <td>embarcadero</td>
                            <td>Update | Delete</td>
                    </tr>
            </body>
        </table>
    </div>
  )
}

export default user