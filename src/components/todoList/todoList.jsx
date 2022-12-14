import {Container, BlackContainer} from "./styled"
import deletebtn from "../../imgs/icon-cross.svg"

function TodoItem({id, dark, text, buttonRemove, checked, CheckValue}){
    
   

    if(dark === 'light'){
 
    return(

        <Container>
        <div><input type="checkbox" id={id} className="checkbox" value={CheckValue} onClick = {() => checked(CheckValue, id)} /> <label for = {id}>{text}</label></div> <button onClick={() => buttonRemove(id)}><img src={deletebtn} alt="delete" /></button>
        </Container>
    
    )

    }else{
    return(
        <BlackContainer>
        <div><input type="checkbox" id={id} className="checkbox" value={CheckValue} onClick = {() => checked(CheckValue, id)} /> <label for = {id}>{text}</label></div> <button onClick={() => buttonRemove(id)}><img src={deletebtn} alt="delete" /></button>
        </BlackContainer>
        )
}

}
export default TodoItem