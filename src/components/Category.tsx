import React from 'react'
import {Container,Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {CategoriesApi} from '../services/CategoriesApi'

const useStyles = makeStyles({
    shape:{width:'200px',height:'200px',display:'flex',alignItems:'center',justifyContent:'center',margin:'2px'}
}) 

const Category:React.FC<any> = ({CategoryId,handleCategoryId}) => {
    const classes=useStyles()
    return (
        <Container style={{margin:'50px auto'}}>
            <Grid container justify='center'>
                {CategoriesApi.map(i=>
                <Grid key={i.id} item style={{background:i.id===CategoryId?i.color:'white',color:i.id===CategoryId?'white':i.color,border:`2px solid ${i.color}`}} className={classes.shape} onClick={()=>handleCategoryId(i.id,i.name)}>{i.name}</Grid>)}
            </Grid>
        </Container>
    )
}

export default Category
