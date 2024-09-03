import React from 'react'
import dayjs from 'dayjs'
import TrGeneros from './TrGeneros'



export default function table({generos=[]}) {
  return (
    
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Creado</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        generos.map((genero, index) => {
                            return (
                               <TrGeneros genero= {genero} key={index+1} index={index}/>
                            ) 
                        })
                    }

                </tbody>
            </table>

        </div>
    
  )
}
