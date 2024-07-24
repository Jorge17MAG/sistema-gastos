import React, { useEffect, useState } from 'react';
import { FaMoneyBillAlt, FaWallet } from 'react-icons/fa';

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [informations, setInformations] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://192.168.18.182:8000/transacciones/ultimas/3');
        if (!response.ok) {
          throw new Error('Error al obtener las transacciones');
        }
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchInformations = async () => {
      try {
        const response = await fetch('http://192.168.18.182:8000/acumulacion/');
        if (!response.ok) {
          throw new Error('Error al obtener las acumulaciones');
        }
        const data = await response.json();
        setInformations([data]);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchTransactions();
    fetchInformations();
  }, []);

  return (
    <div className='flex-1 p-5'>
      <section>
        <div> 
          <div className="flex flex-col md:flex-row gap-4 mt-5">
            {informations.map((information, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-5">
                <div className='bg-slate-50 px-5 min-w-72 py-2 shadow-md relative rounded-md'>
                  <h1 className='text-end'>Total Ingresos</h1>
                  <p className='text-end text-green-500 font-bold text-xl'>S/ {information.total_ingresos.toFixed(2)}</p>
                  <div className='p-4 absolute left-2 -top-3 bg-green-400 rounded-md text-slate-50'>
                    <FaMoneyBillAlt className='w-8 h-8'/>
                  </div>
                </div>
                <div className='bg-slate-50 px-4 py-2 shadow-md relative min-w-72 rounded-md'>
                  <h1 className='text-end'>Total Gastos</h1>
                  <p className='text-end text-red-500 font-bold text-xl'>S/ {information.total_gastos.toFixed(2)}</p>
                  <div className='p-4 absolute left-2 -top-3 bg-red-500 rounded-md text-slate-50'>
                    <FaWallet className='w-8 h-8'/>
                  </div>
                </div>
                <div className='bg-slate-50 px-4 py-2 shadow-md relative min-w-72 rounded-md'>
                  <h1 className='text-end'>Saldo Actual</h1>
                  <p className='text-end text-sky-500 font-bold text-xl'>S/ {(information.total_ingresos - information.total_gastos).toFixed(2)}</p>
                  <div className='p-4 absolute left-2 -top-3 bg-sky-500 rounded-md text-slate-50'>
                    <FaWallet className='w-8 h-8'/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </section>
      <section>
        <h2 className='mt-5 mb-5 text-xl font-bold'>Últimas Transacciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-5">
            {transactions.map((transaction, index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded-md text-sm">
                <h3 className={`text-base font-bold ${transaction.tipo === 'Ingreso' ? 'text-green-500' : 'text-red-500'}`}>{transaction.tipo}</h3>
                <p className="text-gray-600 mb-4">{transaction.descripcion}</p>
                <div className="flex justify-between items-center">
                  <span className='text-gray-500'>{transaction.fecha}</span>
                  <span className={`font-bold ${transaction.tipo === 'Ingreso' ? 'text-green-500' : 'text-red-500'}`}>
                    {transaction.tipo === 'Ingreso' ? `+$${transaction.monto}` : `-$${Math.abs(transaction.monto)}`}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </section>
      <section>
        <h2 className='mt-5 mb-20'>Otros Datos Relevantes</h2>
      </section>
    </div>
  );
};

export default Home;
