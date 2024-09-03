import React, { useEffect, useState } from 'react'
import { obtenerGeneros } from '../../services/generoServices'

import Table from './Table'

import Error from './Error'
import Toogle from './Toogle'

export default function Generos() {

 
    const [generos, setGeneros] = useState([])

    const [estado, setEstado] = useState(true)

    const [error, setError]= useState(false)

    useEffect(() => {
        obtenerTodos()
    }, [estado])



const cambiarEstado = () => {
    setEstado(!estado)
}





    const obtenerTodos = async () => {
        try {
            const { data } = await obtenerGeneros(estado)
            setGeneros(data)
            if (error){setError(false)}
        } catch (e) {
            console.error(e)
            setError(true)

        }
    }

   


    return (
        <>
        <Toogle cambiarEstado={cambiarEstado} estado={estado}/>

        {error ? <Error /> : null}
        <Table generos={generos}/>
        </>
    )
}
