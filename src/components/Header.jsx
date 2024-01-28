// @ts-nocheck
import { Button,  Navbar,  } from 'flowbite-react';
import { HiShoppingBag } from "react-icons/hi";
import { useState } from 'preact/hooks';
import { Login } from './Login.jsx';
import { Register } from './Register.jsx';
import { useBasket } from '../providers/BasketProvider.jsx';
import { useUser } from '../providers/UserProvider.jsx';


export function Header() {

	const { basket, clearBasket } = useBasket();
	const { user, logout } = useUser();
	return (
		<Navbar fluid className='bg-orange-700 '>
			<Navbar.Toggle className='text-white' />
			<Navbar.Brand  href="/products" >
				<span className="self-center whitespace-nowrap text-white text-xl font-semibold" >OptiShop</span>
			</Navbar.Brand> 
			
			<div className="flex md:order-2">
				{user ? (
					<div className='flex items-center text-white'>
						<span>Hello, { user.username}</span>
						<Button size='xs' as='a' color='' className='ml-2 inline-block ' href='/basket'>
							<HiShoppingBag className='  h-7 w-7 inline mr-1' />
							<span className='text-base'>{basket.length}</span>
						</Button>
						<Button size="sm" color='' onClick={() => { logout(); clearBasket(); }} className=" mx-2 bg-lime-700 hover:bg-lime-500  hover:text-slate-600  active:bg-lime-300 inline-block ">
							Logout
						</Button>
					</div>
				) : (
						<div >
							<Login className="inline" />
							<Register className="inline" />

						</div> 
				)}


			</div>
			<Navbar.Collapse className='text-white' >
				<Navbar.Link className='text-white' href="/products">All product</Navbar.Link>
				<Navbar.Link className='text-white' href="/products/frames">Frames</Navbar.Link>
				<Navbar.Link className='text-white' href="/products/contact">Contact Lenses</Navbar.Link>
				<Navbar.Link href="/" className='text-white'>About</Navbar.Link>


			</Navbar.Collapse>
		</Navbar>
	);
}
