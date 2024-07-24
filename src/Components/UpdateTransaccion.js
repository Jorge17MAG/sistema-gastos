import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const AddTransaccion = ({idTransaccion, isOpen, onCloseModal, onAddTransaction }) => {
  const [tipo, setTipo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTransaction = { tipo, descripcion, monto: parseFloat(monto), fecha };

    try {
      const response = await fetch('http://192.168.18.182:8000/transacciones/' + {idTransaccion}, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransaction),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar la transacción');
      }

      const data = await response.json();
      onAddTransaction(data);
      setTipo('');
      setDescripcion('');
      setMonto('');
      setFecha('');
      onCloseModal(); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={`fixed z-40 inset-0 bg-slate-700 bg-opacity-30 backdrop-blur-sm flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className='bg-white w-10/12 md:w-6/12 p-5 rounded-md relative'>
        <h2 className='text-xl font-bold mb-4'>Nueva Transacción</h2>
        <form onSubmit={handleSubmit} className='bg-white'>
          <div className='mb-4'>
            <label className='block text-gray-700'>Tipo:</label>
            <select value={tipo} onChange={(e) => setTipo(e.target.value)} className='w-full p-2 border rounded'>
              <option value=''>Seleccione un tipo</option>
              <option value='Ingreso'>Ingreso</option>
              <option value='Gasto'>Gasto</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Descripción:</label>
            <input
              type='text'
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Monto:</label>
            <input
              type='number'
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Fecha:</label>
            <input
              type='date'
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='flex gap-1 justify-end'>
            <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded'>
                Añadir Transacción
            </button>
            <button className='bg-red-500 py-2 px-4 rounded text-white hover:bg-red-600' onClick={onCloseModal}>
            Cerrar
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default AddTransaccion;
