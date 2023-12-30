import { useLocation } from 'preact-iso';
import { Label, Navbar, TextInput } from 'flowbite-react';
import { HiSearch } from "react-icons/hi";


export function Header() {
	const { url } = useLocation();

	return (
		<Navbar fluid className='bg-orange-700'>

			<Navbar.Brand  href='#' >
				<img src='' className='mr-3 h-6 sm:h-9' alt="Logo" />
				<span className="self-center whitespace-nowrap text-xl font-semibold" >Opician Shop</span>
			</Navbar.Brand> 
			<Navbar.Toggle />
			<TextInput icon={HiSearch} placeholder="Search" />
			<Navbar.Collapse >
				
				<Navbar.Link className='text-white'  href="#">
					About
				</Navbar.Link>
				<Navbar.Link className='text-white' href="#">Services</Navbar.Link>
				<Navbar.Link href="#" className='text-white'>Contact</Navbar.Link>
				
				<Navbar.Link href='#'><svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
					<path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
				</svg></Navbar.Link>
			</Navbar.Collapse>
			{/* <a href="/" class={url == '/' && 'active'}>
				Home
			</a>
			<a href="/404" class={url == '/404' && 'active'}>
				404
			</a> */}
		</Navbar>
	);
}
