import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ListaUsuarios from '../components/ListaUsuarios'
import UsuarioDetalle from '../components/UsuarioDetalle';
import ListaProductos from '../components/ListaProductos';
import ProductoDetalle from '../components/ProductoDetalle';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/Usuarios" component={ListaUsuarios}/>
        <Route exact path="/UsuariosDetalle/:id" component={UsuarioDetalle}/>
        <Route exact path="/Productos" component={ListaProductos}/>
        <Route exact path="/ProductosDetalle/:id" component={ProductoDetalle}/>
      </Switch>    
    </BrowserRouter>
  );
}

export default App;
