import React, {Component, useEffect, useState} from "react";
import { useParams } from "react-router";


 const  ProductoDetalle = ()=>  {
    const [productos, setProductos] = useState([])
    const { id } = useParams();


    useEffect(()=>{
        const fetchData = async()=>
        {
            const url = 'http://localhost:8080/api/producto/AllProducts';
            fetch(url)
            const response = await fetch(url);
            const productosData = await response.json();
            setProductos(productosData)
       
        }
            fetchData()

        
    },[])   


    return ( 
        <div>
            {productos?
            <div>
            { productos.map(producto => {
                return(
                    producto.id == id?
                    
                        <div key={producto.id}>
                            <h1> {producto.titulo}</h1>
                            <h2> {producto.detalle}</h2>
                             <img src={producto.foto}/>
                            </div>
                      
                    :
                    null)

            })}
            </div>
            :"cargando..."}
        </div>
        )     

}
export default ProductoDetalle;