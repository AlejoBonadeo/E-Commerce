import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {Card, Typography, CardContent, CardActions} from '@material-ui/core/'

const useStyles = makeStyles(()=>({
    root:{
        textAlign='center',
        background=props.color
    }
}))


function CardsHeader (props){

    const useStyles = makeStyles(()=>({
        root:{
            textAlign='center',
            background=props.color
        },
        texto:{
            fontSize:22,
            color: props.font
        },
        titulo:{
                fontWeight:'bold',
                fontSize:22,
                color:props.font
        }
    }))

    const classes = useStyles();
    return(
        <Card>
            <CardContent>
                {props.icono}
                <Typography className={classes.titulo}>
                    {props.titulo}
                </Typography>
                <Typography className={classes.texto}>
                    {props.texto}
                </Typography>
            </CardContent>
        </Card>
    );
}
export default CardsHeader