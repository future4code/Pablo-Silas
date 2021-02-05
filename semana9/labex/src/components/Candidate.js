import React from 'react'
import styled from 'styled-components';

const Box = styled.div `
    display: flex;
    justify-content:space-between;
`

const IconLike = styled.img `

    width: 25px;
    height:25px;
    padding: 10px;
    :hover{
        cursor: pointer;
        transform: scale(1.2);
        transition: linear 0.5s;
    }
`

const IconDeslike = styled.img `
    padding: 10px;
    width: 20px;
    height:20px;
    margin-right: 15px;
    
    :hover{
        cursor: pointer;
        transform: scale(1.2);
        transition: linear 0.5s;
    }
`

const BoxIcon = styled.div `
    position: relative;
    bottom: 18px;  
`
const Candidate = (props) => {
    const approveCandidate = () => {
        props.decideCandidate(true, props.candidate.id)
    }

    const rejectCandidate = () => {
        props.decideCandidate(false, props.candidate.id)
    }

    return <Box>
        <p>{props.candidate.name}</p>
        <BoxIcon>
            <IconLike src='https://i.imgur.com/6B6GhA5.png' onClick={approveCandidate}/>
            <IconDeslike src='https://i.imgur.com/W9MSECT.png' onClick={rejectCandidate}/>
        </BoxIcon>
        
    </Box>
}

export default Candidate;