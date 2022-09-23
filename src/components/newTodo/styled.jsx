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
        width:18px;
        height: 18px;
        margin:auto 15px;
        background-color:transparent;
        border:1px solid grey;
        border-radius:100%;
        cursor:pointer;
    } 
    .addButton:hover{
        border: 1px solid rgb(87,221,255); 
    }
    .addButton:active{
        width: 16px;
        height: 16px;
        border-radius: 100%;
        background: rgb(87,221,255);
        background: linear-gradient(153deg, rgba(87,221,255,1) 30%, rgba(192,88,243,0.8491771708683473) 74%);
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
        width:18px;
        height: 18px;
        margin:auto 15px;
        background-color:transparent;
        border:1px solid grey;
        border-radius:100%;
        cursor:pointer;
    } 
    
    .addButton:hover{
        border: 1px solid rgb(87,221,255); 
    }
    .addButton:active{
        width: 16px;
        height: 16px;
        border-radius: 100%;
        background: rgb(87,221,255);
        background: linear-gradient(153deg, rgba(87,221,255,1) 30%, rgba(192,88,243,0.8491771708683473) 74%);
    }
    

    @media screen and (max-width:375px){    

    margin: 4% 25px;
   
    
    
}
`


export {Container, BlackContainer}
