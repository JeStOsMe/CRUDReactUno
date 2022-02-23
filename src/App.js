import React, {useState} from 'react';
import UserTable from './components/UserTable';
import {v4 as uuidv4} from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {

  //Datos de entrada
  const userData = [
    {id: uuidv4(), name:'Tania', username: 'floppydiskette'},
    {id: uuidv4(), name:'Craig', username: 'siliconeidolon'},
    {id: uuidv4(), name:'Ben', username: 'benisphere'}
  ]

  //State
  const [users, setUsers] = useState(userData);

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id:null, name:'', username:''
  })

  //Agregar usuarios
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar usuarios
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  //Editar usuarios
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);
    
    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  }

  return (
    <div className='container'>
      <h1>CRUD App con Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>

          {
            //Operador ternario
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm 
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add users</h2>
                <AddUserForm addUser={addUser}/>
              </div>
            )
          }

        </div>
        <div className='flex-arge'>
          <h2>View users</h2>
          <UserTable 
            users={users} 
            deleteUser={deleteUser} 
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
