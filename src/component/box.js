import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button {
        color: purple;
        border: none;
        font-size: 30px;
        outline: none;
        font-weight: bold;
    }

    button:hover {
        color: orange;
    }

    button:active {
        color: hotpink;
    }
`

class Box extends React.Component {
    render(){
        return(
            <Main style={{
                backgroundColor:`${this.props.color}`
            }} >
                <button onClick={()=>{this.props.handleClick()}}>CHANGE COLOR</button>
            </Main>
        )
    }
}

export default Box;