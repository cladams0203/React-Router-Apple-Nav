import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2b302d;
    padding: 0 20px;
`
const ImgContainer = styled(NavLink) `
    display: flex; 
`
const LinkText = styled(NavLink)`
    text-decoration: none;
    color: white;
    font-size: 1.3rem;
    &:hover {
        color: lightgray;
    }
`

export function Header(props) {
    console.log(props.appleData.apple.url)
    return(
        <HeaderContainer>
            <ImgContainer to='/'>
                <img src={`${props.appleData.apple.url}`} alt=''/>
            </ImgContainer>
            <LinkText to='/imac'>MAC</LinkText>
            <LinkText to='/ipad'>iPad</LinkText>
            <LinkText to='/iphone'>iPhone</LinkText>
            <LinkText to='/watch'>Watch</LinkText>
            <LinkText to='/tv'>TV</LinkText>
            <LinkText to='/music'>Music</LinkText>
            <LinkText to='/support'>Support</LinkText>
            <ImgContainer to='/search'>
                <img src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg' alt='' />
            </ImgContainer>
            <ImgContainer to='/shop'>
                <img src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg' alt='' />
            </ImgContainer>
        </HeaderContainer>
    )
}