// @ts-nocheck

import { useState } from 'preact/hooks';
import { Button, Modal, TextInput } from 'flowbite-react';
import { useUser } from '../providers/UserProvider';

export function Login() {
   const [openModal, setOpenModal] = useState(false);
  const { login } = useUser();
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  ;

  
  function onCloseModal() {
    setOpenModal(false);
  
  } 
  const handleLogin  = async (event) => {
    event.preventDefault();

    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    }).then(
      response => response.json()
    ).then(
      data => {
        console.log(data);
        login(data.user);
        onCloseModal();
      }
    ).catch(
      error => {
        console.error("Error", error);
      alert(error)}
    )


  };

  return (
    <>
      <Button  color="lime" className=' inline-block mx-2 bg-lime-700 text-white hover:text-slate-800  active:bg-lime-300' 
       onClick={() => setOpenModal(true)}>Login</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form className="space-y-6" onSubmit={handleLogin }>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in </h3>
              <TextInput
                id="username"
                placeholder="Username"
                value={loginData.username}
              onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                required
              />
              <TextInput id="password"
               placeholder="Password"
                type="password" 
                value={loginData.password} 
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required />
          
            <div className="w-full">
              <Button type="submit" className='bg-lime-700 text-white hover:bg-lime-500 hover:text-slate-800 ' >Log in </Button>
            </div>
            
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

