import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'


function UltimoProducto(props){

    const useStyles = makeStyles(()=>({
        root:{
            background:props.color
        },
        texto:{
            fontSize:22,
            color: props.font,
            textAlign:'center'
        },
        titulo:{
                fontWeight:'bold',
                fontSize:22,
                color:props.font,

        },
        imagen:{
            borderRadius:'50%'
        }
    }))
    const classes = useStyles();
    return(
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.titulo}>
                        {props.titulo}
                    </Typography>
                    <Typography className={classes.texto}>
                        {props.texto}
                    </Typography>
                </CardContent>
              
            </Card>
        </div>
    )
}
export default UltimoProducto;