import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
    const name = 'jony';
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24, // 기본 단위 px
        padding: '1rem' // 다른 단위 사용 시 문자열로 설정
    }

    return (
        <>
            {/*주석은 화면에 보이지 않습니다 */}
            <Hello/>
            <div style={style}>
                <Hello
                    // 열리는 태그 내부에서는 이렇게 주석을 작성 할 수 있습니다.
                />
                {name} 님!<br/>!
            </div>
            <div className="gray-box"/>
        </>
    );
}

export default App;
