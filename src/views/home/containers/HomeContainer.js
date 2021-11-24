import React, {useState} from 'react';
import styled from 'styled-components';
import {useRecoilValue, useSetRecoilState} from "recoil";

import {todoListState} from "../recoil/atoms";
import List from "../components/List";

const HomeContainer = () => {

    const todoList = useRecoilValue(todoListState)

    const [todo, setTodo] = useState('');
    const setTodoList = useSetRecoilState(todoListState)
    console.log(todoList)

    const addItem = () => {
        setTodoList((prevTodoList) => [
            ...prevTodoList,
            {
              id: getId(),
              text: todo,
              isComplete: false,
            }
        ]);
        setTodo('');
    }

    const getId = () => {
        let id = 0;
        return id ++;
    }

    const onChange = ({target: {value}}) => {
        setTodo(value);
    }

    return (
        <Container>
            <Input value={todo} onChange={onChange}/>
            <Button onClick={addItem}>추가하기</Button>
            <List data={todoList}/>
        </Container>
    )
}

const Container = styled.div`

`;

const Input = styled.input`
    
`;

const Button = styled.button`
    
`;
export default HomeContainer;
