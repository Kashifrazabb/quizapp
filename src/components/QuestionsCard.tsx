import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Box, Grid, Button } from '@material-ui/core'
import clsx from 'clsx'
import Submit from './Submit'

var AColor = '#1988ED'
var BColor = '#FF9E2D'
var CColor = '#D44F4E'
var DColor = '#04854B'

const useStyles = makeStyles({
    options: {
        textAlign: 'center', minHeight: 60, padding: 10,
        fontFamily: 'verdana', fontSize: '20px', lineHeight: '60px', color: 'white',
        cursor: 'pointer',
        border: '3px solid transparent',
        '&:hover': {
            background: 'white'
        }
    },
    op1: { background: AColor },
    op2: { background: BColor },
    op3: { background: CColor },
    op4: { background: DColor }
})

const QuestionsCard: React.FC<any> = ({ data, qs, level,name }) => {
    const classes = useStyles()
    const [current, setCurrent] = useState<number>(0)
    const [userOption, setUserOption] = useState<boolean>(false)
    const [userSelect, setUserSelect] = useState<boolean[]>([])
    const [result, setResult] = useState<any>()
    const [id, setId] = useState<string>('')

    if (data.length === 0) return <h2 style={{ textAlign: 'center', lineHeight: '100vh', height: '100vh' }}>Loading ...</h2>

    const { question, option, correct_answer } = data[current]

    const handleUserOption = (e: React.FormEvent<EventTarget>) => {
        const choice: string = (e.currentTarget as HTMLTextAreaElement).innerHTML.replace(/[ABCD]. /, '')
        const id = (e.currentTarget as HTMLTextAreaElement).id
        setUserOption(choice === correct_answer)
        setId(id)
    }

    const handleNext = () => {
        setUserSelect([...userSelect, userOption])
        setCurrent(current + 1)
        setId('')
    }

    const handleSubmit = () => {
        setResult(userSelect.filter(picked => picked === true).length)
    }

    const OptionA = () => id === 'A' ? [`3px solid ${AColor}`, AColor, 'white'] : ['3px solid transparent', 'white', AColor]
    const OptionB = () => id === 'B' ? [`3px solid ${BColor}`, BColor, 'white'] : ['3px solid transparent', 'white', BColor]
    const OptionC = () => id === 'C' ? [`3px solid ${CColor}`, CColor, 'white'] : ['3px solid transparent', 'white', CColor]
    const OptionD = () => id === 'D' ? [`3px solid ${DColor}`, DColor, 'white'] : ['3px solid transparent', 'white', DColor]


    if (result >= 0) return <Submit result={result} length={data.length} />

    return (
        <>
            <Container style={{ marginTop: '50px', marginBottom: '30px' }}>
                <Grid container spacing={3}>
                    <Grid item>
                        <Typography>Category: {<b>{name}</b>}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{ textTransform: 'capitalize' }}>Difficulty Level: {<b>{level === 'difficult' ? 'hard' : level}</b>}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>Number of Questions: {<b>{qs}</b>}</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography>{(userSelect.length === qs - 1) ? 'Last Question' : <span>Remaining Questions: <b>{qs - userSelect.length}</b> </span>}</Typography>
                    </Grid>
                    {current < data.length - 1
                        ? <Grid item><Button variant='contained' color='secondary' onClick={handleNext}>Next</Button></Grid>
                        : <Grid item><Button variant='contained' color='primary' onClick={handleSubmit}>Submit</Button></Grid>}
                </Grid>
            </Container>
            <Container style={{ background: '#E4FAF7', padding: '50px' }}>
                <Typography variant='h3' align='center' style={{ marginBottom: '50px' }}>{question}</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box style={{ border: OptionA()[0], color: OptionA()[1], background: OptionA()[2] }} component='div' id='A' className={clsx(classes.options, classes.op1)} onClick={handleUserOption}>A. {option[0]}</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box style={{ border: OptionB()[0], color: OptionB()[1], background: OptionB()[2] }} component='div' id='B' className={clsx(classes.options, classes.op2)} onClick={handleUserOption}>B. {option[1]}</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box style={{ border: OptionC()[0], color: OptionC()[1], background: OptionC()[2] }} component='div' id='C' className={clsx(classes.options, classes.op3)} onClick={handleUserOption}>C. {option[2]}</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box style={{ border: OptionD()[0], color: OptionD()[1], background: OptionD()[2] }} component='div' id='D' className={clsx(classes.options, classes.op4)} onClick={handleUserOption}>D. {option[3]}</Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default QuestionsCard
