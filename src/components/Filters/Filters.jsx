import { useReducer } from "react";
import { Fieldset, Form, SurnameFilterInput, RadioWrapper, FieldsetTitle, InputsWrapper } from "./Filters.styled";

const Filters = ({changeFilterValue}) => {

    const initialState = {
        surname: "",
        system: "",
        rate: "",
        sorted: ""
    }

    function reducer (state, action) {
        switch(action.type){
        case "surname": 
        return {...state, surname: action.payload}
        case "system": 
        return {...state, system: action.payload}
        case "rate":
            return {...state, rate: action.payload}
        case "sorted": 
            return {...state, sorted: action.payload}
        default:
            throw new Error();
}
    }

    const [state, dispatch] = useReducer(reducer, initialState)
  
    

    const handleInputsChange = (evt) => {
        const name = evt.currentTarget.name;
    switch(name){
        case "surname":
            dispatch({type: "surname", payload: evt.currentTarget.value})
            dispatch({type: "rate", payload: ""})
            dispatch({type: "system", payload: ""})
            dispatch({type: "sorted", payload: ""})
            break;
        case "system":
            dispatch({type: "system", payload: evt.currentTarget.value})
            dispatch({type: "surname", payload: ""})
            dispatch({type: "rate", payload: ""})
            dispatch({type: "sorted", payload: ""})
               break;
        case "rate":
            dispatch({type: "rate", payload: evt.currentTarget.value})
            dispatch({type: "system", payload: ""})
               dispatch({type: "surname", payload: ""})
               dispatch({type: "sorted", payload: ""})
               break;
        case "sorted":
            dispatch({type: "sorted", payload: evt.currentTarget.value})
            dispatch({type: "system", payload: ""})
               dispatch({type: "surname", payload: ""})
               dispatch({type: "rate", payload: ""})
               break;
            default:
                return
    }
  
     changeFilterValue(evt.currentTarget.value, evt.currentTarget.name)
  
    }

    return (
        <Form>
            <SurnameFilterInput onChange={handleInputsChange} name="surname" value={state.surname} type="text" placeholder="Пошук за прізвищем"/>
            <Fieldset>
                <FieldsetTitle>Система оподаткування</FieldsetTitle>
                <InputsWrapper>
                <RadioWrapper>
                <input onChange={handleInputsChange} type="radio" id="common" name="system" value="" checked={state.system === ""} />
                <label htmlFor="common">Всі</label>
                </RadioWrapper>
                <RadioWrapper>
                <input onChange={handleInputsChange} type="radio" id="common" name="system" value="Загальна" checked={state.system === "Загальна"}/>
                <label htmlFor="common">Загальна</label>
                </RadioWrapper>
                <RadioWrapper>
                <input onChange={handleInputsChange} type="radio" id="unique" name="system" value="Єдиний податок" checked={state.system === "Єдиний податок"}/>
                <label htmlFor="unique">Єдиний податок</label>
                </RadioWrapper>
                </InputsWrapper>
            </Fieldset>
            <Fieldset>
                <FieldsetTitle>Група єдиного податку</FieldsetTitle>
                <InputsWrapper>
                <RadioWrapper>
                <input onChange={handleInputsChange} type="radio" id="alltogether" name="rate" value="" checked={state.rate === ""} />
                <label htmlFor="alltogether">Всі</label>
                </RadioWrapper>
                <RadioWrapper>
                <input onChange={handleInputsChange} type="radio" id="first" name="rate" value="1" checked={state.rate === "1"}/>
                <label htmlFor="first">Перша</label>
                </RadioWrapper>
                <RadioWrapper>
                <input onChange={handleInputsChange} type="radio" id="second" name="rate" value="2" checked={state.rate === "2"}/>
                <label htmlFor="second">Друга</label>
                </RadioWrapper>
                <RadioWrapper>
                <input onChange={handleInputsChange} type="radio" id="third" name="rate" value="3" checked={state.rate === "3"}/>
                <label htmlFor="third">Третя</label>
                </RadioWrapper>
                </InputsWrapper>
            </Fieldset>
            <Fieldset>
                <FieldsetTitle>Сортувати за алфавит</FieldsetTitle>
                <InputsWrapper>
                <RadioWrapper>
                <input onChange={handleInputsChange} type="radio" id="start" name="sorted" value="А-Я" checked={state.sorted === "А-Я"} />
                <label htmlFor="alltogether">А-Я</label>
                </RadioWrapper>
                <RadioWrapper>
                <input onChange={handleInputsChange} type="radio" id="end" name="sorted" value="Я-А" checked={state.sorted === "Я-А"}/>
                <label htmlFor="first">Я-А</label>
                </RadioWrapper>
                </InputsWrapper>
            </Fieldset>
        </Form>
    )
}

export default Filters;