import React, {Component, useEffect, useState} from "react";
import { useHistory } from "react-router";
const ListaUsuarios =() =>{
    const history = useHistory()

    const [usuarios,setUsuarios] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            const url = 'http://localhost:8080/api/user/allUsers';
            fetch(url)
            const response = await fetch(url);
            const usuariosData = await response.json();
            setUsuarios(usuariosData)
        }
            fetchData()
    },[])   
    
     const handleClick = (id) =>{
        history.push(`/UsuariosDetalle/${id}`)
    }
    //
        return(
            <div>
                {console.log(usuarios)}
                    {usuarios ? "cantidad " + usuarios.length:null }
                    {usuarios.map(usuario =>{
                        return( 
                            <div key={usuario.id}>
                            <p> Id: {usuario.id}</p>
                            <p> Nombre: {usuario.nombre}</p>
                            <p> Email: {usuario.email}</p>
                            <button type="button" onClick={() => handleClick(usuario.id) } >Detalle</button>
                       </div>    

                        )
                    })}
            </div>
        )
      }

export default ListaUsuarios;
