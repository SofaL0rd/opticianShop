// @ts-nocheck
import { useLocation } from 'preact-iso';
import { Avatar, Button, Dropdown,  Navbar, TextInput } from 'flowbite-react';
import { HiSearch, HiShoppingBag, HiHeart } from "react-icons/hi";
import { Login } from './Login.jsx';
import { Register } from './Register.jsx';



export function Header() {
	const { url } = useLocation();

	return (
		<Navbar fluid className='bg-orange-700 '>
			<Navbar.Toggle className='text-white' />
			<Navbar.Brand  href="/" >
				<img src='' className='mr-3 h-6 sm:h-9' alt="Logo" />
				<span className="self-center whitespace-nowrap text-white text-xl font-semibold" >Opician Shop</span>
			</Navbar.Brand> 
			
			<div className="flex md:order-2">
				<TextInput className="max-w-xs"  icon={HiSearch} placeholder="Search" />
                <div >
                    <Login className="inline"/>
                    <Register className="inline"/>

                </div>
				{/* <HiShoppingBag className='m-2 text-white  h-7 w-7 inline' /> */}
				{/* <HiHeart className='m-2  text-white  h-7 w-7 inline' /> */}
				{/* <Dropdown arrowIcon={false} 
                    dismissOnClick={false}
					inline 
					label={<Avatar alt='User' rounded />} >
					<Dropdown.Item  ><Login/></Dropdown.Item>
					<Dropdown.Item>Register</Dropdown.Item>
				</Dropdown> */}


			</div>
			<Navbar.Collapse className='text-white' >
				<Dropdown label={'Shop'} inline >
                    <Dropdown.Item><Navbar.Link href="/products">Frames</Navbar.Link></Dropdown.Item>
					<Dropdown.Item><Navbar.Link href="/products">Contact Lenses</Navbar.Link></Dropdown.Item>
					<Dropdown.Item><Navbar.Link href="/products">Accessories</Navbar.Link></Dropdown.Item>

				</Dropdown>
				<Navbar.Link className='text-white'  href="#">Services</Navbar.Link>
				<Navbar.Link href="#" className='text-white'>Contact</Navbar.Link>


			</Navbar.Collapse>
		</Navbar>
	);
}
