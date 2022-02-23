import React from 'react';

import UserTable from './components/UserTable'

function App() {
  return (
    <div className='container'>
      <h1>CRUD App con Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add users</h2>
        </div>
        <div className='flex-arge'>
          <h2>View users</h2>
          <UserTable />
        </div>
      </div>
    </div>
  );
}

export default App;
