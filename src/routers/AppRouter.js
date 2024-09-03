import React from 'react'
import NavBar from '../components/ui/NavBar'
import Generos from '../components/generos/Generos'
import Footer from '../components/ui/Footer'
import { Routes, Route } from 'react-router-dom'
import Directores from '../components/directores/Directores'
import Productoras from '../components/productoras/Productoras'
import Tipos from '../components/tipos/Tipos'
import Medias from '../components/medias/Medias'
import NotFound from '../components/notFound/NotFound'

export default function appRouter() {
  return (
    <div className="container">
       <NavBar/>
       <Routes>
        <Route path='/' element={<Generos/>}/>
        <Route path='/directores' element={<Directores/>}/> 
        <Route path='/productoras' element={<Productoras/>}/> 
        <Route path='/tipos' element={<Tipos/>}/> 
        <Route path='/series-peliculas' element={<Medias/>}/> 
        <Route path='*' element={<NotFound/> }/>
       </Routes>
     
       <Footer/>
      </div>
  )
}

