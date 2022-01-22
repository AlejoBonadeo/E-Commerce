import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Card, Typography, CardContent, CardActions} from '@material-ui/core/'

const useStyles = makeStyles (() =>({
    root:{
        textAlign: 'center',
        background: 'black'
    },
    titulo:{
        
    }

}))


function Navbar (props){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Card className={classes.root}>
                <CardContent className={classes.titulo}>
                    {props.titulo}

                </CardContent>
            </Card>

        </div>
    );
}
export default Navbar