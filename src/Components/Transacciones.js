import React, { useEffect, useState } from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa'; 
import AddTransaccion from './AddTransaccion';

const Transacciones = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [currentTransaction, setCurrentTransaction] = useState(null);

  const fetchTransactions = async () => {
    try {
      const response = await fetch('http://192.168.18.182:8000/transacciones/');
      if (!response.ok) {
        throw new Error('Error al obtener las transacciones');
      }
      const data = await response.json();
      console.log(data);
      setTransactions(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleAddTransaction = async (newTransaction) => {
    await fetchTransactions();
    setIsOpen(false); 
  };

  const handleUpdateTransaction = async (updatedTransaction) => {
    await fetchTransactions();
    setIsOpen(false);
    setCurrentTransaction(null);
  };

  const openModal = (transaction) => {
    setCurrentTransaction(transaction);
    setIsOpen(true);
  };

  return (
    <div className='flex-1 p-5'>
      <button
        className='bg-green-600 hover:bg-green-700 text-slate-50 p-2 rounded-md mb-5'
        onClick={() => openModal(null)}
      >
        Nueva Transacción
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {transactions.map((transaction, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">{transaction.tipo}</h3>
            <p className="text-gray-600 mb-4">{transaction.descripcion}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{transaction.fecha}</span>
              <span className={`text-lg font-bold ${transaction.tipo === 'Ingreso' ? 'text-green-500' : 'text-red-500'}`}>
                {transaction.tipo === 'Ingreso' ? `+$${transaction.monto}` : `-$${Math.abs(transaction.monto)}`}
              </span>
            </div>
            <div className='flex justify-end gap-2 text-slate-50 mt-2'>
              <button className='bg-sky-400 hover:bg-sky-500 p-2' onClick={() => openModal(transaction)}><FaPencilAlt /> </button>
              <button className='bg-red-600 hover:bg-red-700 p-2'><FaTrash /></button>
            </div>
          </div>
        ))}
      </div>
      
      <AddTransaccion
        transaction={currentTransaction}
        isOpen={isOpen}
        onCloseModal={() => setIsOpen(false)}
        onAddTransaction={handleAddTransaction}
        onUpdateTransaction={handleUpdateTransaction}
      />
    </div>
  );
};

export default Transacciones;
