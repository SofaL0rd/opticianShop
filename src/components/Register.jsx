// @ts-nocheck

import { useState } from 'preact/hooks';
import { Button, Modal, TextInput } from 'flowbite-react';

export function Register() {
   const [openModal, setOpenModal] = useState(false);
  const [confirmPassword, setCorfirmPassword] = useState('');
  const [usernameAvailable, setUsernameAvailable] = useState(true);
  const [registerData, setRegisterData] = useState({
    username: '',
    password: '',
    full_name: '',
    email: '',
    tel: '',
  });


  const handleRegisterSubmit = async (event) => {
    setUsernameAvailable(true);
    event.preventDefault();

    if (registerData.password !== confirmPassword) {
      alert('Password and confirmation password do not match');
      return;
    }
    
    
    fetch('http://localhost:3001/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.hasOwnProperty('available')) {
          setUsernameAvailable(data.available);

         
        } else {
          onCloseModal();
          console.log('Registration successful', data);
        }
      })      .catch((error) => console.error('Error registering:', error));

    
  };
  function onCloseModal() {
    setOpenModal(false);
  } 

  return (
    <>
      <Button color="lime" className=' inline-block mx-2 bg-lime-700 text-white hover:text-slate-800  active:bg-lime-300' 
       onClick={() => setOpenModal(true)}>Register</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleRegisterSubmit} className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Registration </h3>
              <TextInput
                id="username"
                placeholder="Username"
                value={registerData.username}
              onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
              required
            />
            {!usernameAvailable && <p className="text-red-600">Username is not available</p>}

              <TextInput
                id="full_name"
                placeholder="Full name"
                value={registerData.full_name}
              onChange={(e) => setRegisterData({ ...registerData, full_name: e.target.value })}
                required
              />
              <TextInput
                id="email"
                placeholder="example@mail.com"
                value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                required
            />
            <TextInput
              id="tel"
              placeholder="+380*********"
              value={registerData.te}
              onChange={(e) => setRegisterData({ ...registerData, tel: e.target.value })}
              required
            />
              <TextInput id="password"
                placeholder="Password"
                type="password" 
                value={registerData.password} 
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                required />
                <TextInput id="confirmPassword"
               placeholder="Comfirm password"
                type="password" 
                value={confirmPassword} 
              onChange={(event) => setCorfirmPassword(event.target.value)}
              required />
            {(registerData.password !== confirmPassword) && <p className="text-red-600">Passwords do not match</p>}

            
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

