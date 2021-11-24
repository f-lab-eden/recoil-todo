import React from 'react';
import styled from 'styled-components';

import Item from "../Item";

const List = ({data=[]}) => {
    return (
        <Container>
            {
                data.map((item) => <Item item={item} key={item.id}/>)
            }
        </Container>
    )
}

const Container = styled.div`

`;
export default List;
