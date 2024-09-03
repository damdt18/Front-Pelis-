import { axiosConfig } from "../configurations/axiosConfig"


const obtenerGeneros = (estado = true) => {
    return axiosConfig.get('generos?estado='+estado,  {
        headers:{
        'Content-Type ' : 'application/json'}
        
    })
}


export{
    obtenerGeneros
}

 