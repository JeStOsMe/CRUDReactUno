import React, {useState} from 'react';
import UserTable from './components/UserTable';
import {v4 as uuidv4} from 'uuid';
import AddUserForm from './components/AddUserForm';

function App() {

  //Datos de entrada
  const userData = [
    {id: uuidv4(), name:'Tania', username: 'floppydiskette'},
    {id: uuidv4(), name:'Craig', username: 'siliconeidolon'},
    {id: uuidv4(), name:'Ben', username: 'benisphere'}
  ]

  //State
  const [users, setUsers] = useState(userData);

  //Agregar usuarios
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([
      ...users,
      user
    ])
  }

  return (
    <div className='container'>
      <h1>CRUD App con Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add users</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className='flex-arge'>
          <h2>View users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
