import React from 'react'

const Submit:React.FC<any> = ({length,result}) => {
    return (
        <div>
            <h1>You Score: {result}/{length} </h1>
        </div>
    )
}

export default Submit
