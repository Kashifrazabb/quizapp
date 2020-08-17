import React from 'react'
import { Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

var EasyColor = 'green'
var MediumColor = '#fed330'
var DifficultColor = 'red'

const useStyles = makeStyles({
    easy: { color: EasyColor, textAlign: 'center' },
    medium: { color: MediumColor, textAlign: 'center' },
    hard: { color: DifficultColor, textAlign: 'center' }
})

const Level: React.FC<any> = ({ handleLevel, level }) => {
    const classes = useStyles()

    const Easy = () => level === 'easy' ? `5px solid ${EasyColor}` : '5px solid transparent'
    const Medium = () => level === 'medium' ? `5px solid ${MediumColor}` : '5px solid transparent'
    const Hard = () => level === 'hard' ? `5px solid ${DifficultColor}` : '5px solid transparent'

    return (
        <Container>
            <Paper elevation={2} style={{padding:'50px 0'}}>
                <Grid container justify='center' spacing={2}>
                    <Grid item id='easy' onClick={handleLevel} style={{ border: Easy() }}>
                        <img src="/static/easy.svg" width='200' alt="" />
                        <h1 className={classes.easy}>Easy</h1>
                    </Grid>
                    <Grid item id='medium' onClick={handleLevel} style={{ border: Medium() }}>
                        <img src="/static/medium.svg" width='200' alt="" />
                        <h1 className={classes.medium}>Medium</h1>
                    </Grid>
                    <Grid item id='hard' onClick={handleLevel} style={{ border: Hard() }}>
                        <img src="/static/hard.svg" width='200' alt="" />
                        <h1 className={classes.hard}>Hard</h1>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default Level
