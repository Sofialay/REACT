import React, {useState} from 'react';
import TodoPage from './components/pages/TodoPage'
import './App.scss';
import ModalUser from './components/ModalUser/ModalUser';
import UserTitleContext from './components/context/UserTitleContext';


function App() {
  const [modalUser, setModalUser] = useState(true);
  const [titleUser, setTitleUser] = useState("");
  

  return (
    <UserTitleContext.Provider value={{setModalUser, titleUser, setTitleUser}}> 
     {
       modalUser ? 
       <ModalUser />
       : 
       null
     }
      <TodoPage />

    </UserTitleContext.Provider>
  );
}

export default App;
