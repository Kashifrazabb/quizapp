import React from 'react'
import Level from './Level'
import { Container, Button } from '@material-ui/core'
import NumOfQs from './NumOfQs'
import Category from './Category'

const Home: React.FC<any> = ({handleCategoryId, CategoryId,handleStart, handleLevel, qs, level, handleQs }) => {

    return (
        <>
            <NumOfQs qs={qs} handleQs={handleQs} />
            <Category CategoryId={CategoryId} handleCategoryId={handleCategoryId}/>
            <Level handleLevel={handleLevel} level={level} />
            <Container style={{ marginTop: 50 }}>
                <Button onClick={handleStart} variant='contained' color='secondary' fullWidth>START</Button>
            </Container>
        </>
    )
}

export default Home
