import Link from "next/link";
import Image from 'next/image'

const NavBar = () => {

    const openMenu = () => {
        let items = document.querySelector('#nav-content');
        items.classList.toggle('hidden');
    }

    return (
        <>
            <nav id="header" className=" bg-gray-100 fixed mb-16 w-full z-10 top-0 text-primary shadow">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
                    <div className="pl-4 flex items-center">
                        <Image
                            /* src="https://portfolio.stdcdn.com/logo-bco.png" */
                            src="https://portfolio.stdcdn.com/logo-blue.png"
                            alt="Picture of the author"
                            width={208}
                            height={30.6}
                        />
                    </div>
                    <div className="block lg:hidden pr-4">
                        <button
                            onClick={openMenu}
                            id="nav-toggle"
                            className="flex items-center px-3 py-2 bg-primary rounded text-white  hover:bg-secondary appearance-none focus:outline-none">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div id="nav-content" className=" w-full flex-grow hidden lg:content-center lg:items-center lg:w-auto  lg:block mt-4 lg:mt-0 z-20">
                        <ul className="list-reset lg:flex justify-end items-center ml-auto">
                            <li className="mr-2 ml-2 lg:py-0 align-center" onClick={openMenu}>
                                <Link href="/">
                                    <a className="inline-block w-full rounded no-underline hover:bg-secondary hover:text-white py-2 px-4">
                                        Inicio
                                </a>
                                </Link>
                            </li>
                            <li className="mr-2 ml-2 lg:py-0 align-center" onClick={openMenu}>
                                <Link href="/portafolio">
                                    <a className="inline-block w-full rounded no-underline hover:bg-secondary hover:text-white py-2 px-4">
                                        Portafolio
                                </a>
                                </Link>
                            </li>
                            <li className="mr-2 ml-2 lg:py-0 align-center" onClick={openMenu}>
                                <Link href="/blog">
                                    <a className="inline-block w-full rounded no-underline hover:bg-secondary hover:text-white py-2 px-4">
                                        Blog
                                </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
