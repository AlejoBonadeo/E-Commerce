import React, {useState, useEffect, Component} from "react";

class ListProducts extends Component{
    constructor(props){
        super(props);{
            this.state ={
                productos:''
            }
        }
    }

    componentDidMount(){
        const url = 'http://localhost:8080/user/AllUsers';
        fetch(url)
        .then(response =>{response.json()})
        .then(data => {this.setState({productos: data.nombre})})
        .catch(e => {console.log(e)})
        
    }

    render(){
        
        let contenido
            if(this.state.productos == ''){
            contenido = <div>Cargando...</div>
            }else{
                contenido = <div>{this.state.productos}</div>
            }
            return (contenido)
    }

}
export default ListProducts;
