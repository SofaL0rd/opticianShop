// @ts-nocheck

function Footer() {
    return (
        <footer className=" shadow p-2  " style={{ backgroundColor:'rgb(10 10 10)'}} >
            <div className="w-full mx-auto p-4 flex items-center justify-between">
                <span className="text-sm sm:text-center text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Optitian Shop</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>

                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

    );
}

export default Footer;
