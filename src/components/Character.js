// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledWars = styled.div `
display: flex;
text-align: center;
align-items: center;
margin-top: 1%;
flex-wrap: wrap;
justify-content: space-evenly;
border: 1px solid black;
background-color: white;
`

const Character = (props) => {
    const {character} = props
    return (
        <StyledWars>
            <h3>Name: {character.name}</h3>
            <p>DOB: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Weight: {character.mass}</p>
            <p>Skin Color: {character.skin_color}</p>
        </StyledWars>
    )
}

export default Character
