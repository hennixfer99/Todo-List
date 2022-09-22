import styled from "styled-components";
import desktopLight from "../imgs/desktop-light.jpg"
import mobileLight from "../imgs/bg-mobile-light.jpg"
import desktopDark from "../imgs/desktop-dark.jpg"
import mobileDark from "../imgs/bg-mobile-dark.jpg"


const Container = styled.div`
    background-image: url(${desktopLight});
    background-color: hsl(0, 0%, 98%);
    background-size: 100%;
    background-repeat: no-repeat;
    max-width:100%;
    padding-bottom:39px;
    box-sizing: border-box;
    
    header{
        display: flex;
        justify-content:space-between;
        margin: 0 auto;
        max-width: 500px;
    }

    header button{
        background-color:transparent;
        border:none;
    }

    h1{
        color: white;
        font-weight:700;
        padding: 3% 0;
        max-width: 500px;
    }
    main{
        font-size:18px;
        margin: 0 auto;
        display:flex;
        flex-direction:column;
        max-width: 500px;       
    } 

    .menu{
        margin:5% 0 0 0;
        display:flex;
        flex-direction:column;
        background-color: white;
        height: 293px;
        border-radius: 8px 8px 0px 0px;
        -webkit-box-shadow: 3px 20px 50px -2px rgba(0,0,0,0.41); 
        box-shadow: 3px 20px 50px -2px rgba(0,0,0,0.41);
    }
    
    ul{
        overflow-y:auto;
        background-color:transparent;
        height:305px;
        border-radius: 8px 8px 0px 0px;
        padding: 0;
        margin: 0;
    }
    
    .allButtons{
        border-top:1px solid grey;
        padding: 2px 15px 0px 15px;     
        display:flex;
        justify-content: space-between;
        color:grey;
        font-size:12px;
        align-items: baseline;
        background-color: white;
        border-radius: 0px 0px 8px 8px;      
    }

    .allButtons button{
        background-color:transparent;
        border:none;
        cursor:pointer;
        color:grey;
    }
    .allButtons button:hover{
        color: black;
    }
    .allButtons button:focus{
        color: hsl(220, 98%, 61%);
    }

    .filterButtons{
        border: none;
        background-color:transparent;
    }

    .footerTxt{
        padding-top:3%;
        padding-bottom:2.1%;
        color:grey;
        font-size:12px;
        text-align:center;
    }



    @media screen and (max-width:375px){
    background-image: url(${mobileLight});
    

    header{
        padding: 0 25px 0 25px;
    }
    
    .allButtons{
        margin: 0 25px;
        font-size: 12px;
    }
    .allButtons button{
        font-size: 12px;
    }
    .filterButtons{
        display:flex;
        justify-content:space-around;
        height: 35px;
        margin: 5% 25px;
        border-radius: 8px;
        background-color: white;
    }
    .filterButtons button{
        font-weight: 700;
        font-size: 14px;
        margin: 0 auto;
        border:none;
        background-color:transparent;
        color:grey;
    }
    .filterButtons button:hover{
        color: hsl(236, 33%, 92%);
    }
    .filterButtons button:focus{
        color: hsl(220, 98%, 61%);
    }
    .menu{
        max-height:320px;
        margin: 0 25px;
    }

}
`

const BlackContainer = styled.div`
    background-image: url(${desktopDark});
    background-color:hsl(235, 21%, 11%);
    background-size: 100%;
    background-repeat: no-repeat;
    max-width:100%;
    padding-bottom:39px;
    box-sizing: border-box;

    header{
        display: flex;
        justify-content:space-between;
        margin: 0 auto;
        max-width: 500px;
    }

    header button{
        background-color:transparent;
        border:none;
    }

    h1{
        color: white;
        font-weight:700;
        padding: 3% 0;
        max-width: 500px;
    }
    main{
        font-size:18px;
        margin: 0 auto;
        display:flex;
        flex-direction:column;
        max-width: 500px;       
    }   

    .menu{
        margin:5% 0 0 0;
        display:flex;
        flex-direction:column;
        background-color: hsl(235, 24%, 19%);
        height: 293px;
        border-radius: 8px 8px 0px 0px;
        -webkit-box-shadow: 3px 20px 50px -2px rgba(0,0,0,0.41); 
        box-shadow: 3px 20px 50px -2px rgba(0,0,0,0.41);
    }
    
    ul{
        overflow-y:auto;
        background-color:transparent;
        height:305px;
        border-radius: 8px 8px 0px 0px;
        padding: 0;
        margin: 0;
        max-width: 100%;
    }
    
    .allButtons{
        border-top:1px solid grey;
        padding: 2px 15px 0px 15px;     
        display:flex;
        justify-content: space-between;
        color:grey;
        font-size:12px;
        align-items: baseline;
        background-color: hsl(235, 24%, 19%);
        border-radius: 0px 0px 8px 8px;      
    }

    .allButtons button{
        background-color:transparent;
        border:none;
        cursor:pointer;
        color:grey;
    }
    .allButtons button:hover{
        color: hsl(236, 33%, 92%);
    }
    .allButtons button:focus{
        color: hsl(220, 98%, 61%);
    }

    .filterButtons{
        border: none;
        background-color:transparent;
    }
    
    .footerTxt{
        padding-top:3%;
        padding-bottom:2.1%;
        color:grey;
        font-size:12px;
        text-align:center;
    }



    @media screen and (max-width:375px){
    background-image: url(${mobileDark});
    

    header{
        padding: 0 25px 0 25px;
    }
    
    .allButtons{
        margin: 0 25px;
        font-size: 12px;
    }
    .allButtons button{
        font-size: 12px;
    }
    .filterButtons{
        display:flex;
        justify-content:space-around;
        height: 35px;
        margin: 5% 25px;
        border-radius: 8px;
        background-color: hsl(235, 24%, 19%);
    }
    .filterButtons button{
        font-weight: 700;
        font-size: 14px;
        margin: 0 auto;
        border:none;
        background-color:transparent;
        color:grey;
    }
    .filterButtons button:hover{
        color: hsl(236, 33%, 92%);
    }
    .filterButtons button:focus{
        color: hsl(220, 98%, 61%);
    }
    .menu{
        max-height:320px;
        margin: 0 25px;
    }

}
`


export {Container, BlackContainer}
