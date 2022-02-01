import React from 'react';
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Navbar from '../components/Navbar'
import 'fontsource-roboto';
import '../assets/css/Dashboard.css'
import CardsHeader from '../components/CardsHeader';
import Cards from '../components/Cards'
import UltimoProducto from '../components/UltimoProducto';

const useStyles = makeStyles (() =>({
    root:{
        flexGrow: 1,
    },
    iconos:{
        color: 'white'
    },
    container:{
        paddingTop:'20px'
    },
    container2:{
        paddingTop:'20px'
    }
}))

function Dashboard (props){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader titulo='Total de productos' texto='26' color= 'rgb(59, 69, 116)'/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader titulo='Total de Usuarios' texto='3' color='rgb(59, 69, 116)'/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader titulo='Total de categorias' texto='7' color='rgb(59, 69, 116)' />
                </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.container} >
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Cards titulo='Productos' texto="La historia mas contada // The C++Programming Language // Fundamentals of Software Engineering 2nd Edition // The C Programming Language 2nd Edition // C++ How to Program // Quimica Basica // Fisica Universitaria Vol. 1 // Fisica para la Ciencia y la tecnologia 6ta Edicion // IB Biology // Introduccion al Analisis Matematico // Libro de prueba"  color='rgb(59, 69, 116)'></Cards>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Cards titulo='Total de Productos por Categoria' texto='Ciencia Ficcion:1 // Historia:2 // Matematica:1 // Comedia:2 // Geografia:3 // Fisica:1 // Informatica:1' color='rgb(59, 69, 116)'  ></Cards>
                </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.container2}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <UltimoProducto titulo='Ultimo Usuario Creado' texto="Felipe Englebienne"  className={classes.container2} color='rgb(59, 69, 116)' />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <UltimoProducto texto='Detalles' texto="email: felipe.englebienne@gmail.com // localidad: Mar del Plata // provincia: Buenos Aires // pais: Argentina"  className={classes.container2} color='rgb(59, 69, 116)'/>
                </Grid>
            </Grid>

        </div>
    );
}

export default Dashboard;