import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBoxOpen , FaAngleLeft, FaCashRegister } from 'react-icons/fa'; 

const Sidebar = () => {
  return (
    <aside className='hidden md:static z-10 min-h-dvh min-w-64 bg-zinc-900 text-slate-50 px-3 py-6 text-shark-50 md:flex flex-col'>
      <header className='mb-4'>
        <a>Paul Inversiones.</a>
      </header>
      <nav className='flex-1'>
        <ul className='flex flex-col gap-1'>
          <li>
              <Link to="/" className='hover:bg-zinc-800 flex items-center gap-3 p-2 rounded-lg'><FaHome/>Inicio</Link>
          </li>
          <li>
              <Link to="/transacciones" className=' hover:bg-zinc-800 flex items-center gap-3 p-2 rounded-lg'><FaCashRegister/>Transacciones</Link>
          </li>
          <li>
              <Link to="/usuarios" className=' hover:bg-zinc-800 flex items-center gap-3 p-2 rounded-lg'><FaUser/>Usuarios</Link>
          </li>
        </ul>
      </nav>

      <div className='self-end'>
        <button>
          <FaAngleLeft className='w-8 h-8'/>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;