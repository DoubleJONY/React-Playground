import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
    return (
        <Wrapper>
            <Hello name="react" color="red"/>
            <Hello color="pink"/>
            <Hello name="jony" color="blue"/>
            <Hello color="cyan"/>
        </Wrapper>
    );
}

export default App;
