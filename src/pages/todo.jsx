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
    const [filteredTodos, setFilteredTodos] = useState([])
    const [checked, setChecked] = useState(false)
    const breakpoint = 375;

    function changeValueCheck(value, id){
        
        if(value === false){
            const marking = todosNames.filter((todo) => todo.id === id)
            const newObj = {text:marking[0].text, id: marking[0].id, isMarked:true}
            return setChecked(true) && setTodosNames([...todosNames, newObj])
        }else{
            const marking = todosNames.filter((todo) => todo.id === id)  
            const newObj = {text:marking[0].text, id: marking[0].id, isMarked:false}
            return setChecked(false) && setTodosNames([...todosNames, newObj])
        }
    }

    const filtering = (btn) => {
        console.log(btn)
        // const filteringTodos = todosNames.filter((todo) => todo.isMarked === value)     
        // return setFilteredTodos(filteringTodos)        
    }
   

    const addTodo = (todos) => {
      const newTodosObj = {text: todos.text, id:todos.id, isMarked:checked}
      setTodosNames([...todosNames, newTodosObj])
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
                <TodoItem key = {todo.id} id = {todo.id} dark={darkMode} text={todo.text} buttonRemove = {deleteTodo} CheckValue = {checked} checked = {changeValueCheck} />
            ))}
            </ul> 

            </div>
            {width > breakpoint ? (

            <div className="allButtons">                
                <p>5 items left</p>
                
                <div className="filterButtons">
                <button onClick={() => console.log("teste")}>All</button>
                <button onClick={() => console.log("teste")}>Active</button>
                <button onClick={() => console.log("teste")}>Completed</button>
                </div>
                <button onClick={() => console.log("teste")}>Clear Completed</button>
            </div>
            
            ):(
                <>
                <div className="allButtons">
                <p>5 items left</p>
                <button onClick={() => console.log("teste")}>Clear Completed</button>
                </div>
                
                <div className="filterButtons">
                <button onClick={() => console.log("teste")}>All</button>
                <button onClick={() => console.log("teste")}>Active</button>
                <button onClick={() => console.log("teste")}>Completed</button>
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
            
                {filteredTodos.length > 0 ? (
                    <ul>
                    {filteredTodos.map((todo) => (
                       <TodoItem key = {todo.id} id = {todo.id} dark={darkMode} text={todo.text} buttonRemove = {deleteTodo} CheckValue = {checked} checked = {changeValueCheck} />
                       ))};
                    </ul>
                ):(
                    <ul>
                    {todosNames.map((todo) => (
                       <TodoItem key = {todo.id} id = {todo.id} dark={darkMode} text={todo.text} buttonRemove = {deleteTodo} CheckValue = {checked} checked = {changeValueCheck} />
                    ))};
                    </ul>
                )}
             

            </div>

            {width > breakpoint ? (

            <div className="allButtons">                
                <p>5 items left</p>
                
                <div className="filterButtons">
                <button onClick={() => console.log("teste")}>All</button>
                <button onClick={() => console.log("teste")}>Active</button>
                <button onClick={() => console.log("teste")}>Completed</button>
                </div>
                <button onClick={() => console.log("teste")}>Clear Completed</button>
            </div>
            
            ):(
                <>
                <div className="allButtons">
                <p>5 items left</p>
                <button onClick={() => console.log("teste")}>Clear Completed</button>
                </div>
                
                <div className="filterButtons">
                <button onClick={() => console.log("teste")}>All</button>
                <button onClick={() => console.log("teste")}>Active</button>
                <button onClick={() => console.log("teste")}>Completed</button>
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