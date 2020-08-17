import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'
import  {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles ({
    select:{outline:'none',width:'100%',height:30}
})

var NumberOfQuestions: number[] = []
for (let i = 5; i <= 100; i = i + 5) {
    NumberOfQuestions.push(i)
}

const NumOfQs:React.FC<any> = ({qs,handleQs}) => {
    const classes = useStyles()
    return (

        <Container style={{ marginTop: '50px' }}>
            <Grid container>
                <Grid item xs={2}>
                    <Typography variant='h6' color='secondary'><b>Number of Q's: </b></Typography>
                </Grid>
                <Grid item xs={10}>
                    <select value={qs} onChange={handleQs} className={classes.select}>
                        {NumberOfQuestions.map((i, k) => <option key={k} value={i}>{i}</option>)}
                    </select>
                </Grid>
            </Grid>
        </Container>
    )
}

export default NumOfQs
