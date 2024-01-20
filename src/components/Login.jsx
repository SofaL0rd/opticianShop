// @ts-nocheck

import { useState } from 'preact/hooks';
import { Button, Modal, TextInput } from 'flowbite-react';

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
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    
    // // Replace the following with your actual data fetching logic
    // const response = await fetch("/src/data/users.json");
    // const data = await response.json();

    // let found = false;
    // let user;

    // for (const currentUser of data.users) {
    //   if (currentUser.name === username) {
    //     found = true;
    //     user = currentUser;
    //     break;
    //   }
    // }

    // if (found && user.pwd === password) {
    //   // Perform actions after successful login
    //   // For example, set user data in state or navigate to another page
    //   console.log('Login successful');
    // } else {
    //   // Handle incorrect credentials
    //   console.log('Invalid credentials');
    // }
  };

  return (
    <>
      <Button  color="lime" className=' inline-block mx-2 bg-lime-700 text-white hover:text-slate-800  active:bg-lime-300' 
       onClick={() => setOpenModal(true)}>Login</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form className="space-y-6" onSubmit={handleFormSubmit}>
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
                onChange={(event)=>setPassword(event.target.value)}
                required />
          
            <div className="w-full">
              <Button type="submit" className='bg-lime-700 text-white hover:bg-lime-500 hover:text-slate-800 ' >Log in </Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </a>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

