import styled from "styled-components";
import check from "../../imgs/icon-check.svg"

const Container = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin: 8px 0px;
    border-bottom: 1px solid grey;
    height: 40px;
    align-items: baseline;
    .checkbox{
        margin: 0 0 0 0;
        padding: 0 0 0 0;
        appearance: none;
        width: 18px;
        height: 18px;
        border:1px solid grey;
        border-radius: 100%;
        color: grey;
        margin:auto 10px;
        cursor: pointer;
        position: relative;
    }
    .checkbox:hover{
        border: 1px solid rgb(87,221,255); 
    }
    .checkbox:before{
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 100%;
        background-image:url(${check}),linear-gradient(153deg, rgba(87,221,255,1) 30%, rgba(192,88,243,0.8491771708683473) 74%);
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0;
        transition: 1s;
    }
    .checkbox:checked:before{
        opacity:1; 
    }
    .checkbox:checked + label{
        text-decoration-line:line-through;
        color: grey;
    }
    

    div{
        display: flex;
        align-items: baseline;
        margin: 0 0 0 5px;
    }
    div label{
        margin-left: 7px;
    }
    button{
        border: none;
        background-color: transparent;
        color: white;
        opacity: 0;
        transition: 0.5s;
        cursor: pointer;
        margin: 6px 20px 0 0;
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
    align-items: baseline;
    .checkbox{
        margin: 0 0 0 0;
        padding: 0 0 0 0;
        appearance: none;
        width: 18px;
        height: 18px;
        border:1px solid grey;
        border-radius: 100%;
        color: grey;
        margin:auto 10px;
        cursor: pointer;
        position: relative;
    }
    .checkbox:hover{
        border: 1px solid rgb(87,221,255); 
    }
    .checkbox:before{
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 100%;
        background-image:url(${check}),linear-gradient(153deg, rgba(87,221,255,1) 30%, rgba(192,88,243,0.8491771708683473) 74%);
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0;
        transition: 1s;
    }
    .checkbox:checked:before{
        opacity:1; 
    }
    .checkbox:checked + label{
        text-decoration-line:line-through;
        color: grey;
    }

    div{
        display: flex;
        align-items: baseline;
        margin: 0 0 0 5px;
    }
    div label{
        margin-left: 7px;
    }
    button{
        border: none;
        background-color: transparent;
        color: white;
        opacity: 0;
        transition: 0.5s;
        cursor: pointer;
        margin: 6px 20px 0 0;
    }
    :hover{
    button{
    opacity: 100;
    }
    }
`


export {Container, BlackContainer}
