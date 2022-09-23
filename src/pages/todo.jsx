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
    const [clear, setClear] = ([])
    const [checked, setChecked] = useState(false)
    const breakpoint = 375;

    function changeValueCheck(value, id){
        
        if(value === false){
            const marking = todosNames.filter((todo) => todo.id === id)
            const newObj = {text:marking[0].text, id: marking[0].id, isMarked:true} 
            const deleting = todosNames.filter((todo) => todo.id !== id)

            
            setTodosNames([...deleting, newObj])

            console.log(todosNames)

            return setChecked(true) 
        }else{
            const marking = todosNames.filter((todo) => todo.id === id)  
            const newObj = {text:marking[0].text, id: marking[0].id, isMarked:false}
            const deleting = todosNames.filter((todo) => todo.id !== id)

            
            setTodosNames([...deleting, newObj])

            console.log(todosNames)

            return setChecked(false) 
        }
    }


    const filtering = (value) => {
        console.log(value)
        const filteringTodos = todosNames.filter((todo) => todo.isMarked === value)     
        if(!filteredTodos){
        return setFilteredTodos(null)
        }
        return setFilteredTodos(filteringTodos)        
    }

    const deleteAll = (value) => {
        const allClear = todosNames.filter((todo) => todo.isMarked !== value)
        setTodosNames(allClear)
    }

    const allTodos = (value) => {
        if(value === true){
            if(filteredTodos.length < 0 ){
            for(let i = 0; i < todosNames.length; i++){
                const clearAllComplete = todosNames[i].isMarked === value
                setClear(...clearAllComplete)
            }
            return setTodosNames(clear)
        }else{

            setFilteredTodos([])

            for(let i = 0; i < todosNames.length; i++){
                const clearAllComplete = todosNames[i].isMarked === value
                setClear(...clearAllComplete)
            }
            return setTodosNames(clear)
        }
        }
        
    }

    const addTodo = (todos) => {
      const newTodosObj = {text: todos.text, id:todos.id, isMarked:checked}
      setTodosNames([...todosNames, newTodosObj])
    }
    
    const changeColor = () => {
        darkMode === 'light' ? setDarkMode('dark') : setDarkMode('light')     
    }

    const deleteTodo = (id) => {
        const deleting = todosNames.filter((todo) => todo.id !== id)
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
            {filteredTodos.length > 0 ? (
                    <ul className="todoList">
                    {filteredTodos.map((todo, index) => (
                       <TodoItem key = {index} id = {todo.id} dark={darkMode} text={todo.text} buttonRemove = {deleteTodo} CheckValue = {checked} checked = {changeValueCheck} />
                       ))}
                    </ul>
                ):(
                    <ul className="todoList">
                    {todosNames.map((todo, index) => (
                       <TodoItem key = {index} id = {todo.id} dark={darkMode} text={todo.text} buttonRemove = {deleteTodo} CheckValue = {checked} checked = {changeValueCheck} />
                       ))}
                    </ul>
                )}

            </div>
            {width > breakpoint ? (

            <div className="allButtons">
                {filteredTodos.length > 0 ? (
                <p>{filteredTodos.length} items left</p>
                ):(
                <p>{todosNames.length} items left</p>
                )}            
                

                <div className="filterButtons">
                <button onClick={() => allTodos(true)}>All</button>
                <button onClick={() => filtering(true)}>Active</button>
                <button onClick={() => filtering(false)}>Completed</button>
                </div>
                <button onClick={() => deleteAll(false)}>Clear Completed</button>
            </div>
            
            ):(
                <>
                <div className="allButtons">
                {filteredTodos.length > 0 ? (
                <p>{filteredTodos.length} items left</p>
                ):(
                <p>{todosNames.length} items left</p>
                )}      
                <button onClick={() => deleteAll(false)}>Clear Completed</button>
                </div>
                
                <div className="filterButtons">
                <button onClick={() => allTodos(true)}>All</button>
                <button onClick={() => filtering(true)}>Active</button>
                <button onClick={() => filtering(false)}>Completed</button>
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
                    {filteredTodos.map((todo, index) => (
                       <TodoItem key = {index} id = {todo.id} dark={darkMode} text={todo.text} buttonRemove = {deleteTodo} CheckValue = {checked} checked = {changeValueCheck} />
                       ))}
                    </ul>
                ):(
                    <ul>
                    {todosNames.map((todo, index) => (
                       <TodoItem key = {index} id = {todo.id} dark={darkMode} text={todo.text} buttonRemove = {deleteTodo} CheckValue = {checked} checked = {changeValueCheck} />
                       ))}
                    </ul>
                )}
             

            </div>

            {width > breakpoint ? (

                <div className="allButtons">
                {filteredTodos.length > 0 ? (
                <p>{filteredTodos.length} items left</p>
                ):(
                <p>{todosNames.length} items left</p>
                )}            

                <div className="filterButtons">
                <button onClick={() => allTodos(true)}>All</button>
                <button onClick={() => filtering(true)}>Active</button>
                <button onClick={() => filtering(false)}>Completed</button>
                </div>
                <button onClick={() => deleteAll(false)}>Clear Completed</button>
            </div>
            
            ):(
                <>
                <div className="allButtons">
                {filteredTodos.length > 0 ? (
                <p>{filteredTodos.length} items left</p>
                ):(
                <p>{todosNames.length} items left</p>
                )}      
                <button onClick={() => deleteAll(false)}>Clear Completed</button>
                </div>
                
                <div className="filterButtons">
                <button onClick={() => allTodos(true)}>All</button>
                <button onClick={() => filtering(true)}>Active</button>
                <button onClick={() => filtering(false)}>Completed</button>
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