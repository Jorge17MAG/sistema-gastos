import React from 'react';
import { FaAngleDown } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBoxOpen , FaBars , FaCashRegister } from 'react-icons/fa'; 

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Lógica para determinar el texto del encabezado basado en la ubicación
  let headerText = '';
  switch (pathname) {
    case '/':
      headerText = 'Inicio';
      break;
    case '/transacciones':
      headerText = 'Transacciones';
      break;
    default:
      headerText = 'Página no encontrada';
  }

  return (
    <header className='hidden border-b-2 border-slate-300 bg-slate-100 md:block px-5'>
        <div className='h-16 flex items-center w-full justify-between'>
          <h1 className='text-xl font-bold'>{headerText}</h1>
          <div className='hover:bg-shark-200 px-2 py-2 rounded-md cursor-pointer'>
              <div className='flex items-center gap-2'>
                  <img className='w-4 h-4'></img>
                  <div className='flex items-center'>
                      <span>Jorge</span>
                      <FaAngleDown/>
                  </div>
              </div>
          </div>
        </div>
    </header>
  );
};

export default Header;