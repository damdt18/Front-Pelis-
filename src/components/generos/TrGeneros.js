import React from 'react'
import dayjs from 'dayjs'

export default function TrGeneros({ index, genero }) {
    return (
        
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{genero.nombre}</td>
            <td>{genero.descripcion}</td>
            <td>{dayjs(genero.fechaCreacion).format('DD/MMM/YYYY')}</td>
            <td>{genero.estado}</td>
            <td>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={genero.estado} />
                    <label className="form-check-label" for="flexSwitchCheckChecked">{genero.estado ? "activo" : "inactivo"} </label>
                </div>
            </td>
        </tr>



    )
}
