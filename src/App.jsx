import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InvoiceDashboard from './components/Invoice/InvoiceDashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InvoicePage from './components/Invoice/InvoicePage'

function App() {


  return (
    <BrowserRouter>
 <div className='bg-gray-100 flex items-center justify-center'>
  <Routes>
    <Route path='/' element={<InvoiceDashboard/>}/>
    <Route path='/create' element={<InvoicePage/>}/>
  </Routes>

    </div>
    </BrowserRouter>

  )
}

export default App
