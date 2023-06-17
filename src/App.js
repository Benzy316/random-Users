import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
   <div className='h-[100svh] flex justify-center items-center bg-slate-50'>
     <table className=' h-[80%] w-3/5 bg-transparent bg-emerald-50'>
      <thead>
        <tr className=' border border-stone-950 bg-red-200 '>
          <th className='hover:bg-sky-300'>S/N</th>
          <th className='hover:bg-sky-300'>Name</th>
          <th className='hover:bg-sky-300'>Email</th>
          <th className='hover:bg-sky-300'>Phone</th>
          <th className='hover:bg-sky-300'>Address</th>
        </tr>
      </thead>
      <tbody className=' border border-stone-950 bg-sky-300 '>
        {users.map((user) => (
          <tr key={user.id}>
            <td className='hover:bg-red-200'>{user.id}</td>
            <td className='hover:bg-red-200'>{user.name}</td>
            <td className='hover:bg-red-200'>{user.email}</td>
            <td className='hover:bg-red-200'>{user.phone.slice(0,13)}</td>
            <td className='hover:bg-red-200'>{user.address.street}</td>
          </tr>
        ))}
      </tbody>
    </table>
   </div>
  );
};

export default UserTable;