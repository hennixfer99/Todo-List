import styled from "styled-components";

const Container = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin: 8px 0px;
    border-bottom: 1px solid grey;
    height: 40px;
    align-items: center;
    
    div{
        margin-left: 20px;
    }
    button{
        border: none;
        background-color: transparent;
        color: white;
        opacity: 0;
        transition: 0.5s;
        cursor: pointer;
        margin-right: 20px;
    }
    :hover{
    button{
    opacity: 100;
    }
    }
`

const BlackContainer = styled.li`
    color:white;
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin: 8px 0px;
    border-bottom: 1px solid grey;
    height: 40px;
    align-items: center;
    div{
        margin-left: 20px;
    }
    button{
        border: none;
        background-color: transparent;
        color: white;
        opacity: 0;
        transition: 0.5s;
        cursor: pointer;
        margin-right: 20px;
    }
    :hover{
    button{
    opacity: 100;
    }
    }
`


export {Container, BlackContainer}
