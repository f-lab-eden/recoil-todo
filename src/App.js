import React from 'react';
import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

import Home from "./pages/Home";

const App = () => {
    return (
        <RecoilRoot>
            <Container>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </Container>
        </RecoilRoot>
    )
}

const Container = styled.div`

`;
export default App;
