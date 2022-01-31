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
        flexGrow: 1
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
                <CardsHeader titulo='Total de productos' texto='numero del total*' color='blue'/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader titulo='hello world' texto='numero del total*' color='blue'/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader titulo='Total de categorias' texto='numero del total*' color='blue' />
                </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.container} >
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Cards titulo='hola'></Cards>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Cards titulo='hola'></Cards>
                </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.container2}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <UltimoProducto titulo='hola'className={classes.container2} color='red'  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <UltimoProducto texto='Soy el texto'className={classes.container2} color='red'/>
                </Grid>
            </Grid>

        </div>
    );
}

export default Dashboard;