import { useState } from 'react'
import './App.module.scss'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './component/header/Header'
import Home from './pages/home/Home'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/home' index element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

