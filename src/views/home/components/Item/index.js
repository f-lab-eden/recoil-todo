import React from 'react';
import styled from 'styled-components';
import {useRecoilState} from "recoil";

import {todoListState} from "../../recoil/atoms";

const Item = ({item}) => {
    const [todoList, setTodoList] = useRecoilState(todoListState)
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemText = ({target : {value}}) => {
        const newList = replaceItemAtIndex((todoList, index), {
            ...item,
            text: value,
        })
    }

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });

        setTodoList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList)
    }

    function replaceItemAtIndex(arr, index, newValue) {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    }

    function removeItemAtIndex(arr, index) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    }

    return (
        <Container>
            Item
        </Container>
    )
}

const Container = styled.div`

`;
export default Item;
