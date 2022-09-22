import  {Container, BlackContainer} from "./styled";
import {useState, useEffect} from 'react';
import sun from "../imgs/icon-sun.svg"
import moon from "../imgs/icon-moon.svg"
import AddInput from "../components/newTodo/newTodo";
import TodoItem from "../components/todoList/todoList";

function Homepage(){

    const [width, setWidth] = useState(window.innerWidth);
    const [darkMode, setDarkMode] = useState('light');
    const [todosNames, setTodosNames] = useState([])
    const breakpoint = 375;   

    const addTodo = (todos) => {
      setTodosNames([...todosNames, todos])
    }
    
    const changeColor = () => {
        darkMode === 'light' ? setDarkMode('dark') : setDarkMode('light')     
    }

    const deleteTodo = (id) => {
        let deleting = todosNames.filter((todo) => todo.id !== id)
        setTodosNames(deleting)
    }

    useEffect(() => {
        const windowSize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", windowSize);
        return () => {
            window.removeEventListener("resize", windowSize)
        };
    }, [darkMode])
    

    if(darkMode === 'light'){
        return(
        <Container>
            <header>         
            <h1>T O D O</h1> <button onClick={changeColor}><img alt ="themeImg" src= {moon}/></button>
            </header>            
            <main>    
            <AddInput dark = {darkMode} buttonAdd = {addTodo}/>
            <div className="menu">
            <ul className="todoList">
            {todosNames.map((todo) => (
                <TodoItem key = {todo.id} id = {todo.id} dark={darkMode} text={todo.text} buttonRemove = {deleteTodo} />
            ))}
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
            <AddInput dark = {darkMode} buttonAdd = {addTodo}/>
            <div className="menu">
            <ul>
            {todosNames.map((todo) => (
                <TodoItem key = {todo.id} id = {todo.id} dark={darkMode} text={todo.text} buttonRemove = {deleteTodo} />
            ))}
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