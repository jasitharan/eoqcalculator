import React from 'react';
import { Header } from './components/Header';
import { FinalBalance } from './components/FinalBalance';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className='cards'>
        <div className='card'>
          <Header /> 
          <FinalBalance />
          <AddTransaction />
        </div>
        <div className='card'>
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
