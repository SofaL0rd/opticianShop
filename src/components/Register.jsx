// @ts-nocheck

import { useState } from 'preact/hooks';
import { Button, Modal, TextInput } from 'flowbite-react';

export function Register() {
   const [openModal, setOpenModal] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setCorfirmPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    // Replace the following with your actual data fetching and user registration logic
    const response = await fetch("/src/data/users.json");
    const existingUsers = await response.json();

    const isUsernameTaken = existingUsers.users.some(user => user.name === username);
    if (isUsernameTaken) {
      alert('Username is already taken. Please choose another.');
      return;
    }
    // Add the new user to the array
    const newUser = { name: username, pwd: password };
    const updatedUsers = { users: [...existingUsers.users, newUser] };

    console.log(updatedUsers);

    // Update the server with the new user data
    await fetch('/src/data/users.json', {
      method: 'PUT', // or 'POST' depending on your server setup
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUsers),
    });

    console.log('Registration successful');
    
  };
  function onCloseModal() {
    setOpenModal(false);
    setUsername('');
    setPassword('');
  } 
  const handleRegister = () => {
    // Perform your authentication logic here
    // For simplicity, let's assume the login is successful if both fields are non-empty
    if (confirmPassword.trim() == password.trim()) {
      setLoggedIn(true);
      alert('Registration successful!');
    } else {
      alert('Passwords not excact.');
    }
  };

  return (
    <>
      <Button color="lime" className=' inline-block mx-2 bg-lime-700 text-white hover:text-slate-800  active:bg-lime-300' 
       onClick={() => setOpenModal(true)}>Register</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleFormSubmit} className="space-y-6">
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
                onChange={(event) => setPassword(event.target.value)}
                required />
                <TextInput id="confirmPassword"
               placeholder="Comfirm password"
                type="password" 
                value={confirmPassword} 
              onChange={(event) => setCorfirmPassword(event.target.value)}
                required />
            
            <div className="w-full">
              <Button className='bg-lime-700 text-white hover:bg-lime-500 hover:text-slate-800 ' 
              type="submit">Register</Button>
            </div>
           
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

