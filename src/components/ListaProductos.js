import React, {Component, useEffect, useState} from "react";
import { useHistory } from "react-router";
const ListaProductos =() =>{
    const history = useHistory()

    const [productos,setProductos] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            const url = 'http://localhost:8080/api/producto/AllProducts';
            fetch(url)
            const response = await fetch(url);
            const productosData = await response.json();
            setProductos(productosData)
        }
            fetchData()
    },[])   
    
     const handleClick = (id) =>{
        history.push(`/ProductosDetalle/${id}`)
    }
    //
        return(
            <div>
                {console.log(productos)}
                    {productos ? "cantidad " + productos.length:null }
                    {productos.map(producto =>{
                        return( 
                            <div key={producto.id}>
                            <p> Id:{producto.id}</p>
                            <p> Titulo:{producto.titulo}</p>
                            <p> Descripcion:{producto.detalle}</p>
                            <button type="button" onClick={() => handleClick(producto.id) } >Detalle</button>
                       </div>    

                        )
                    })}
            </div>
        )
      }

export default ListaProductos;