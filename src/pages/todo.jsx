import  {Container, BlackContainer} from "./styled";
import {useState, useEffect} from 'react';
import sun from "../imgs/icon-sun.svg"
import moon from "../imgs/icon-moon.svg"
import deletebtn from "../imgs/icon-cross.svg"

function Homepage(){

    const [width, setWidth] = useState(window.innerWidth);
    const [darkMode, setDarkMode] = useState('light');
    const [filter, setFilter] = useState([]);

    const breakpoint = 375;

    useEffect(() => {
        const windowSize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", windowSize);
        return () => {
            window.removeEventListener("resize", windowSize)
        };
    }, [darkMode])

    const changeColor = () => {
        darkMode === 'light' ? setDarkMode('dark') : setDarkMode('light')
    }
    // const ul = document.querySelector('todoList')
    // const buttonadd = document.querySelector('.addButton')
    
    // buttonadd.addEventListener("click",       
    //     ul.appendChild('li')
    // )

    const li = (text) => {
        return (
            <li><input type="checkbox"/> <label>{text}</label> <button><img src={deletebtn} alt="remove" /></button></li>
        )
    }




    if(darkMode === 'light'){
        return(<Container>
            <header>         
            <h1>T O D O</h1> <button onClick={changeColor}><img alt ="themeImg" src= {moon}/></button>
            </header>            
            <main>
            <div className="addInput">            
            
            <button className= "addButton" type="submit" /><input className="txtInput" type="text" placeholder = "Create a new todo..." />
            
            </div> 
            <div className="menu">
            <ul className="todoList">
        
            {li}
            
            </ul> 

            </div>
            {width > breakpoint ? (

            <div className="allButtons">                
                <p>5 items left</p>
                
                <div className="filterButtons">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
                </div>
                <button>Clear Completed</button>
            </div>
            
            ):(
                <>
                <div className="allButtons">
                <p>5 items left</p>
                <button>Clear Completed</button>
                </div>
                
                <div className="filterButtons">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
                </div>
                </>
            )}   
            </main>
            <footer><p className="footerTxt">Drag and drop to reorder list</p></footer>
        </Container>            
        )
    }else{
        return(
            <BlackContainer>
            <header>         
            <h1>T O D O</h1> <button onClick={changeColor}><img alt ="themeImg" src= {sun}/></button>
            </header>            
            <main>
            <div className="addInput">
            <button className= "addButton" type="checkbox" /><input className="txtInput" type="text" placeholder = "Create a new todo..." />
            </div>
            <div className="menu">
            <ul>
            {li}
            </ul> 

            </div>

            {width > breakpoint ? (

            <div className="allButtons">                
                <p>5 items left</p>
                
                <div className="filterButtons">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
                </div>
                <button>Clear Completed</button>
            </div>
            
            ):(
                <>
                <div className="allButtons">
                <p>5 items left</p>
                <button>Clear Completed</button>
                </div>
                
                <div className="filterButtons">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
                </div>
                </>
            )}   
            </main>
            <footer><p className="footerTxt">Drag and drop to reorder list</p></footer>
        </BlackContainer>            
        )
    }
}

export default Homepage