import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Card, Typography, CardContent, CardActions} from '@material-ui/core/'

const useStyles = makeStyles (() =>({
    root:{
        textAlign: 'center',
        background: 'black',
        padding:'5px'
    },
    titulo:{
        fontWeight:'bold',
        fontSize: 20,
        color: 'white'
    },
    texto:{
        fontSize:18,
        color:'white'
    }
}))


function Cards (props){
    const classes = useStyles();
    return(
        <div className={classes.root}>
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
    );
}
export default Cards