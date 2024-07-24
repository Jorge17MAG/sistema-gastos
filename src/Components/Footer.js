import React from 'react';
import { FaAngleDown } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBoxOpen , FaBars , FaCashRegister } from 'react-icons/fa'; 

const Footer = () => {

  return (
    <footer className='md:hidden h-16 bg-zinc-900 fixed bottom-0 left-0 flex w-full items-center px-5 justify-between'>
        <nav className='w-full'>
          <ul className='flex justify-between text-slate-50 text-sm'>
            <li>
                <Link to="/" className=' flex items-center gap-1 p-2 rounded-lg flex-col'><FaHome/>Inicio</Link>
            </li>
            <li>
                <Link to="/transacciones" className='  flex items-center gap-1 p-2 rounded-lg flex-col'><FaCashRegister/>Transacciones</Link>
            </li>
            <li>
                <button className='flex items-center gap-1 p-2 rounded-lg flex-col'><FaBars/>Menu</button>
            </li>
          </ul>
        </nav>
    
    </footer>
  );
};

export default Footer;