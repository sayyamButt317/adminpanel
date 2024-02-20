import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([
    {
      name: "Sayyam",
      email: "sayyambutt317@gmail.com",
      phone: "03240149841",
      address: "Walton c-24-26",
      city: "Lahore"
    }
  ]);
  useEffect(()=>{
    axios.get("http://localhost:3001")
    .then(result=>  setUsers(result.data))
    .catch(err => console.error(err))
  },[])
  return (
    <div className="vh-100 bg-primary d-flex justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <button>
      <Link to="/create" className='btn btn-success'>Add Product</Link></button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.city}</td>
                <td>
                  <button><Link to="/update" className='"btn btn-outline-success"'>Update</Link></button>
             
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
