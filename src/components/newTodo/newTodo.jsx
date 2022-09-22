import {Container, BlackContainer} from "./styled"
import { useState } from "react";

function AddInput({dark, buttonAdd}){
    
    const [text, setText] = useState(null);
    const [id, setId] = useState(0)

    const newTodo = (todo) => {
        const Todos = {text: todo, id: id};
        setId(id+1);
        buttonAdd(Todos);
    }
    

    if(dark === 'light'){
    
    return(
    <Container onSubmit={(e) => e.preventDefault()}>

    <button className= "addButton" type="submit" onClick={() => newTodo(text)} /><input id="txtInput"  type="text" placeholder = "Create a new todo..." value={text} onChange={(e) => setText(e.target.value)} />
    
    </Container>
    )

    }else{

    return(
        <BlackContainer onSubmit={(e) => e.preventDefault()}>

        <button className= "addButton" type="submit" onClick={() => newTodo(text)} /><input id="txtInput"  type="text" placeholder = "Create a new todo..." value={text} onChange={(e) => setText(e.target.value)} />
     
        </BlackContainer>
        )
}

}
export default AddInput