import React, {Component, useEffect, useState} from "react";
import { useParams } from "react-router";


 const  UsuarioDetalle = ()=>  {
    const [usuarios, setUsuarios] = useState([])
    const { id } = useParams();


    useEffect(()=>{
        const fetchData = async()=>
        {
            const url = 'http://localhost:8080/api/user/allUsers';
            fetch(url)
            const response = await fetch(url);
            const usuariosData = await response.json();
           setUsuarios(usuariosData)
       
        }
            fetchData()

        
    },[])   


    return ( 
        <div>
            {usuarios?
            <div>
            { usuarios.map(usuario => {
                return(
                   usuario.id == id?
                    
                        <div key={usuario.id}>
                            <h1> {usuario.nombre}</h1>
                            <h2> {usuario.apellido}</h2>
                             <img src={usuario.foto}/>
                            </div>
                      
                    :
                    null)

            })}
            </div>
            :"cargando..."}
        </div>
        )     

}
export default UsuarioDetalle;
