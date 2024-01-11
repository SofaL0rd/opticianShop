// @ts-nocheck

import { useState } from 'preact/hooks';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

export function Login() {
   const [openModal, setOpenModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  
  function onCloseModal() {
    setOpenModal(false);
    setUsername('');
    setPassword('');
  } 
  const handleLogin = () => {
    // Perform your authentication logic here
    // For simplicity, let's assume the login is successful if both fields are non-empty
    if (username.trim() && password.trim()) {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Please enter a valid username and password.');
    }
  };

  return (
    <>
      <Button  color="lime" className=' inline-block mx-2 bg-lime-700 text-white hover:text-slate-800  active:bg-lime-300' 
       onClick={() => setOpenModal(true)}>Login</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in </h3>
              <TextInput
                id="username"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
              <TextInput id="password"
               placeholder="Password"
                type="password" 
                value={password} 
                onChange={(event)=>setPassword(event.value)}
                required />
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button className='bg-lime-700 text-white hover:bg-lime-500 hover:text-slate-800 ' onClick={handleLogin}>Log in </Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

