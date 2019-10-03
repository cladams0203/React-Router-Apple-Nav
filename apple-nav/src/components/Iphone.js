import React from 'react';
import styled from 'styled-components';

const ImageDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2%;
    &:hover {
        cursor: pointer;
    }
`
const LinkContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#3e403e;
`
const H4 = styled.p `
font-size: 1.2rem;
color: white;
&:hover {
    color: blue;
}
`

export function Iphone(props) {
   
    return(
        <LinkContainer>
        {props.appleData.iphone.map((item, index) => {
            return (
                <ImageDiv key={index}>
                    <img src={item.url} alt='' />
                    <H4>{item.name}</H4>
                </ImageDiv>
            )
        })}
        </LinkContainer>
        
    )
}