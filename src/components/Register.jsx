// @ts-nocheck

import { useState } from 'preact/hooks';
import { Button, Modal, TextInput } from 'flowbite-react';

export function Register() {
   const [openModal, setOpenModal] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword, setCorfirmPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  
  function onCloseModal() {
    setOpenModal(false);
    setUsername('');
    setPassword('');
  } 
  const handleRegister = () => {
    // Perform your authentication logic here
    // For simplicity, let's assume the login is successful if both fields are non-empty
    if (cofirmPassword.trim() && password.trim()) {
      setLoggedIn(true);
      alert('Registration successful!');
    } else {
      alert('Passwords not excact.');
    }
  };

  return (
    <>
      <Button color="lime" className=' inline-block mx-2 bg-lime-800 text-white hover:text-slate-800  active:bg-lime-300' 
       onClick={() => setOpenModal(true)}>Register</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Registration </h3>
              <TextInput
                id="username"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
              <TextInput
                id="email"
                placeholder="example@mail.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <TextInput id="password"
               placeholder="Password"
                type="password" 
                value={password} 
                onChange={(event)=>setPassword(event.value)}
                required />
                <TextInput id="comfirmPassword"
               placeholder="Comfirm password"
                type="password" 
                value={comfirmPassword} 
                onChange={(event)=>setCorfirmPassword(event.value)}
                required />
            
            <div className="w-full">
              <Button className='bg-lime-700 text-white hover:bg-lime-500 hover:text-slate-800 ' 
              onClick={handleRegister}>Register</Button>
            </div>
           
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

