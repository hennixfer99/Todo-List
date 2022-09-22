import styled from "styled-components";

const Container = styled.form`
    

    background-color: white;
    height: 45px;
    border-radius: 8px;
    display: flex;
    align-items: center;    
    
    #txtInput{
        background-color: white;
        font-size:18px;
        border: none;
        outline: none;
        }

    .addButton{
        width:15px;
        height: 15px;
        margin:auto 15px;
        background-color:transparent;
        border:1px solid grey;
        border-radius:100%;
        cursor:pointer;
    } 
    
    .addButton:active{
        background-color:#834cdd;

    }
    


    @media screen and (max-width:375px){

    
        margin: 4% 25px;
    
}
`

const BlackContainer = styled.form`
    

    background-color: hsl(235, 24%, 19%);
    height: 45px;
    border-radius: 8px;
    display: flex;
    align-items: center;

    #txtInput{
    background-color: hsl(235, 24%, 19%);
    font-size:18px;
    border: none;
    outline: none;
    color:white;
    }


    .addButton{
        width:15px;
        height: 15px;
        margin:auto 15px;
        background-color:transparent;
        border:1px solid grey;
        border-radius:100%;
        cursor:pointer;
    } 
    
    .addButton:active{
        background-color:#834cdd;
    }


    @media screen and (max-width:375px){    

    margin: 4% 25px;
   
    
    
}
`


export {Container, BlackContainer}
